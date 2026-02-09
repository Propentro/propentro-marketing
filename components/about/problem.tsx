"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[700px] px-5 lg:px-8">
        <p className="animate-on-scroll section-label text-accent mb-6">THE PROBLEM WE SOLVE</p>
        <div className="space-y-5 text-base md:text-[17px] leading-relaxed text-muted-foreground">
          <p className="animate-on-scroll">
            Property management firms handle enormous responsibility with inadequate tools. Billions in assets tracked through spreadsheets. Legal compliance managed in someone{"'"}s memory. Financial reporting that takes days instead of seconds.
          </p>
          <p className="animate-on-scroll">
            We{"'"}ve lived this. Propentro exists to fix it.
          </p>
        </div>
      </div>
    </section>
  );
}
