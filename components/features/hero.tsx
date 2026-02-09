"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FeaturesHero() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface-dark pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="grain-texture absolute inset-0" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(ellipse, hsl(263 70% 42% / 0.5) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <h1 className="animate-on-scroll font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark text-balance">
          Every Tool Your Operation
          <span className="font-light"> Needs.</span>
        </h1>
        <p className="animate-on-scroll mt-6 text-base md:text-lg leading-relaxed text-text-muted-on-dark max-w-2xl mx-auto">
          Seven integrated modules that replace your disconnected stack with one intelligent platform.
        </p>
      </div>
    </section>
  );
}
