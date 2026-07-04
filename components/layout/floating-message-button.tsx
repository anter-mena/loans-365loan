"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingMessageButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      <div
        className={cn(
          "bg-card border border-border rounded-2xl shadow-xl p-5 w-[240px] transition-all duration-200 origin-bottom-right",
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        )}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={15} />
        </button>
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <MessageCircle size={16} className="text-primary" strokeWidth={1.75} />
        </div>
        <p className="text-[0.875rem] font-bold text-foreground mb-1">Live chat</p>
        <p className="text-[0.8rem] text-muted-foreground leading-relaxed">
          Coming soon — for now, reach us through our contact page.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us"
        className="relative w-14 h-14 rounded-full bg-primary hover:opacity-90 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl -z-10" />
        <MessageCircle size={22} strokeWidth={1.75} />
      </button>
    </div>
  );
}
