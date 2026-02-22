"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Home, Wrench, Bell, Palette } from "lucide-react";

const highlights = [
  { icon: Users, label: "Landlord portal: real-time rent status, statements, maintenance" },
  { icon: Home, label: "Tenant portal: submit requests, view lease, make payments" },
  { icon: Wrench, label: "Contractor portal: accept jobs, upload completion photos" },
  { icon: Bell, label: "Automated notifications (reduce inbound calls by ~40%)" },
  { icon: Palette, label: "Branded to your firm" },
];

export function PortalsModule() {
  const ref = useScrollAnimation();

  return (
    <section id="portals" ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20">
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">PORTALS</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Stop Answering
              <span className="font-light"> the Same Questions.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Landlords call 5 times a day: &ldquo;Is the rent in?&rdquo; Tenants email about
              their lease terms. Contractors chase for job details. Give each stakeholder
              their own portal with real-time information — branded to your firm. Fewer calls,
              fewer emails, more time for actual management.
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
              <div className="text-xs font-medium text-muted-foreground mb-4">Stakeholder Portals</div>
              <div className="space-y-4">
                {[
                  {
                    role: "Landlord Portal",
                    icon: Users,
                    features: ["Real-time rent status", "Monthly statements", "Maintenance updates", "Compliance overview"],
                  },
                  {
                    role: "Tenant Portal",
                    icon: Home,
                    features: ["Submit maintenance requests", "View lease details", "Payment history", "Document access"],
                  },
                  {
                    role: "Contractor Portal",
                    icon: Wrench,
                    features: ["Accept/decline jobs", "Upload completion photos", "Submit invoices", "Job history"],
                  },
                ].map((portal) => {
                  const Icon = portal.icon;
                  return (
                    <div key={portal.role} className="rounded-lg border border-border bg-secondary p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">{portal.role}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {portal.features.map((f) => (
                          <div key={f} className="text-[10px] text-muted-foreground">&bull; {f}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
