"use client";

// CloudWatch RUM wrapper — render <Observability /> in app/layout.tsx.
// Reads configuration from NEXT_PUBLIC_RUM_* env vars (see .env.example).
// Platform-managed: seeded by github-infra/modules/juiceco-repo.
export { RumProvider as default } from "@juiceco-io/rum-init/react";
