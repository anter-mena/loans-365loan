import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

const APPLY_URL = "https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=365loan";

const PERKS = [
  { icon: ShieldCheck, label: "No hard credit check" },
  { icon: Zap,         label: "Results in seconds" },
];

export function CtaSection() {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(245,129,46,0.14),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-[760px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">

        <div className="flex flex-col items-center gap-1.5 mb-6">
          <div className="w-7 h-px bg-white/25" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50">
            Get Started Today
          </span>
        </div>

        <h2 className="font-heading font-black text-[2rem] lg:text-[3rem] text-white leading-[1.1] tracking-tight mb-5">
          Ready to Find Your<br />Best Loan Rate?
        </h2>

        <p className="text-[0.95rem] text-white/60 max-w-[440px] leading-relaxed mb-10">
          Join 50,000+ Canadians who found better rates in minutes. Free to use, no obligation, no impact on your credit score.
        </p>

        <a
          href={APPLY_URL}
          className="bg-primary hover:opacity-90 text-white font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-[1px] mb-7"
        >
          Check My Rate — It's Free
          <div className="bg-white/15 w-8 h-8 rounded-full inline-flex items-center justify-center shrink-0">
            <ArrowUpRight size={16} />
          </div>
        </a>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {PERKS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-[0.8rem] text-white/50 font-medium">
              <Icon size={14} className="text-primary opacity-80" strokeWidth={1.75} />
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
