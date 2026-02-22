"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, Bell, FileText, Scale, ShieldCheck, FileStack } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "Lease timeline: expiry, break clauses, renewal windows" },
  { icon: Bell, label: "6-month advance alerts" },
  { icon: FileText, label: "Auto-generate renewal offers with RPZ-compliant rent" },
  { icon: Scale, label: "Part 4 tenancy tracking (Ireland-specific)" },
  { icon: ShieldCheck, label: "Section 21 notice management (UK)" },
  { icon: FileStack, label: "Document templates: new lease, renewal, termination" },
];

const stages = [
  { label: "Draft", status: "Created", date: "Jan 3" },
  { label: "Review", status: "In Review", date: "Jan 5" },
  { label: "Signature", status: "Signed", date: "Jan 8" },
  { label: "Active", status: "Live", date: "Jan 10" },
  { label: "Renewal", status: "Alert Sent", date: "Dec 1" },
  { label: "Renewed", status: "Complete", date: "Dec 20" },
];

export function LeaseModule() {
  const ref = useScrollAnimation();

  return (
    <section id="leases" ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            LEASES
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            See Every Renewal
            <span className="font-light"> Before It Surprises You.</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            A lease expires next month and nobody noticed until the tenant asks.
            Propentro gives you visibility into every expiry, break clause, and
            renewal window  six months ahead.
          </p>
        </div>

        {/* Full-width pipeline */}
        <div className="animate-on-scroll w-full overflow-x-auto pb-4">
          <div className="flex items-center gap-0 min-w-[700px] mx-auto max-w-4xl">
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-3 shadow-sm">
                    <span className="text-xs font-semibold text-primary">{i + 1}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{stage.label}</span>
                  <span className="text-[10px] text-muted-foreground mt-1">{stage.status}</span>
                  <span className="text-[10px] text-accent mt-0.5">{stage.date}</span>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex-1 h-px bg-border min-w-[24px] -mt-8" />
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
              <div key={h.label} className="animate-on-scroll flex items-start gap-2.5 text-sm text-foreground">
                <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{h.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
