"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, MonitorSmartphone, Wrench, Bell, Palette } from "lucide-react";

const highlights = [
  { icon: Users, label: "Landlord portal: real-time rent status, statements, maintenance" },
  { icon: MonitorSmartphone, label: "Tenant portal: submit requests, view lease, make payments" },
  { icon: Wrench, label: "Contractor portal: accept jobs, upload completion photos" },
  { icon: Bell, label: "Automated notifications (reduce inbound calls by ~40%)" },
  { icon: Palette, label: "Branded to your firm" },
];

const portalScreens = [
  {
    title: "Landlord Portal",
    items: [
      { label: "Rent Status", value: "All collected", color: "text-emerald-600" },
      { label: "This Month", value: "\u20AC4,850", color: "text-foreground" },
      { label: "Open Maintenance", value: "1 ticket", color: "text-amber-500" },
      { label: "Compliance", value: "100% valid", color: "text-emerald-600" },
    ],
  },
  {
    title: "Tenant Portal",
    items: [
      { label: "Next Rent Due", value: "1 Mar 2026", color: "text-foreground" },
      { label: "Lease Expires", value: "Sep 2026", color: "text-foreground" },
      { label: "Maintenance", value: "Ticket #1847 resolved", color: "text-emerald-600" },
      { label: "Documents", value: "3 available", color: "text-foreground" },
    ],
  },
];

export function PortalsModule() {
  const ref = useScrollAnimation();

  return (
    <section id="portals" ref={ref} className="bg-surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          {/* Visual left */}
          <div className="animate-on-scroll flex-1 w-full space-y-4">
            {portalScreens.map((screen) => (
              <div
                key={screen.title}
                className="rounded-xl border border-[#1e1b2e] bg-surface-dark-secondary p-5 md:p-6"
              >
                <div className="text-xs font-medium text-text-muted-on-dark mb-4">
                  {screen.title}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {screen.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-[#1e1b2e] bg-surface-dark p-3"
                    >
                      <div className="text-[10px] text-text-muted-on-dark">
                        {item.label}
                      </div>
                      <div className={`text-sm font-semibold mt-1 ${item.color === "text-foreground" ? "text-text-on-dark" : item.color}`}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Text right */}
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">PORTALS</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-text-on-dark">
              Stop Answering the Same Questions
              <span className="font-light">.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-text-muted-on-dark">
              Landlords call 5 times a day: {"'"}Is the rent in?{"'"} Tenants email
              about their lease. Contractors need job details. Give everyone
              their own portal \u2014 real-time data, fewer calls, happier
              relationships.
            </p>
            <div className="stagger-children mt-8 space-y-3">
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
        </div>
      </div>
    </section>
  );
}
