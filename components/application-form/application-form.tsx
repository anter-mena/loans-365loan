"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    LeadScout: any;
  }
}

// LeadScout renders its Material UI form inside a same-origin <iframe> (srcDoc),
// so page-level CSS can't reach it. We inject these overrides INTO the iframe
// document to recolor MUI's hardcoded indigo primary (#5048e5) to brand green.
const BRAND = "#2f8f5f";
const BRAND_HOVER = "#297d53";
const IFRAME_BRAND_CSS = `
.MuiButton-containedPrimary { background-color: ${BRAND} !important; }
.MuiButton-containedPrimary:hover { background-color: ${BRAND_HOVER} !important; }
.MuiButton-containedPrimary.Mui-focusVisible { box-shadow: 0 0 0 3px rgba(47,143,95,0.4) !important; }
.MuiButton-outlinedPrimary, .MuiButton-textPrimary { color: ${BRAND} !important; border-color: ${BRAND} !important; }
.MuiSlider-root { color: ${BRAND} !important; }
.MuiSlider-track { background-color: ${BRAND} !important; border-color: ${BRAND} !important; }
.MuiSlider-thumb { background-color: ${BRAND} !important; }
.MuiSlider-thumb:hover, .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb.Mui-active { box-shadow: 0 0 0 8px rgba(47,143,95,0.16) !important; }
.MuiSlider-valueLabel { background-color: ${BRAND} !important; }
.MuiRadio-colorPrimary.Mui-checked, .MuiCheckbox-colorPrimary.Mui-checked, .MuiSwitch-colorPrimary.Mui-checked { color: ${BRAND} !important; }
.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track { background-color: ${BRAND} !important; }
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: ${BRAND} !important; }
.MuiInputLabel-root.Mui-focused, .MuiFormLabel-root.Mui-focused { color: ${BRAND} !important; }
.MuiCircularProgress-colorPrimary, .MuiLinearProgress-colorPrimary { color: ${BRAND} !important; }
.MuiLinearProgress-bar, .MuiLinearProgress-barColorPrimary { background-color: ${BRAND} !important; }
.MuiStepIcon-root.Mui-active, .MuiStepIcon-root.Mui-completed { color: ${BRAND} !important; }
.MuiTypography-colorPrimary, .MuiLink-root { color: ${BRAND} !important; }
.MuiMenuItem-root.Mui-selected, .MuiMenuItem-root.Mui-selected:hover { background-color: rgba(47,143,95,0.12) !important; }
`;

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

  // Inject the brand-color overrides into the LeadScout iframe document.
  useEffect(() => {
    const STYLE_ID = "ls-brand-override";
    const inject = () => {
      const iframe = (formRef.current?.querySelector("iframe") ||
        document.getElementById("LoanLibraryIframe")) as HTMLIFrameElement | null;
      const doc = iframe?.contentDocument;
      if (!doc) return false;
      try {
        if (!doc.getElementById(STYLE_ID)) {
          const style = doc.createElement("style");
          style.id = STYLE_ID;
          style.textContent = IFRAME_BRAND_CSS;
          (doc.head || doc.documentElement).appendChild(style);
        }
        return true;
      } catch {
        return false;
      }
    };

    let tries = 0;
    const interval = setInterval(() => {
      tries += 1;
      const iframe = (formRef.current?.querySelector("iframe") ||
        document.getElementById("LoanLibraryIframe")) as HTMLIFrameElement | null;
      if (iframe && iframe.dataset.lsBrandBound !== "1") {
        iframe.dataset.lsBrandBound = "1";
        iframe.addEventListener("load", inject);
      }
      if (inject() || tries > 80) clearInterval(interval);
    }, 250);

    return () => clearInterval(interval);
  }, []);

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
