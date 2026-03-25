output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (used by CI/CD for cache invalidation)"
  value       = aws_cloudfront_distribution.homepage.id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name (dev site URL)"
  value       = "https://${aws_cloudfront_distribution.homepage.domain_name}"
}

output "s3_bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.homepage.bucket
}

output "s3_bucket_arn" {
  description = "S3 bucket ARN"
  value       = aws_s3_bucket.homepage.arn
}

output "rum_app_monitor_id" {
  description = "CloudWatch RUM app monitor ID"
  value       = aws_rum_app_monitor.homepage.id
}

output "rum_identity_pool_id" {
  description = "Cognito identity pool ID used by CloudWatch RUM"
  value       = aws_cognito_identity_pool.rum.id
}

output "rum_guest_role_arn" {
  description = "Guest IAM role ARN for the CloudWatch RUM app monitor"
  value       = aws_iam_role.rum_guest.arn
}

output "rum_region" {
  description = "AWS region for CloudWatch RUM"
  value       = var.aws_region
}

output "acm_certificate_arn" {
  description = "ACM certificate ARN for CloudFront custom domain"
  value       = local.use_custom_domain ? aws_acm_certificate.homepage[0].arn : ""
}

output "acm_validation_records" {
  description = "DNS validation records required for ACM certificate issuance"
  value = local.use_custom_domain ? [for dvo in aws_acm_certificate.homepage[0].domain_validation_options : {
    domain_name  = dvo.domain_name
    record_name  = dvo.resource_record_name
    record_type  = dvo.resource_record_type
    record_value = dvo.resource_record_value
  }] : []
}
