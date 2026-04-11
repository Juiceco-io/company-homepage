import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Wrench,
  Plug,
  Database,
  Layers3,
} from "lucide-react";
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/AnimatedSection";
import { StatCounter } from "@/components/StatCounter";
import ProcessSection from "@/components/ProcessSection";

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description:
      "Modern web systems built for performance, reliability, and the way your team actually works.",
  },
  {
    icon: Smartphone,
    title: "Customer-Facing Products",
    description:
      "Web and mobile product experiences that are easy to use, fast to ship, and ready to grow.",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description:
      "Dashboards, workflows, and back-office software that reduce manual work and give your team leverage.",
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description:
      "Clean integrations that connect the systems you already rely on without creating new operational pain.",
  },
  {
    icon: Database,
    title: "Data Systems",
    description:
      "Practical data pipelines, reporting layers, and operational visibility for better decisions.",
  },
  {
    icon: Layers3,
    title: "Modernization & Rebuilds",
    description:
      "Legacy replacements, platform upgrades, and technical cleanups that make software easier to maintain.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: " yrs", label: "Experience" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
];

const fitPoints = [
  "Need a custom software partner instead of an off-the-shelf compromise",
  "Want internal tools that remove bottlenecks and manual work",
  "Need a web application, customer portal, or operations dashboard shipped cleanly",
  "Have an aging system that needs modernization without derailing the business",
];

const faqs = [
  {
    question: "What kinds of software does Juice Technology Solutions build?",
    answer:
      "We build custom software, internal tools, web applications, customer portals, dashboards, integrations, and modernized replacements for outdated systems.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We partner with companies that need dependable software built around real business operations, whether that means a new product, an internal system, or an upgrade to something already in production.",
  },
  {
    question: "Can you improve or replace an existing system?",
    answer:
      "Yes. We take on modernization work, rebuilds, and integration projects when companies need better performance, clearer workflows, or a system that is easier to maintain.",
  },
];

export const metadata: Metadata = {
  title: "Custom Software Development Company | Internal Tools & Modern Web Systems",
  description:
    "Juice Technology Solutions builds custom software, internal tools, and modern web systems for companies that need reliable software aligned with real business workflows.",
  alternates: {
    canonical: "https://juicetech.io",
  },
  openGraph: {
    title: "Custom Software Development Company | Juice Technology Solutions",
    description:
      "We build custom software, internal tools, and modern web systems for companies that need software that fits the business and ships cleanly.",
    url: "https://juicetech.io",
  },
  twitter: {
    title: "Custom Software Development Company | Juice Technology Solutions",
    description:
      "Custom software, internal tools, and modern web systems built for real business workflows.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Custom Software Development Company | Juice Technology Solutions",
      url: "https://juicetech.io",
      description:
        "Juice Technology Solutions builds custom software, internal tools, and modern web systems for companies that need reliable software aligned with real business workflows.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://juicetech.io",
        name: "Juice Technology Solutions",
      },
      about: {
        "@type": "Organization",
        name: "Juice Technology Solutions",
      },
    },
    {
      "@type": "Service",
      serviceType: "Custom software development",
      provider: {
        "@type": "Organization",
        name: "Juice Technology Solutions",
        url: "https://juicetech.io",
      },
      areaServed: "US",
      description:
        "Custom software development services including internal tools, modern web systems, integrations, and software modernization.",
      offers: [
        { "@type": "Offer", name: "Custom web applications" },
        { "@type": "Offer", name: "Internal tools" },
        { "@type": "Offer", name: "API integrations" },
        { "@type": "Offer", name: "Software modernization" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  const headlineWords = ["Custom", "Software", "For", "Real", "Business", "Needs"];
  const delays = [0.3, 0.48, 0.66, 0.84, 1.02, 1.2];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
        <div className="absolute inset-0 hero-dot-grid opacity-40 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }}
          />
          <div
            className="orb-2 absolute -top-16 -right-24 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)" }}
          />
          <div
            className="orb-3 absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)" }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="headline-glow w-[700px] h-[300px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.2) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6 py-32 md:py-48 text-center">
          <div className="badge-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-10">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Custom software, internal tools, and modern web systems
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
            {headlineWords.slice(0, 4).map((word, i) => (
              <span
                key={word + i}
                className="word-animate"
                style={{ animationDelay: `${delays[i]}s`, marginRight: "0.3em" }}
              >
                {word}
              </span>
            ))}
            <br />
            {headlineWords.slice(4).map((word, i) => (
              <span
                key={word + i}
                className="word-animate text-orange-500"
                style={{ animationDelay: `${delays[i + 4]}s`, marginRight: i === 0 ? "0.3em" : "0" }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="fade-up-delay-1 text-base md:text-lg italic text-orange-400/80 mb-4 tracking-wide">
            Get more for the squeeze.
          </p>

          <p className="fade-up-delay-1 text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            Juice Technology Solutions helps companies plan, build, and improve custom software. We create internal tools,
            customer-facing products, integrations, and modern web systems that support real operations and hold up in production.
          </p>

          <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.5)] hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border hover:border-orange-500/50 text-text-primary font-semibold text-lg transition-all duration-200 hover:bg-orange-500/5"
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </section>

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

      <section id="services" className="bg-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Custom Software Development Services
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              We design and ship software around business workflows, customer needs, and long-term maintainability — not just feature lists.
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
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{service.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                  </div>
                </StaggeredItem>
              );
            })}
          </StaggeredGrid>
        </div>
      </section>

      <section id="solutions" className="bg-background py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
                Software built to fit how your company actually operates
              </h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed max-w-3xl">
                <p>
                  Off-the-shelf tools are useful until they stop matching the way your team works. That is where custom software starts to matter.
                </p>
                <p>
                  We build systems that support real workflows: internal dashboards, customer portals, operational tooling, integrations,
                  and modern web applications that help teams move faster with less friction.
                </p>
                <p>
                  If you need a software partner that can translate business needs into dependable systems, that is the work we do.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Typical reasons clients come to us</h3>
              <ul className="space-y-4 text-text-secondary">
                {fitPoints.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProcessSection />

      <section id="faq" className="bg-surface py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary text-lg">
              A quick overview of the work we do and where we are most useful.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <AnimatedSection key={faq.question}>
                <div className="bg-surface-2 border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-animated-bg py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.15) 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="shimmer-text text-3xl md:text-4xl font-bold mb-4">Need software built around your business?</h2>
            <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
              Tell us what you are building, replacing, or trying to streamline. We&apos;ll help you figure out the right path.
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
