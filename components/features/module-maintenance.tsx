"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  MonitorSmartphone,
  Gauge,
  Route,
  ImageIcon,
  ShieldCheck,
  History,
  ChevronRight,
} from "lucide-react";

const highlights = [
  { icon: MonitorSmartphone, label: "Tenant self-service portal (submit + track requests)" },
  { icon: Gauge, label: "Auto-triage by cost threshold (under \u20AC200 = auto-approve)" },
  { icon: Route, label: "Preferred contractor auto-notification" },
  { icon: ImageIcon, label: "Photo/video attachments at every stage" },
  { icon: ShieldCheck, label: "Landlord approval workflow for bigger jobs" },
  { icon: History, label: "Full audit trail: who requested, approved, completed, paid" },
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
    <section id="maintenance" ref={ref} className="bg-surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            MAINTENANCE
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-text-on-dark text-balance">
            Stop Being the Middleman
            <span className="font-light">.</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-base leading-relaxed text-text-muted-on-dark max-w-2xl mx-auto">
            A tenant WhatsApps you a photo of a leak at 11pm. You save it
            somewhere, text a plumber, call the landlord... and forget to follow
            up. Propentro automates the entire workflow \u2014 you handle exceptions
            only.
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
                  <span className="text-xs font-semibold text-text-on-dark">
                    {step.label}
                  </span>
                  <span className="text-[10px] text-text-muted-on-dark mt-0.5">
                    {step.sub}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-text-muted-on-dark shrink-0 -mt-6 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="stagger-children mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                className="animate-on-scroll flex items-start gap-2.5 text-sm text-text-on-dark"
              >
                <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{h.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
