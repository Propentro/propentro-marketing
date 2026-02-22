"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Scale, Calculator, Award, Building, Globe } from "lucide-react";

const features = [
  { icon: Scale, label: "RTB notice periods calculated by tenancy duration" },
  { icon: Calculator, label: "RPZ rent increases capped automatically using the HICP formula" },
  { icon: Award, label: "BER certificate tracking with minimum rating alerts" },
  { icon: Building, label: "Open Banking with Irish banks" },
  { icon: Globe, label: "Euro-native throughout" },
];

export function BuiltForMarket() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            BUILT FOR YOUR MARKET
          </p>
          <h2 className="animate-on-scroll font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Not Another US Product
            <span className="font-light"> With a Flag Changed.</span>
          </h2>
          <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Propentro understands Irish law. Built from the ground up for the
            regulations, banking systems, and workflows that actually apply to
            your market.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="animate-on-scroll flex items-start gap-3 p-4 rounded-xl border border-border bg-secondary"
              >
                <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-foreground">
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="animate-on-scroll mt-8 text-center text-sm text-muted-foreground">
          Also built for: UK (Section 21, Gas Safety, MTD) with more markets
          coming.
        </p>
      </div>
    </section>
  );
}
