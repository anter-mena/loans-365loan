"use client";

import { useState } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    label: "Getting Started",
    faqs: [
      {
        q: "How quickly can I get my loan?",
        a: "Most applicants receive loan offers within minutes of completing the application. Once you accept an offer, funds are typically deposited into your bank account within 24 hours, though some lenders offer same-day funding.",
      },
      {
        q: "How much can I borrow?",
        a: "Loan amounts range from $300 to $5,000, depending on your needs and qualifications. You choose the amount that works best for your situation.",
      },
      {
        q: "Do I need to be a Canadian citizen to apply?",
        a: "You must be a Canadian citizen or permanent resident, at least 18 years old (19 in some provinces), with a valid Social Insurance Number (SIN) and an active bank account in your name.",
      },
      {
        q: "Which provinces do you serve?",
        a: "We work with lenders across all Canadian provinces and territories. However, some lenders may have specific provincial restrictions based on local regulations. You'll see available offers based on your location during the application.",
      },
    ],
  },
  {
    label: "Credit & Eligibility",
    faqs: [
      {
        q: "Will checking my rate affect my credit score?",
        a: "No! We use a soft credit inquiry to check your rate, which does not impact your credit score. A hard inquiry only occurs if you choose to accept a loan offer and proceed with the application.",
      },
      {
        q: "What credit score do I need to qualify?",
        a: "We work with lenders who accept all credit types, from excellent to poor credit. Your specific offers will depend on your overall financial situation, not just your credit score.",
      },
      {
        q: "How does this work with Canadian credit bureaus?",
        a: "We work with lenders who report to Canadian credit bureaus like Equifax Canada and TransUnion Canada. Our initial rate check uses a soft inquiry that won't affect your credit score. Responsible repayment can help build your Canadian credit history.",
      },
    ],
  },
  {
    label: "Fees & Rates",
    faqs: [
      {
        q: "Are there any hidden fees?",
        a: "Absolutely not. All fees, interest rates, and terms are clearly disclosed before you accept any offer. We believe in complete transparency with our customers.",
      },
      {
        q: "Are the loan amounts in Canadian dollars?",
        a: "Yes, all loan amounts and repayments are in Canadian dollars (CAD). You can borrow between $300 and $5,000 depending on your qualifications.",
      },
    ],
  },
  {
    label: "Security & Privacy",
    faqs: [
      {
        q: "Is my personal information secure?",
        a: "Yes, we use industry-standard 256-bit SSL encryption to protect your data. Your information is never sold to third parties and is only shared with lenders to process your application.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATEGORIES.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  ),
};

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
      {/* Horizontal bar — always visible */}
      <span className="absolute w-3.5 h-px bg-foreground/60 transition-colors duration-200" />
      {/* Vertical bar — fades + rotates out when open */}
      <span
        className={cn(
          "absolute w-px h-3.5 bg-foreground/60 transition-all duration-300",
          isOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
        )}
      />
    </div>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <Script id="faq-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <div className="max-w-[760px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-14">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              FAQ
            </span>
          </div>
          <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.6rem] text-foreground leading-[1.1] tracking-tight mb-4">
            Frequently Asked Questions<br />
            About <span className="text-primary">Personal Loans</span> in Canada
          </h2>
          <p className="text-[0.9rem] text-muted-foreground max-w-[480px] leading-relaxed">
            Find answers to common questions about our loan process, rates, and requirements.
          </p>
        </div>

        {/* Categories + accordion */}
        <div className="flex flex-col gap-10">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.label}>

              {/* Category label */}
              <div className="flex items-center gap-4 mb-1">
                <span className="text-[11px] font-bold tracking-[0.13em] uppercase text-muted-foreground whitespace-nowrap">
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Questions */}
              <div className="flex flex-col">
                {cat.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  const isOpen = open === key;

                  return (
                    <div key={fi} className="border-b border-border last:border-b-0">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                      >
                        <span className="text-[0.95rem] font-semibold text-foreground">
                          {faq.q}
                        </span>
                        <PlusMinusIcon isOpen={isOpen} />
                      </button>

                      <div className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}>
                        <div className="overflow-hidden">
                          <p className="text-[0.875rem] text-muted-foreground leading-relaxed pb-5">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
