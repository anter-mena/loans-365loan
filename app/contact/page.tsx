import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { CtaSection } from "@/components/landing/cta-section";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | 365loan",
  description: "Get in touch with the 365loan team — questions about rates, lenders, or your application, we usually respond within one business day.",
  path: "/contact",
  keywords: ["contact 365loan", "365loan customer support", "365loan phone number", "365loan email"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const CONTACT_INFO = [
  { icon: Mail,  label: "Email",  value: "support@365loan.ca",                href: "mailto:support@365loan.ca" },
  { icon: Phone, label: "Phone",  value: "1-800-365-5626",                    href: "tel:+18003655626" },
  { icon: MapPin,label: "Office", value: "20 Bay Street, Toronto, ON M5J 2N8" },
  { icon: Clock, label: "Hours",  value: "Mon–Fri, 9am–6pm EST" },
];

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-foreground/20 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-foreground/20 pointer-events-none" />
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <Script id="contact-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1617759045105-241256246c4d?fm=jpg&q=70&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="People walking near downtown high-rise buildings"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
        <div className="relative z-10 max-w-[700px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-white/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
              Contact
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-white leading-[1.1] tracking-tight mb-5">
            Let's Talk About<br />Your <span className="text-primary">Next</span> Step.
          </h1>
          <p className="text-[0.95rem] text-white/70 max-w-[460px] leading-relaxed">
            Questions about rates, lenders, or your application? Our support team usually responds within one business day.
          </p>
        </div>
      </section>

      {/* Info + form */}
      <section className="bg-muted/50 pt-14 pb-24 lg:pt-16 lg:pb-32">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-10 items-start">

          {/* Info cards */}
          <div className="grid grid-cols-2 border border-border divide-x divide-y divide-border rounded-2xl overflow-hidden bg-card">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="relative h-full p-6 lg:p-7">
                  <CornerBrackets />
                  <Icon size={18} className="text-primary mb-4" strokeWidth={1.75} />
                  <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-1">
                    {label}
                  </p>
                  <p className="text-[0.875rem] font-semibold text-foreground leading-snug">
                    {value}
                  </p>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="hover:bg-muted/40 transition-colors">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          {/* Form */}
          <ContactForm />

        </div>
      </section>

      <CtaSection />
    </>
  );
}
