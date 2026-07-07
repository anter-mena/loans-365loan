import type { Metadata } from "next";
import Script from "next/script";
import { Lock, ShieldCheck, Ban } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | 365loan",
  description: "Learn how 365loan collects, uses, and protects your personal information in compliance with Canadian privacy law (PIPEDA), and how our lender network handles your data.",
  path: "/privacy-policy",
  keywords: ["365loan privacy policy", "data protection 365loan", "PIPEDA compliance canada"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
]);

const BADGES = [
  { icon: Lock,        label: "256-bit Encryption" },
  { icon: ShieldCheck,  label: "PIPEDA Compliant" },
  { icon: Ban,          label: "No Data Selling" },
];

type Block = { type: "p"; text: string } | { type: "list"; items: string[] };

const SECTIONS: { number: string; title: string; body: Block[] }[] = [
  {
    number: "01",
    title: "Data Protection Measures",
    body: [
      { type: "p", text: "Our commitment to data security includes implementing advanced encryption protocols that meet financial industry standards. We use SSL technology to protect the transmission of sensitive information, including financial and personal details." },
      { type: "p", text: "We regularly review and enhance our security infrastructure to maintain the highest level of data protection for our users." },
    ],
  },
  {
    number: "02",
    title: "Restricted Internal Information Access",
    body: [
      { type: "p", text: "Only designated personnel with appropriate authorization can access customer information. Each team member with data access privileges must complete thorough background screening before receiving clearance." },
      { type: "p", text: "This controlled access framework ensures that information is handled exclusively for legitimate business purposes, including:" },
      { type: "list", items: ["Processing applications", "Service improvement", "Credit assessment", "Customer support"] },
    ],
  },
  {
    number: "03",
    title: "Third-Party Information Disclosure",
    body: [
      { type: "p", text: "To process your application, maintain your account, and provide our services effectively, we may disclose your information to select external partners. These may include:" },
      { type: "list", items: ["Lending institutions", "Credit reporting agencies", "Collection agencies", "Marketing service providers", "Other business partners relevant to our operations"] },
      { type: "p", text: "All external parties are contractually required to maintain data confidentiality and may only use your information for authorized purposes related to your application or associated services." },
    ],
  },
  {
    number: "04",
    title: "Multi-Lender Application Network",
    body: [
      { type: "p", text: "Applications submitted through our partner network are distributed to various lending institutions and brokerage services to maximize your approval probability. Information processed through this network may be stored in jurisdictions outside your province." },
      { type: "p", text: "Network participants and their affiliates may contact you via email, phone, or text messaging (carrier rates apply). You retain the right to stop these communications by responding HELP for support or STOP to cease messages." },
    ],
  },
  {
    number: "05",
    title: "Phone and Text Message Authorization",
    body: [
      { type: "p", text: "Submitting your phone number grants us permission to contact you via voice calls and text messages. Communications may encompass:" },
      { type: "list", items: ["Transaction confirmations", "Special offers", "Account notifications", "Feedback requests", "Other information relevant to your application or account status"] },
      { type: "p", text: "You may withdraw this consent at any time by following the opt-out instructions included in text messages or by contacting us directly using the details provided below." },
    ],
  },
  {
    number: "06",
    title: "Email Communication Authorization",
    body: [
      { type: "p", text: "Providing your email address constitutes consent to receive electronic correspondence from us. Email communications may include:" },
      { type: "list", items: ["Transaction-related messages", "Promotional content", "Account information", "Survey invitations", "Other material relevant to your relationship with our company"] },
      { type: "p", text: "You retain the right to revoke email consent whenever you wish. Unsubscribe options are available via links in our emails, or you can contact us directly using the information below." },
    ],
  },
  {
    number: "07",
    title: "Information Retention Period",
    body: [
      { type: "p", text: "Personal data will be maintained for the duration necessary to achieve the objectives described in this policy and to comply with legal and regulatory requirements." },
      { type: "p", text: "If you wish to request deletion of your information, please contact us using our contact details below." },
    ],
  },
  {
    number: "08",
    title: "Website Analytics and Cookies",
    body: [
      { type: "p", text: "We may deploy cookies and similar technologies to enhance your website experience and analyze usage patterns." },
      { type: "p", text: "Additional details are available in our separate cookie policy." },
    ],
  },
];

function SectionList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 my-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-muted-foreground leading-relaxed">
          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script id="privacy-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Legal
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Your Privacy Matters
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[560px] leading-relaxed mb-7">
            We recognize the importance of protecting your personal data and appreciate the trust you place in us. This policy explains our approach to collecting, using, and protecting the information you provide when using our services. Your use of our platform constitutes acceptance of the privacy practices described below.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-muted-foreground shadow-sm"
              >
                <Icon size={13} className="text-primary" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-24">
        <div className="max-w-[760px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {SECTIONS.map(({ number, title, body }) => (
              <div key={number} className="flex gap-5 lg:gap-7">
                <span className="shrink-0 font-heading font-black text-[1.5rem] lg:text-[1.75rem] text-primary/30 leading-none pt-0.5">
                  {number}
                </span>
                <div className="flex-1 pb-10 border-b border-border last:border-b-0 last:pb-0">
                  <h2 className="font-heading font-bold text-[1.1rem] lg:text-[1.2rem] text-foreground mb-3">
                    {title}
                  </h2>
                  {body.map((block, i) =>
                    block.type === "p" ? (
                      <p key={i} className="text-[0.875rem] text-muted-foreground leading-relaxed mb-3 last:mb-0">
                        {block.text}
                      </p>
                    ) : (
                      <SectionList key={i} items={block.items} />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Rights + Contact */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-9 mt-10">
            <h2 className="font-heading font-bold text-[1.1rem] lg:text-[1.2rem] text-foreground mb-3">
              Your Privacy Rights
            </h2>
            <p className="text-[0.875rem] text-muted-foreground leading-relaxed mb-6">
              You retain the right to review, correct, or request deletion of personal information we hold about you. To exercise these rights or if you have questions regarding your data, please contact us using the information below.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-1">
                  Contact Us
                </p>
                <a
                  href="mailto:privacy@365loan.ca"
                  className="text-[0.95rem] font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  privacy@365loan.ca
                </a>
              </div>
              <p className="text-[0.8rem] text-muted-foreground">
                Last Updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
