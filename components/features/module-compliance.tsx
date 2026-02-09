"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Clock, AlertTriangle, Globe, BellRing } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Automated deadline tracking" },
  { icon: AlertTriangle, label: "Risk scoring" },
  { icon: Globe, label: "Multi-jurisdiction" },
  { icon: BellRing, label: "Proactive alerts" },
];

const deadlines = [
  { item: "Gas Safety Cert — Block A", property: "Riverside Court", daysLeft: 42, urgency: "ok" as const },
  { item: "Insurance Renewal", property: "Oak House", daysLeft: 14, urgency: "warn" as const },
  { item: "EPC Certificate — Unit 3", property: "Park View", daysLeft: 3, urgency: "danger" as const },
  { item: "Fire Alarm Inspection", property: "The Elms", daysLeft: -2, urgency: "overdue" as const },
  { item: "Lease Expiry — Unit 9A", property: "Riverside Court", daysLeft: 28, urgency: "ok" as const },
];

function urgencyStyle(u: "ok" | "warn" | "danger" | "overdue") {
  switch (u) {
    case "ok":
      return { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" };
    case "warn":
      return { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" };
    case "danger":
      return { bg: "bg-red-50", text: "text-red-600", dot: "bg-red-500" };
    case "overdue":
      return { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-600" };
  }
}

export function ComplianceModule() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          {/* Visual left: deadline timeline */}
          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-secondary p-5 md:p-6">
              <div className="text-xs font-medium text-muted-foreground mb-4">Upcoming Deadlines</div>
              <div className="space-y-2.5">
                {deadlines.map((d) => {
                  const s = urgencyStyle(d.urgency);
                  return (
                    <div key={d.item} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                      <div className={`w-2 h-2 rounded-full ${s.dot} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-foreground truncate">{d.item}</div>
                        <div className="text-[10px] text-muted-foreground">{d.property}</div>
                      </div>
                      <span className={`text-[10px] font-medium px-2.5 py-1 rounded-md ${s.bg} ${s.text}`}>
                        {d.daysLeft < 0 ? `${Math.abs(d.daysLeft)}d overdue` : `${d.daysLeft}d left`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Text right */}
          <div className="flex-1 lg:max-w-md">
            <p className="animate-on-scroll section-label text-accent mb-5">MODULE 06</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Never Miss a Deadline
              <span className="font-light">. Ever.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Insurance renewals, gas certs, electrical inspections, lease expiry — Propentro tracks every deadline across your portfolio and alerts you before anything lapses. Risk scoring surfaces the properties and tenants that need attention before problems escalate.
            </p>
            <div className="stagger-children mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-center gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
