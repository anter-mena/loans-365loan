"use client";

import { useMemo, useState } from "react";
import { Banknote, CalendarClock, Gauge, ArrowUpRight } from "lucide-react";
import { calcMonthlyPayment } from "@/lib/loans/repayment";

const CREDIT_TIERS = [
  { key: "excellent", label: "Excellent (760-900)", apr: 9.99 },
  { key: "good", label: "Good to Very Good (660-759)", apr: 15.99 },
  { key: "fair", label: "Fair (560-659)", apr: 22.99 },
  { key: "poor", label: "Poor (300-559)", apr: 32.99 },
] as const;

const MIN_AMOUNT = 300;
const MAX_AMOUNT = 5000;
const MIN_MONTHS = 3;
const MAX_MONTHS = 60;

function formatCurrency(value: number): string {
  return `$${Math.round(value).toLocaleString("en-CA")}`;
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(2000);
  const [months, setMonths] = useState(24);
  const [tierKey, setTierKey] = useState<(typeof CREDIT_TIERS)[number]["key"]>("good");

  const tier = CREDIT_TIERS.find((t) => t.key === tierKey) ?? CREDIT_TIERS[1];

  const { monthly, total, totalInterest, principalPct } = useMemo(() => {
    const monthlyRaw = calcMonthlyPayment(amount, tier.apr, months);
    const monthlyRounded = Math.round(monthlyRaw);
    const totalRepayable = monthlyRounded * months;
    const interest = totalRepayable - amount;
    const pct = Math.max(0, Math.min(100, (amount / totalRepayable) * 100));
    return { monthly: monthlyRounded, total: totalRepayable, totalInterest: interest, principalPct: pct };
  }, [amount, months, tier.apr]);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 lg:p-9">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

        {/* Controls */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Amount */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="calc-amount" className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-foreground">
                <Banknote size={16} className="text-primary" strokeWidth={1.75} />
                Loan Amount
              </label>
              <span className="font-heading font-bold text-[1.05rem] text-primary">{formatCurrency(amount)}</span>
            </div>
            <input
              id="calc-amount"
              type="range"
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step={50}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-primary h-1.5 rounded-full cursor-pointer"
              aria-valuetext={formatCurrency(amount)}
            />
            <div className="flex justify-between text-[0.7rem] text-muted-foreground/70 mt-1.5">
              <span>$300</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Term */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="calc-term" className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-foreground">
                <CalendarClock size={16} className="text-primary" strokeWidth={1.75} />
                Repayment Term
              </label>
              <span className="font-heading font-bold text-[1.05rem] text-primary">{months} months</span>
            </div>
            <input
              id="calc-term"
              type="range"
              min={MIN_MONTHS}
              max={MAX_MONTHS}
              step={1}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-primary h-1.5 rounded-full cursor-pointer"
              aria-valuetext={`${months} months`}
            />
            <div className="flex justify-between text-[0.7rem] text-muted-foreground/70 mt-1.5">
              <span>3 months</span>
              <span>60 months</span>
            </div>
          </div>

          {/* Credit tier */}
          <div>
            <label className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-foreground mb-3">
              <Gauge size={16} className="text-primary" strokeWidth={1.75} />
              Your Credit Range
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {CREDIT_TIERS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTierKey(t.key)}
                  aria-pressed={tierKey === t.key}
                  className={`text-left rounded-xl border px-3.5 py-2.5 text-[0.775rem] font-semibold transition-colors ${
                    tierKey === t.key
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-2 bg-navy rounded-2xl p-7 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-primary)_20%,transparent),transparent_65%)] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-white/50 mb-2 block">
              Estimated Monthly Payment
            </span>
            <div className="font-heading font-black text-[2.5rem] text-white leading-none mb-6">
              {formatCurrency(monthly)}
              <span className="text-[1rem] font-semibold text-white/50">/mo</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-2 flex">
              <div className="h-full bg-primary" style={{ width: `${principalPct}%` }} />
              <div className="h-full bg-white/30 flex-1" />
            </div>
            <div className="flex items-center justify-between text-[0.7rem] text-white/50 mb-6">
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" />Principal</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white/30" />Interest</span>
            </div>

            <div className="flex flex-col gap-3 mb-7">
              <div className="flex items-center justify-between text-[0.825rem]">
                <span className="text-white/55">Representative APR</span>
                <span className="text-white font-semibold">{tier.apr}%</span>
              </div>
              <div className="flex items-center justify-between text-[0.825rem]">
                <span className="text-white/55">Total Interest</span>
                <span className="text-white font-semibold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between text-[0.825rem] pt-3 border-t border-white/10">
                <span className="text-white/55">Total Repayable</span>
                <span className="text-white font-bold">{formatCurrency(total)}</span>
              </div>
            </div>

            <a
              href="/application-form"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-ink text-[0.875rem] font-semibold px-5 py-3 rounded-full w-full transition-transform hover:translate-x-0.5"
            >
              Apply Now
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-[0.75rem] text-muted-foreground/70 leading-relaxed mt-6">
        This calculator provides an illustrative estimate only, using a representative APR for each credit range. Your actual rate, term, and payment depend on the specific lender and your full financial profile — checking your real rate uses a soft credit inquiry and doesn't affect your score.
      </p>
    </div>
  );
}
