import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, ClipboardList, SlidersHorizontal, Banknote, ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { RelatedClusters } from "@/components/loans/related-clusters";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { LOAN_AMOUNTS, getLoanAmount, TERM_OPTIONS } from "@/lib/loans/amounts";
import { buildRepaymentExamples } from "@/lib/loans/repayment";
import { ELIGIBILITY, PROS, SOURCES, GENERIC_LOAN_FAQS } from "@/lib/loans/content";

const STEP_ICONS = [ClipboardList, SlidersHorizontal, Banknote];
const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return LOAN_AMOUNTS.map((a) => ({ amount: a.slug }));
}

type Params = Promise<{ amount: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { amount: slug } = await params;
  const amount = getLoanAmount(slug);
  if (!amount) return {};

  return buildMetadata({
    title: `${amount.display} Loan in Canada — Rates, Terms & How to Apply | 365loan`,
    description: `Thinking about a ${amount.display} loan in Canada? Compare real repayment examples, eligibility requirements, and alternatives from vetted lenders before you apply.`,
    path: `/loans/by-amount/${amount.slug}`,
    keywords: [`${amount.display} loan canada`, `${amount.value} dollar loan`, "personal loan canada", `${amount.display} loan same day`, `${amount.display} loan bad credit`],
  });
}

export default async function LoanAmountPage({ params }: { params: Params }) {
  const { amount: slug } = await params;
  const amount = getLoanAmount(slug);
  if (!amount) notFound();

  const { display, tier, intro, useCases, cons, alternatives, faqs: uniqueFaqs } = amount;
  const terms = TERM_OPTIONS[tier];
  const repaymentExamples = buildRepaymentExamples(amount.value, terms);
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "By Amount", path: "/loans/by-amount" },
    { name: `${display} Loan`, path: `/loans/by-amount/${slug}` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${display} Loans in Canada`,
    description: `Compare ${display} loan offers from vetted Canadian lenders. See real repayment examples, eligibility, and alternatives before you apply.`,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@type": "Organization", name: "365loan" },
    publisher: { "@type": "Organization", name: "365loan", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
    mainEntityOfPage: `${BASE_URL}/loans/by-amount/${slug}`,
  };

  return (
    <>
      <Script id={`loan-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`loan-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`loan-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Loans", href: "/loans" },
              { label: "By Amount", href: "/loans/by-amount" },
              { label: `${display} Loan` },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Amount
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            <span className="text-primary">{display}</span> Loans in Canada
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            A short-term loan to cover an unexpected expense — compare {display} loan offers from vetted Canadian lenders in minutes.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated {LAST_UPDATED_DISPLAY}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
        <article className="max-w-[760px] mx-auto px-4 lg:px-8">

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
              What Is a {display} Loan?
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {intro} It's one of several{" "}
              <a href="/loans/by-amount" className="text-primary font-semibold underline underline-offset-2">
                loan amounts we match
              </a>
              , from $300 up to $5,000.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Who a {display} Loan Is For
            </h2>
            <ul className="flex flex-col gap-3">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Eligibility Requirements
            </h2>
            <ul className="flex flex-col gap-3">
              {ELIGIBILITY.map(({ text, href }) => (
                <li key={text} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2 decoration-muted-foreground/40 transition-colors">
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* How much will it cost */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
              How Much Will a {display} Loan Cost?
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-5">
              APRs across our lender network range from 5.99% to 34.99%, depending on the lender, your credit profile, and provincial regulations, in compliance with Canada's federal criminal rate of interest. Here's an illustrative example at a representative rate:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-card">
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Term</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">APR</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Est. Monthly Payment</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Est. Total Repayable</th>
                  </tr>
                </thead>
                <tbody>
                  {repaymentExamples.map((row) => (
                    <tr key={row.term} className="border-t border-border bg-background">
                      <td className="text-[0.875rem] font-semibold text-foreground px-4 py-3">{row.term}</td>
                      <td className="text-[0.875rem] text-muted-foreground px-4 py-3">{row.apr}</td>
                      <td className="text-[0.875rem] text-muted-foreground px-4 py-3">{row.monthly}</td>
                      <td className="text-[0.875rem] text-muted-foreground px-4 py-3">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[0.775rem] text-muted-foreground/80 leading-relaxed mt-3">
              Illustrative example only — your actual rate, term, and payment depend on the lender and your credit profile.
            </p>
          </div>

          {/* Pros and cons */}
          <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">
                Pros
              </h2>
              <ul className="flex flex-col gap-3">
                {PROS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-muted-foreground leading-relaxed">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">
                Cons
              </h2>
              <ul className="flex flex-col gap-3">
                {cons.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-muted-foreground leading-relaxed">
                    <XCircle size={16} className="text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alternatives */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Alternatives to a {display} Loan
            </h2>
            <div className="flex flex-col gap-4">
              {alternatives.map(({ title, description }) => (
                <div key={title} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-[0.9rem] font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-[0.825rem] text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to apply */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-9">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-6 text-center">
              How to Get Your {display}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STEP_ICONS.map((Icon, i) => {
                const step = [
                  { title: "Apply in 2 minutes", description: `Tell us you need ${display} and a bit about your situation. No paperwork.` },
                  { title: "Compare offers",     description: "See real offers from vetted lenders, matched to your credit profile." },
                  { title: "Get funded",         description: "Accept an offer and funds typically land within 24 hours." },
                ][i];
                return (
                  <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center mb-4 ring-[6px] ring-primary/5">
                      <Icon size={20} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-primary mb-2">
                      Step {i + 1}
                    </span>
                    <h3 className="font-heading font-bold text-[0.95rem] text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[0.825rem] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <RelatedClusters exclude="/loans/by-amount" />

          {/* Sources */}
          <div className="pt-8 border-t border-border text-center">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Sources
            </h2>
            <ul className="flex flex-col items-center gap-1.5">
              {SOURCES.map(({ title, href }) => (
                <li key={href} className="text-[0.8rem] text-muted-foreground">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2 decoration-muted-foreground/40 transition-colors">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related + back to hub */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <a
              href="/loans/by-amount"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other loan amounts
            </a>
            <a
              href="/resources"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              More guides &amp; tools
              <ArrowUpRight size={14} />
            </a>
          </div>

        </article>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-black text-[1.6rem] lg:text-[2rem] text-foreground leading-[1.1] tracking-tight mb-8 text-center">
            <span className="text-primary">{display} Loan</span> FAQ
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
