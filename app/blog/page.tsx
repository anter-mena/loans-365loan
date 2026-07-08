import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

const base = buildMetadata({
  title: "Blog | 365loan",
  description:
    "Timely insights on personal loans in Canada — rate news, borrowing tips, and plain-English takes on the rules that affect your wallet.",
  path: "/blog",
  keywords: [
    "personal loan blog canada",
    "loan tips canada",
    "borrowing news canada",
    "365loan blog",
  ],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: {
      "application/rss+xml": `${BASE_URL}/blog/feed.xml`,
    },
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${BASE_URL}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <Script id="blog-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="blog-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListJsonLd)}
      </Script>

      {/* Page header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Blog
            </span>
          </div>
          <h1 className="font-heading font-black text-[2.25rem] lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-5">
            The 365loan <span className="text-primary">Blog</span>
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[540px] leading-relaxed">
            Rate news, borrowing tips, and plain-English takes on the rules that shape
            personal lending in Canada.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          {posts.length === 0 ? (
            <div className="max-w-[520px] mx-auto text-center flex flex-col items-center py-8 lg:py-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Newspaper size={26} className="text-primary" strokeWidth={1.75} />
              </div>
              <h2 className="font-heading font-black text-[1.6rem] lg:text-[2rem] text-foreground leading-tight mb-3">
                New posts <span className="text-primary">coming soon</span>
              </h2>
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed mb-8">
                We&apos;re putting together fresh rate news, borrowing tips, and honest guides for
                Canadian borrowers. Check back shortly — new articles will be posted here soon.
              </p>
              <Link
                href="/resources/guides"
                className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
              >
                In the meantime, explore our loan guides
                <ArrowUpRight size={15} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-card border border-border hover:border-primary/30 rounded-2xl overflow-hidden transition-colors"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-muted">
                    {post.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
                    )}
                    <span className="absolute top-3 left-3 bg-background/85 backdrop-blur-sm text-[10px] font-bold tracking-[0.1em] uppercase text-primary px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="font-heading font-black text-[1.1rem] text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[0.85rem] text-muted-foreground leading-relaxed mb-5 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-wide text-muted-foreground/70">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                      <ArrowUpRight
                        size={13}
                        className="ml-auto text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
