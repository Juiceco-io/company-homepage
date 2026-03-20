import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Juiceco",
  description:
    "Learn about Juiceco's story, mission, and the values that guide everything we build.",
};

const values = [
  {
    title: "Ship with integrity",
    description:
      "We build things that work, document what we do, and own our mistakes. Quality isn't a feature — it's the baseline.",
  },
  {
    title: "Move fast, but not recklessly",
    description:
      "Speed matters. But so does not breaking things in production at 3am. We invest in testing, observability, and rollback paths.",
  },
  {
    title: "Customers above all",
    description:
      "Every decision starts with the customer. Not metrics, not optics — the actual human who depends on what we build.",
  },
  {
    title: "Default to transparency",
    description:
      "We share what we know, admit what we don't, and operate with our cards on the table — internally and externally.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            We build the future
            <br />
            <span className="text-accent">with you.</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
            Juiceco was founded by engineers who were tired of rebuilding the
            same infrastructure over and over. We built it once, made it great,
            and opened it up.
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
                  In 2021, three engineers at a fast-growing startup found
                  themselves spending 80% of their time on infrastructure — not
                  the product they were hired to build. After rebuilding the
                  same stack for the third time in their careers, they decided
                  to do something about it.
                </p>
                <p>
                  Juiceco started as an internal tool. By 2022 it was powering
                  ten other teams. Today it&apos;s the platform trusted by over
                  5,000 engineering teams across 40 countries.
                </p>
                <p>
                  We&apos;re still that small team at heart — obsessively
                  focused on making the experience right, one deploy at a time.
                </p>
              </div>
            </div>
            <div className="bg-surface-2 border border-border rounded-xl p-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    5,000+
                  </div>
                  <div className="text-text-secondary text-sm">
                    Engineering teams
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">40</div>
                  <div className="text-text-secondary text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    99.99%
                  </div>
                  <div className="text-text-secondary text-sm">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    2021
                  </div>
                  <div className="text-text-secondary text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Want to work with us?
          </h2>
          <p className="text-text-secondary mb-8">
            We&apos;re always looking for great engineers, designers, and
            problem-solvers.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
