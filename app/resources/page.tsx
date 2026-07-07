import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight, Wrench, ArrowRightLeft, BookOpen, HelpCircle, FolderTree, Sparkles, RefreshCw, MoveHorizontal } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { cn } from "@/lib/utils";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Loan Resources: Guides, Tools & Comparisons | 365loan",
  description: "Guides, tools, and comparisons to help you borrow smarter — from calculators to answers on credit scores, rates, and the loan process.",
  path: "/resources",
  keywords: ["loan calculators canada", "personal loan guides", "loan comparison tools", "credit score faq"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

const RESOURCES_ITEMLIST_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Guides", url: "https://365loan.ca/resources/guides" },
    { "@type": "ListItem", position: 2, name: "Loan Calculator", url: "https://365loan.ca/resources/tools/loan-calculator" },
    { "@type": "ListItem", position: 3, name: "Comparisons", url: "https://365loan.ca/resources/comparisons" },
    { "@type": "ListItem", position: 4, name: "FAQ", url: "https://365loan.ca/resources/faq" },
  ],
};

const FEATURED = {
  title: "All Resources",
  description: "Every guide, tool, and comparison we publish — in one browsable library.",
  href: "/resources/guides",
  icon: FolderTree,
};

const CATEGORIES = [
  { number: "01", title: "Guides",      description: "Step-by-step guides to borrowing in Canada.",             href: "/resources/guides",              icon: BookOpen },
  { number: "02", title: "Tools",       description: "Calculators and helpful tools to plan your loan.",        href: "/resources/tools/loan-calculator", icon: Wrench },
  { number: "03", title: "Comparisons", description: "Compare loans against credit cards and other options.",   href: "/resources/comparisons",          icon: ArrowRightLeft },
  { number: "04", title: "FAQ",         description: "Common questions about rates, credit, and eligibility.",  href: "/resources/faq",                  icon: HelpCircle },
];

const STRIP = [
  { icon: Sparkles,   label: "Reviewed by Our Editorial Team" },
  { icon: BookOpen,   label: "Plain-English Guides" },
  { icon: Wrench,     label: "Free Calculators" },
  { icon: RefreshCw,  label: "Cited Sources" },
];

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-foreground/20 pointer-events-none" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-foreground/20 pointer-events-none" />
    </>
  );
}

export default function ResourcesPage() {
  const FeaturedIcon = FEATURED.icon;

  return (
    <>
      <Script id="resources-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="resources-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(RESOURCES_ITEMLIST_JSONLD)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Resources
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Guides & Tools to Borrow Smarter
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            Calculators, comparisons, and straight answers to help you understand your options before you apply.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* Swipe hint, mobile only */}
      <div className="md:hidden relative z-10 flex items-center justify-center gap-1.5 pb-2">
        <MoveHorizontal size={12} className="text-muted-foreground/50" strokeWidth={2} />
        <span className="text-[10px] text-muted-foreground/50 font-medium">Swipe to see more</span>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 bg-navy border-t border-white/5">
        <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] overflow-x-auto no-scrollbar">
          <div className="flex min-w-max md:min-w-full divide-x divide-white/10">
            {STRIP.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1 md:gap-1.5 w-32 md:w-auto px-3 py-4 md:py-6 md:flex-1"
              >
                <Icon className="w-3 h-3 md:w-[15px] md:h-[15px] text-primary opacity-85" strokeWidth={1.75} />
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-white/65 text-center leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured + category grid */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">

          {/* Featured tile */}
          <a
            href={FEATURED.href}
            className="group relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-6 bg-navy rounded-2xl p-8 lg:p-10 mb-5"
          >
            <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent_65%)] pointer-events-none" />

            <div className="relative z-10 w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <FeaturedIcon size={24} className="text-primary" strokeWidth={1.75} />
            </div>
            <div className="relative z-10 flex-1">
              <h2 className="font-heading font-bold text-[1.3rem] text-white mb-1.5">
                {FEATURED.title}
              </h2>
              <p className="text-[0.9rem] text-white/55 leading-relaxed max-w-[520px]">
                {FEATURED.description}
              </p>
            </div>
            <div className="relative z-10 bg-white text-ink w-11 h-11 rounded-full flex items-center justify-center shadow-sm shrink-0 transition-transform group-hover:translate-x-1">
              <ArrowUpRight size={18} />
            </div>
          </a>

          {/* Category grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-card border border-border rounded-2xl overflow-hidden">
            {CATEGORIES.map(({ number, title, description, href, icon: Icon }, i) => (
              <a
                key={title}
                href={href}
                className={cn(
                  "group relative p-8 lg:p-10 transition-colors hover:bg-muted/50",
                  i % 2 === 0 && "sm:border-r border-border",
                  i < 2 && "sm:border-b border-border",
                  i < CATEGORIES.length - 1 && "max-sm:border-b border-border",
                )}
              >
                <CornerBrackets />

                <Icon size={72} strokeWidth={1.25} className="absolute -top-2 right-4 text-foreground/8 blur-[3.5px] pointer-events-none" />

                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={19} className="text-primary" strokeWidth={1.75} />
                </div>

                <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-primary/70 mb-2 block">
                  {number}
                </span>

                <h3 className="font-semibold text-[0.975rem] text-foreground mb-2 inline-flex items-center gap-1.5">
                  {title}
                  <ArrowUpRight size={14} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  {description}
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
