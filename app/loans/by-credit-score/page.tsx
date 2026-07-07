import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, Gauge } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { CREDIT_SCORE_RANGES } from "@/lib/loans/credit-scores";

export const metadata: Metadata = buildMetadata({
  title: "Personal Loans by Credit Score | 365loan",
  description: "Compare personal loans in Canada by credit score — from 300 to 900. Find realistic rates, approval odds, and lenders matched to your credit range.",
  path: "/loans/by-credit-score",
  keywords: ["loans by credit score canada", "bad credit loans canada", "fair credit loan", "good credit loan rates", "credit score ranges canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Loans", path: "/loans" },
  { name: "By Credit Score", path: "/loans/by-credit-score" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CREDIT_SCORE_RANGES.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Credit Score ${r.rangeLabel}`,
    url: `${BASE_URL}/loans/by-credit-score/${r.slug}`,
  })),
};

export default function LoansByCreditScorePage() {
  return (
    <>
      <Script id="by-credit-score-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="by-credit-score-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Loans", href: "/loans" }, { label: "By Credit Score" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Credit Score
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Personal <span className="text-primary">Loans by Credit Score</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed">
            Your credit score changes which lenders will work with you and what rate they'll offer. Find your range below to see realistic terms and lenders for your credit level.
          </p>
        </div>
      </section>

      {/* Intro content */}
      <section className="bg-muted/50 bg-dot-grid py-16 lg:py-20">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
            How Credit Score Bands Work in Canada
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            Canadian credit bureaus like Equifax generally classify scores as Poor (300-559), Fair (560-659), Good (660-724), Very Good (725-759), and Excellent (760-900). Where you fall changes which lenders will consider your application and what APR they'll offer — but it's rarely the only factor. Income, employment stability, and existing debt all play a role too.
          </p>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
            Some of the ranges below overlap on purpose, since our lender network segments risk slightly differently than the standard bureau bands. If your score is near a boundary, check the neighbouring range as well — the difference of a few points can change your options more than you'd expect.
          </p>
        </div>
      </section>

      {/* Range grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5">
            {CREDIT_SCORE_RANGES.map((r) => (
              <a
                key={r.slug}
                href={`/loans/by-credit-score/${r.slug}`}
                className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Gauge size={19} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-black text-[1.3rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                  {r.rangeLabel}
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  Lenders for your credit level — see rates, approval odds, and tips for the {r.rangeLabel} range.
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
