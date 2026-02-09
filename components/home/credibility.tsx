"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Credibility() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
        <p className="animate-on-scroll font-display text-xl md:text-2xl lg:text-[28px] font-medium leading-snug text-foreground text-balance">
          Built by people who{"'"}ve managed properties —{" "}
          <span className="text-muted-foreground font-light">not just built software.</span>
        </p>
      </div>
    </section>
  );
}
