"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const inputClasses =
  "h-11 rounded-lg bg-background border border-border px-4 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
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
          rows={5}
          placeholder="How can we help?"
          className={`${inputClasses} h-auto py-3 resize-none`}
        />
      </label>

      <button
        type="submit"
        className="self-end bg-foreground hover:opacity-90 text-background font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:shadow-lg hover:-translate-y-px"
      >
        Send Message
        <div className="bg-background text-foreground w-8 h-8 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
          <ArrowUpRight size={16} />
        </div>
      </button>
    </form>
  );
}
