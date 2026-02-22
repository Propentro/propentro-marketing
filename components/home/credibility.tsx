"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { User, FileText, Hammer } from "lucide-react";

const signals = [
  {
    icon: User,
    title: "Born From Experience",
    text: "Built after watching a PM firm lose 3 hours every Monday morning matching bank statements to tenant names. Propentro exists because we lived the problem.",
  },
  {
    icon: FileText,
    title: "Depth, Not Demos",
    text: "28 modules. 50+ pages of feature specification. Every workflow designed from real property management operations  not assumptions.",
  },
  {
    icon: Hammer,
    title: "Monday-Morning Proof",
    text: "We\u2019re not building features to demo. We\u2019re building features that survive Monday morning.",
  },
];

export function Credibility() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            WHY TRUST US
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            No Logos Yet<span className="font-light">. Just Substance.</span>
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-4">
          {signals.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="animate-on-scroll p-6 rounded-xl border border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
