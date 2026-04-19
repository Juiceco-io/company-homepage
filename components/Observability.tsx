"use client";

// CloudWatch RUM wrapper — render <Observability /> in app/layout.tsx.
// Reads configuration from NEXT_PUBLIC_RUM_* env vars (see .env.example).
// Platform-managed: seeded by github-infra/modules/juiceco-repo.
//
// IMPORTANT: This is an explicit functional-component wrapper, NOT a pure
// re-export. Next.js 15+ will tree-shake pure re-export "use client"
// components whose exported function returns null, breaking the RumProvider
// useEffect that bootstraps CloudWatch RUM. The wrapper preserves the
// side-effect contract.
import { RumProvider, type RumProviderProps } from "@juiceco-io/rum-init/react";

export default function Observability(props: RumProviderProps = {}) {
  return <RumProvider {...props} />;
}
