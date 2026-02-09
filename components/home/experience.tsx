"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  LayoutDashboard,
  CreditCard,
  Droplets,
  Flame,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: LayoutDashboard,
    title: "You open your dashboard.",
    text: "Every property, every tenant, every lease — all in one view. No switching between apps. You see 3 overdue payments, 2 maintenance requests, and 1 lease expiring this week.",
    badge: "9:00 AM",
  },
  {
    icon: CreditCard,
    title: "Rent collection happened overnight.",
    text: "Open banking connected your accounts. 47 out of 50 payments matched automatically. The 3 overdue tenants are already flagged with risk scores.",
    badge: "Auto",
  },
  {
    icon: Droplets,
    title: "A tenant reported a leaking pipe at 2am.",
    text: "Propentro auto-approved the repair (under your \u20AC200 threshold), assigned your preferred plumber, and sent the tenant a confirmation. You just see the completed ticket.",
    badge: "Resolved",
  },
  {
    icon: Flame,
    title: "A gas safety cert expires in 14 days.",
    text: "Propentro flagged it last month. The reminder went to your contractor. The new certificate was uploaded yesterday and auto-linked to the property file.",
    badge: "On Track",
  },
  {
    icon: BarChart3,
    title: "Your landlord wants a financial report.",
    text: "One click. Real-time P&L, rent roll, maintenance costs, and compliance status — generated instantly, not after 3 days of Excel work.",
    badge: "Instant",
  },
];

export function Experience() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(264 30% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(264 30% 95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            THE EXPERIENCE
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-text-on-dark text-balance">
            What Your Morning Looks Like
            <span className="font-light"> With Propentro.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.title}
                  className="animate-on-scroll relative flex items-start gap-5 md:gap-0"
                >
                  {/* Dot on line */}
                  <div className="absolute left-5 md:left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/50 border-2 border-surface-dark z-10" />

                  {/* Desktop: alternating layout */}
                  <div className={`hidden md:flex w-full items-start ${isLeft ? "" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      <div className={`inline-flex items-center gap-2 mb-3 ${isLeft ? "flex-row-reverse" : ""}`}>
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted-on-dark bg-[#ffffff06] px-2.5 py-1 rounded-md">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-text-on-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-muted-on-dark">
                        {step.text}
                      </p>
                    </div>
                    <div className="w-1/2" />
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden pl-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted-on-dark bg-[#ffffff06] px-2.5 py-1 rounded-md">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-text-on-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted-on-dark">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing line */}
          <div className="animate-on-scroll mt-16 md:mt-20 text-center">
            <p className="font-display text-xl md:text-2xl font-semibold text-text-on-dark">
              This isn{"'"}t a demo. This is Tuesday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
