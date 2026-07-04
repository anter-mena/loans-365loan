import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFITS = [
  {
    number: "01",
    title: "Low Interest Rates",
    description: "Access competitive rates from multiple lenders, often lower than credit cards.",
  },
  {
    number: "02",
    title: "Safe & Secure",
    description: "Your data is protected with bank-level 256-bit SSL encryption.",
  },
  {
    number: "03",
    title: "Fast Funding",
    description: "Get approved in minutes and receive funds as soon as the next business day.",
  },
  {
    number: "04",
    title: "No Hidden Fees",
    description: "Transparent terms with no surprise charges. What you see is what you get.",
  },
  {
    number: "05",
    title: "All Credit Welcome",
    description: "Whether your credit is excellent or needs work, we have options for you.",
  },
  {
    number: "06",
    title: "Personalized Offers",
    description: "Get loan offers tailored to your specific needs and financial situation.",
  },
];

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-foreground/20 pointer-events-none" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-foreground/20 pointer-events-none" />
    </>
  );
}

export function BenefitsSection() {
  return (
    <section id="produit" className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="w-7 h-px bg-foreground/40" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                Benefits
              </span>
            </div>
            <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.6rem] text-foreground leading-[1.1] tracking-tight max-w-[500px]">
              Why Choose <span className="text-primary">365 Loans</span><br />
              for Personal Loans
            </h2>
            <p className="text-[0.9rem] text-muted-foreground max-w-[420px] leading-relaxed">
              365 Loans connects you with top lenders, so you can find the best rates without the bank runaround.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-[13.5px] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all mb-1 shrink-0"
          >
            Check your rate
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <div
              key={i}
              className={cn(
                "relative p-8 lg:p-10",
                i % 3 !== 2 && "md:border-r border-border",
                i < 3 && "md:border-b border-border",
                i < BENEFITS.length - 1 && "max-md:border-b border-border",
              )}
            >
              <CornerBrackets />

              {/* Watermark number */}
              <span className="absolute -top-2 right-4 font-heading font-black text-[7rem] leading-none text-foreground/[0.04] select-none pointer-events-none tracking-tight">
                {benefit.number}
              </span>

              <p className="font-heading font-black text-[2.75rem] lg:text-[3.25rem] text-foreground leading-none mb-5 tracking-tight">
                {benefit.number}
              </p>

              <h3 className="font-semibold text-[0.975rem] text-foreground mb-2">
                {benefit.title}
              </h3>

              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
