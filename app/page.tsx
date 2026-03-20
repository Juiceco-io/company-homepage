import Link from "next/link";
import {
  Globe,
  Smartphone,
  Wrench,
  Plug,
  Database,
  Sparkles,
} from "lucide-react";

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

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dig into your business, your users, and the problem worth solving. No fluff.",
  },
  {
    number: "02",
    title: "Design",
    description: "We map out the solution — architecture, UX, and a clear plan before writing code.",
  },
  {
    number: "03",
    title: "Build",
    description: "We ship in tight iterations. You see real progress every week, not a big reveal.",
  },
  {
    number: "04",
    title: "Ship",
    description: "We launch, monitor, and make sure it sticks. Done means done.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        {/* Orange glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-48 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Custom software, built for your business
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
            We Build Software
            <br />
            <span className="text-orange-500">That Drives Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Juice is a custom development agency. We partner with companies to design, build, and ship
            web apps, mobile products, and internal tools — fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-colors duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border hover:border-orange-500/50 text-text-primary font-semibold text-lg transition-colors duration-200"
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What We Build
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From zero to shipped — we cover the full spectrum of custom software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-surface-2 border border-border rounded-xl p-8 hover:border-orange-500/50 transition-all duration-200 hover:bg-orange-500/5"
                >
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="work" className="bg-background py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How We Work
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A tight, proven process. No surprises, no dead ends.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-orange-500/50 to-transparent z-10" />
                )}
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re working on. We&apos;ll tell you how we can help — no obligation.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-semibold text-lg transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
