import Link from "next/link";

const APPLY_URL = "https://cmi.rocks/go/6a0768c8e9dee?affiliate_sub1=365loan";

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
    <footer className="bg-navy border-t border-white/5">

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-flex">
              <span className="font-heading font-black text-[1.4rem] text-white tracking-tight">
                365<span className="text-primary">loan</span>
              </span>
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

          {/* Loans */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
              Loans
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LINKS.loans.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.825rem] text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LINKS.resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.825rem] text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LINKS.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.825rem] text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-5">
          <p className="text-[0.72rem] text-white/25 leading-relaxed max-w-[820px]">
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
            <a href="#" className="text-[0.75rem] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[0.75rem] text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
