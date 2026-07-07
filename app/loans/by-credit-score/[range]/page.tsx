import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, TrendingUp, ClipboardList, SlidersHorizontal, Banknote, ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { CREDIT_SCORE_RANGES, getCreditScoreRange } from "@/lib/loans/credit-scores";
import { ELIGIBILITY, CREDIT_SCORE_SOURCES, GENERIC_LOAN_FAQS } from "@/lib/loans/content";
import { RelatedClusters } from "@/components/loans/related-clusters";

const STEP_ICONS = [ClipboardList, SlidersHorizontal, Banknote];
const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return CREDIT_SCORE_RANGES.map((r) => ({ range: r.slug }));
}

type Params = Promise<{ range: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { range: slug } = await params;
  const range = getCreditScoreRange(slug);
  if (!range) return {};

  return buildMetadata({
    title: `Credit Score ${range.rangeLabel} Loans in Canada | 365loan`,
    description: range.metaDescription,
    path: `/loans/by-credit-score/${range.slug}`,
    keywords: [`${range.rangeLabel} credit score loan`, "personal loan canada", "loans by credit score", `credit score ${range.rangeLabel} canada`],
  });
}

export default async function CreditScoreRangePage({ params }: { params: Params }) {
  const { range: slug } = await params;
  const range = getCreditScoreRange(slug);
  if (!range) notFound();

  const { rangeLabel, bandContext, intro, lenderView, aprNote, tips, faqs: uniqueFaqs, relatedSlugs, metaDescription } = range;
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];
  const relatedRanges = relatedSlugs.map((s) => getCreditScoreRange(s)).filter((r): r is NonNullable<typeof r> => Boolean(r));

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "By Credit Score", path: "/loans/by-credit-score" },
    { name: `Credit Score ${rangeLabel}`, path: `/loans/by-credit-score/${slug}` },
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
    headline: `Credit Score ${rangeLabel} Loans in Canada`,
    description: metaDescription,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@type": "Organization", name: "365loan" },
    publisher: { "@type": "Organization", name: "365loan", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
    mainEntityOfPage: `${BASE_URL}/loans/by-credit-score/${slug}`,
  };

  return (
    <>
      <Script id={`credit-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`credit-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`credit-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
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
              { label: "By Credit Score", href: "/loans/by-credit-score" },
              { label: `Credit Score ${rangeLabel}` },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Credit Score
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Credit Score <span className="text-primary">{rangeLabel}</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            Lenders for your credit level — see realistic rates, approval odds, and how to improve your score.
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
              What a {rangeLabel} Score Means for Your Loan
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              A {rangeLabel} credit score sits within {bandContext}. {intro} See our full{" "}
              <a href="/loans/by-credit-score" className="text-primary font-semibold underline underline-offset-2">
                credit score ranges guide
              </a>{" "}
              to compare against other tiers.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              What Lenders See at This Score
            </h2>
            <ul className="flex flex-col gap-3">
              {lenderView.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
              Typical Rates &amp; Approval Odds
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {aprNote}
            </p>
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

          {/* Tips to improve */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Tips to Improve Your Score
            </h2>
            <ul className="flex flex-col gap-3">
              {tips.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <TrendingUp size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How to apply */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-9">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-6 text-center">
              How to Apply at This Credit Level
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STEP_ICONS.map((Icon, i) => {
                const step = [
                  { title: "Apply in 2 minutes", description: "Tell us a bit about your situation and your credit level. No paperwork." },
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

          <RelatedClusters exclude="/loans/by-credit-score" />

          {/* Related ranges */}
          {relatedRanges.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4 text-center">
                Is Your Score Close? Check These Too
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {relatedRanges.map((r) => (
                  <a
                    key={r.slug}
                    href={`/loans/by-credit-score/${r.slug}`}
                    className="inline-flex items-center gap-1.5 bg-card border border-border hover:border-primary/30 rounded-full px-5 py-2.5 text-[0.825rem] font-semibold text-foreground transition-colors"
                  >
                    Credit Score {r.rangeLabel}
                    <ArrowUpRight size={13} className="text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          <div className="mt-14 pt-8 border-t border-border text-center">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Sources
            </h2>
            <ul className="flex flex-col items-center gap-1.5">
              {CREDIT_SCORE_SOURCES.map(({ title, href }) => (
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
              href="/loans/by-credit-score"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other credit score ranges
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
            Credit Score <span className="text-primary">{rangeLabel}</span> FAQ
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
