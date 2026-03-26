"use client";

import { FormEvent, useMemo, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const apiUrl = useMemo(
    () => process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim() ?? "",
    []
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle" });

    if (!apiUrl) {
      setStatus({
        type: "error",
        message: "Contact form is not configured yet. Please email hello@juice.io for now.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message right now.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks — your message is on the way. We’ll get back to you within one business day.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
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
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
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
          value={form.company}
          onChange={(event) =>
            setForm((current) => ({ ...current, company: event.target.value }))
          }
          placeholder="Your company"
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-orange-500 transition-colors duration-200"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Describe your project, timeline, and what you need help with..."
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-orange-500 transition-colors duration-200 resize-none"
        />
      </div>

      {status.type !== "idle" ? (
        <div
          className={`rounded-lg border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/60 disabled:cursor-not-allowed text-white font-semibold text-lg transition-colors duration-200"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
