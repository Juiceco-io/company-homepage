import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Juiceco",
  description: "Get in touch with the Juiceco team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Let&apos;s talk.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Whether you have a question, want a demo, or just want to say hi —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-surface py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-surface-2 border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              Send us a message
            </h2>
            <form
              action="mailto:hello@juiceco.io"
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
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200"
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
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="body"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={5}
                  required
                  placeholder="Tell us what you're building..."
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-colors duration-200"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-2 border border-border rounded-xl p-6">
              <div className="text-2xl mb-3">📧</div>
              <h3 className="font-semibold text-text-primary mb-1">Email</h3>
              <p className="text-text-secondary text-sm mb-3">
                Direct line to the team
              </p>
              <a
                href="mailto:hello@juiceco.io"
                className="text-accent hover:text-accent-hover text-sm font-medium transition-colors duration-200"
              >
                hello@juiceco.io
              </a>
            </div>
            <div className="bg-surface-2 border border-border rounded-xl p-6">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-text-primary mb-1">
                Response time
              </h3>
              <p className="text-text-secondary text-sm">
                We typically respond within 1 business day. For urgent issues,
                existing customers can reach support directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
