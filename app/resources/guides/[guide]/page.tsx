import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { GUIDES, GUIDE_CATEGORY_LABELS, getGuide } from "@/lib/guides";
import { GENERIC_LOAN_FAQS } from "@/lib/loans/content";

const LAST_UPDATED_ISO = "2026-07-07";
const LAST_UPDATED_DISPLAY = "July 7, 2026";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ guide: g.slug }));
}

type Params = Promise<{ guide: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return buildMetadata({
    title: `${guide.title} | 365loan`,
    description: guide.description,
    path: `/resources/guides/${guide.slug}`,
    keywords: [guide.title.toLowerCase(), "personal loan canada", "loan guide canada"],
  });
}

export default async function GuidePage({ params }: { params: Params }) {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const { title, description, category, intro, sections, faqs: uniqueFaqs, relatedLinks } = guide;
  const faqs = [...uniqueFaqs, ...GENERIC_LOAN_FAQS];

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Guides", path: "/resources/guides" },
    { name: title, path: `/resources/guides/${slug}` },
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
    mainEntityOfPage: `${BASE_URL}/resources/guides/${slug}`,
  };

  return (
    <>
      <Script id={`guide-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`guide-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`guide-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
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
              { label: "Guides", href: "/resources/guides" },
              { label: title },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              {GUIDE_CATEGORY_LABELS[category]}
            </span>
          </div>
          <h1 className="font-heading font-black text-[2rem] lg:text-[2.75rem] text-foreground leading-[1.1] tracking-tight mb-5">
            {title}
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
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">{intro}</p>
          </div>

          {sections.map((section) => (
            <div key={section.heading} className="mb-12">
              <h2 className="font-heading font-bold text-[1.2rem] text-foreground mb-3">
                {section.heading}
              </h2>
              {section.body && (
                <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-3">
                  {section.body}
                </p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                      <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Related reading + sources */}
          {relatedLinks.length > 0 && (() => {
            const external = relatedLinks.filter((l) => l.href.startsWith("http"));
            const internal = relatedLinks.filter((l) => !l.href.startsWith("http"));
            return (
              <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {internal.length > 0 && (
                  <div>
                    <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">
                      Related Reading
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {internal.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-primary hover:underline underline-offset-2">
                            {link.label}
                            <ArrowUpRight size={13} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {external.length > 0 && (
                  <div>
                    <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">
                      Sources
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {external.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.875rem] text-muted-foreground hover:text-primary underline underline-offset-2 decoration-muted-foreground/40">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Related + back to hub */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <a
              href="/resources/guides"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              Explore other guides
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
