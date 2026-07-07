import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { PROVINCES } from "@/lib/loans/locations";

export const metadata: Metadata = buildMetadata({
  title: "Personal Loans by Province & Territory | 365loan",
  description: "Compare personal loans across every Canadian province and territory. Find local lending regulations, community coverage, and how to apply near you.",
  path: "/loans/by-location",
  keywords: ["personal loans canada by province", "loans ontario", "loans alberta", "loans british columbia", "loans quebec"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Loans", path: "/loans" },
  { name: "By Location", path: "/loans/by-location" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PROVINCES.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Personal Loans in ${p.name}`,
    url: `${BASE_URL}/loans/by-location/${p.slug}`,
  })),
};

export default function LoansByLocationPage() {
  return (
    <>
      <Script id="by-location-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="by-location-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Loans", href: "/loans" }, { label: "By Location" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Loans · By Location
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Loans by <span className="text-primary">Province &amp; Territory</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed mb-5">
            Personal loans are available online across every Canadian province and territory, though local regulations and consumer protections vary. Find your province below.
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
            Does Your Province Affect Your Loan?
          </h2>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            Personal installment loans are governed by Canada's federal criminal rate of interest, capped at 35% APR since January 2025, regardless of province. What does vary provincially is consumer protection law and payday-loan-specific regulation — Quebec, for instance, caps all consumer credit more strictly than the rest of Canada, while the three territories have no payday-loan-specific legislation at all.
          </p>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
            Since our lender network operates entirely online, your approval odds depend on your income and credit profile — not which province or territory you're applying from.
          </p>
        </div>
      </section>

      {/* Province grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-5">
            {PROVINCES.map((p) => (
              <a
                key={p.slug}
                href={`/loans/by-location/${p.slug}`}
                className="group relative w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-card border border-border hover:border-primary/30 rounded-2xl p-7 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin size={19} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-black text-[1.15rem] text-foreground mb-1.5 inline-flex items-center gap-1.5">
                  {p.name}
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  Compare local lenders serving {p.communityCount} communities.
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
