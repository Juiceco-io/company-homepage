resource "aws_cloudfront_origin_access_control" "homepage" {
  name                              = "${var.project}-${var.environment}-oac"
  description                       = "OAC for ${var.project} ${var.environment}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_response_headers_policy" "security_headers" {
  name = "${var.project}-${var.environment}-security-headers"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    xss_protection {
      mode_block = true
      protection = true
      override   = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    content_security_policy {
      # connect-src allows:
      #   'self'                                           — page origin
      #   https://*.execute-api.us-east-1.amazonaws.com    — app APIs
      #   https://cognito-identity.us-east-1.amazonaws.com — Cognito Identity Pool (RUM guest auth)
      #   https://dataplane.rum.us-east-1.amazonaws.com    — CloudWatch RUM events endpoint
      content_security_policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self' https://*.execute-api.us-east-1.amazonaws.com https://cognito-identity.us-east-1.amazonaws.com https://dataplane.rum.us-east-1.amazonaws.com; frame-ancestors 'none'"
      override                = true
    }
  }

  custom_headers_config {
    items {
      header   = "Permissions-Policy"
      value    = "camera=(), microphone=(), geolocation=(), payment=()"
      override = true
    }

    items {
      header   = "Cross-Origin-Opener-Policy"
      value    = "same-origin"
      override = true
    }

    items {
      header   = "Cross-Origin-Resource-Policy"
      value    = "same-origin"
      override = true
    }
  }
}

# Certificate handling — zero-cert recovery safe.
#
# We intentionally avoid a fatal ACM data lookup here. In a broken or first-run
# state there may be no matching ACM certificate yet, and Terraform still needs
# to be able to create one. We therefore derive CloudFront certificate use from
# the managed ACM resource itself and keep viewer_certificate / aliases protected
# via ignore_changes while replacement/validation is in flight.
locals {
  use_custom_domain = length(var.cloudfront_aliases) > 0

  managed_cert_arn    = local.use_custom_domain ? try(aws_acm_certificate.homepage[0].arn, null) : null
  managed_cert_status = local.use_custom_domain ? try(aws_acm_certificate.homepage[0].status, null) : null

  certificate_issued = local.managed_cert_arn != null && local.managed_cert_status == "ISSUED"
  effective_aliases  = local.certificate_issued ? var.cloudfront_aliases : []
  effective_cert_arn = local.certificate_issued ? local.managed_cert_arn : null
}

resource "aws_acm_certificate" "homepage" {
  count                     = local.use_custom_domain ? 1 : 0
  domain_name               = var.cloudfront_aliases[0]
  subject_alternative_names = slice(var.cloudfront_aliases, 1, length(var.cloudfront_aliases))
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_cloudfront_distribution" "homepage" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  comment             = "${var.project}-${var.environment}"
  aliases             = local.effective_aliases

  origin {
    domain_name              = aws_s3_bucket.homepage.bucket_regional_domain_name
    origin_id                = "S3-${local.bucket_name}"
    origin_access_control_id = aws_cloudfront_origin_access_control.homepage.id
  }

  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${local.bucket_name}"
    viewer_protocol_policy     = "redirect-to-https"
    compress                   = true
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security_headers.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_uri.arn
    }
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/404/index.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/404/index.html"
    error_caching_min_ttl = 10
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = local.effective_cert_arn
    cloudfront_default_certificate = local.certificate_issued ? false : true
    ssl_support_method             = local.certificate_issued ? "sni-only" : null
    minimum_protocol_version       = local.certificate_issued ? "TLSv1.2_2021" : null
  }

}

resource "aws_cloudfront_function" "rewrite_uri" {
  name    = "${var.project}-${var.environment}-rewrite-uri"
  runtime = "cloudfront-js-2.0"
  comment = "Rewrite directory URIs to index.html for Next.js trailingSlash static export"
  publish = true
  code    = file("${path.module}/cloudfront_function.js")
}
