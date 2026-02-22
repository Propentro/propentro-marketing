"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[700px] px-5 lg:px-8">
        <p className="animate-on-scroll section-label text-accent mb-6">
          THE PROBLEM
        </p>

        <div className="space-y-5 text-base md:text-[17px] leading-relaxed text-muted-foreground">
          <p className="animate-on-scroll">
            The property management industry manages trillions in real estate.
            Yet most firms still track rents through bank statements, handle
            maintenance over WhatsApp, and store contracts in shared folders
            nobody can navigate.
          </p>
          <p className="animate-on-scroll">
            Compliance deadlines live in someone{"'"}s head. Financial reporting
            happens once a month  if you{"'"}re lucky. And scaling means hiring
            more people to do the same manual work, because the tools haven{"'"}t
            caught up.
          </p>
          <p className="animate-on-scroll">
            This isn{"'"}t a technology gap. It{"'"}s an infrastructure problem.
            Every other industry got its platform  CRMs for sales, ERPs for
            manufacturing, fintech for banking. Property management never got
            its operating system.
          </p>
          <p className="animate-on-scroll font-display text-xl md:text-2xl font-semibold text-foreground mt-10">
            We{"'"}re building it.
          </p>
        </div>
      </div>
    </section>
  );
}
