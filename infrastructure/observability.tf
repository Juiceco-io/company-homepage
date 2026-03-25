resource "aws_cognito_identity_pool" "rum" {
  identity_pool_name               = "${var.project}-${var.environment}-rum"
  allow_unauthenticated_identities = true
}

resource "aws_iam_role" "rum_guest" {
  name = "${var.project}-${var.environment}-rum-guest"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = "cognito-identity.amazonaws.com"
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "cognito-identity.amazonaws.com:aud" = aws_cognito_identity_pool.rum.id
          }
          "ForAnyValue:StringLike" = {
            "cognito-identity.amazonaws.com:amr" = "unauthenticated"
          }
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "rum_guest" {
  name = "${var.project}-${var.environment}-rum-guest"
  role = aws_iam_role.rum_guest.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "rum:PutRumEvents"
        ]
        Resource = aws_rum_app_monitor.homepage.arn
      }
    ]
  })
}

resource "aws_cognito_identity_pool_roles_attachment" "rum" {
  identity_pool_id = aws_cognito_identity_pool.rum.id

  roles = {
    unauthenticated = aws_iam_role.rum_guest.arn
  }
}

resource "aws_rum_app_monitor" "homepage" {
  name   = "${var.project}-${var.environment}"
  domain = var.rum_domain

  cw_log_enabled = true

  app_monitor_configuration {
    allow_cookies       = true
    enable_xray         = false
    guest_role_arn      = aws_iam_role.rum_guest.arn
    identity_pool_id    = aws_cognito_identity_pool.rum.id
    session_sample_rate = var.rum_session_sample_rate

    telemetries = [
      "errors",
      "performance",
      "http"
    ]
  }

  custom_events {
    status = "ENABLED"
  }

  tags = {
    App           = var.project
    Environment   = var.environment
    Observability = "frontend-rum"
  }
}
