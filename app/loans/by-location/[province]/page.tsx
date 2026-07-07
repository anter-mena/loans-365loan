import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CheckCircle2, Landmark, ClipboardList, SlidersHorizontal, Banknote, ArrowUpRight, MapPin } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { PROVINCES, getProvince } from "@/lib/loans/locations";
import { ELIGIBILITY, LOCATION_ADVANTAGES, LOCATION_SOURCES, GENERIC_LOAN_FAQS } from "@/lib/loans/content";

const STEP_ICONS = [ClipboardList, SlidersHorizontal, Banknote];
const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return PROVINCES.map((p) => ({ province: p.slug }));
}

type Params = Promise<{ province: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { province: slug } = await params;
  const province = getProvince(slug);
  if (!province) return {};

  return buildMetadata({
    title: `Personal Loans in ${province.name} | 365loan`,
    description: `Compare personal loan lenders serving ${province.communityCount} communities in ${province.name}, including ${province.majorCities.slice(0, 2).join(" and ")}. Fast online approval, $300-$5,000.`,
    path: `/loans/by-location/${province.slug}`,
    keywords: [`personal loans ${province.name.toLowerCase()}`, `loans in ${province.majorCities[0].toLowerCase()}`, "online loans canada"],
  });
}

export default async function ProvinceLoanPage({ params }: { params: Params }) {
  const { province: slug } = await params;
  const province = getProvince(slug);
  if (!province) notFound();

  const { name, communityCount, majorCities, intro, regulationNote, hasPaydaySpecificLaw, faqs: uniqueFaqs } = province;
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "By Location", path: "/loans/by-location" },
    { name, path: `/loans/by-location/${slug}` },
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
    headline: `Personal Loans in ${name}`,
    description: intro,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@type": "Organization", name: "365loan" },
    publisher: { "@type": "Organization", name: "365loan", logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` } },
    mainEntityOfPage: `${BASE_URL}/loans/by-location/${slug}`,
  };

  return (
    <>
      <Script id={`province-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`province-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`province-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
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
              { label: "By Location", href: "/loans/by-location" },
              { label: name },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Location
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Personal Loans in <span className="text-primary">{name}</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            Compare local lenders serving {communityCount} communities.
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
              Personal Loans Across {name}
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Major cities */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Communities We Serve
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {majorCities.map((city) => (
                <span key={city} className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-[0.825rem] font-semibold text-foreground">
                  <MapPin size={13} className="text-primary" />
                  {city}
                </span>
              ))}
              <span className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 text-[0.825rem] font-semibold text-primary">
                +{communityCount.replace("+", "")} more communities
              </span>
            </div>
          </div>

          {/* Regulation */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
              Lending Regulation in {name}
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              {regulationNote}
            </p>
            {!hasPaydaySpecificLaw && (
              <p className="text-[0.8rem] text-muted-foreground/80 leading-relaxed mt-3">
                Note: without payday-loan-specific legislation, this doesn't affect personal installment loans, which are governed by the federal criminal rate of interest across all of Canada.
              </p>
            )}
          </div>

          {/* Why location matters less online */}
          <div className="mb-14">
            <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
              Applying Online from {name}
            </h2>
            <ul className="flex flex-col gap-3">
              {LOCATION_ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                  <Landmark size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
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
              How to Apply in {name}
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
          <div className="mt-14 pt-8 border-t border-border text-center">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Sources
            </h2>
            <ul className="flex flex-col items-center gap-1.5">
              {LOCATION_SOURCES.map(({ title, href }) => (
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
              href="/loans/by-location"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other provinces &amp; territories
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
            Personal Loans in <span className="text-primary">{name}</span> FAQ
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
