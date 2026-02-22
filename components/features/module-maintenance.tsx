"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Monitor, Zap, UserCheck, Camera, ClipboardCheck, FileText } from "lucide-react";

const highlights = [
  { icon: Monitor, label: "Tenant self-service portal (submit + track requests)" },
  { icon: Zap, label: "Auto-triage by cost threshold (under \u20AC200 = auto-approve)" },
  { icon: UserCheck, label: "Preferred contractor auto-notification" },
  { icon: Camera, label: "Photo/video attachments at every stage" },
  { icon: ClipboardCheck, label: "Landlord approval workflow for bigger jobs" },
  { icon: FileText, label: "Full audit trail: who requested, approved, completed, paid" },
];

const tickets = [
  { id: "#1847", issue: "Leak \u2014 Kitchen tap", unit: "Unit 9A", cost: "\u20AC150", status: "Auto-approved", color: "text-emerald-600" },
  { id: "#1846", issue: "Boiler service", unit: "Unit 3C", cost: "\u20AC380", status: "Awaiting approval", color: "text-amber-600" },
  { id: "#1845", issue: "Window lock broken", unit: "Unit 12A", cost: "\u20AC85", status: "Completed", color: "text-[#a78bfa]" },
  { id: "#1844", issue: "Damp patch \u2014 bedroom", unit: "Unit 7C", cost: "TBC", status: "Contractor dispatched", color: "text-blue-500" },
];

export function MaintenanceModule() {
  const ref = useScrollAnimation();

  return (
    <section id="maintenance" ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">MAINTENANCE</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Stop Being
              <span className="font-light"> the Middleman.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              A tenant WhatsApps you a photo of a leak at 11pm. You save it somewhere,
              text a plumber, call the landlord&hellip; and forget to follow up. Propentro
              lets tenants submit requests directly, auto-triages by cost threshold, and
              notifies your preferred contractors. You handle the exceptions only.
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
            <div className="rounded-xl border border-border bg-secondary p-5 md:p-6">
              <div className="text-xs font-medium text-muted-foreground mb-4">Maintenance Queue</div>
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">
                        {ticket.id} {ticket.issue}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        {ticket.unit} &middot; {ticket.cost}
                      </div>
                    </div>
                    <span className={`text-[10px] font-medium ${ticket.color} shrink-0`}>
                      {ticket.status}
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
