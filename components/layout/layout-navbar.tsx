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
  List,
  Wrench,
  ArrowRightLeft,
  BookOpen,
  HelpCircle,
  FolderTree,
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
    sectionHref: "/loans",
    subItems: [
      { title: "By Amount",       desc: "$300 - $5,000 loans",                    href: "#", icon: Banknote },
      { title: "By Purpose",      desc: "Debt consolidation, emergencies & more",  href: "#", icon: Target },
      { title: "By Credit Score", desc: "Find loans for your credit range",        href: "#", icon: Gauge },
      { title: "By Type",         desc: "Personal, emergency, same-day loans",     href: "#", icon: Layers },
      { title: "By Location",     desc: "Loans in Canada",                         href: "#", icon: MapPin },
      { title: "All Loan Options",desc: "Browse all available loans",              href: "/loans", icon: List },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    sectionHref: "/resources",
    subItems: [
      { title: "Tools",         desc: "Calculators & helpful tools",      href: "#",    icon: Wrench },
      { title: "Comparisons",   desc: "Compare borrowing options",        href: "#",    icon: ArrowRightLeft },
      { title: "Guides",        desc: "Step-by-step loan guides",         href: "#",    icon: BookOpen },
      { title: "FAQ",           desc: "Common questions answered",        href: "#faq", icon: HelpCircle },
      { title: "All Resources", desc: "Browse all tools & guides",        href: "/resources", icon: FolderTree },
    ],
  },
  { id: "about",   label: "About Us", href: "/aboutus" },
  { id: "contact", label: "Contact",  href: "/contact" },
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
      <header className="fixed top-0 inset-x-0 z-50 pt-4 lg:pt-6 pointer-events-none">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 h-[40px] lg:h-[60px] grid grid-cols-2 md:grid-cols-3 items-center">

          {/* Logo */}
          <div className="flex items-center justify-start pointer-events-auto">
            <Link href="/" className="flex items-center outline-none">
              <img src="/logoBlack.svg" alt="365loan" className="h-6 lg:h-8 w-auto dark:hidden" />
              <img src="/logoWhite.svg" alt="365loan" className="h-6 lg:h-8 w-auto hidden dark:block" />
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
              className="bg-ink dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-ink text-[13px] font-semibold h-[32px] lg:h-[36px] flex items-center justify-center pl-5 pr-1.5 rounded-full shadow-sm hover:shadow-md transition-all gap-2 duration-300"
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
        <div className="flex flex-col items-center justify-center flex-1 px-8 py-20 overflow-y-auto gap-2">

          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="mb-8">
            <img src="/logoBlack.svg" alt="365loan" className="h-10 dark:hidden" />
            <img src="/logoWhite.svg" alt="365loan" className="h-10 hidden dark:block" />
          </Link>

          {/* Nav items */}
          <nav className="flex flex-col items-center w-full gap-1">
            {navItems.map((item, i) => (
              <div
                key={item.id}
                className={cn(
                  "w-full flex flex-col items-center transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${120 + i * 60}ms` : "0ms" }}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                      className="flex items-center gap-2 py-3 font-heading font-black text-[2rem] text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={22}
                        className={cn("mt-1 transition-transform duration-300 text-muted-foreground", openAccordion === item.id && "rotate-180")}
                      />
                    </button>

                    {/* Sub-items accordion */}
                    <div className={cn(
                      "grid transition-all duration-300 w-full max-w-[260px]",
                      openAccordion === item.id ? "grid-rows-[1fr] mb-2" : "grid-rows-[0fr]"
                    )}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col items-center gap-2 pt-2 pb-3">
                          {item.subItems.map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.href}
                              onClick={closeMobile}
                              className="text-[0.95rem] text-muted-foreground hover:text-primary transition-colors font-medium py-0.5"
                            >
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
                      "py-3 font-heading font-black text-[2rem] transition-colors",
                      isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Apply Now */}
          <div
            className={cn(
              "mt-8 transition-all duration-300",
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? `${120 + navItems.length * 60}ms` : "0ms" }}
          >
            <a
              href={APPLY_URL}
              onClick={closeMobile}
              className="bg-foreground text-background font-bold text-[14px] h-12 pl-6 pr-2 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:-translate-y-[1px]"
            >
              Apply Now
              <div className="bg-background text-foreground w-8 h-8 rounded-full inline-flex items-center justify-center shadow-sm shrink-0">
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
