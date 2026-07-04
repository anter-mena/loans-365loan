import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { ApplyForm } from "@/components/application-form/application-form";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Apply for a Personal Loan Online | 365loan Canada",
  description: "Start your loan application with 365loan. Compare offers from vetted Canadian lenders and get matched with your best rate in minutes.",
  path: "/application-form",
  keywords: ["apply for a loan online canada", "365loan application", "instant loan application canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Apply", path: "/application-form" },
]);

export default function ApplyPage() {
  return (
    <>
      <Script id="apply-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>

      {/* Header */}
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Apply Now
            </span>
          </div>
          <h1 className="font-heading font-black text-[2rem] lg:text-[2.75rem] text-foreground leading-[1.1] tracking-tight mb-4">
            Let's Find Your<br />Best Loan Rate.
          </h1>
          <p className="text-[0.925rem] text-muted-foreground max-w-[440px] leading-relaxed">
            Fill out the quick form below and we'll match you with vetted Canadian lenders in as little as 2 minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-muted/50 bg-dot-grid pt-14 pb-24 lg:pt-16 lg:pb-32">
        <div className="max-w-[560px] mx-auto px-4 lg:px-8">
          <Suspense fallback={<div className="min-h-112.5" />}>
            <ApplyForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
