import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, Banknote } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { LOAN_AMOUNTS } from "@/lib/loans/amounts";

export const metadata: Metadata = buildMetadata({
  title: "Personal Loans by Amount | 365loan",
  description: "Compare personal loans in Canada by amount — from $300 short-term loans to $5,000 installment loans. Find the size that fits your budget.",
  path: "/loans/by-amount",
  keywords: ["loans by amount canada", "$300 loan", "$500 loan", "$1000 loan", "small personal loans canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Loans", path: "/loans" },
  { name: "By Amount", path: "/loans/by-amount" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: LOAN_AMOUNTS.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${a.display} Loan`,
    url: `${BASE_URL}/loans/by-amount/${a.slug}`,
  })),
};

export default function LoansByAmountPage() {
  return (
    <>
      <Script id="by-amount-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="by-amount-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Loans", href: "/loans" }, { label: "By Amount" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Amount
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Personal <span className="text-primary">Loans by Amount</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed">
            The amount you borrow shapes almost everything else about a loan — your rate, your term, and how quickly a lender can approve you. Here's a guide to every amount we match, from $300 to $5,000.
          </p>
        </div>
      </section>

      {/* Intro content */}
      <section className="bg-muted/50 bg-dot-grid py-16 lg:py-20">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
            How Loan Amount Affects Your Rate and Terms
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            Smaller loans — like a $300 or $500 loan — are usually approved faster and require less documentation, but they're repaid over a shorter window, which can mean a higher effective APR on paper even though the total interest paid is small in dollar terms. Larger loans, from $2,500 up to $5,000, spread repayment over more months, which lowers the monthly payment but increases the total interest paid over the life of the loan.
          </p>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
            The right amount is the smallest one that actually covers what you need — borrowing more than necessary just to get a longer term usually costs more overall. Pick an amount below to see rates, eligibility, and repayment examples specific to that size.
          </p>
        </div>
      </section>

      {/* Amount grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5">
            {LOAN_AMOUNTS.map((a) => (
              <a
                key={a.slug}
                href={`/loans/by-amount/${a.slug}`}
                className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Banknote size={19} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-black text-[1.4rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                  {a.display} Loan
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  See costs, requirements, and same-day options for a {a.display} loan.
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
