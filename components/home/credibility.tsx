"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { User, Target, Hammer } from "lucide-react";

const signals = [
  {
    icon: User,
    title: "Built From the Inside",
    text: "Built after watching a PM firm lose 3 hours every Monday morning matching bank statements to tenant names. Propentro exists because we lived the problem.",
  },
  {
    icon: Target,
    title: "Specificity as Proof",
    text: "28 modules. 50+ pages of feature specification. Every workflow designed from real property management operations \u2014 not assumptions.",
  },
  {
    icon: Hammer,
    title: "Monday-Morning Ready",
    text: "We\u2019re not building features to demo. We\u2019re building features that survive Monday morning.",
  },
];

export function Credibility() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-4">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="animate-on-scroll p-6 rounded-xl border border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {signal.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
