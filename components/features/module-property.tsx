"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Building2, Link2, Key, Gauge, Shield, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Property hierarchy: portfolio \u2192 block \u2192 unit" },
  { icon: Link2, label: "Linked data: every tenant, lease, payment, cert per unit" },
  { icon: Key, label: "Key holder & access information" },
  { icon: Gauge, label: "Utility accounts & meter readings" },
  { icon: Shield, label: "Insurance & valuation tracking" },
  { icon: TrendingUp, label: "Property-level P&L" },
];

export function PropertyModule() {
  const ref = useScrollAnimation();

  return (
    <section id="properties" ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">PROPERTIES</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Your Entire Portfolio,
              <span className="font-light"> One Search Away.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Which block has 3-bed units? Who&apos;s the freeholder? What&apos;s the EPC rating?
              Propentro organises your entire portfolio in a clear hierarchy — portfolio,
              block, unit — with every tenant, lease, payment, and certificate linked to
              the right property. One search, instant answers.
            </p>
            <div className="stagger-children mt-8 space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-start gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-secondary p-5 md:p-6">
              <div className="text-xs font-medium text-muted-foreground mb-4">Portfolio Overview</div>
              <div className="space-y-3">
                {[
                  { name: "Blackrock Heights", type: "Block \u2014 12 units", occupancy: "100%", color: "text-emerald-600" },
                  { name: "Sandymount Terrace", type: "Block \u2014 8 units", occupancy: "87.5%", color: "text-amber-600" },
                  { name: "Ranelagh Court", type: "Block \u2014 6 units", occupancy: "100%", color: "text-emerald-600" },
                  { name: "Dun Laoghaire Marina", type: "Block \u2014 16 units", occupancy: "93.8%", color: "text-emerald-600" },
                ].map((prop) => (
                  <div key={prop.name} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">{prop.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{prop.type}</div>
                    </div>
                    <span className={`text-[10px] font-medium ${prop.color} shrink-0`}>
                      {prop.occupancy}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
