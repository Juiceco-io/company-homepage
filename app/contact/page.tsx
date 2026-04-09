import type { Metadata } from "next";

import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Start a Project | Juice Technology Solutions",
  description:
    "Ready to build something great? Tell us about your project and we'll get back to you within one business day. Custom software development starts here.",
  alternates: {
    canonical: "https://juicetech.io/contact",
  },
  openGraph: {
    title: "Start a Project | Juice Technology Solutions",
    description:
      "Ready to build something great? Tell us about your project and we'll get back to you within one business day.",
    url: "https://juicetech.io/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8">
            Let&apos;s build together
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Start a Project
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Got something to build? Tell us about it. We&apos;ll read every message and reply within one business day.
            Or drop us a line directly at{" "}
            <a
              href="mailto:hello@juice.io"
              className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
              aria-label="Email Juice Technology Solutions at hello@juice.io"
            >
              hello@juice.io
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-surface-2 border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              Tell us about your project
            </h2>
            <ContactForm />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-2 border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-200">
              <div className="text-2xl mb-3" aria-hidden="true">📧</div>
              <h3 className="font-semibold text-text-primary mb-1">Email us directly</h3>
              <p className="text-text-secondary text-sm mb-3">
                Always a human on the other end.
              </p>
              <a
                href="mailto:hello@juice.io"
                className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
                aria-label="Send email to hello@juice.io"
              >
                hello@juice.io
              </a>
            </div>
            <div className="bg-surface-2 border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-200">
              <div className="text-2xl mb-3" aria-hidden="true">⚡</div>
              <h3 className="font-semibold text-text-primary mb-1">Fast response</h3>
              <p className="text-text-secondary text-sm">
                We reply within 1 business day. If you&apos;re in a hurry, say so — we&apos;ll prioritize.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
