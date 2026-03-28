locals {
  contact_origin_candidates = concat(
    ["https://${aws_cloudfront_distribution.homepage.domain_name}"],
    [for alias in var.cloudfront_aliases : "https://${alias}"],
    var.contact_allowed_origins
  )

  contact_allowed_origins = distinct([
    for origin in local.contact_origin_candidates : trimsuffix(origin, "/")
    if trimspace(origin) != ""
  ])
}

data "archive_file" "contact_form_lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda/contact-form"
  output_path = "${path.module}/.terraform/contact-form-lambda.zip"
}

# This resource acts as a replacement trigger: if contact_email_domain changes,
# terraform_data changes, which forces aws_ses_domain_identity and aws_ses_domain_dkim
# to be destroyed and re-created (new domain = new identity).
resource "terraform_data" "ses_domain_key" {
  input = var.contact_email_domain
}

resource "aws_ses_domain_identity" "contact" {
  domain = var.contact_email_domain

  lifecycle {
    replace_triggered_by = [terraform_data.ses_domain_key]
  }
}

resource "aws_ses_domain_dkim" "contact" {
  domain = aws_ses_domain_identity.contact.domain

  lifecycle {
    replace_triggered_by = [terraform_data.ses_domain_key]
  }
}

resource "aws_iam_role" "contact_form_lambda" {
  name = "${var.project}-${var.environment}-contact-form-lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy" "contact_form_lambda" {
  name = "${var.project}-${var.environment}-contact-form-lambda"
  role = aws_iam_role.contact_form_lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:${var.aws_region}:*:*"
      },
      {
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        # Grant access to the verified domain identity and any email address
        # identities under the same account/region. The domain identity ARN alone
        # is insufficient when SES v2 resolves the sender's identity at call time.
        Resource = [
          aws_ses_domain_identity.contact.arn,
          "arn:aws:ses:${var.aws_region}:${data.aws_caller_identity.current.account_id}:identity/*",
        ]
      }
    ]
  })
}

resource "aws_lambda_function" "contact_form" {
  function_name    = "${var.project}-${var.environment}-contact-form"
  role             = aws_iam_role.contact_form_lambda.arn
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  filename         = data.archive_file.contact_form_lambda.output_path
  source_code_hash = data.archive_file.contact_form_lambda.output_base64sha256
  timeout          = 10

  environment {
    variables = {
      CONTACT_FROM_EMAIL = var.contact_from_email
      CONTACT_TO_EMAIL   = var.contact_to_email
      CONTACT_SITE_NAME  = var.contact_site_name
    }
  }
}

resource "aws_cloudwatch_log_group" "contact_form" {
  name              = "/aws/lambda/${aws_lambda_function.contact_form.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_api" "contact_form" {
  name          = "${var.project}-${var.environment}-contact-form"
  protocol_type = "HTTP"

  cors_configuration {
    allow_headers = ["content-type"]
    allow_methods = ["OPTIONS", "POST"]
    allow_origins = local.contact_allowed_origins
    max_age       = 3600
  }
}

resource "aws_apigatewayv2_stage" "contact_form" {
  api_id      = aws_apigatewayv2_api.contact_form.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "contact_form" {
  api_id                 = aws_apigatewayv2_api.contact_form.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact_form.invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "contact_form" {
  api_id    = aws_apigatewayv2_api.contact_form.id
  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.contact_form.id}"
}

resource "aws_lambda_permission" "contact_form" {
  statement_id  = "AllowInvokeFromApiGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact_form.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.contact_form.execution_arn}/*/*"
}
