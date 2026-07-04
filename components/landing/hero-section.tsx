import { ArrowUpRight, ShieldCheck, Lock, Award, Users, Zap, MoveHorizontal } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const APPLY_URL = "/application-form";

const TRUST_BADGES = [
  { label: "Bank-Level Security",       icon: ShieldCheck },
  { label: "256-bit Encryption",        icon: Lock },
  { label: "Trusted Lenders",           icon: Award },
  { label: "50,000+ Canadians Served",  icon: Users },
  { label: "Fast 2-Minute Application", icon: Zap },
];

const PARTNERS = [
  { name: "RBC",           src: "/assets/partners/RBC.svg" },
  { name: "TD Bank",       src: "/assets/partners/TD_BANK.svg" },
  { name: "BMO",           src: "/assets/partners/BMO.svg" },
  { name: "CIBC",          src: "/assets/partners/CIBC.svg" },
  { name: "Scotiabank",    src: "/assets/partners/Scotiabank.svg" },
  { name: "National Bank", src: "/assets/partners/National_Bank.svg" },
];

const AVATARS = [
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=15",
];

const STAR_PATH =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = value >= star;
        const half = !filled && value >= star - 0.5;
        return (
          <svg key={star} className="w-3 h-3" viewBox="0 0 20 20">
            {half ? (
              <>
                <path d={STAR_PATH} className="fill-foreground/15" />
                <defs>
                  <clipPath id={`clip-half-${star}`}>
                    <rect x="0" y="0" width="10" height="20" />
                  </clipPath>
                </defs>
                <path d={STAR_PATH} className="fill-primary" clipPath={`url(#clip-half-${star})`} />
              </>
            ) : (
              <path d={STAR_PATH} className={filled ? "fill-primary" : "fill-foreground/15"} />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-dot-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-[45vw] h-[45vh] bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklch,var(--color-navy)_4%,transparent),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklch,var(--color-primary)_4%,transparent),transparent_65%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-[800px] mx-auto px-5 pt-24 pb-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-xl pl-1 pr-3 py-1 text-[13px] font-semibold text-muted-foreground shadow-sm mb-6">
          <span className="bg-ink dark:bg-white text-white dark:text-ink rounded-lg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide shrink-0">
            New
          </span>
          No impact on your credit score
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-[2.5rem] sm:text-[2.875rem] lg:text-[3.875rem] xl:text-[4.375rem] text-foreground leading-[1.05] tracking-[-0.025em] mb-5">
          Canada's <span className="text-primary underline decoration-wavy decoration-primary/50 underline-offset-[6px]">Best</span> Loans,<br />
          Found in Seconds.
        </h1>

        {/* Subtitle */}
        <p className="text-[0.825rem] lg:text-[0.875rem] text-muted-foreground max-w-[420px] leading-relaxed mb-8">
          Compare 500+ lenders and get matched with the best rate for your credit profile — no paperwork, no hard checks.
        </p>

        {/* CTA + Social proof */}
        <div className="flex items-center gap-5 flex-wrap justify-center mb-14">
          <a
            href={APPLY_URL}
            className="bg-ink dark:bg-white hover:opacity-90 text-white dark:text-ink font-bold text-[14px] h-9.5 lg:h-10.5 pl-6 pr-2 rounded-full inline-flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
          >
            Apply Now
            <div className="bg-white text-ink dark:bg-neutral-100 dark:text-primary w-7 h-7 lg:w-8 lg:h-8 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
              <ArrowUpRight size={16} />
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Customer"
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <StarRating value={4.5} />
              <span className="text-[12px] text-muted-foreground font-medium">
                Trusted by <span className="text-primary font-bold">50,000+</span> Canadians
              </span>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="w-full">
          {/* Faded horizontal divider */}
          <div className="flex items-center gap-5 py-5 mb-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/50" />
            <span className="text-[11.5px] text-muted-foreground/70 font-medium whitespace-nowrap tracking-wide">
              Trusted by Canada's top lenders
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/50" />
          </div>

          {/* Marquee with side fades */}
          <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]">
            <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem]">
              {PARTNERS.map((p) => (
                <img
                  key={p.name}
                  src={p.src}
                  alt={p.name}
                  className="h-8 lg:h-10 grayscale opacity-40 dark:invert dark:opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-110 dark:hover:opacity-80 transition-all duration-300 cursor-default select-none"
                />
              ))}
            </Marquee>
          </div>
        </div>

      </div>

      {/* Swipe hint, mobile only */}
      <div className="md:hidden relative z-10 flex items-center justify-center gap-1.5 pb-2">
        <MoveHorizontal size={12} className="text-muted-foreground/50" strokeWidth={2} />
        <span className="text-[10px] text-muted-foreground/50 font-medium">Swipe to see more</span>
      </div>

      {/* Trust badge strip */}
      <div className="relative z-10 bg-navy border-t border-white/5">
        <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] overflow-x-auto no-scrollbar">
          <div className="flex min-w-max md:min-w-full divide-x divide-white/10">
            {TRUST_BADGES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1 md:gap-1.5 w-32 md:w-auto px-3 py-4 md:py-6 md:flex-1"
              >
                <Icon className="w-3 h-3 md:w-[15px] md:h-[15px] text-primary opacity-85" strokeWidth={1.75} />
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-white/65 text-center leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
