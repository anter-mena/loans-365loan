"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const inputClasses =
  "h-11 rounded-lg bg-background border border-border px-4 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors disabled:opacity-60";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[360px]">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <CheckCircle2 size={22} className="text-primary" strokeWidth={1.75} />
        </div>
        <h3 className="font-heading font-bold text-[1.15rem] text-foreground mb-2">
          Message sent
        </h3>
        <p className="text-[0.875rem] text-muted-foreground max-w-[320px] leading-relaxed">
          Thanks for reaching out — we'll get back to you within one business day.
        </p>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className="text-[12.5px] font-semibold text-foreground">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={busy}
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[12.5px] font-semibold text-foreground">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={busy}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[12.5px] font-semibold text-foreground">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          disabled={busy}
          rows={5}
          placeholder="How can we help?"
          className={`${inputClasses} h-auto py-3 resize-none`}
        />
      </label>

      {/* Honeypot — hidden from people, frequently auto-filled by bots. */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute w-px h-px -left-[9999px] opacity-0 pointer-events-none"
      />

      {status === "error" && (
        <p role="alert" className="text-[0.8rem] text-red-600 dark:text-red-400 leading-relaxed">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="self-end bg-foreground hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-background font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:shadow-lg hover:-translate-y-px disabled:hover:translate-y-0"
      >
        {busy ? "Sending..." : "Send Message"}
        <div className="bg-background text-foreground w-8 h-8 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
          {busy ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={16} />}
        </div>
      </button>
    </form>
  );
}
