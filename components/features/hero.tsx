"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FeaturesHero() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="bg-surface-dark pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
    >
      <div className="grain-texture absolute inset-0" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(ellipse, hsl(263 70% 42% / 0.5) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <h1 className="animate-on-scroll font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark text-balance">
          One Platform<span className="font-light">. Your Modules.</span>
        </h1>
        <p className="animate-on-scroll mt-6 text-base md:text-lg leading-relaxed text-text-muted-on-dark max-w-2xl mx-auto">
          Every property management firm is different. Some manage 30 units with
          one person. Some manage 3,000 with a team of 20. Propentro adapts \u2014
          start with the modules you need today, add more as your operation
          grows.
        </p>
        <p className="animate-on-scroll mt-4 text-sm text-text-muted-on-dark/70 max-w-xl mx-auto">
          All modules connect seamlessly. A lease links to payments, which link
          to compliance, which link to the landlord{"'"}s portal. Pick your starting
          point \u2014 everything else clicks into place.
        </p>
      </div>
    </section>
  );
}
