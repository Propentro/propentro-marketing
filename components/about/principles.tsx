"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Crosshair, ShieldCheck, TrendingUp, Gem } from "lucide-react";

const values = [
  {
    icon: Crosshair,
    title: "Operator-First",
    desc: "Every feature exists because a property manager needed it — not because a product team thought it looked good in a demo.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance by Default",
    desc: "RTB, RPZ, gas safety, BER — legal protection is built in, not bolted on. The platform knows the rules so you don't have to remember them.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Headcount",
    desc: "Manage 500 units with the same team that manages 50. Automation handles the repetitive work, you handle the exceptions.",
  },
  {
    icon: Gem,
    title: "Honest Product",
    desc: "No vanity features. No feature flags for the demo. We build what survives Monday morning.",
  },
];

export function Principles() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">OUR APPROACH</p>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="animate-on-scroll group p-6 rounded-xl border border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
