"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqCategory {
  label: string;
  faqs: { q: string; a: string; link?: { label: string; href: string } }[];
}

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
      <span className="absolute w-3.5 h-px bg-foreground/60 transition-colors duration-200" />
      <span
        className={cn(
          "absolute w-px h-3.5 bg-foreground/60 transition-all duration-300",
          isOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
        )}
      />
    </div>
  );
}

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <div className="flex flex-col gap-10">
      {categories.map((cat, ci) => (
        <div key={cat.label}>
          <div className="flex items-center gap-4 mb-1">
            <span className="text-[11px] font-bold tracking-[0.13em] uppercase text-muted-foreground whitespace-nowrap">
              {cat.label}
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-col">
            {cat.faqs.map((faq, fi) => {
              const key = `${ci}-${fi}`;
              const isOpen = open === key;
              return (
                <div key={fi} className="border-b border-border last:border-b-0">
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className="text-[0.95rem] font-semibold text-foreground">{faq.q}</span>
                    <PlusMinusIcon isOpen={isOpen} />
                  </button>
                  <div className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <p className="text-[0.875rem] text-muted-foreground leading-relaxed pb-5">
                        {faq.a}
                        {faq.link && (
                          <>
                            {" "}
                            <a href={faq.link.href} className="text-primary font-semibold underline underline-offset-2">
                              {faq.link.label}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
