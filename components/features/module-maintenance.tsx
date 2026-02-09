"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Gauge,
  Route,
  MonitorSmartphone,
  Receipt,
  ChevronRight,
} from "lucide-react";

const highlights = [
  { icon: Gauge, label: "Auto-approval thresholds" },
  { icon: Route, label: "Smart contractor routing" },
  { icon: MonitorSmartphone, label: "Digital tracking" },
  { icon: Receipt, label: "Integrated invoicing" },
];

const steps = [
  { label: "Tenant Request", sub: "Submitted" },
  { label: "Threshold Check", sub: "Auto / Manual" },
  { label: "Smart Routing", sub: "Category Match" },
  { label: "Contractor Assigned", sub: "Notified" },
  { label: "In Progress", sub: "Tracking" },
  { label: "Completed", sub: "Verified" },
  { label: "Invoiced", sub: "Paid" },
];

export function MaintenanceModule() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">MODULE 05</p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-text-on-dark text-balance">
            Maintenance<span className="font-light">. Without the Chaos.</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-base leading-relaxed text-text-muted-on-dark max-w-2xl mx-auto">
            A tenant submits a request. If it{"'"}s under your approval threshold, it{"'"}s auto-approved. The right contractor is auto-assigned by job category. The entire job is tracked digitally to completion and invoicing.
          </p>
        </div>

        {/* Full-width step flow */}
        <div className="animate-on-scroll w-full overflow-x-auto pb-4">
          <div className="flex items-center min-w-[800px] mx-auto max-w-5xl">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                  </div>
                  <span className="text-xs font-semibold text-text-on-dark">{step.label}</span>
                  <span className="text-[10px] text-text-muted-on-dark mt-0.5">{step.sub}</span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-text-muted-on-dark shrink-0 -mt-6 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="stagger-children mt-12 flex flex-wrap items-center justify-center gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="animate-on-scroll flex items-center gap-2.5 text-sm text-text-on-dark">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                {h.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
