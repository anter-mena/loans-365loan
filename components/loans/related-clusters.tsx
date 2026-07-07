import { Banknote, Target, Gauge, Layers, MapPin, CalendarClock, ArrowUpRight } from "lucide-react";

const ALL_CLUSTERS = [
  { href: "/loans/by-amount", icon: Banknote, title: "By Amount", description: "$300 to $5,000, sized to what you need." },
  { href: "/loans/by-purpose", icon: Target, title: "By Purpose", description: "Debt consolidation, emergencies, and more." },
  { href: "/loans/by-credit-score", icon: Gauge, title: "By Credit Score", description: "Rates and lenders matched to your range." },
  { href: "/loans/by-type", icon: Layers, title: "By Type", description: "Bad credit, self-employed, and more." },
  { href: "/loans/by-location", icon: MapPin, title: "By Location", description: "Every Canadian province and territory." },
  { href: "/loans/by-term", icon: CalendarClock, title: "By Repayment Term", description: "3 to 60 months, real payment examples." },
] as const;

export function RelatedClusters({ exclude, heading = "Explore Loans From Other Angles" }: { exclude: string; heading?: string }) {
  const clusters = ALL_CLUSTERS.filter((c) => c.href !== exclude);
  return (
    <div className="mb-14">
      <h2 className="font-heading font-bold text-[1.3rem] text-foreground mb-4">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {clusters.slice(0, 3).map(({ href, icon: Icon, title, description }) => (
          <a key={href} href={href} className="group bg-card border border-border hover:border-primary/30 rounded-xl p-5 transition-colors">
            <Icon size={18} className="text-primary mb-2.5" strokeWidth={1.75} />
            <h3 className="text-[0.9rem] font-semibold text-foreground mb-1 inline-flex items-center gap-1.5">
              {title}
              <ArrowUpRight size={13} className="text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </h3>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed">{description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
