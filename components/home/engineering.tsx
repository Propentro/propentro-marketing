"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Layers, FileSearch, Plug } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Multi-tenant by design",
    body: "Every firm gets isolated data with shared infrastructure. Built for security and scale from day one, not bolted on later.",
  },
  {
    icon: Layers,
    title: "Modern stack",
    body: ".NET Core backend, Next.js frontend, PostgreSQL database. Clean Architecture, modular services, comprehensive API. The same patterns used in enterprise financial systems.",
  },
  {
    icon: FileSearch,
    title: "Audit-ready",
    body: "Every change is tracked. Every action is logged. Built for regulated environments where accountability matters.",
  },
  {
    icon: Plug,
    title: "API-first",
    body: "Everything Propentro does is available through a well-documented API. Integrate with your existing tools or build custom workflows.",
  },
];

export function Engineering() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(264 30% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(264 30% 95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            ENGINEERING QUALITY
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-text-on-dark text-balance">
            Built to grow with you
            <span className="font-light">.</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-base md:text-lg text-text-muted-on-dark max-w-xl mx-auto">
            The same engineering discipline applied to mission-critical financial
            platforms at scale is behind every architectural decision.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-on-scroll group relative rounded-xl border border-[#1e1b2e] bg-surface-dark-secondary p-6 md:p-7 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: "radial-gradient(ellipse at center, hsl(263 70% 42% / 0.05) 0%, transparent 70%)",
                }} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text-on-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted-on-dark">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
