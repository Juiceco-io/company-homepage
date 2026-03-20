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
