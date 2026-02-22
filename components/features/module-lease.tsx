"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, Bell, FileText, Scale, Shield, FileCheck } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "Lease timeline: expiry, break clauses, renewal windows" },
  { icon: Bell, label: "6-month advance alerts" },
  { icon: FileText, label: "Auto-generate renewal offers with RPZ-compliant rent" },
  { icon: Scale, label: "Part 4 tenancy tracking (Ireland-specific)" },
  { icon: Shield, label: "Section 21 notice management (UK)" },
  { icon: FileCheck, label: "Document templates: new lease, renewal, termination" },
];

const leases = [
  { tenant: "J. Murphy \u2014 Unit 4B", expiry: "14 Aug 2026", daysLeft: "173 days", status: "Active", color: "text-emerald-600" },
  { tenant: "S. O\u2019Brien \u2014 Unit 12A", expiry: "02 Apr 2026", daysLeft: "39 days", status: "Renewal due", color: "text-amber-600" },
  { tenant: "K. Walsh \u2014 Unit 7C", expiry: "28 Feb 2026", daysLeft: "6 days", status: "Expiring", color: "text-red-500" },
  { tenant: "M. Byrne \u2014 Unit 2A", expiry: "30 Nov 2026", daysLeft: "281 days", status: "Active", color: "text-emerald-600" },
];

export function LeaseModule() {
  const ref = useScrollAnimation();

  return (
    <section id="leases" ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20">
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">LEASES</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              See Every Renewal Before
              <span className="font-light"> It Surprises You.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Lease expires next month, nobody noticed until the tenant asks. Propentro
              shows every lease expiry 6 months ahead, auto-generates renewal offers with
              RPZ-compliant rent calculations, and tracks Part 4 tenancies so you never
              miss a legal deadline.
            </p>
            <div className="stagger-children mt-8 space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-start gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-background p-5 md:p-6">
              <div className="text-xs font-medium text-muted-foreground mb-4">Lease Renewals Timeline</div>
              <div className="space-y-3">
                {leases.map((lease) => (
                  <div key={lease.tenant} className="flex items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">{lease.tenant}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        Expires: {lease.expiry} &middot; {lease.daysLeft}
                      </div>
                    </div>
                    <span className={`text-[10px] font-medium ${lease.color} shrink-0`}>
                      {lease.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
