import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { Breadcrumbs } from "@/components/loans/breadcrumbs";
import { RelatedClusters } from "@/components/loans/related-clusters";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { getAllNews, getNews } from "@/lib/news";
import { extractToc } from "@/lib/toc";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};

  const base = buildMetadata({
    title: `${item.meta.title} | 365loan`,
    description: item.meta.description,
    path: `/news/${slug}`,
    keywords: item.meta.keywords.length
      ? item.meta.keywords
      : [item.meta.title.toLowerCase(), "canada loan news", "365loan"],
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: item.meta.date,
      modifiedTime: item.meta.updated,
      authors: [item.meta.author],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  const { meta, content } = item;
  const toc = extractToc(content);
  const url = `${BASE_URL}/news/${slug}`;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: meta.title, path: `/news/${slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "365loan",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` },
    },
    mainEntityOfPage: url,
    url,
  };

  const faqJsonLd =
    meta.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: meta.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const internal = meta.related.filter((l) => !l.href.startsWith("http"));
  const sources = meta.related.filter((l) => l.href.startsWith("http"));

  return (
    <>
      <Script id={`news-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`news-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>
      {faqJsonLd && (
        <Script id={`news-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      )}

      {/* Page header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_9%,transparent),transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-[720px] mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
              { label: meta.title },
            ]}
          />
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              {meta.category}
            </span>
          </div>
          <h1 className="font-heading font-black text-[2rem] lg:text-[2.75rem] text-foreground leading-[1.1] tracking-tight mb-5">
            {meta.title}
          </h1>
          <p className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed mb-5">
            {meta.description}
          </p>
          <p className="text-[0.75rem] text-muted-foreground/70">
            By the {meta.author} · Published {formatDate(meta.date)}
            {meta.updated !== meta.date ? ` · Updated ${formatDate(meta.updated)}` : ""} · {meta.readingTime} min read
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
        <div className="mx-auto max-w-[1080px] px-4 lg:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12 lg:items-start">
          <article className="min-w-0 w-full max-w-[760px] mx-auto lg:mx-0">
          <TableOfContents items={toc} variant="mobile" />
          <div className="blog-prose prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
              {content}
            </ReactMarkdown>
          </div>

          {/* Related reading + sources */}
          {(internal.length > 0 || sources.length > 0) && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {internal.length > 0 && (
                <div>
                  <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-2.5">
                    {internal.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-primary hover:underline underline-offset-2"
                        >
                          {link.label}
                          <ArrowUpRight size={13} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {sources.length > 0 && (
                <div>
                  <h2 className="font-heading font-bold text-[1.1rem] text-foreground mb-4">
                    Sources
                  </h2>
                  <ul className="flex flex-col gap-2.5">
                    {sources.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.875rem] text-muted-foreground hover:text-primary underline underline-offset-2 decoration-muted-foreground/40"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Back to hub */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              <ArrowUpRight size={14} className="rotate-180" />
              All news
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all"
            >
              Read the blog
              <ArrowUpRight size={14} />
            </Link>
          </div>
          </article>

          <aside className="hidden lg:block sticky top-28 self-start">
            <TableOfContents items={toc} variant="sidebar" />
          </aside>
        </div>
      </section>

      {/* Explore loans (internal links to commercial hubs) */}
      <section className="bg-background pt-20 lg:pt-24">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <RelatedClusters exclude="/news" heading="Explore Your Loan Options" />
        </div>
      </section>

      {/* FAQ */}
      {meta.faqs.length > 0 && (
        <section className="bg-background pb-20 lg:pb-28">
          <div className="max-w-[760px] mx-auto px-4 lg:px-8">
            <h2 className="font-heading font-black text-[1.6rem] lg:text-[2rem] text-foreground leading-[1.1] tracking-tight mb-8 text-center">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="flex flex-col">
              {meta.faqs.map((f) => (
                <div key={f.question} className="border-b border-border last:border-b-0 py-5">
                  <h3 className="text-[0.95rem] font-semibold text-foreground mb-2">
                    {f.question}
                  </h3>
                  <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
