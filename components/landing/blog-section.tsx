import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
      <div className="max-w-245 mx-auto px-4 lg:px-8">

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
              What you should know before<br className="hidden lg:block" /> getting a <span className="text-primary">loan</span>.
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1 text-[13.5px] font-semibold text-foreground underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all mb-1 shrink-0"
          >
            All articles
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-3/4 block"
            >
              {/* Background image (or themed fallback) */}
              {post.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-navy" />
              )}

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
                <p className="text-white/65 text-[0.825rem] leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
