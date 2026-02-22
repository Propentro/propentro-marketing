"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TheShift() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
        <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
          What if all of that<span className="font-light">&hellip; just worked?</span>
        </h2>
        <p className="animate-on-scroll mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          Propentro connects your properties, tenants, leases, finances, maintenance,
          and compliance in one platform. When a tenant pays, it&apos;s matched automatically.
          When a cert expires, you knew 90 days ago. When a landlord calls, you have
          the answer in 2 seconds.
        </p>
      </div>
    </section>
  );
}
