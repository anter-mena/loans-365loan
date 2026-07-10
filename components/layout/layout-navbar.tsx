"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Banknote,
  Target,
  Gauge,
  Layers,
  MapPin,
  Clock,
  List,
  Wrench,
  ArrowRightLeft,
  BookOpen,
  Newspaper,
  Radio,
  HelpCircle,
  FolderTree,
  Info,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const APPLY_URL = "/application-form";

const navItems = [
  {
    id: "loans",
    label: "Loans",
    icon: Banknote,
    sectionHref: "/loans",
    subItems: [
      { title: "By Amount",       desc: "$300 - $5,000 loans",                    href: "/loans/by-amount", icon: Banknote },
      { title: "By Purpose",      desc: "Debt consolidation, emergencies & more",  href: "/loans/by-purpose", icon: Target },
      { title: "By Credit Score", desc: "Find loans for your credit range",        href: "/loans/by-credit-score", icon: Gauge },
      { title: "By Type",         desc: "Personal, emergency, same-day loans",     href: "/loans/by-type", icon: Layers },
      { title: "By Location",     desc: "Loans in Canada",                         href: "/loans/by-location", icon: MapPin },
      { title: "By Term",         desc: "3 to 60 month repayment terms",           href: "/loans/by-term", icon: Clock },
      { title: "All Loan Options",desc: "Browse all available loans",              href: "/loans", icon: List },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    icon: BookOpen,
    sectionHref: "/resources",
    subItems: [
      { title: "Tools",         desc: "Calculators & helpful tools",      href: "/resources/tools/loan-calculator", icon: Wrench },
      { title: "Comparisons",   desc: "Compare borrowing options",        href: "/resources/comparisons",           icon: ArrowRightLeft },
      { title: "Guides",        desc: "Step-by-step loan guides",         href: "/resources/guides",                icon: BookOpen },
      { title: "Blog",          desc: "Rate news & borrowing tips",       href: "/blog",                            icon: Newspaper },
      { title: "News",          desc: "Loan & interest-rate updates",     href: "/news",                            icon: Radio },
      { title: "FAQ",           desc: "Common questions answered",        href: "/resources/faq",                   icon: HelpCircle },
      { title: "All Resources", desc: "Browse all tools & guides",        href: "/resources", icon: FolderTree },
    ],
  },
  { id: "about",   label: "About Us", href: "/aboutus", icon: Info },
  { id: "contact", label: "Contact",  href: "/contact", icon: Mail },
];

export function LayoutNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobile = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
    setOpenAccordion(null);
  };

  const isActive = (href?: string) =>
    !!href && href !== "#" && !href.startsWith("#") && pathname === href;

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 pt-2 md:pt-4 lg:pt-6 max-md:pb-2 pointer-events-none transition-colors duration-300",
          isScrolled && "max-md:bg-white max-md:dark:bg-[#0a0a0a] max-md:shadow-sm"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 h-[40px] lg:h-[60px] grid grid-cols-2 md:grid-cols-3 items-center">

          {/* Logo */}
          <div className="flex items-center justify-start pointer-events-auto">
            <Link href="/" className="flex items-center outline-none lg:-translate-y-1.25">
              <img src="/logo.svg" alt="365loan" className="h-9 lg:h-11 w-auto dark:hidden" />
              <img src="/logo2.svg" alt="365loan" className="h-9 lg:h-11 w-auto hidden dark:block" />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-center pointer-events-auto">
            <NavigationMenu className="border border-neutral-200/60 dark:border-white/10 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md shadow-sm rounded-full p-1">
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent rounded-full h-[36px] px-4 text-[13px] font-semibold transition-colors border-none outline-none ring-0",
                            isActive(item.sectionHref)
                              ? "text-primary bg-primary/8 hover:bg-primary/8 data-[state=open]:bg-primary/8 dark:data-[state=open]:bg-primary/15 focus:bg-primary/8"
                              : "text-neutral-800 dark:text-white hover:bg-neutral-100/80 dark:hover:bg-white/10 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-white/10 focus:bg-neutral-100 dark:focus:bg-white/10 data-[active]:bg-neutral-100 dark:data-[active]:bg-white/10"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[380px] gap-1 p-2 md:w-[450px] md:grid-cols-2 lg:w-[500px] bg-white dark:bg-[#0d1422] border border-neutral-200 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] rounded-[16px]">
                            {item.subItems.map((sub) => (
                              <li key={sub.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={sub.href}
                                    className="block select-none rounded-lg p-2 no-underline outline-none transition-colors hover:bg-neutral-50 dark:hover:bg-white/5 group"
                                  >
                                    <div className="flex items-start gap-2.5">
                                      <div className="w-8 h-8 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                                        <sub.icon size={16} />
                                      </div>
                                      <div className="flex flex-col gap-0.5 mt-0.5">
                                        <div className="text-[13px] font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors leading-none">
                                          {sub.title}
                                        </div>
                                        <p className="line-clamp-2 text-[11px] leading-[1.3] text-neutral-500 dark:text-neutral-400">
                                          {sub.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className={cn(
                          "inline-flex h-[36px] w-max items-center justify-center rounded-full px-4 py-2 text-[13px] font-semibold transition-colors outline-none",
                          isActive(item.href)
                            ? "text-primary bg-primary/8"
                            : "text-neutral-800 dark:text-white hover:bg-neutral-100/80 dark:hover:bg-white/10"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right CTA + hamburger */}
          <div className="flex items-center justify-end gap-2 lg:gap-3 pointer-events-auto">
            <a
              href={APPLY_URL}
              className="hidden md:flex bg-ink dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-ink text-[13px] font-semibold h-[32px] lg:h-[36px] items-center justify-center pl-5 pr-1.5 rounded-full shadow-sm hover:shadow-md transition-all gap-2 duration-300"
            >
              Apply Now
              <div className="bg-white text-ink dark:bg-neutral-100 dark:text-primary w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center shadow-sm">
                <ArrowUpRight size="1.125rem" />
              </div>
            </a>

            <button
              className="md:hidden p-1 flex items-center justify-center text-foreground"
              onClick={openMobile}
              aria-label="Open menu"
            >
              <Menu size="1.3rem" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      {/* Backdrop */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[55] bg-black/30 backdrop-blur-sm transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={closeMobile}
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[60] bg-background flex flex-col transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close button */}
        <button
          onClick={closeMobile}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        {/* Scrollable content */}
        <div className="flex flex-col flex-1 px-6 py-20 overflow-y-auto">

          {/* Nav items */}
          <nav className="flex flex-col w-full gap-0.5 my-auto">
            {navItems.map((item, i) => (
              <div
                key={item.id}
                className={cn(
                  "w-full flex flex-col transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${120 + i * 60}ms` : "0ms" }}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                      className="w-full flex items-center gap-3 py-2.5 text-[0.95rem] font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <item.icon size={18} className="text-primary shrink-0" />
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn("ml-auto transition-transform duration-300 text-muted-foreground", openAccordion === item.id && "rotate-180")}
                      />
                    </button>

                    {/* Sub-items accordion */}
                    <div className={cn(
                      "grid transition-all duration-300 w-full",
                      openAccordion === item.id ? "grid-rows-[1fr] mb-1" : "grid-rows-[0fr]"
                    )}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 pt-1 pb-2 pl-8 ml-[9px] border-l border-neutral-200 dark:border-white/10">
                          {item.subItems.map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.href}
                              onClick={closeMobile}
                              className="flex items-center gap-2.5 text-[0.8rem] text-muted-foreground hover:text-primary transition-colors font-medium py-1.5"
                            >
                              <sub.icon size={15} className="shrink-0" />
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMobile}
                    className={cn(
                      "w-full flex items-center gap-3 py-2.5 text-[0.95rem] font-semibold transition-colors",
                      isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    <item.icon size={18} className="text-primary shrink-0" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Apply Now */}
          <div
            className={cn(
              "flex justify-center transition-all duration-300",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? `${120 + navItems.length * 60}ms` : "0ms" }}
          >
            <a
              href={APPLY_URL}
              onClick={closeMobile}
              className="bg-foreground text-background font-bold text-[13px] h-10 pl-5 pr-1.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:-translate-y-px"
            >
              Apply Now
              <div className="bg-background text-foreground w-7 h-7 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
                <ArrowUpRight size={15} />
              </div>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
