import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, Banknote, Target, Gauge, Layers, MapPin, CalendarClock, List, Percent, Users, Clock, MoveHorizontal } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { cn } from "@/lib/utils";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Browse Personal Loans in Canada by Amount, Type & More | 365loan",
  description: "Find the right personal loan for you — browse by amount, purpose, credit score, type, term, or location across 365loan's Canadian lender network.",
  path: "/loans",
  keywords: ["personal loans by amount", "loans by credit score canada", "loan types canada", "same day loans canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Loans", path: "/loans" },
]);

const CATEGORY_ITEMLIST_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "By Amount", url: "https://365loan.ca/loans/by-amount" },
    { "@type": "ListItem", position: 2, name: "By Purpose", url: "https://365loan.ca/loans/by-purpose" },
    { "@type": "ListItem", position: 3, name: "By Credit Score", url: "https://365loan.ca/loans/by-credit-score" },
    { "@type": "ListItem", position: 4, name: "By Type", url: "https://365loan.ca/loans/by-type" },
    { "@type": "ListItem", position: 5, name: "By Location", url: "https://365loan.ca/loans/by-location" },
    { "@type": "ListItem", position: 6, name: "By Repayment Term", url: "https://365loan.ca/loans/by-term" },
  ],
};

const FEATURED = {
  title: "All Loan Options",
  description: "Not sure where to start? Browse the full range of loans across our entire lender network in one place.",
  href: "/loans/by-type/personal-loans",
  icon: List,
};

const CATEGORIES = [
  { number: "01", title: "By Amount",         description: "$300 to $5,000 loans, sized to what you actually need.",       href: "/loans/by-amount", icon: Banknote },
  { number: "02", title: "By Purpose",        description: "Debt consolidation, emergencies, home repairs, and more.",     href: "/loans/by-purpose", icon: Target },
  { number: "03", title: "By Credit Score",   description: "Loan options matched to your credit range — all welcome.",     href: "/loans/by-credit-score", icon: Gauge },
  { number: "04", title: "By Type",           description: "Bad credit, self-employed, newcomer, and same-day loan options.", href: "/loans/by-type", icon: Layers },
  { number: "05", title: "By Location",       description: "Lending availability across every Canadian province.",        href: "/loans/by-location", icon: MapPin },
  { number: "06", title: "By Repayment Term", description: "Choose terms from 3 to 60 months that fit your budget.",      href: "/loans/by-term", icon: CalendarClock },
];

const STRIP = [
  { icon: Percent, label: "5.99%–34.99% APR" },
  { icon: Users,   label: "500+ Lending Partners" },
  { icon: Clock,   label: "Funded in 24h" },
  { icon: Layers,  label: "All Credit Welcome" },
];

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-foreground/20 pointer-events-none" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-foreground/20 pointer-events-none" />
    </>
  );
}

export default function LoansPage() {
  const FeaturedIcon = FEATURED.icon;

  return (
    <>
      <Script id="loans-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="loans-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(CATEGORY_ITEMLIST_JSONLD)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Find the Right Loan for You
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            However you need to borrow, browse loans by amount, purpose, credit score, type, term, or location to find the best match from our lender network.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* Swipe hint, mobile only */}
      <div className="md:hidden relative z-10 flex items-center justify-center gap-1.5 pb-2">
        <MoveHorizontal size={12} className="text-muted-foreground/50" strokeWidth={2} />
        <span className="text-[10px] text-muted-foreground/50 font-medium">Swipe to see more</span>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 bg-navy border-t border-white/5">
        <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] overflow-x-auto no-scrollbar">
          <div className="flex min-w-max md:min-w-full divide-x divide-white/10">
            {STRIP.map(({ label, icon: Icon }) => (
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

      {/* Featured + category grid */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">

          {/* Featured tile */}
          <a
            href={FEATURED.href}
            className="group relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-6 bg-navy rounded-2xl p-8 lg:p-10 mb-5"
          >
            <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent_65%)] pointer-events-none" />

            <div className="relative z-10 w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <FeaturedIcon size={24} className="text-primary" strokeWidth={1.75} />
            </div>
            <div className="relative z-10 flex-1">
              <h2 className="font-heading font-bold text-[1.3rem] text-white mb-1.5">
                {FEATURED.title}
              </h2>
              <p className="text-[0.9rem] text-white/55 leading-relaxed max-w-[520px]">
                {FEATURED.description}
              </p>
            </div>
            <div className="relative z-10 bg-white text-ink w-11 h-11 rounded-full flex items-center justify-center shadow-sm shrink-0 transition-transform group-hover:translate-x-1">
              <ArrowUpRight size={18} />
            </div>
          </a>

          {/* Category grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-card border border-border rounded-2xl overflow-hidden">
            {CATEGORIES.map(({ number, title, description, href, icon: Icon }, i) => (
              <a
                key={title}
                href={href}
                className={cn(
                  "group relative p-8 lg:p-10 transition-colors hover:bg-muted/50",
                  i % 3 !== 2 && "md:border-r border-border",
                  i < 3 && "md:border-b border-border",
                  i < CATEGORIES.length - 1 && "max-md:border-b border-border",
                )}
              >
                <CornerBrackets />

                <Icon size={72} strokeWidth={1.25} className="absolute -top-2 right-4 text-foreground/8 blur-[3.5px] pointer-events-none" />

                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={19} className="text-primary" strokeWidth={1.75} />
                </div>

                <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-primary/70 mb-2 block">
                  {number}
                </span>

                <h3 className="font-semibold text-[0.975rem] text-foreground mb-2 inline-flex items-center gap-1.5">
                  {title}
                  <ArrowUpRight size={14} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
