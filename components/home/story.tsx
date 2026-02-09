"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Story() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[700px] px-5 lg:px-8">
        <p className="animate-on-scroll section-label text-accent mb-6">
          THE REALITY
        </p>

        <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
          Property Management Is Stuck
          <span className="font-light"> in the Past.</span>
        </h2>

        <div className="mt-10 space-y-6 text-base md:text-[17px] leading-relaxed text-muted-foreground">
          <p className="animate-on-scroll">
            The property management industry manages trillions in real estate.
            Yet most firms still track rents through bank statements, handle
            maintenance over WhatsApp, and store contracts in shared folders.
          </p>
          <p className="animate-on-scroll">
            Compliance deadlines live in someone{"'"}s head. Financial reporting
            happens once a month — if you{"'"}re lucky. And scaling? It means
            hiring more people to do the same manual work.
          </p>
          <p className="animate-on-scroll">
            This isn{"'"}t a technology problem. It{"'"}s an infrastructure
            problem. The tools exist for every other industry — CRMs for sales,
            ERPs for manufacturing, platforms for fintech. Property management
            never got its operating system.
          </p>
        </div>

        <p className="animate-on-scroll mt-12 font-display text-2xl md:text-3xl font-semibold text-foreground">
          Until now.
        </p>
      </div>
    </section>
  );
}
