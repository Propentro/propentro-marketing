"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Building2,
  Users,
  FileText,
  Wallet,
  Wrench,
  ShieldCheck,
  FolderOpen,
} from "lucide-react";

const modules = [
  {
    icon: Building2,
    name: "Properties & Units",
    desc: "Your entire portfolio, structured and searchable.",
    angle: 0,
  },
  {
    icon: Users,
    name: "People",
    desc: "Tenants, landlords, contractors — one profile, multiple roles.",
    angle: 51.4,
  },
  {
    icon: FileText,
    name: "Leases",
    desc: "Draft to signature to renewal. One flow.",
    angle: 102.8,
  },
  {
    icon: Wallet,
    name: "Finances",
    desc: "Open banking. Automated reconciliation. Real-time cash flow.",
    angle: 154.3,
  },
  {
    icon: Wrench,
    name: "Maintenance",
    desc: "Request to completion. Fully automated.",
    angle: 205.7,
  },
  {
    icon: ShieldCheck,
    name: "Compliance",
    desc: "Every deadline tracked. Every certificate managed.",
    angle: 257.1,
  },
  {
    icon: FolderOpen,
    name: "Documents",
    desc: "Organized, versioned, linked, searchable.",
    angle: 308.6,
  },
];

export function Platform() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            THE PLATFORM
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            One Platform<span className="font-light">. Every Operation.</span>
          </h2>
        </div>

        {/* Constellation layout — desktop */}
        <div className="hidden lg:block animate-on-scroll relative mx-auto" style={{ height: 520, maxWidth: 800 }}>
          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-display text-lg font-semibold text-foreground">
                P<span className="text-primary">.</span>
              </span>
            </div>
          </div>

          {/* Connecting lines + nodes */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 520" aria-hidden="true">
            {modules.map((m) => {
              const cx = 400;
              const cy = 260;
              const r = 210;
              const rad = (m.angle * Math.PI) / 180;
              const x = cx + r * Math.cos(rad);
              const y = cy + r * Math.sin(rad);
              return (
                <line
                  key={m.name}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="hsl(263 70% 42% / 0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {modules.map((m) => {
            const cx = 400;
            const cy = 260;
            const r = 210;
            const rad = (m.angle * Math.PI) / 180;
            const x = cx + r * Math.cos(rad);
            const y = cy + r * Math.sin(rad);
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className="absolute w-48 -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: x, top: y }}
              >
                <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-border bg-background shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{m.name}</span>
                  <span className="text-xs leading-relaxed text-muted-foreground">{m.desc}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile + tablet: card grid */}
        <div className="lg:hidden stagger-children grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className="animate-on-scroll flex items-start gap-4 p-4 rounded-xl border border-border bg-background"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/8 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{m.name}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom text + CTA */}
        <div className="animate-on-scroll mt-14 md:mt-16 flex flex-col items-center text-center gap-5">
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Each module works on its own. Together, they eliminate the operational chaos.
          </p>
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:shadow-md"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
