import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    rating: 5,
    text: "Got approved in minutes and had money in my account the next morning. Couldn't believe how easy it was compared to going to my bank.",
    featured: false,
  },
  {
    name: "James T.",
    location: "Vancouver, BC",
    rating: 5,
    text: "I was worried about my credit score but they found me a great rate anyway. Saved me hundreds compared to what my bank offered. The process was transparent from start to finish — no hidden steps, no surprises.",
    featured: true,
  },
  {
    name: "Priya K.",
    location: "Calgary, AB",
    rating: 5,
    text: "Needed emergency funds fast. The whole process took less than 10 minutes and I had multiple offers to choose from. Highly recommend.",
    featured: false,
  },
  {
    name: "Daniel R.",
    location: "Ottawa, ON",
    rating: 5,
    text: "No hidden fees, no surprises. Everything was clearly laid out before I signed anything. Finally a loan service I can trust.",
    featured: false,
  },
  {
    name: "Michelle L.",
    location: "Montreal, QC",
    rating: 5,
    text: "Used 365loan for debt consolidation. The rate I got was much better than expected and the process was completely hassle-free.",
    featured: false,
  },
  {
    name: "Kevin O.",
    location: "Edmonton, AB",
    rating: 5,
    text: "Quick, transparent, and professional. The soft credit check meant no impact on my score while I was shopping around.",
    featured: false,
  },
];

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-primary" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const hues = [24, 200, 142, 280, 50, 320];
  const hue = hues[name.charCodeAt(0) % hues.length];
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
      style={{ background: `oklch(0.55 0.15 ${hue})` }}
    >
      {initials}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-muted/50 bg-dot-grid py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex flex-col items-center gap-1.5 mb-5">
            <div className="w-7 h-px bg-foreground/40" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Reviews
            </span>
          </div>
          <h2 className="font-heading font-black text-[1.9rem] lg:text-[2.6rem] text-foreground leading-[1.1] tracking-tight mb-4">
            Trusted by 50,000+ Canadians
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((s) => <StarIcon key={s} />)}
            </div>
            <span className="text-[0.875rem] text-muted-foreground font-medium">
              4.9 out of 5 — based on 2,400+ reviews
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:items-start">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className={cn(
                "bg-card border rounded-2xl p-6 flex flex-col gap-4 transition-shadow",
                review.featured
                  ? "border-primary/30 shadow-[0_0_0_1px_oklch(0.683_0.162_46/0.15),0_8px_32px_oklch(0.683_0.162_46/0.08)] lg:-mt-4 lg:mb-4"
                  : "border-border"
              )}
            >
              {/* Most Helpful badge */}
              {review.featured && (
                <div className="inline-flex w-fit items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-[10.5px] font-bold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Most Helpful
                </div>
              )}

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-[0.875rem] text-foreground leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-border">
                <Avatar name={review.name} />
                <div>
                  <p className="text-[0.875rem] font-semibold text-foreground leading-none mb-1">
                    {review.name}
                  </p>
                  <p className="text-[0.775rem] text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
