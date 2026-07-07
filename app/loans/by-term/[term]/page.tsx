import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertCircle, ClipboardList, SlidersHorizontal, Banknote, ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { REPAYMENT_TERMS, getRepaymentTerm } from "@/lib/loans/terms";
import { LOAN_AMOUNTS } from "@/lib/loans/amounts";
import { buildRepaymentByAmount } from "@/lib/loans/repayment";
import { ELIGIBILITY, GENERIC_LOAN_FAQS } from "@/lib/loans/content";

const STEP_ICONS = [ClipboardList, SlidersHorizontal, Banknote];
const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return REPAYMENT_TERMS.map((t) => ({ term: t.slug }));
}

type Params = Promise<{ term: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { term: slug } = await params;
  const term = getRepaymentTerm(slug);
  if (!term) return {};

  return buildMetadata({
    title: `${term.months}-Month Loans in Canada | 365loan`,
    description: `Compare ${term.months}-month personal loan terms in Canada. See real monthly payment and total cost examples before you apply.`,
    path: `/loans/by-term/${term.slug}`,
    keywords: [`${term.months} month loan canada`, `${term.months}-month loan`, "personal loan repayment term canada"],
  });
}

export default async function RepaymentTermPage({ params }: { params: Params }) {
  const { term: slug } = await params;
  const term = getRepaymentTerm(slug);
  if (!term) notFound();

  const { months, representativeAmounts, intro, whoItsFor, considerations, faqs: uniqueFaqs } = term;
  const termAdj = `${months}-Month`;
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];
  const repaymentRows = buildRepaymentByAmount(representativeAmounts, months);
  const linkedAmounts = representativeAmounts
    .map((value) => LOAN_AMOUNTS.find((a) => a.value === value))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "By Repayment Term", path: "/loans/by-term" },
    { name: `${termAdj} Loan`, path: `/loans/by-term/${slug}` },
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
    headline: `${termAdj} Loans in Canada`,
    description: `Compare ${months}-month personal loan terms in Canada. See real monthly payment and total cost examples before you apply.`,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@type": "Organization", name: "365loan" },
    publisher: { "@type": "Organization", name: "365loan", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
    mainEntityOfPage: `${BASE_URL}/loans/by-term/${slug}`,
  };

  return (
    <>
      <Script id={`term-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`term-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`term-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
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
              { label: "By Repayment Term", href: "/loans/by-term" },
              { label: `${termAdj} Loan` },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Repayment Term
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            <span className="text-primary">{termAdj}</span> Loans in Canada
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            Compare real monthly payment and total cost examples for a {months}-month personal loan term.
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
              What Is a {termAdj} Loan Term?
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {intro} It's one of several{" "}
              <a href="/loans/by-term" className="text-primary font-semibold underline underline-offset-2">
                repayment terms we cover
              </a>
              , from 3 to 60 months.
            </p>
          </div>

          {/* Repayment table */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
              {termAdj} Payment Examples
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-5">
              APRs across our lender network range from 5.99% to 34.99%, depending on the lender, your credit profile, and provincial regulations. Here's an illustrative example at a representative rate:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-card">
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Loan Amount</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">APR</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Est. Monthly Payment</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Est. Total Repayable</th>
                  </tr>
                </thead>
                <tbody>
                  {repaymentRows.map((row) => (
                    <tr key={row.amount} className="border-t border-border bg-background">
                      <td className="text-[0.875rem] font-semibold text-foreground px-4 py-3">{row.amount}</td>
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

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Who a {termAdj} Term Is For
            </h2>
            <ul className="flex flex-col gap-3">
              {whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Things to Consider
            </h2>
            <ul className="flex flex-col gap-3">
              {considerations.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <AlertCircle size={17} className="text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.75} />
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

          {/* How to apply */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-9">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-6 text-center">
              How to Apply for a {termAdj} Loan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STEP_ICONS.map((Icon, i) => {
                const step = [
                  { title: "Apply in 2 minutes", description: `Tell us your amount and preferred ${months}-month term. No paperwork.` },
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

          {/* Linked amounts */}
          {linkedAmounts.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4 text-center">
                See Full Details for These Amounts
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {linkedAmounts.map((a) => (
                  <a
                    key={a.slug}
                    href={`/loans/by-amount/${a.slug}`}
                    className="inline-flex items-center gap-1.5 bg-card border border-border hover:border-primary/30 rounded-full px-5 py-2.5 text-[0.825rem] font-semibold text-foreground transition-colors"
                  >
                    {a.display} Loan
                    <ArrowUpRight size={13} className="text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Related + back to hub */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <a
              href="/loans/by-term"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other repayment terms
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
            <span className="text-primary">{termAdj} Loan</span> FAQ
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
