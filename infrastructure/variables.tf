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
