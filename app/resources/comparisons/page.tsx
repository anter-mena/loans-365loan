import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, ArrowRightLeft } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { COMPARISONS } from "@/lib/loans/comparisons";

export const metadata: Metadata = buildMetadata({
  title: "Loan Comparisons | 365loan",
  description: "Side-by-side comparisons to help you choose the right way to borrow — personal loans vs credit cards, payday loans, lines of credit, and more.",
  path: "/resources/comparisons",
  keywords: ["personal loan vs credit card", "payday loan vs personal loan", "secured vs unsecured loan", "loan comparisons canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Comparisons", path: "/resources/comparisons" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: COMPARISONS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.title,
    url: `${BASE_URL}/resources/comparisons/${c.slug}`,
  })),
};

export default function ComparisonsHubPage() {
  return (
    <>
      <Script id="comparisons-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="comparisons-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Comparisons" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Comparisons
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Loan <span className="text-primary">Comparisons</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed mb-5">
            Side-by-side breakdowns to help you choose between borrowing options, rate structures, terms, and lenders.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* Intro content */}
      <section className="bg-muted/50 bg-dot-grid py-16 lg:py-20">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-3">
            How to Use These Comparisons
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
            Each comparison breaks down two options side by side, with a table you can scan in seconds and a plain verdict on which one usually wins for a given situation. They're meant to answer a specific question — "is X better than Y for me" — rather than serve as a full explainer on either option, so use the linked guides and loan pages within each comparison for more depth.
          </p>
        </div>
      </section>

      {/* Comparison grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5">
            {COMPARISONS.map((c) => (
              <a
                key={c.slug}
                href={`/resources/comparisons/${c.slug}`}
                className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ArrowRightLeft size={19} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-black text-[1.05rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                  {c.title}
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  {c.description}
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
