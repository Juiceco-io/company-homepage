import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Built on globally distributed infrastructure, your product reaches users in milliseconds. Performance isn't an afterthought — it's the foundation.",
  },
  {
    icon: "🔒",
    title: "Security First",
    description:
      "Zero-trust architecture, end-to-end encryption, and continuous security monitoring keep your data and your customers safe.",
  },
  {
    icon: "🚀",
    title: "Scale Without Limits",
    description:
      "From your first user to your millionth, our platform scales seamlessly. No rearchitecting, no rewrites — just growth.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-48 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now in public beta
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
            Build the future,
            <br />
            <span className="text-accent">ship today.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Juiceco gives your team the infrastructure, tools, and confidence to
            move fast without breaking things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-colors duration-200"
            >
              Get started free
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border hover:border-text-secondary text-text-primary font-semibold text-lg transition-colors duration-200"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Everything you need to ship
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Stop worrying about infrastructure. Start building products your
              customers love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-2 border border-border rounded-xl p-8 hover:border-accent/50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-background py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to build something great?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Join thousands of teams already building on Juiceco.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-colors duration-200"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
