"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[700px] px-5 lg:px-8">
        <p className="animate-on-scroll section-label text-accent mb-6">THE PROBLEM</p>
        <div className="space-y-5 text-base md:text-[17px] leading-relaxed text-muted-foreground">
          <p className="animate-on-scroll">
            The property management industry manages trillions in assets with tools
            that haven&apos;t kept up. Rent reconciliation done by hand every morning.
            Compliance deadlines tracked in spreadsheets — or worse, someone&apos;s memory.
            Financial reporting that takes days instead of seconds. Landlords calling
            five times a day for information that should be available in two clicks.
          </p>
          <p className="animate-on-scroll">
            We built Propentro after watching a PM firm lose 3 hours every Monday
            morning matching bank statements to tenant names. The industry deserves
            better tools — not another generic SaaS with a property label stuck on it,
            but software built from real operational experience.
          </p>
        </div>
      </div>
    </section>
  );
}
