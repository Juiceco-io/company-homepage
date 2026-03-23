import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck } from "lucide-react";
import TestAppFullstackDemo from "@/components/TestAppFullstackDemo";

export const metadata: Metadata = {
  title: "Test App Fullstack",
  description:
    "A minimal interactive test app deployed end-to-end through the existing Juiceco site pipeline.",
  alternates: {
    canonical: "https://juiceco.io/test-app-fullstack",
  },
};

const proofPoints = [
  {
    icon: CheckCircle2,
    title: "Browser-accessible",
    body: "Public route intended to verify the deployment path all the way to a real browser.",
  },
  {
    icon: Layers3,
    title: "Minimal but real",
    body: "Small interactive UI with state, theming, and a live status panel — not a placeholder page.",
  },
  {
    icon: ShieldCheck,
    title: "Low-risk delivery",
    body: "Implemented as an isolated route inside the existing public app so it can ship quickly and safely.",
  },
];

export default function TestAppFullstackPage() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
            team: test-app-fullstack
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Public test app, shipped end-to-end.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            This route is a focused deployment target for validating that a real app can be created,
            published, and reached in the browser without waiting on a larger product build.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Open live demo surface
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400/50 hover:bg-white/5"
            >
              Keep building from here
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <Icon className="h-6 w-6 text-orange-400" />
                <h2 className="mt-4 text-lg font-semibold text-white">{point.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{point.body}</p>
              </article>
            );
          })}
        </div>

        <div id="demo" className="mt-10">
          <TestAppFullstackDemo />
        </div>
      </div>
    </section>
  );
}
