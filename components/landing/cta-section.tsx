"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Zap, Mail } from "lucide-react";

const APPLY_URL = "/application-form";

const PERKS = [
  { icon: ShieldCheck, label: "No hard credit check" },
  { icon: Zap,         label: "Results in seconds" },
];

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">

      {/* Dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[60%] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-275 mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

        {/* Left: primary CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start gap-1.5 mb-6">
            <div className="w-7 h-px bg-white/25" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50">
              Get Started Today
            </span>
          </div>

          <h2 className="font-heading font-black text-[2rem] lg:text-[3rem] text-white leading-[1.1] tracking-tight mb-5">
            Ready to Find Your<br /><span className="text-primary">Best</span> Loan Rate?
          </h2>

          <p className="text-[0.95rem] text-white/60 max-w-110 leading-relaxed mb-10">
            Join 50,000+ Canadians who found better rates in minutes. Free to use, no obligation, no impact on your credit score.
          </p>

          <a
            href={APPLY_URL}
            className="bg-primary hover:opacity-90 text-white font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-px mb-7"
          >
            Check My Rate — It's Free
            <div className="bg-white/15 w-8 h-8 rounded-full inline-flex items-center justify-center shrink-0">
              <ArrowUpRight size={16} />
            </div>
          </a>

          <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
            {PERKS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[0.8rem] text-white/50 font-medium">
                <Icon size={14} className="text-primary opacity-80" strokeWidth={1.75} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: newsletter signup */}
        <div className="w-full bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-8 lg:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-5">
            <Mail size={18} className="text-primary" strokeWidth={1.75} />
          </div>

          <h3 className="font-heading font-bold text-[1.35rem] text-white leading-tight mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="text-[0.85rem] text-white/50 leading-relaxed mb-6">
            Rate drops, credit tips, and new lender offers — straight to your inbox. No spam.
          </p>

          {subscribed ? (
            <p className="text-[0.9rem] text-primary font-semibold">
              You're subscribed! Watch your inbox for the next update.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full sm:flex-1 h-12 rounded-full bg-white/10 border border-white/15 px-5 text-[14px] text-white placeholder:text-white/35 focus:outline-none focus:border-primary/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:opacity-90 text-white font-bold text-[14px] h-12 px-6 rounded-full inline-flex items-center justify-center transition-all shadow-md hover:shadow-lg shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
