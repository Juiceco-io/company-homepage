resource "random_id" "bucket_suffix" {
  byte_length = 4
}

locals {
  bucket_name = "${var.project}-${var.environment}-${random_id.bucket_suffix.hex}"
}

resource "aws_s3_bucket" "homepage" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_public_access_block" "homepage" {
  bucket = aws_s3_bucket.homepage.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "homepage" {
  bucket = aws_s3_bucket.homepage.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "homepage" {
  bucket = aws_s3_bucket.homepage.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "homepage" {
  bucket     = aws_s3_bucket.homepage.id
  depends_on = [aws_s3_bucket_versioning.homepage]

  rule {
    id     = "expire-noncurrent-versions"
    status = "Enabled"

    noncurrent_version_expiration {
      noncurrent_days = 30
    }
  }
}

resource "aws_s3_bucket_policy" "homepage" {
  bucket = aws_s3_bucket.homepage.id
  policy = data.aws_iam_policy_document.homepage_bucket.json

  depends_on = [aws_s3_bucket_public_access_block.homepage]
}

data "aws_iam_policy_document" "homepage_bucket" {
  statement {
    sid    = "AllowCloudFrontOAC"
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.homepage.arn}/*"]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.homepage.arn]
    }
  }
}
