"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Banknote, Leaf, Radio } from "lucide-react";

const cards = [
  {
    icon: Banknote,
    title: "Embedded Finance",
    desc: "Tenant insurance, deposit alternatives, automated landlord payouts.",
  },
  {
    icon: Leaf,
    title: "ESG & Sustainability",
    desc: "Energy tracking, carbon reporting, EPC compliance.",
  },
  {
    icon: Radio,
    title: "IoT Integration",
    desc: "Smart locks, sensor-driven preventive maintenance.",
  },
];

export function AboutVision() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">VISION</p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            What{"'"}s Next<span className="font-light">.</span>
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="animate-on-scroll p-6 rounded-xl border border-border bg-secondary hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
