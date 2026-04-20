# ============================================================================
# PLATFORM-MANAGED FILE — do not edit by hand.
#
# Source of truth: github-infra/modules/juiceco-repo/files/scaffold/
#                  nextjs-{public,internal}/infrastructure/_platform-csp.tf
#
# This file seeds a standard CloudFront CSP baseline for every nextjs-* app so
# the RUM SDK endpoints (and other platform-wide allowlist entries) are wired
# in by default. Changes here propagate to all nextjs apps on the next
# `terraform apply` against github-infra.
#
# To consume in this app:
#   1. Reference local.platform_csp as the `content_security_policy` value on
#      aws_cloudfront_response_headers_policy.
#   2. If this app needs extra CSP sources (e.g. a CDN alias for img-src),
#      set csp_app_extras in terraform.tfvars, NOT by editing this file.
#
# Example terraform.tfvars:
#   csp_app_extras = {
#     "img-src"  = ["https://cdn.example.com"]
#     "font-src" = ["https://fonts.gstatic.com"]
#   }
#
# Escape hatch for computed references (e.g. CloudFront domains resolved at
# apply time that can't live in tfvars): ignore var.csp_app_extras and build
# your own string from local.platform_csp_directives directly. Example:
#
#   locals {
#     app_csp_directives = merge(local.platform_csp_directives, {
#       "img-src" = concat(local.platform_csp_directives["img-src"], [
#         "https://${aws_cloudfront_distribution.cms_cdn.domain_name}",
#       ])
#     })
#     app_csp = join("; ", [for d, s in local.app_csp_directives : "${d} ${join(" ", s)}"])
#   }
#
# Then reference local.app_csp instead of local.platform_csp on the policy.
# ============================================================================

variable "csp_app_extras" {
  description = "Per-directive CSP sources this app needs on top of the platform baseline. Keys are CSP directive names (e.g. 'img-src', 'connect-src'); values are additional source expressions."
  type        = map(list(string))
  default     = {}
}

locals {
  # Baseline directives every nextjs-* app inherits. Platform endpoints that
  # are harmless when unused (cognito-idp, cognito-identity) are included so
  # apps don't have to opt in individually.
  platform_csp_directives = {
    "default-src" = ["'self'"]
    "script-src"  = ["'self'", "'unsafe-inline'"]
    "style-src"   = ["'self'", "'unsafe-inline'"]
    "font-src"    = ["'self'"]
    "img-src"     = ["'self'", "data:"]
    "connect-src" = [
      "'self'",
      "https://*.execute-api.us-east-1.amazonaws.com",
      "https://cognito-idp.us-east-1.amazonaws.com",
      "https://cognito-identity.us-east-1.amazonaws.com",
      "https://dataplane.rum.us-east-1.amazonaws.com",
    ]
    "frame-ancestors" = ["'none'"]
  }

  platform_csp = join("; ", [
    for directive, sources in local.platform_csp_directives :
    "${directive} ${join(" ", distinct(concat(sources, lookup(var.csp_app_extras, directive, []))))}"
  ])
}
