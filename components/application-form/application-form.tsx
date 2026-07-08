"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    LeadScout: any;
  }
}

export function ApplyForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const source = searchParams.get("source");
    const amount = searchParams.get("amount");
    const id = searchParams.get("id");
    const affiliate_sub1 = searchParams.get("affiliate_sub1");
    const affiliate_sub2 = searchParams.get("affiliate_sub2");
    const affiliate_sub5 = searchParams.get("affiliate_sub5");
    const firstname = searchParams.get("firstname");
    const email = searchParams.get("email");

    let conversion: { type?: string } = {};
    if (source === "fb") conversion = { type: "FACEBOOK" };
    else if (source === "tiktok") conversion = { type: "TIKTOK" };

    const formConfig = {
      affiliateCode: id || "4PrKYVa8",
      formId: "1",
      language: "en",
      theme: "light",
      overrides: {
        requestedAmount: {
          max: 3000,
          min: 300,
          step: 100,
        },
      },
      defaultValues: {
        requestedAmount: Number(amount) || 700,
        firstName: firstname || "",
        email: email || "",
      },
      extra: {
        affiliate_sub1: affiliate_sub1 || "365loan",
        affiliate_sub2: affiliate_sub2 || "",
        affiliate_sub5: affiliate_sub5 || null,
        aff_utm_source: source || "",
      },
      conversion,
    };

    window.LeadScout = window.LeadScout || {};
    window.LeadScout.onLoad = () => {
      setIsLoaded(true);
      if (formRef.current && window.LeadScout.init) {
        window.LeadScout.init(formRef.current, formConfig);
      }
    };

    if (window.LeadScout && window.LeadScout.init && !isLoaded) {
      window.LeadScout.onLoad();
    }
  }, [searchParams, isLoaded]);

  return (
    <>
      <Script src="https://app.leadscout.ca/library/library.js" strategy="afterInteractive" />

      <div className="relative bg-card border border-border rounded-2xl shadow-xl p-6 md:p-9 overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

        <div className="text-center mb-8">
          <h2 className="font-heading font-black text-[1.4rem] lg:text-[1.65rem] text-foreground tracking-tight mb-2">
            Get Your Rate in <span className="text-primary">2 Minutes</span>
          </h2>
          <p className="text-[0.875rem] text-muted-foreground max-w-md mx-auto">
            Our technology compares offers from trusted Canadian lenders to find you the best rate. No impact on your credit score.
          </p>
        </div>

        <div id="lead-scout-form" ref={formRef} className="min-h-112.5">
          {!isLoaded && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin mb-4" />
              <p className="text-[0.875rem] font-bold text-primary">
                Loading your application...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
