variable "environment" {
  type        = string
  default     = "dev"
  description = "Deployment environment"
}

variable "project" {
  type        = string
  default     = "company-homepage"
  description = "Project name"
}

variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "AWS region"
}

variable "deployer_role_arn" {
  description = "IAM role ARN to assume for deploying resources"
  type        = string
  default     = "arn:aws:iam::680666325340:role/github-actions-deployer"
}

variable "rum_domain" {
  description = "Top-level domain used by CloudWatch RUM for the public site"
  type        = string
  default     = "juicetech.io"
}

variable "cloudfront_aliases" {
  description = "Custom domain aliases for CloudFront"
  type        = list(string)
  default     = []
}

variable "rum_session_sample_rate" {
  description = "CloudWatch RUM session sample rate as a 0-1 decimal"
  type        = number
  default     = 0.25
}

variable "contact_email_domain" {
  description = "SES-verified domain used to send contact form email"
  type        = string
  default     = "juicetech.io"
}

variable "contact_from_email" {
  description = "From address used by the contact form Lambda (set via TF_VAR_contact_from_email or -var flag)"
  type        = string
}

variable "contact_to_email" {
  description = "Destination address for contact form submissions (set via TF_VAR_contact_to_email or -var flag)"
  type        = string
}

variable "contact_site_name" {
  description = "Human-friendly site name used in contact form emails"
  type        = string
  default     = "Juicetech.io"
}

variable "contact_allowed_origins" {
  description = "Additional allowed origins for the contact form API CORS policy"
  type        = list(string)
  default     = []
}
