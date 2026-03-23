"use client";

import { useMemo, useState } from "react";
import { Activity, MoonStar, SunMedium, Zap } from "lucide-react";

const statusSeed = [
  { label: "Build Pipeline", value: "healthy" },
  { label: "UI Route", value: "live" },
  { label: "Team Scope", value: "test-app-fullstack" },
];

export default function TestAppFullstackDemo() {
  const [darkMode, setDarkMode] = useState(true);
  const [counter, setCounter] = useState(3);

  const panelTone = useMemo(
    () =>
      darkMode
        ? {
            shell: "bg-[#0f172a] text-slate-100 border border-cyan-500/20",
            muted: "text-slate-400",
            accent: "text-cyan-300",
            soft: "bg-cyan-500/10 border-cyan-500/20",
            button: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
            secondary: "border border-slate-700 hover:border-cyan-400/40 hover:bg-slate-800",
          }
        : {
            shell: "bg-white text-slate-900 border border-orange-200",
            muted: "text-slate-600",
            accent: "text-orange-600",
            soft: "bg-orange-50 border-orange-200",
            button: "bg-orange-500 text-white hover:bg-orange-600",
            secondary: "border border-slate-200 hover:border-orange-300 hover:bg-orange-50",
          },
    [darkMode],
  );

  return (
    <div className={`rounded-3xl p-6 md:p-8 shadow-2xl transition-colors duration-300 ${panelTone.shell}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${panelTone.soft}`}>
            <Activity className="h-3.5 w-3.5" />
            Live Test Surface
          </div>
          <h3 className="mt-4 text-2xl font-semibold md:text-3xl">End-to-end deployment check</h3>
          <p className={`mt-3 max-w-2xl text-sm leading-6 md:text-base ${panelTone.muted}`}>
            This route is a minimal real app shipped through the existing Juiceco deployment flow.
            It keeps the footprint tiny but proves the browser path, UI interactivity, and project-scoped branding all work.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setDarkMode((value) => !value)}
          className={`inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-medium transition ${panelTone.secondary}`}
        >
          {darkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          {darkMode ? "Switch to light panel" : "Switch to dark panel"}
        </button>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <section className={`rounded-2xl p-5 ${panelTone.soft} border`}>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
            <Zap className={`h-4 w-4 ${panelTone.accent}`} />
            Counter widget
          </div>
          <p className={`mt-2 text-sm ${panelTone.muted}`}>
            Quick interaction to prove stateful client behavior is live.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-5xl font-bold tracking-tight">{counter}</div>
              <div className={`mt-2 text-sm ${panelTone.muted}`}>deploy confirmations clicked</div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCounter((value) => Math.max(0, value - 1))}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${panelTone.secondary}`}
              >
                Decrement
              </button>
              <button
                type="button"
                onClick={() => setCounter((value) => value + 1)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${panelTone.button}`}
              >
                Confirm deploy
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/10 p-5 backdrop-blur-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.18em]">Status panel</div>
          <div className="mt-4 space-y-3">
            {statusSeed.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm">
                <span className={panelTone.muted}>{item.label}</span>
                <span className={`font-semibold ${panelTone.accent}`}>{item.value}</span>
              </div>
            ))}
          </div>
          <p className={`mt-4 text-xs leading-5 ${panelTone.muted}`}>
            Scope note: this is intentionally small and isolated so it can go live fast without disturbing the rest of the site.
          </p>
        </section>
      </div>
    </div>
  );
}
