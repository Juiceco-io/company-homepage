# company-homepage
Company's home page — marketing and public-facing website

## Observability

This app now ships a lightweight frontend observability baseline using the hybrid company standard:

- **UI:** Grafana (shared platform, separate repo/account)
- **Frontend telemetry:** CloudWatch RUM
- **Infra telemetry:** CloudWatch metrics from S3/CloudFront
- **Tracing:** X-Ray is disabled for the browser in v1 to keep cost low

### What gets captured
- page performance
- JavaScript errors
- browser HTTP telemetry
- sampled real-user monitoring sessions

### How it is wired
Terraform provisions:
- `aws_rum_app_monitor`
- Cognito identity pool for unauthenticated RUM ingestion
- guest IAM role scoped to `rum:PutRumEvents`

GitHub Actions then injects these build-time env vars into the static export:
- `NEXT_PUBLIC_AWS_RUM_APP_MONITOR_ID`
- `NEXT_PUBLIC_AWS_RUM_IDENTITY_POOL_ID`
- `NEXT_PUBLIC_AWS_RUM_GUEST_ROLE_ARN`
- `NEXT_PUBLIC_AWS_RUM_REGION`
- `NEXT_PUBLIC_APP_VERSION`

### Cost guardrails
- RUM session sampling defaults to `0.25`
- browser tracing to X-Ray stays off in v1
- this app should remain in the low single-digit monthly observability cost range unless traffic grows substantially
