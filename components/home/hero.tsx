"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-surface-dark pt-36 pb-24 md:pt-44 md:pb-32 min-h-[90vh] flex items-center"
    >
      {/* Grain texture */}
      <div className="grain-texture absolute inset-0" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(263 70% 42% / 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="animate-on-scroll section-label text-accent justify-center mb-8">
            PROPERTY MANAGEMENT PLATFORM
          </p>

          {/* Main heading */}
          <h1 className="animate-on-scroll font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text-on-dark sm:text-5xl md:text-6xl lg:text-[68px] max-w-4xl text-balance">
            The operating system for professional property management
            <span className="text-accent">.</span>
          </h1>

          {/* Subheading */}
          <p className="animate-on-scroll mt-6 max-w-[620px] text-base md:text-lg leading-relaxed text-text-muted-on-dark">
            A unified platform for contacts, properties, finances, maintenance,
            compliance, and documents. Built for firms managing 30 to 3,000+
            units who need real software, not spreadsheets.
          </p>

          {/* CTAs */}
          <div className="animate-on-scroll mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById("roadmap");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30 min-w-[200px]"
            >
              View the Roadmap
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("about-builder");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-[10px] border border-[#2a2640] bg-transparent px-6 py-3 text-sm font-medium text-text-on-dark hover:bg-[#ffffff08] transition-all min-w-[200px]"
            >
              About the Project
            </button>
          </div>

          {/* Status badge */}
          <div className="animate-on-scroll mt-8 flex items-center gap-2 text-sm text-text-muted-on-dark">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>In active development — v1.0 coming 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
