"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Scale, Calculator, Building2, Landmark } from "lucide-react";

export function BuiltForMarket() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-10">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            BUILT FOR YOUR MARKET
          </p>
          <h2 className="animate-on-scroll font-display text-2xl md:text-3xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Not Another US Product With a Flag Changed.
          </h2>
        </div>

        <div className="animate-on-scroll max-w-2xl mx-auto">
          <p className="text-base leading-relaxed text-muted-foreground text-center">
            Propentro understands Irish law. RTB notice periods calculated by tenancy duration.
            RPZ rent increases capped automatically using the HICP formula. BER certificate tracking
            with minimum rating alerts. Open Banking with Irish banks. Euro-native throughout.
          </p>

          <div className="stagger-children grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { icon: Scale, label: "RTB\nCompliant" },
              { icon: Calculator, label: "RPZ\nCalculator" },
              { icon: Building2, label: "BER\nTracking" },
              { icon: Landmark, label: "Open\nBanking" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="animate-on-scroll flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-secondary text-center">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-foreground whitespace-pre-line">{item.label}</span>
                </div>
              );
            })}
          </div>

          <p className="animate-on-scroll mt-8 text-sm text-muted-foreground text-center">
            Also built for: UK (Section 21, Gas Safety, MTD) with more markets coming.
          </p>
        </div>
      </div>
    </section>
  );
}
