"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Landmark, RefreshCw, TrendingUp, ArrowRightLeft } from "lucide-react";
import { Check, X } from "lucide-react";

const highlights = [
  { icon: Landmark, label: "Open banking" },
  { icon: RefreshCw, label: "Automated reconciliation" },
  { icon: TrendingUp, label: "Real-time cash flow" },
  { icon: ArrowRightLeft, label: "Landlord payouts" },
];

export function FinanceModule() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Text left */}
          <div className="flex-1 lg:max-w-md">
            <p className="animate-on-scroll section-label text-accent mb-5">MODULE 04</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Real-Time Financial
              <span className="font-light"> Clarity.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Connect your bank accounts via Open Banking. Incoming payments are auto-matched to tenants using reference codes. See exactly who{"'"}s paid, who{"'"}s overdue, and your precise cash position — not at month-end, right now.
            </p>
            <div className="stagger-children mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-center gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual right: bank feed matching */}
          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-secondary p-5 md:p-6 space-y-3">
              <div className="text-xs font-medium text-muted-foreground mb-4">Bank Feed Auto-Match</div>
              {[
                { ref: "RENT-4B-0125", amount: "+€1,450.00", tenant: "J. Murphy — Unit 4B", matched: true },
                { ref: "RENT-12A-0125", amount: "+€1,200.00", tenant: "S. O'Brien — Unit 12A", matched: true },
                { ref: "RENT-7C-0125", amount: "€0.00", tenant: "K. Walsh — Unit 7C", matched: false },
                { ref: "RENT-9A-0125", amount: "+€1,100.00", tenant: "P. Byrne — Unit 9A", matched: true },
              ].map((tx) => (
                <div key={tx.ref} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-foreground truncate">{tx.ref}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{tx.tenant}</div>
                  </div>
                  <span className={`text-xs font-semibold ${tx.matched ? "text-foreground" : "text-muted-foreground"}`}>
                    {tx.amount}
                  </span>
                  {tx.matched ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
