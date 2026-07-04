"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "365loan-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 lg:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-180 mx-auto bg-card border border-border rounded-2xl shadow-xl p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Cookie size={19} className="text-primary" strokeWidth={1.75} />
        </div>

        <p className="text-[0.825rem] text-muted-foreground leading-relaxed flex-1">
          We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our{" "}
          <a href="/privacy-policy" className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-all">
            Privacy Policy
          </a>.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors px-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-ink dark:bg-white hover:opacity-90 text-white dark:text-ink text-[13px] font-bold h-10 px-5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
