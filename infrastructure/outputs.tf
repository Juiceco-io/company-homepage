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
