import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { LoanCalculator } from "@/components/tools/loan-calculator";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Personal Loan Calculator Canada | Monthly Payment Estimator | 365loan",
  description: "Calculate your estimated monthly payment, total interest, and total repayment for a personal loan in Canada. Adjust amount, term, and credit range.",
  path: "/resources/tools/loan-calculator",
  keywords: ["loan calculator canada", "personal loan payment calculator", "monthly payment calculator", "loan interest calculator"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Loan Calculator", path: "/resources/tools/loan-calculator" },
]);

const faqs = [
  { q: "How accurate is this loan calculator?", a: "It provides an illustrative estimate based on a representative APR for each credit range. Your actual offer depends on the specific lender, your full credit profile, income, and provincial regulations — use it to compare scenarios, not as a guaranteed quote." },
  { q: "Does using this calculator affect my credit score?", a: "No — this calculator doesn't perform any credit check at all. It's a math tool, not an application. Checking your real rate with a lender later uses only a soft credit inquiry." },
  { q: "Why does a longer term lower my monthly payment but cost more overall?", a: "Interest accrues over the life of the loan, so spreading the same principal over more months lowers each payment but increases the total interest paid — the calculator's principal-vs-interest bar shows this tradeoff directly." },
  { q: "What APR does the calculator use?", a: "It uses a representative rate for each credit range (9.99% for Excellent, 15.99% for Good to Very Good, 22.99% for Fair, and 32.99% for Poor), all within our network's compliant 5.99%-34.99% APR spread." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function LoanCalculatorPage() {
  return (
    <>
      <Script id="calculator-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="calculator-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Loan Calculator" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Tools
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Personal Loan <span className="text-primary">Calculator</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            Adjust the amount, term, and your credit range to see an estimated monthly payment and total cost before you apply.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Methodology reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="max-w-[920px] mx-auto px-4 lg:px-8">
          <LoanCalculator />
        </div>
      </section>

      {/* Explainer content */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
            How This Calculator Works
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            The calculator uses the standard loan amortization formula to estimate a fixed monthly payment: your principal, multiplied by the monthly interest rate, divided by one minus the discount factor for your term. It's the same math lenders use to structure a fixed-rate installment loan.
          </p>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-6">
            Since your actual rate depends on your specific lender and credit profile, the calculator uses a representative APR for each broad credit range rather than a single flat number. For an exact quote, see how your{" "}
            <a href="/loans/by-credit-score" className="text-primary font-semibold underline underline-offset-2">specific credit score range</a>{" "}
            compares, or explore{" "}
            <a href="/loans/by-amount" className="text-primary font-semibold underline underline-offset-2">real repayment examples by amount</a>{" "}
            and{" "}
            <a href="/loans/by-term" className="text-primary font-semibold underline underline-offset-2">by repayment term</a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center pt-6 border-t border-border">
            <a
              href="/loans/by-amount"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Loans by amount
            </a>
            <a
              href="/resources"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              More guides &amp; tools
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-black text-[1.6rem] lg:text-[2rem] text-foreground leading-[1.1] tracking-tight mb-8 text-center">
            Calculator <span className="text-primary">FAQ</span>
          </h2>
          <div className="flex flex-col">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-border last:border-b-0 py-5">
                <h3 className="text-[0.95rem] font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
