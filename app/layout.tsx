import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LayoutNavbar } from "@/components/layout/layout-navbar";
import { LayoutFooter } from "@/components/layout/layout-footer";

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
  title: "365loan | Find the Best Personal Loans in Canada",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://365loan.ca",
    title: "365loan - Compare Personal Loans in Canada",
    description: "Find and compare the best personal loans in Canada. Get matched with lenders based on your credit score, amount, and purpose.",
    siteName: "365loan",
  },
  robots: {
    index: true,
    follow: true,
  }
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
      </body>
    </html>
  );
}
