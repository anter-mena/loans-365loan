import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowUpRight, Scale } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { COMPARISONS, getComparison } from "@/lib/loans/comparisons";
import { GENERIC_LOAN_FAQS, SOURCES } from "@/lib/loans/content";

const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ comparison: c.slug }));
}

type Params = Promise<{ comparison: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { comparison: slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};

  return buildMetadata({
    title: `${comparison.title} | 365loan`,
    description: comparison.description,
    path: `/resources/comparisons/${comparison.slug}`,
    keywords: [comparison.title.toLowerCase(), `${comparison.optionA.label.toLowerCase()} vs ${comparison.optionB.label.toLowerCase()}`, "personal loan comparison canada"],
  });
}

export default async function ComparisonPage({ params }: { params: Params }) {
  const { comparison: slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const { title, description, intro, optionA, optionB, tableRows, verdict, faqs: uniqueFaqs, relatedSlugs } = comparison;
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];
  const relatedComparisons = relatedSlugs.map((s) => getComparison(s)).filter((c): c is NonNullable<typeof c> => Boolean(c));

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Comparisons", path: "/resources/comparisons" },
    { name: title, path: `/resources/comparisons/${slug}` },
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
    headline: title,
    description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@type": "Organization", name: "365loan" },
    publisher: { "@type": "Organization", name: "365loan", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
    mainEntityOfPage: `${BASE_URL}/resources/comparisons/${slug}`,
  };

  return (
    <>
      <Script id={`comparison-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`comparison-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`comparison-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
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
              { label: "Resources", href: "/resources" },
              { label: "Comparisons", href: "/resources/comparisons" },
              { label: title },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Comparisons
            </span>
          </div>
          <h1 className="font-heading font-black text-[2rem] lg:text-[2.75rem] text-foreground leading-[1.1] tracking-tight mb-5">
            {optionA.label} <span className="text-primary">vs</span> {optionB.label}
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            {description}
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
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Side by side */}
          <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[optionA, optionB].map((option) => (
              <div key={option.label} className="bg-card border border-border rounded-2xl p-6">
                <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">{option.label}</h2>
                <ul className="flex flex-col gap-3">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.875rem] text-muted-foreground leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              At a Glance
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-card">
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Aspect</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">{optionA.label}</th>
                    <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">{optionB.label}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.aspect} className="border-t border-border bg-background">
                      <td className="text-[0.875rem] font-semibold text-foreground px-4 py-3">{row.aspect}</td>
                      <td className="text-[0.8rem] text-muted-foreground px-4 py-3">{row.a}</td>
                      <td className="text-[0.8rem] text-muted-foreground px-4 py-3">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-navy rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent_65%)] pointer-events-none" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Scale size={19} className="text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-[1.1rem] text-white mb-2">The Verdict</h2>
                <p className="text-[0.875rem] text-white/70 leading-relaxed">{verdict}</p>
              </div>
            </div>
          </div>

          {/* Related comparisons + tools */}
          <div className="mt-10">
            <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4 text-center">
              Related Comparisons &amp; Tools
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/resources/tools/loan-calculator"
                className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 hover:border-primary/40 rounded-full px-5 py-2.5 text-[0.825rem] font-semibold text-primary transition-colors"
              >
                Try the loan calculator
                <ArrowUpRight size={13} />
              </a>
              {relatedComparisons.map((c) => (
                <a
                  key={c.slug}
                  href={`/resources/comparisons/${c.slug}`}
                  className="inline-flex items-center gap-1.5 bg-card border border-border hover:border-primary/30 rounded-full px-5 py-2.5 text-[0.825rem] font-semibold text-foreground transition-colors"
                >
                  {c.title}
                  <ArrowUpRight size={13} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="mt-10 pt-8 border-t border-border text-center">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Sources
            </h2>
            <ul className="flex flex-col items-center gap-1.5">
              {SOURCES.map(({ title: sourceTitle, href }) => (
                <li key={href} className="text-[0.8rem] text-muted-foreground">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2 decoration-muted-foreground/40 transition-colors">
                    {sourceTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related + back to hub */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <a
              href="/resources/comparisons"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other comparisons
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
            {title} <span className="text-primary">FAQ</span>
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
