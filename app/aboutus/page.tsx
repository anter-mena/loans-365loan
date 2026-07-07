import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { ShieldCheck, Lock, Zap, Users, Eye, Scale, Headphones } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { cn } from "@/lib/utils";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About 365loan | Canada's Personal Loan Comparison Platform",
  description: "Learn how 365loan connects Canadians with vetted lenders to find better personal loan rates — fast, transparent, and free to use.",
  path: "/aboutus",
  keywords: ["about 365loan", "canadian loan comparison company", "365loan mission", "who is 365loan"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
]);

const DIFFERENTIATORS = [
  { icon: ShieldCheck, title: "Licensed, vetted lenders only",         description: "Every partner in our network is a licensed Canadian lender." },
  { icon: Lock,        title: "Soft credit check",                     description: "Checking your rate never impacts your credit score." },
  { icon: Zap,         title: "Offers in seconds",                     description: "One application, matched with offers almost instantly." },
  { icon: Users,       title: "Real human support",                    description: "A support team you can actually talk to, not just a bot." },
];

const STATS = [
  { value: "50,000+", label: "Canadians Served" },
  { value: "500+",    label: "Lending Partners" },
  { value: "$120M+",  label: "Funded to Date" },
  { value: "4.9/5",   label: "Average Rating" },
];

const VALUES = [
  { number: "01", icon: Eye,         title: "Transparency",       description: "Clear rates and terms upfront — no fine print designed to confuse you." },
  { number: "02", icon: Lock,        title: "Security First",     description: "Your data is protected with bank-level 256-bit encryption at every step." },
  { number: "03", icon: Zap,         title: "Speed & Simplicity", description: "A 2-minute application that respects your time, not a stack of paperwork." },
  { number: "04", icon: Users,       title: "Financial Inclusion",description: "All credit profiles are welcome — we find options for every situation." },
  { number: "05", icon: Scale,       title: "Independence",       description: "We're a comparison platform, not a lender — our only job is finding your best fit." },
  { number: "06", icon: Headphones,  title: "Human Support",      description: "Real people ready to help if you have questions along the way." },
];

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-5 left-5 w-4 h-4 border-t border-l border-foreground/20 pointer-events-none" />
      <span className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-foreground/20 pointer-events-none" />
    </>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <Script id="aboutus-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613316806864-86d8e77de03a?fm=jpg&q=70&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Toronto financial district skyline"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
        <div className="relative z-10 max-w-[760px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-white/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
              About 365loan
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3.25rem] text-white leading-[1.1] tracking-tight mb-5">
            Helping Canadians Borrow<br />
            <span className="text-primary">Smarter</span>, Not Harder.
          </h1>
          <p className="text-[0.95rem] text-white/70 max-w-[520px] leading-relaxed">
            We built 365loan to cut through the noise — comparing hundreds of trusted lenders in seconds so you can find a rate that actually fits your life.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="flex flex-col gap-1.5 mb-5">
              <div className="w-7 h-px bg-foreground/40" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                Our Mission
              </span>
            </div>
            <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.4rem] text-foreground leading-[1.15] tracking-tight mb-5">
              Loan shopping shouldn't feel like a <span className="text-primary">second job</span>.
            </h2>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
              Comparing personal loans in Canada used to mean filling out the same form a dozen times, guessing at your odds, and risking a hard credit check just to see a rate. We thought that was broken.
            </p>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              365loan matches you with vetted Canadian lenders through one simple application, so you can compare real offers side by side and choose what actually works for you.
            </p>
          </div>

          <div className="grid grid-cols-2 border border-border divide-x divide-y divide-border rounded-2xl overflow-hidden bg-card">
            {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center gap-2 px-5 py-7">
                <Icon size={20} className="text-primary opacity-85" strokeWidth={1.75} />
                <h3 className="text-[0.85rem] font-bold text-foreground">{title}</h3>
                <p className="text-[0.775rem] text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-14 lg:py-16">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1.5">
                <span className="font-heading font-black text-[2rem] lg:text-[2.5rem] text-white leading-none tracking-tight">
                  {value}
                </span>
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex flex-col items-center gap-1.5 mb-5">
              <div className="w-7 h-px bg-foreground/40" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                What We Stand For
              </span>
            </div>
            <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.6rem] text-foreground leading-[1.1] tracking-tight mb-4">
              The Principles Behind <span className="text-primary">Every Match</span>
            </h2>
            <p className="text-[0.9rem] text-muted-foreground max-w-[460px] leading-relaxed">
              Everything we build comes back to one question: does this make borrowing easier and fairer for Canadians?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={cn(
                  "relative p-8 lg:p-10",
                  i % 3 !== 2 && "md:border-r border-border",
                  i < 3 && "md:border-b border-border",
                  i < VALUES.length - 1 && "max-md:border-b border-border",
                )}
              >
                <CornerBrackets />

                <Icon size={112} strokeWidth={1.25} className="absolute -top-2 right-4 text-foreground/8 blur-[3.5px] pointer-events-none" />

                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-primary" strokeWidth={1.75} />
                </div>

                <h3 className="font-semibold text-[0.975rem] text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <a
            href="/loans"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
          >
            Browse loans
          </a>
          <a
            href="/resources"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
          >
            Guides &amp; tools
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
          >
            Contact us
          </a>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
