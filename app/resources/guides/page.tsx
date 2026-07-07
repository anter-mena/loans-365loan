import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { GUIDES, GUIDE_CATEGORY_LABELS, type GuideCategory } from "@/lib/guides";

export const metadata: Metadata = buildMetadata({
  title: "Loan Guides | 365loan",
  description: "In-depth guides on personal loans in Canada — eligibility, credit, provincial regulations, and step-by-step help for every borrowing situation.",
  path: "/resources/guides",
  keywords: ["personal loan guides canada", "how to get a loan canada", "credit score guide", "provincial lending regulations canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Guides", path: "/resources/guides" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: GUIDES.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: g.title,
    url: `${BASE_URL}/resources/guides/${g.slug}`,
  })),
};

const CATEGORY_ORDER: GuideCategory[] = ["guide", "how-to", "regulation", "seasonal"];

export default function GuidesHubPage() {
  return (
    <>
      <Script id="guides-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="guides-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Guides" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Guides
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Loan <span className="text-primary">Guides</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed mb-5">
            Straightforward guidance on credit, eligibility, applications, and the rules that govern lending in your province.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* Guides by category */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8 flex flex-col gap-16">
          {CATEGORY_ORDER.map((category) => {
            const items = GUIDES.filter((g) => g.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-heading font-bold text-[1.15rem] text-foreground whitespace-nowrap">
                    {GUIDE_CATEGORY_LABELS[category]}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-5">
                  {items.map((g) => (
                    <a
                      key={g.slug}
                      href={`/resources/guides/${g.slug}`}
                      className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <BookOpen size={19} className="text-primary" strokeWidth={1.75} />
                      </div>
                      <h3 className="font-heading font-black text-[1.05rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                        {g.title}
                        <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </h3>
                      <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                        {g.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
