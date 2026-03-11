"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { LayoutGrid, ShieldAlert, Clock } from "lucide-react";

const problems = [
  {
    icon: LayoutGrid,
    title: "Disconnected tools",
    body: "Most firms run on a patchwork of spreadsheets, email, and legacy software. Data lives in silos, nothing talks to each other, and critical information falls through the cracks.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance risk",
    body: "RTB registrations, BER certs, RPZ rent limits, deposit protection — tracking compliance across hundreds of units manually is error-prone and exposes firms to regulatory risk.",
  },
  {
    icon: Clock,
    title: "Manual financial workflows",
    body: "Rent reconciliation, SEPA payments, owner statements, and VAT reporting still involve hours of manual data entry and cross-referencing between disconnected systems.",
  },
];

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            THE PROBLEM
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Property management hasn't caught up
            <span className="font-light">.</span>
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="animate-on-scroll p-6 md:p-8 rounded-xl border border-border bg-background"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
