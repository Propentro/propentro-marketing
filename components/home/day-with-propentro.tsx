"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Banknote, Wrench, UserCheck } from "lucide-react";

const scenarios = [
  {
    icon: Banknote,
    label: "Rent Day",
    before: "45 minutes matching payments. Manual chasing. Landlords asking \u2018Is the rent in?\u2019 all day.",
    after: "47 out of 50 payments matched overnight. The 3 overdue tenants already have automated reminders sent. You just handle the exceptions.",
    mockup: [
      { tenant: "J. Murphy \u2014 Unit 4B", amount: "\u20AC1,450", status: "Matched", color: "text-emerald-400" },
      { tenant: "S. O\u2019Brien \u2014 Unit 12A", amount: "\u20AC1,200", status: "Matched", color: "text-emerald-400" },
      { tenant: "K. Walsh \u2014 Unit 7C", amount: "\u20AC1,100", status: "Overdue", color: "text-red-400" },
      { tenant: "M. Byrne \u2014 Unit 2A", amount: "\u20AC1,350", status: "Matched", color: "text-emerald-400" },
    ],
  },
  {
    icon: Wrench,
    label: "The 11pm Leak",
    before: "Tenant WhatsApps a photo. You save it somewhere, text a plumber, call the landlord\u2026 forget to follow up.",
    after: "Tenant submitted a request. Under the \u20AC200 threshold \u2014 auto-approved. Your preferred plumber was notified. You see the completed ticket in the morning.",
    mockup: [
      { tenant: "Leak reported \u2014 Unit 9A", amount: "\u20AC150", status: "Auto-approved", color: "text-emerald-400" },
      { tenant: "Plumber notified", amount: "T. Gallagher", status: "Dispatched", color: "text-[#a78bfa]" },
      { tenant: "Photos uploaded", amount: "3 images", status: "Attached", color: "text-text-muted-on-dark" },
      { tenant: "Completed next day", amount: "\u20AC135 final", status: "Closed", color: "text-emerald-400" },
    ],
  },
  {
    icon: UserCheck,
    label: "The Landlord Call",
    before: "\u2018Is the rent in?\u2019 takes 10 minutes to answer. Dig through emails, spreadsheets, and bank apps.",
    after: "Pull up their portfolio in 2 seconds. Rent status, maintenance updates, compliance \u2014 everything. Or better: they check their own portal.",
    mockup: [
      { tenant: "Portfolio: D. Fitzgerald", amount: "12 units", status: "Active", color: "text-emerald-400" },
      { tenant: "Rent collected", amount: "\u20AC14,400/\u20AC15,600", status: "92%", color: "text-amber-400" },
      { tenant: "Open maintenance", amount: "2 tickets", status: "In progress", color: "text-[#a78bfa]" },
      { tenant: "Compliance", amount: "All certs", status: "Valid", color: "text-emerald-400" },
    ],
  },
];

export function DayWithPropentro() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            A DAY WITH PROPENTRO
          </p>
          <p className="animate-on-scroll mt-3 text-sm text-muted-foreground">
            This isn&apos;t a demo. This is Tuesday.
          </p>
        </div>

        <div className="stagger-children space-y-6">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;
            return (
              <div
                key={scenario.label}
                className="animate-on-scroll rounded-xl border border-border bg-background overflow-hidden"
              >
                {/* Scenario header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {scenario.label}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Before / After text */}
                  <div className="p-6 flex flex-col gap-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-destructive/70 mb-1.5">Without Propentro</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{scenario.before}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600/70 mb-1.5">With Propentro</p>
                      <p className="text-sm leading-relaxed text-foreground/80">{scenario.after}</p>
                    </div>
                  </div>

                  {/* Mini mockup */}
                  <div className="p-6 lg:border-l border-t lg:border-t-0 border-border bg-surface-dark">
                    <div className="rounded-lg border border-[#1e1b2e] bg-[#13111f] overflow-hidden">
                      <div className="px-4 py-2.5 border-b border-[#1e1b2e]">
                        <div className="text-[10px] font-medium text-[#6b6584]">
                          {scenario.label === "Rent Day" && "Rent Reconciliation"}
                          {scenario.label === "The 11pm Leak" && "Maintenance Ticket #1847"}
                          {scenario.label === "The Landlord Call" && "Landlord Portfolio Summary"}
                        </div>
                      </div>
                      <div className="divide-y divide-[#1e1b2e]">
                        {scenario.mockup.map((row, i) => (
                          <div key={i} className="flex items-center justify-between px-4 py-2.5 text-xs">
                            <div className="flex-1 min-w-0">
                              <div className="text-[#c4bfd4] font-medium truncate">{row.tenant}</div>
                              <div className="text-[#6b6584] mt-0.5">{row.amount}</div>
                            </div>
                            <span className={`${row.color} font-medium text-[10px] ml-3 shrink-0`}>{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
