import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, CalendarClock } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { REPAYMENT_TERMS } from "@/lib/loans/terms";

export const metadata: Metadata = buildMetadata({
  title: "Personal Loans by Repayment Term | 365loan",
  description: "Compare personal loans in Canada by repayment term, from 3 to 60 months. See real monthly payment and total cost examples for each term length.",
  path: "/loans/by-term",
  keywords: ["loan repayment term canada", "12 month loan", "24 month loan", "36 month loan", "60 month loan canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Loans", path: "/loans" },
  { name: "By Repayment Term", path: "/loans/by-term" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: REPAYMENT_TERMS.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${t.months}-Month Loan`,
    url: `${BASE_URL}/loans/by-term/${t.slug}`,
  })),
};

export default function LoansByTermPage() {
  return (
    <>
      <Script id="by-term-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="by-term-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Loans", href: "/loans" }, { label: "By Repayment Term" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Repayment Term
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Loans by <span className="text-primary">Repayment Term</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed mb-5">
            Choose terms from 3 to 60 months that fit your budget. A shorter term means less total interest; a longer term means a lower monthly payment.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* Intro content */}
      <section className="bg-muted/50 bg-dot-grid py-16 lg:py-20">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
            How Term Length Changes Your Loan
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            The repayment term you choose is one of the biggest factors in what a loan actually costs you. A shorter term — 3 or 6 months — keeps total interest low but means a higher monthly payment. A longer term — 36, 48, or 60 months — lowers the monthly payment but adds up to meaningfully more interest over the life of the loan.
          </p>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
            Term length and loan amount are connected: smaller amounts are typically paired with shorter terms, while our largest loans can extend to 60 months. Pick a term below to see real monthly payment and total cost examples.
          </p>
        </div>
      </section>

      {/* Term grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5">
            {REPAYMENT_TERMS.map((t) => (
              <a
                key={t.slug}
                href={`/loans/by-term/${t.slug}`}
                className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CalendarClock size={19} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-black text-[1.4rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                  {t.label}
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  See real payment examples for a {t.months}-month loan term.
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
