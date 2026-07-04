import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | 365loan",
  description: "The terms and conditions governing your use of 365loan's services.",
  path: "/terms-of-use",
  keywords: ["365loan terms of use", "365loan terms and conditions"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Terms of Use", path: "/terms-of-use" },
]);

const SECTIONS: { number: string; title: string; paragraphs: string[] }[] = [
  {
    number: "01",
    title: "Jurisdiction Notice",
    paragraphs: [
      "All financial transactions conducted through this platform are considered to take place at our principal place of business, regardless of the user's geographic location.",
    ],
  },
  {
    number: "02",
    title: "Important Information",
    paragraphs: [
      "Our microloans are designed to meet immediate short-term financial needs. Customers must fully repay their existing loan before being eligible for additional financing.",
    ],
  },
  {
    number: "03",
    title: "Definitions",
    paragraphs: [
      'In these Terms of Use ("Terms"), references to "Customer," "you," or "your" identify the individual applying for our services. References to "Company," "we," or "our" refer to 365loan.',
    ],
  },
  {
    number: "04",
    title: "Your Agreement to These Terms",
    paragraphs: [
      "By authorizing automatic withdrawals from your designated bank account for loan repayment, you acknowledge acceptance of these Terms. These Terms have been made accessible to you through multiple channels—including our physical location, our website at 365loan.ca, and through direct communication with our representatives—before you finalize your transaction.",
    ],
  },
  {
    number: "05",
    title: "Electronic Transaction Authorization",
    paragraphs: [
      "You consent to our use of electronic methods to collect amounts due under your loan agreement. This includes our right to resubmit collection attempts if initial efforts fail, whether for partial amounts or the full balance due, plus any applicable returned payment fees that we are legally authorized to charge.",
    ],
  },
  {
    number: "06",
    title: "Individual Dispute Resolution",
    paragraphs: [
      "To the maximum extent permitted by applicable law, you agree to resolve any dispute with us on an individual basis and waive participation in class action litigation or consolidated proceedings involving multiple claimants. If you join such proceedings, you consent to injunctive measures for your withdrawal. This provision does not limit your right to pursue individual legal remedies available to you.",
    ],
  },
  {
    number: "07",
    title: "Electronic Records",
    paragraphs: [
      "You acknowledge that digital communications, online forms, scanned documents, and facsimile transmissions carry the same legal weight as original paper documents. Your acceptance may be demonstrated through various methods, including verbal confirmation (in person or by phone), electronic signature, typed name, or other indicated acceptance methods, all creating binding obligations under these Terms.",
    ],
  },
  {
    number: "08",
    title: "Application Verification and Certification",
    paragraphs: [
      "By submitting your application electronically or by phone, you certify under penalty of perjury that all information provided is accurate and complete. You confirm that you are not currently subject to bankruptcy proceedings nor planning to declare bankruptcy.",
      "You authorize us to verify your application details through consumer reporting agencies and other appropriate verification methods. We retain the sole discretion to refuse applications based on our risk assessment following due diligence.",
      "You understand that processing requires verification of your employment status, banking information, and other relevant details. You accept sole responsibility for protecting any personal identification numbers or account identifiers issued to you.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Script id="terms-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-180✅ app/favicon.ico — already existed, working
✅ Added app/icon.svg (reused your existing favicon.svg) — modern browsers will prefer this
⚠️ public/favicon.png is only 48×48 — too small for real Android/PWA use. You'll want 192×192 and 512×512 PNG exports for a proper manifest icon set (I wired the manifest to the real 48×48 for now rather than lie about the size)
❌ No apple-icon.png (180×180) for iOS home-screen bookmarks — needs a real export, I can't fabricate the binary
❌ No Open Graph image (1200×630) — social shares currently have no preview image at all. Also needs real design/export mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Legal Document
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            Terms of Use
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-115 leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-24">
        <div className="max-w-190 mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {SECTIONS.map(({ number, title, paragraphs }) => (
              <div key={number} className="flex gap-5 lg:gap-7">
                <span className="shrink-0 font-heading font-black text-[1.5rem] lg:text-[1.75rem] text-primary/30 leading-none pt-0.5">
                  {number}
                </span>
                <div className="flex-1 pb-10 border-b border-border last:border-b-0 last:pb-0">
                  <h2 className="font-heading font-bold text-[1.1rem] lg:text-[1.2rem] text-foreground mb-3">
                    {title}
                  </h2>
                  {paragraphs.map((text, i) => (
                    <p key={i} className="text-[0.875rem] text-muted-foreground leading-relaxed mb-3 last:mb-0">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-9 mt-10">
            <h2 className="font-heading font-bold text-[1.1rem] lg:text-[1.2rem] text-foreground mb-3">
              Important Notice
            </h2>
            <p className="text-[0.875rem] text-muted-foreground leading-relaxed mb-3">
              By using 365loan's services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use. These terms constitute a legally binding agreement between you and 365loan. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-[0.875rem] text-muted-foreground leading-relaxed mb-6">
              By continuing to use 365loan's services, you confirm your acceptance of these Terms of Use and any future amendments. We recommend reviewing these terms periodically for any updates.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="font-heading font-bold text-[1rem] text-foreground mb-1">
                Questions About Our Terms?
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed mb-4">
                Our legal team is here to help clarify any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <a
                  href="mailto:legal@365loan.ca"
                  className="text-[0.95rem] font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  legal@365loan.ca
                </a>
                <p className="text-[0.8rem] text-muted-foreground">
                  Last Updated: January 16, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
