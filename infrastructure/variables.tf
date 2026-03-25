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

variable "rum_session_sample_rate" {
  description = "CloudWatch RUM session sample rate as a 0-1 decimal"
  type        = number
  default     = 0.25
}
