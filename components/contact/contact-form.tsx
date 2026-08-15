"use client";

/* Contact form.

   Structure, field set and submission logic are UNIFIED across the network:
   same fields, same lib/contact.ts helper, same states. Only the STYLES block
   below is site-specific — this site keeps its own look on purpose, so the
   sites don't share a visual fingerprint.

   Site-specific email config lives in app/api/contact/route.ts.            */

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect } from "@/components/ui/native-select";
import { submitContactForm, type ContactStatus } from "@/lib/contact";

const TOPICS = [
  "General enquiry",
  "Help with my application",
  "Rates & fees",
  "Repayment & support",
  "Partnerships",
  "Something else",
];

/* ── Site styling — the only part that differs between sites ───────────── */
const STYLES = {
  card: "bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col gap-5",
  panel:
    "bg-card border border-border rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[360px]",
  label: "text-[12.5px] font-semibold text-foreground",
  field:
    "h-11 rounded-lg bg-background border-border px-4 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary/60",
  button:
    "self-end bg-foreground hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-background font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:shadow-lg hover:-translate-y-px disabled:hover:translate-y-0",
};
/* ─────────────────────────────────────────────────────────────────────── */

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    const result = await submitContactForm(e.currentTarget);

    if (!result.ok) {
      setError(result.error);
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className={STYLES.panel}>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <CheckCircle2 size={22} className="text-primary" strokeWidth={1.75} />
        </div>
        <h2 className="font-heading font-bold text-[1.15rem] text-foreground mb-2">
          Message sent
        </h2>
        <p className="text-[0.875rem] text-muted-foreground max-w-[320px] leading-relaxed">
          Thanks for reaching out — we&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubject("");
            setStatus("idle");
          }}
          className="mt-6 text-[0.8rem] font-semibold text-primary underline underline-offset-4 hover:opacity-80"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className={STYLES.card}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="firstName" className={STYLES.label}>
            First name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="Jane"
            required
            disabled={submitting}
            className={STYLES.field}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="lastName" className={STYLES.label}>
            Last name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Doe"
            required
            disabled={submitting}
            className={STYLES.field}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className={STYLES.label}>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          disabled={submitting}
          className={STYLES.field}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone" className={STYLES.label}>
          Phone <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          disabled={submitting}
          className={STYLES.field}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="subject" className={STYLES.label}>
          What&apos;s it about?
        </Label>
        <NativeSelect
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            disabled={submitting}
            className={STYLES.field}
          >
            <option value="" disabled>
              Select a topic
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </NativeSelect>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className={STYLES.label}>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
          disabled={submitting}
          className={`${STYLES.field} h-auto py-3 resize-none`}
        />
      </div>

      {/* Honeypot — hidden from people, frequently auto-filled by bots. */}
      <input
        type="text"
        name="company"
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

      <button type="submit" disabled={submitting} className={STYLES.button}>
        {submitting ? "Sending..." : "Send Message"}
        <div className="bg-background text-foreground w-8 h-8 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
          {submitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={16} />}
        </div>
      </button>
    </form>
  );
}

export default ContactForm;
