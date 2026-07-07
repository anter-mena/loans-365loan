import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, Target } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { LOAN_PURPOSES } from "@/lib/loans/purposes";

export const metadata: Metadata = buildMetadata({
  title: "Personal Loans by Purpose | 365loan",
  description: "Compare personal loans in Canada by purpose — debt consolidation, home improvement, medical bills, car repairs, and more. Find the guide that matches your need.",
  path: "/loans/by-purpose",
  keywords: ["loans by purpose canada", "debt consolidation loan", "emergency loan canada", "home improvement loan", "personal loan reasons"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Loans", path: "/loans" },
  { name: "By Purpose", path: "/loans/by-purpose" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: LOAN_PURPOSES.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.title} Loan`,
    url: `${BASE_URL}/loans/by-purpose/${p.slug}`,
  })),
};

export default function LoansByPurposePage() {
  return (
    <>
      <Script id="by-purpose-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="by-purpose-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Loans", href: "/loans" }, { label: "By Purpose" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Purpose
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Personal <span className="text-primary">Loans by Purpose</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed">
            The reason you're borrowing shapes what to look for in a loan just as much as the amount. Find the guide that matches your situation, from car repairs to debt consolidation.
          </p>
        </div>
      </section>

      {/* Intro content */}
      <section className="bg-muted/50 bg-dot-grid py-16 lg:py-20">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
            Why Purpose Matters When You Borrow
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            A personal loan is flexible — the same product can cover a car repair, a wedding, or a tax bill. But the right amount, term, and even the alternatives worth considering can differ a lot depending on what you're funding. A one-time emergency calls for speed; a planned expense like a wedding or renovation leaves more room to compare rates.
          </p>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
            Below, we've broken down typical costs, things to consider, and a suggested loan size for each common reason Canadians borrow. Pick the one that matches your situation to see guidance specific to it.
          </p>
        </div>
      </section>

      {/* Purpose grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5">
            {LOAN_PURPOSES.map((p) => (
              <a
                key={p.slug}
                href={`/loans/by-purpose/${p.slug}`}
                className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target size={19} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-black text-[1.15rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                  {p.title}
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  {p.description}
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
