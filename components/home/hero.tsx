"use client";

import Link from "next/link";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-surface-dark pt-32 pb-16 md:pt-40 md:pb-24"
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-on-scroll font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text-on-dark sm:text-5xl md:text-6xl lg:text-[72px] max-w-4xl text-balance">
            Your Properties. Your Tenants.
            <br className="hidden sm:block" />
            Your Leases. Your Finances.
            <br className="hidden sm:block" />
            <span className="font-light">Finally, One Place</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="animate-on-scroll mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-text-muted-on-dark">
            Propentro replaces the spreadsheets, WhatsApp threads, and calendar
            reminders you use to run your portfolio — with one platform that
            actually talks to itself.
          </p>

          <div className="animate-on-scroll mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30 min-w-[200px]"
            >
              Book a 20-Minute Demo
            </Link>
            <a
              href="#pain"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#2a2640] bg-transparent px-6 py-3 text-sm font-medium text-text-on-dark hover:bg-[#ffffff08] transition-all min-w-[200px]"
            >
              See What It Replaces
            </a>
          </div>

          {/* Dashboard Mockup */}
          <div
            className="animate-on-scroll mt-16 md:mt-20 w-full max-w-5xl"
            style={{
              perspective: "1200px",
            }}
          >
            <div
              style={{
                transform: "rotateX(2deg)",
                transformOrigin: "center bottom",
              }}
            >
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
