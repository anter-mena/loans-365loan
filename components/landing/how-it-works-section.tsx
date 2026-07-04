import { ArrowUpRight, ClipboardList, SlidersHorizontal, Banknote } from "lucide-react";

const APPLY_URL = "/application-form";

const STEPS = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Quick Application",
    description: "2-minute form. No paperwork, no hard check.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Compare Offers",
    description: "Matched with top Canadian lenders instantly.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Get Your Funds",
    description: "Funds deposited to your bank in 24h.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Simple Process
            </span>
          </div>
          <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.6rem] text-foreground leading-[1.1] tracking-tight mb-4">
            How to Get a Personal Loan<br />
            in <span className="text-primary">3 Easy Steps</span>
          </h2>
          <p className="text-[0.9rem] text-muted-foreground max-w-[460px] leading-relaxed">
            Our streamlined process gets Canadians from application to funding faster than traditional banks.
          </p>
        </div>

        {/* Step path */}
        <div className="relative">

          {/* Connector path — desktop */}
          {/* Horizontal line through the icon centers */}
          <div
            className="hidden md:block absolute z-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-full"
            style={{ top: "calc(1.25rem + 32px)", left: "calc(16.67% + 32px)", right: "calc(16.67% + 32px)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 lg:px-10 relative z-10">

                {/* Mobile vertical connector (top) */}
                {i > 0 && (
                  <div className="md:hidden w-[2px] h-10 bg-gradient-to-b from-primary/20 to-primary/40 rounded-full mb-0" />
                )}

                {/* Step number label */}
                <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-primary mb-3 block">
                  Step {step.number}
                </span>

                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center mb-5 ring-[6px] ring-primary/5 relative">
                  <step.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-[1.05rem] text-foreground mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-3 mt-14">
          <a
            href={APPLY_URL}
            className="bg-foreground hover:opacity-90 text-background font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:shadow-lg hover:-translate-y-[1px]"
          >
            Start My Application
            <div className="bg-background text-foreground w-8 h-8 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
              <ArrowUpRight size={16} />
            </div>
          </a>
          <p className="text-[0.78rem] text-muted-foreground">
            No hard credit check &middot; Free to use &middot; Results in seconds
          </p>
        </div>

      </div>
    </section>
  );
}
