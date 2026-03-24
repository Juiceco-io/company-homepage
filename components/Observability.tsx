"use client";

import { useEffect } from "react";

const appMonitorId = process.env.NEXT_PUBLIC_AWS_RUM_APP_MONITOR_ID;
const identityPoolId = process.env.NEXT_PUBLIC_AWS_RUM_IDENTITY_POOL_ID;
const guestRoleArn = process.env.NEXT_PUBLIC_AWS_RUM_GUEST_ROLE_ARN;
const region = process.env.NEXT_PUBLIC_AWS_RUM_REGION ?? "us-east-1";
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev";

declare global {
  interface Window {
    __juiceRumInitialized?: boolean;
  }
}

export default function Observability() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.__juiceRumInitialized ||
      !appMonitorId ||
      !identityPoolId
    ) {
      return;
    }

    let cancelled = false;

    async function initRum() {
      try {
        const { AwsRum } = await import("aws-rum-web");

        if (cancelled || window.__juiceRumInitialized || !appMonitorId || !identityPoolId) {
          return;
        }

        const monitorId = appMonitorId;
        const poolId = identityPoolId;

        new AwsRum(monitorId, appVersion, region, {
          allowCookies: true,
          enableXRay: false,
          telemetries: ["performance", "errors", "http"],
          sessionSampleRate: 0.25,
          identityPoolId: poolId,
          guestRoleArn,
          endpoint: `https://dataplane.rum.${region}.amazonaws.com`,
        });

        window.__juiceRumInitialized = true;
      } catch (error) {
        console.error("Failed to initialize CloudWatch RUM", error);
      }
    }

    void initRum();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
