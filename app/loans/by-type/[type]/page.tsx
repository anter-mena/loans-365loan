import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertCircle, ClipboardList, SlidersHorizontal, Banknote, ArrowUpRight, Target, Gauge } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { LOAN_TYPES, getLoanType } from "@/lib/loans/types";
import { getLoanPurpose } from "@/lib/loans/purposes";
import { GENERIC_LOAN_FAQS, SOURCES } from "@/lib/loans/content";
import { RelatedClusters } from "@/components/loans/related-clusters";

const STEP_ICONS = [ClipboardList, SlidersHorizontal, Banknote];
const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return LOAN_TYPES.map((t) => ({ type: t.slug }));
}

type Params = Promise<{ type: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { type: slug } = await params;
  const loanType = getLoanType(slug);
  if (!loanType) return {};

  return buildMetadata({
    title: `${loanType.title} in Canada | 365loan`,
    description: loanType.description,
    path: `/loans/by-type/${loanType.slug}`,
    keywords: [`${loanType.title.toLowerCase()} canada`, "personal loan canada", `${loanType.title.toLowerCase()} online`],
  });
}

export default async function LoanTypePage({ params }: { params: Params }) {
  const { type: slug } = await params;
  const loanType = getLoanType(slug);
  if (!loanType) notFound();

  const { title, description, intro, whoItsFor, incomeNotes, considerations, faqs: uniqueFaqs, comparisonRows, comparisonLabel, relatedPurposeSlug, isPillar } = loanType;
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];
  const relatedPurpose = relatedPurposeSlug ? getLoanPurpose(relatedPurposeSlug) : undefined;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "By Type", path: "/loans/by-type" },
    { name: title, path: `/loans/by-type/${slug}` },
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
    headline: `${title} in Canada`,
    description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@type": "Organization", name: "365loan" },
    publisher: { "@type": "Organization", name: "365loan", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
    mainEntityOfPage: `${BASE_URL}/loans/by-type/${slug}`,
  };

  return (
    <>
      <Script id={`type-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`type-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`type-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
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
              { label: "By Type", href: "/loans/by-type" },
              { label: title },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Type
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            {title} <span className="text-primary">in Canada</span>
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
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
              What Are {title}?
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {intro}
              {relatedPurpose && (
                <>
                  {" "}Wondering whether this fits your specific situation? See our{" "}
                  <a href={`/loans/by-purpose/${relatedPurpose.slug}`} className="text-primary font-semibold underline underline-offset-2">
                    {relatedPurpose.title.toLowerCase()} guide
                  </a>{" "}
                  for a more situational look.
                </>
              )}
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Who It's For
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
              What You'll Need
            </h2>
            <ul className="flex flex-col gap-3">
              {incomeNotes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison table, where relevant */}
          {comparisonRows && (
            <div className="mb-14">
              <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
                {comparisonLabel}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-card">
                      <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Aspect</th>
                      <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">{title}</th>
                      <th scope="col" className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground px-4 py-3">Alternative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.aspect} className="border-t border-border bg-background">
                        <td className="text-[0.875rem] font-semibold text-foreground px-4 py-3">{row.aspect}</td>
                        <td className="text-[0.8rem] text-muted-foreground px-4 py-3">{row.thisType}</td>
                        <td className="text-[0.8rem] text-muted-foreground px-4 py-3">{row.alternative}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Things to consider */}
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

          {!isPillar && <RelatedClusters exclude="/loans/by-type" />}

          {/* Pillar links, personal-loans page only */}
          {isPillar && (
            <div className="mb-14">
              <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
                Explore Personal Loans in Depth
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/loans/by-amount", icon: Banknote, title: "By Amount", description: "$300 to $5,000, sized to what you need." },
                  { href: "/loans/by-purpose", icon: Target, title: "By Purpose", description: "Debt consolidation, emergencies, and more." },
                  { href: "/loans/by-credit-score", icon: Gauge, title: "By Credit Score", description: "Rates and lenders matched to your range." },
                ].map(({ href, icon: Icon, title: cardTitle, description: cardDesc }) => (
                  <a key={href} href={href} className="bg-card border border-border hover:border-primary/30 rounded-xl p-5 transition-colors">
                    <Icon size={18} className="text-primary mb-2.5" strokeWidth={1.75} />
                    <h3 className="text-[0.9rem] font-semibold text-foreground mb-1">{cardTitle}</h3>
                    <p className="text-[0.8rem] text-muted-foreground leading-relaxed">{cardDesc}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* How to apply */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-9">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-6 text-center">
              How to Apply for {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {STEP_ICONS.map((Icon, i) => {
                const step = [
                  { title: "Apply in 2 minutes", description: "Tell us a bit about your situation. No paperwork required upfront." },
                  { title: "Compare offers",     description: "See real offers from vetted lenders, matched to your profile." },
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

          {/* Sources */}
          <div className="pt-8 border-t border-border text-center">
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
              href="/loans/by-type"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other loan types
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
            <span className="text-primary">{title}</span> FAQ
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
