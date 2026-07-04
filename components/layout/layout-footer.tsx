import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const APPLY_URL = "/application-form";

const LINKS = {
  loans: [
    { label: "By Amount",       href: "#" },
    { label: "By Purpose",      href: "#" },
    { label: "By Credit Score", href: "#" },
    { label: "By Type",         href: "#" },
    { label: "By Location",     href: "#" },
  ],
  resources: [
    { label: "Guides",      href: "#" },
    { label: "Comparisons", href: "#" },
    { label: "Tools",       href: "#" },
    { label: "FAQ",         href: "#faq" },
    { label: "Blog",        href: "#blog" },
  ],
  company: [
    { label: "About Us", href: "/aboutus" },
    { label: "Contact",  href: "/contact" },
  ],
};

export function LayoutFooter() {
  return (
    <footer className="bg-navy relative overflow-hidden">

      {/* Dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main footer */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left gap-10 lg:gap-12">

          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 max-w-65">
            <Link href="/" className="inline-flex">
              <img src="/logoWhite.svg" alt="365loan" className="h-8 w-auto" />
            </Link>
            <p className="text-[0.825rem] text-white/45 leading-relaxed max-w-[220px]">
              Canada's personal loan comparison platform. Find your best rate in minutes.
            </p>
            <a
              href={APPLY_URL}
              className="inline-flex w-fit mt-1 text-[12.5px] font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Apply Now →
            </a>
          </div>

          {/* Link columns, clustered to the right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">

            {/* Loans */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
              <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
                Loans
              </h4>
              <ul className="flex flex-col gap-2.5">
                {LINKS.loans.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group inline-flex items-center gap-1 text-[0.825rem] text-white/55 hover:text-white transition-colors">
                      <span className="underline-offset-4 decoration-white/40 group-hover:underline">{l.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
              <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5">
                {LINKS.resources.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group inline-flex items-center gap-1 text-[0.825rem] text-white/55 hover:text-white transition-colors">
                      <span className="underline-offset-4 decoration-white/40 group-hover:underline">{l.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center text-center md:items-start md:text-left gap-4">
              <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                {LINKS.company.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group inline-flex items-center gap-1 text-[0.825rem] text-white/55 hover:text-white transition-colors">
                      <span className="underline-offset-4 decoration-white/40 group-hover:underline">{l.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-5 flex justify-center">
          <p className="text-[0.72rem] text-white/25 leading-relaxed max-w-[820px] text-center">
            365loan is a loan comparison platform, not a lender. We connect Canadian consumers with third-party lenders. Loan approval, rates, and terms are determined solely by the lender and depend on individual creditworthiness. APR ranges from 5.99% to 46.96%. Representative example: $1,500 loan over 12 months at 29.9% APR — total repayable $1,786.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.75rem] text-white/30">
            © {new Date().getFullYear()} 365loan. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy-policy" className="text-[0.75rem] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms-of-use" className="text-[0.75rem] text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
