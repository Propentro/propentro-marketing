"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowUpRight } from "lucide-react";

export function AboutBuilder() {
  const ref = useScrollAnimation();

  return (
    <section
      id="about-builder"
      ref={ref}
      className="bg-secondary py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center mb-10">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            WHO&apos;S BUILDING THIS
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            An independent project
            <span className="font-light">, built with intent.</span>
          </h2>
        </div>

        <div className="animate-on-scroll rounded-xl border border-border bg-background p-8 md:p-10">
          <p className="text-base leading-relaxed text-muted-foreground mb-4">
            Propentro is an independent project by{" "}
            <span className="text-foreground font-medium">Sufyan Taskin</span>,
            a Tech Lead with 8+ years of experience building enterprise systems
            in regulated, finance-intensive environments. Built in my own time,
            applying the same engineering standards I use in production systems.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            Clean Architecture, comprehensive testing, and production-grade
            infrastructure from day one — not because it&apos;s required for a
            side project, but because it shouldn&apos;t be any other way.
          </p>
          <a
            href="https://sufyant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            More about me
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
