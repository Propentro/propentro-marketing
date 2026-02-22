"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FeaturesCTA() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b0f8a] via-primary to-[#4c1d95]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 lg:px-8 text-center">
        <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-[#ffffff] text-balance">
          Not Sure Which Modules You Need?
        </h2>
        <p className="animate-on-scroll mt-4 text-base md:text-lg text-[#ffffffcc]">
          That{"'"}s what the demo is for. We{"'"}ll map Propentro to your operation
          in 20 minutes.
        </p>
        <div className="animate-on-scroll mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#ffffff] px-6 py-3 text-sm font-medium text-primary shadow-lg hover:bg-[#f0eef5] transition-all min-w-[220px]"
          >
            Book a 20-Minute Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
