"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Building2, Link2, Key, Gauge, ShieldCheck, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Property hierarchy: portfolio \u2192 block \u2192 unit" },
  { icon: Link2, label: "Linked data: every tenant, lease, payment, cert per unit" },
  { icon: Key, label: "Key holder & access information" },
  { icon: Gauge, label: "Utility accounts & meter readings" },
  { icon: ShieldCheck, label: "Insurance & valuation tracking" },
  { icon: TrendingUp, label: "Property-level P&L" },
];

export function PropertyModule() {
  const ref = useScrollAnimation();

  return (
    <section id="properties" ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Text left */}
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">PROPERTIES</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Your Entire Portfolio
              <span className="font-light">, One Search Away.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Which block has 3-bed units? Who{"'"}s the freeholder? What{"'"}s the
              BER rating? Every property carries its complete financial history,
              maintenance log, and compliance status  structured, linked, and
              searchable.
            </p>
            <div className="stagger-children mt-8 space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-start gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{h.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual right: nested structure */}
          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-secondary p-5 md:p-6">
              <div className="rounded-lg border border-border bg-background p-4 mb-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    Riverside Court
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    12 Units
                  </span>
                </div>
                <div className="ml-4 border-l border-border pl-4 space-y-2">
                  {[
                    { unit: "Unit 4B", tenant: "J. Murphy", status: "Paid", color: "text-emerald-600" },
                    { unit: "Unit 7C", tenant: "K. Walsh", status: "Overdue", color: "text-red-500" },
                    { unit: "Unit 12A", tenant: "S. O\u2019Brien", status: "Renewal Due", color: "text-amber-600" },
                  ].map((u) => (
                    <div
                      key={u.unit}
                      className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2.5"
                    >
                      <div>
                        <span className="text-xs font-medium text-foreground">{u.unit}</span>
                        <span className="text-xs text-muted-foreground ml-2">{u.tenant}</span>
                      </div>
                      <span className={`text-[10px] font-medium ${u.color}`}>{u.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
