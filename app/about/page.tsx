import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Users, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About Juice Technology Solutions | Custom Software Agency",
  description:
    "We're Juice Technology Solutions — a small team with big output, obsessed with shipping quality custom software for companies that want to move fast.",
  alternates: {
    canonical: "https://juiceco.io/about",
  },
  openGraph: {
    title: "About Juice Technology Solutions | Custom Software Agency",
    description:
      "We're Juice Technology Solutions — a small team with big output, obsessed with shipping quality custom software for companies that want to move fast.",
    url: "https://juiceco.io/about",
  },
};

const values = [
  {
    icon: Zap,
    title: "Fast",
    description:
      "Speed is a feature. We move quickly without sacrificing quality — tight iterations, weekly progress, real momentum.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description:
      "We do what we say. Timelines, quality, communication — we hold ourselves to a high bar because your business depends on it.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work with you, not for you. Your team stays in the loop and involved — we build together.",
  },
  {
    icon: MessageSquare,
    title: "Opinionated",
    description:
      "We have strong opinions on how to build software well, and we&apos;ll share them — then execute on the best decision.",
  },
];

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "30+", label: "Happy clients" },
  { value: "5+", label: "Years building" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8">
            Our story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            We&apos;re Juice Technology Solutions.
            <br />
            <span className="text-orange-500">Small team, big output.</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
            A custom dev agency obsessed with shipping quality software for companies that want to move fast.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Juice Technology Solutions was born out of frustration. We kept seeing the same problem:
                  companies with great ideas, stuck waiting months for software that should
                  take weeks. Agencies that overpromised, underdelivered, and disappeared
                  after launch.
                </p>
                <p>
                  We built Juice Technology Solutions to be the agency we always wished existed — a tight team
                  of engineers and designers who care about your business outcomes as much
                  as you do. We stay small on purpose: it keeps us sharp, fast, and
                  accountable.
                </p>
                <p>
                  Every project we take on gets our best. We&apos;re selective about who we
                  work with because great partnerships produce great software.
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-surface-2 border border-border rounded-xl p-8">
              <div className="grid grid-cols-1 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-b border-border last:border-0 pb-6 last:pb-0">
                    <div className="text-4xl font-bold text-orange-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            How we operate
          </h2>
          <p className="text-text-secondary mb-12 text-lg">
            Four principles that shape how we work with every client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-surface border border-border rounded-xl p-6 hover:border-orange-500/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-orange-500" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">{value.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Want to work together?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Tell us what you&apos;re building. We&apos;d love to hear it.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-colors duration-200"
            aria-label="Start a project with Juice Technology Solutions"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
