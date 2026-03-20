import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Juice",
  description: "Start a project with Juice. Tell us what you're building and we'll be in touch.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
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
            >
              hello@juice.io
            </a>
            .
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-surface py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-surface-2 border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              Tell us about your project
            </h2>
            <form
              action="mailto:hello@juice.io"
              method="get"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-orange-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-orange-500 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-orange-500 transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="body"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  What are you building?
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={5}
                  required
                  placeholder="Describe your project, timeline, and what you need help with..."
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-orange-500 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-2 border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-200">
              <div className="text-2xl mb-3">📧</div>
              <h3 className="font-semibold text-text-primary mb-1">Email us directly</h3>
              <p className="text-text-secondary text-sm mb-3">
                Always a human on the other end.
              </p>
              <a
                href="mailto:hello@juice.io"
                className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
              >
                hello@juice.io
              </a>
            </div>
            <div className="bg-surface-2 border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-200">
              <div className="text-2xl mb-3">⚡</div>
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
