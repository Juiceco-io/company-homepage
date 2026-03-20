terraform {
  required_version = "~> 1.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }

  backend "s3" {
    bucket         = "juiceco-terraform-state"
    key            = "company-homepage/dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "juiceco-terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "company-homepage"
      Environment = var.environment
      ManagedBy   = "terraform"
      Repo        = "Juiceco-io/company-homepage"
    }
  }
}
