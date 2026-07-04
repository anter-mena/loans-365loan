import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    category: "Guides",
    title: "How to Get a Personal Loan With Bad Credit in Canada",
    description: "Your options don't end at the bank. Discover how to secure funding even with a low credit score.",
    image: "https://picsum.photos/seed/loan-canada-1/800/600",
    href: "#",
  },
  {
    category: "Rates",
    title: "Personal Loan Rates in Canada: What to Expect",
    description: "From fixed to variable — how lenders price your loan and how to negotiate better terms.",
    image: "https://picsum.photos/seed/loan-canada-2/800/600",
    href: "#",
  },
  {
    category: "Tips",
    title: "Debt Consolidation Loans: Is It the Right Move for You?",
    description: "Combine multiple debts into one simple payment and potentially lower your interest rate.",
    image: "https://picsum.photos/seed/loan-canada-3/800/600",
    href: "#",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 lg:mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="w-7 h-px bg-foreground/40" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                Blog
              </span>
            </div>
            <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.6rem] text-foreground leading-[1.1] tracking-tight max-w-[560px]">
              What you should know before<br className="hidden lg:block" /> getting a loan.
            </h2>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 text-[13.5px] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all mb-1 shrink-0"
          >
            All articles
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
            >
              {/* Background image */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-[10.5px] font-bold tracking-[0.13em] uppercase mb-3 block">
                  {post.category}
                </span>
                <h3 className="font-heading font-black text-white text-[1.1rem] leading-[1.25] mb-2">
                  {post.title}
                </h3>
                <p className="text-white/65 text-[0.825rem] leading-relaxed">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
