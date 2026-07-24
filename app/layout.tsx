import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LayoutNavbar } from "@/components/layout/layout-navbar";
import { LayoutFooter } from "@/components/layout/layout-footer";
import { FloatingMessageButton } from "@/components/layout/floating-message-button";
import { CookieConsent } from "@/components/layout/cookie-consent";

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
  metadataBase: new URL("https://365loan.ca"),
  title: {
    default: "365loan | Find the Best Personal Loans in Canada",
    template: "%s",
  },
  description: "Compare personal loans, emergency loans, and bad credit loans across Canada. Find the best rates from top lenders in minutes.",
  keywords: [
    "personal loans canada",
    "bad credit loans",
    "emergency loans",
    "same day loans",
    "debt consolidation",
    "online loans canada",
    "loan comparison",
    "365loan",
  ],
  authors: [{ name: "365loan" }],
  creator: "365loan",
  alternates: {
    canonical: "https://365loan.ca",
  },
  openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_CA",
    url: "https://365loan.ca",
    title: "365loan - Compare Personal Loans in Canada",
    description: "Find and compare the best personal loans in Canada. Get matched with lenders based on your credit score, amount, and purpose.",
    siteName: "365loan",
  },
  twitter: {
    card: "summary_large_image",
    title: "365loan - Compare Personal Loans in Canada",
    description: "Find and compare the best personal loans in Canada. Get matched with lenders based on your credit score, amount, and purpose.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "365loan",
  url: "https://365loan.ca",
  logo: "https://365loan.ca/logo.svg",
  description: "365loan is a Canadian personal loan comparison platform connecting consumers with vetted third-party lenders.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "365loan",
  url: "https://365loan.ca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSora.variable} ${fontMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-V1M4BZ6MD0`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V1M4BZ6MD0');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0d1422] flex flex-col font-sans relative">
        <LayoutNavbar />
        
        <main className="flex-1 w-full">
          {children}
        </main>

        <LayoutFooter />

        <FloatingMessageButton />
        <CookieConsent />
      </body>
    </html>
  );
}
