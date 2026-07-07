import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { FaqAccordion } from "@/components/tools/faq-accordion";
import { CtaSection } from "@/components/landing/cta-section";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { FAQ_CATEGORIES } from "@/lib/faq";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions | 365loan",
  description: "Answers to common questions about personal loans in Canada — eligibility, rates, application process, repayment, and more.",
  path: "/resources/faq",
  keywords: ["personal loan faq canada", "loan questions canada", "how do personal loans work"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "FAQ", path: "/resources/faq" },
]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <Script id="faq-page-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="faq-page-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "FAQ" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              FAQ
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed mb-5">
            Everything you need to know about applying, eligibility, rates, and repayment — organized by topic.
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            Reviewed by the 365loan Editorial Team · Last updated July 7, 2026
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <FaqAccordion categories={FAQ_CATEGORIES} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
