import Link from "next/link";
import {
  Globe,
  Smartphone,
  Wrench,
  Plug,
  Database,
  Sparkles,
} from "lucide-react";
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/AnimatedSection";
import { StatCounter } from "@/components/StatCounter";
import ProcessSection from "@/components/ProcessSection";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web apps built for performance, scale, and real users.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android products that people actually want to use.",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description: "Custom dashboards and ops tools that make your team 10x faster.",
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description: "Connect your stack — cleanly, reliably, without the headaches.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    description: "Pipelines, warehouses, and analytics that actually answer your questions.",
  },
  {
    icon: Sparkles,
    title: "AI Features",
    description: "Practical AI built into your product — not just hype, real value.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: " yrs", label: "Experience" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
];

export default function HomePage() {
  const headlineWords = ["We", "Build", "Software", "That", "Drives", "Business"];
  const delays = [0.3, 0.48, 0.66, 0.84, 1.02, 1.2];

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
        {/* Dot-grid subtle background */}
        <div className="absolute inset-0 hero-dot-grid opacity-40 pointer-events-none" />

        {/* Floating gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large warm orb — top left */}
          <div className="orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)' }} />
          {/* Medium amber orb — top right */}
          <div className="orb-2 absolute -top-16 -right-24 w-[500px] h-[500px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)' }} />
          {/* Small warm orb — center bottom */}
          <div className="orb-3 absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)' }} />
        </div>

        {/* Headline glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="headline-glow w-[700px] h-[300px] rounded-full blur-3xl"
               style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.2) 0%, transparent 70%)' }} />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6 py-32 md:py-48 text-center">
          {/* Badge */}
          <div className="badge-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-10">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Custom software, built for your business
          </div>

          {/* Staggered headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
            {headlineWords.slice(0, 4).map((word, i) => (
              <span
                key={word + i}
                className="word-animate"
                style={{ animationDelay: `${delays[i]}s`, marginRight: '0.3em' }}
              >
                {word}
              </span>
            ))}
            <br />
            {headlineWords.slice(4).map((word, i) => (
              <span
                key={word + i}
                className="word-animate text-orange-500"
                style={{ animationDelay: `${delays[i + 4]}s`, marginRight: i === 0 ? '0.3em' : '0' }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="fade-up-delay-1 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Juice is a custom development agency. We partner with companies to design, build, and ship
            web apps, mobile products, and internal tools — fast.
          </p>

          {/* CTAs */}
          <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.5)] hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border hover:border-orange-500/50 text-text-primary font-semibold text-lg transition-all duration-200 hover:bg-orange-500/5"
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <section className="bg-surface border-y border-border/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <StaggeredGrid className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <StaggeredItem key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-1 stat-number">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* ===================== SERVICES SECTION ===================== */}
      <section id="services" className="bg-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What We Build
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From zero to shipped — we cover the full spectrum of custom software.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggeredItem key={service.title}>
                  <div className="service-card group bg-surface-2 border border-border rounded-xl p-8 h-full">
                    <div className="service-icon text-orange-500 mb-4">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </StaggeredItem>
              );
            })}
          </StaggeredGrid>
        </div>
      </section>

      {/* ===================== PROCESS SECTION ===================== */}
      <ProcessSection />

      {/* ===================== CTA SECTION ===================== */}
      <section className="cta-animated-bg py-24 relative overflow-hidden">
        {/* Subtle dark overlay vignette */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.15) 100%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="shimmer-text text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
              Tell us what you&apos;re working on. We&apos;ll tell you how we can help — no obligation.
            </p>
            <Link
              href="/contact/"
              className="cta-button-pulse inline-flex items-center justify-center px-10 py-4 rounded-lg bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-semibold text-lg transition-colors duration-200"
            >
              Let&apos;s Talk
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
