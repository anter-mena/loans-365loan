import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { Compass, ArrowUpRight } from "lucide-react";
import "./globals.css";

const APPLY_URL = "/application-form";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page Not Found | 365loan",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSora.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white dark:bg-[#0d1422] font-sans relative">
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 py-24 text-center">

          {/* Dot-grid pattern */}
          <div className="absolute inset-0 bg-dot-grid" />

          {/* Background glow, matching the site's other headers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
            <div className="absolute bottom-0 left-0 w-[45vw] h-[45vh] bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklch,var(--color-navy)_4%,transparent),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklch,var(--color-primary)_4%,transparent),transparent_65%)]" />
          </div>

          {/* Watermark numeral */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-[11rem] lg:text-[16rem] leading-none tracking-tight text-foreground/[0.04] select-none pointer-events-none">
            404
          </span>

          <div className="relative z-10 flex flex-col items-center max-w-[520px]">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Compass size={24} className="text-primary" strokeWidth={1.75} />
            </div>

            <div className="flex flex-col items-center gap-1.5 mb-5">
              <div className="w-7 h-px bg-foreground/40" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                Error 404
              </span>
            </div>

            <h1 className="font-heading font-black text-[2rem] lg:text-[2.75rem] text-foreground leading-[1.1] tracking-tight mb-4">
              This Page Took a<br />
              <span className="text-primary underline decoration-wavy decoration-primary/50 underline-offset-[6px]">Wrong</span> Turn.
            </h1>

            <p className="text-[0.925rem] text-muted-foreground leading-relaxed mb-9">
              The page you're looking for doesn't exist or may have moved. Let's get you back on track to finding your best loan rate.
            </p>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              <Link
                href="/"
                className="bg-ink dark:bg-white hover:opacity-90 text-white dark:text-ink font-bold text-[14px] h-11 pl-6 pr-2 rounded-full inline-flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                Back to Home
                <div className="bg-white text-ink dark:bg-neutral-100 dark:text-primary w-7 h-7 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
                  <ArrowUpRight size={15} />
                </div>
              </Link>

              <a
                href={APPLY_URL}
                className="text-[13.5px] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
              >
                Check your rate instead
              </a>
            </div>

            <img src="/logo.svg" alt="365loan" className="h-10 w-auto opacity-[0.07] dark:hidden mt-16" />
            <img src="/logo2.svg" alt="365loan" className="h-10 w-auto opacity-[0.12] hidden dark:block mt-16" />
          </div>
        </section>
      </body>
    </html>
  );
}
