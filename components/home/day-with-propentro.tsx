"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Landmark, Wrench, BarChart3, Check, X } from "lucide-react";

const scenarios = [
  {
    id: "rent",
    icon: Landmark,
    tab: "Rent Day",
    title: "Rent Day",
    description:
      "47 out of 50 payments matched overnight. The 3 overdue tenants already have automated reminders sent. You just handle the exceptions.",
    visual: "bank-feed",
  },
  {
    id: "leak",
    icon: Wrench,
    tab: "The 11pm Leak",
    title: "The 11pm Leak",
    description:
      "Tenant submitted a request. Under the \u20AC200 threshold \u2014 auto-approved. Your preferred plumber was notified. You see the completed ticket in the morning.",
    visual: "maintenance",
  },
  {
    id: "landlord",
    icon: BarChart3,
    tab: "The Landlord Call",
    title: "The Landlord Call",
    description:
      "\u2018Is the rent in?\u2019 Pull up their portfolio in 2 seconds. Rent status, maintenance updates, compliance \u2014 everything. Or better: they check their own portal.",
    visual: "portfolio",
  },
];

function BankFeedVisual() {
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 md:p-6 space-y-3">
      <div className="text-xs font-medium text-muted-foreground mb-4">
        Bank Feed Auto-Match
      </div>
      {[
        { ref: "RENT-4B-0125", amount: "+\u20AC1,450.00", tenant: "J. Murphy \u2014 Unit 4B", matched: true },
        { ref: "RENT-12A-0125", amount: "+\u20AC1,200.00", tenant: "S. O\u2019Brien \u2014 Unit 12A", matched: true },
        { ref: "RENT-7C-0125", amount: "\u20AC0.00", tenant: "K. Walsh \u2014 Unit 7C", matched: false },
        { ref: "RENT-9A-0125", amount: "+\u20AC1,100.00", tenant: "P. Byrne \u2014 Unit 9A", matched: true },
        { ref: "RENT-2D-0125", amount: "+\u20AC950.00", tenant: "M. Doyle \u2014 Unit 2D", matched: true },
      ].map((tx) => (
        <div
          key={tx.ref}
          className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
        >
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground truncate">
              {tx.ref}
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">
              {tx.tenant}
            </div>
          </div>
          <span
            className={`text-xs font-semibold ${
              tx.matched ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {tx.amount}
          </span>
          {tx.matched ? (
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <X className="w-3.5 h-3.5 text-red-500" />
            </div>
          )}
        </div>
      ))}
      <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[10px] font-medium text-muted-foreground">47 of 50 matched</span>
        <span className="text-[10px] font-medium text-emerald-600">94% auto-matched</span>
      </div>
    </div>
  );
}

function MaintenanceVisual() {
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 md:p-6 space-y-4">
      <div className="text-xs font-medium text-muted-foreground mb-2">
        Maintenance Ticket #1847
      </div>
      <div className="space-y-3">
        {[
          { time: "11:14 PM", label: "Tenant submitted request", sub: "Unit 6A \u2014 Leaking pipe in bathroom", status: "text-text-on-dark", dot: "bg-primary" },
          { time: "11:14 PM", label: "Auto-triage: Under \u20AC200 threshold", sub: "Auto-approved per policy", status: "text-emerald-600", dot: "bg-emerald-500" },
          { time: "11:15 PM", label: "Contractor notified", sub: "Dublin Plumbing Services (preferred)", status: "text-text-on-dark", dot: "bg-primary" },
          { time: "8:30 AM", label: "Job completed", sub: "Replaced washer, leak resolved", status: "text-emerald-600", dot: "bg-emerald-500" },
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center mt-1">
              <div className={`w-2.5 h-2.5 rounded-full ${step.dot} shrink-0`} />
              {i < 3 && <div className="w-px h-8 bg-border mt-1" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">{step.time}</span>
                <span className={`text-xs font-medium ${step.status === "text-emerald-600" ? "text-emerald-600" : "text-foreground"}`}>
                  {step.label}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-3 border-t border-border flex items-center justify-between">
        <span className="text-[10px] font-medium text-muted-foreground">Total cost: \u20AC85.00</span>
        <span className="text-[10px] font-medium text-emerald-600">Resolved in 9h 16m</span>
      </div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 md:p-6 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-medium text-muted-foreground">
          Landlord: D. Fitzgerald
        </div>
        <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
          All current
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Rent Collected", value: "\u20AC4,850", sub: "This month" },
          { label: "Open Tickets", value: "1", sub: "Minor" },
          { label: "Compliance", value: "100%", sub: "All valid" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-background p-3"
          >
            <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            <div className="text-lg font-semibold text-foreground mt-1">
              {stat.value}
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { unit: "Unit 4B", tenant: "J. Murphy", rent: "\u20AC1,450", status: "Paid", color: "text-emerald-600" },
          { unit: "Unit 12A", tenant: "S. O\u2019Brien", rent: "\u20AC1,200", status: "Paid", color: "text-emerald-600" },
          { unit: "Unit 9A", tenant: "P. Byrne", rent: "\u20AC1,100", status: "Paid", color: "text-emerald-600" },
          { unit: "Unit 2D", tenant: "M. Doyle", rent: "\u20AC1,100", status: "Due tomorrow", color: "text-amber-500" },
        ].map((row) => (
          <div key={row.unit} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5">
            <div>
              <span className="text-xs font-medium text-foreground">{row.unit}</span>
              <span className="text-[10px] text-muted-foreground ml-2">{row.tenant}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-foreground">{row.rent}</span>
              <span className={`text-[10px] font-medium ${row.color}`}>{row.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DayWithPropentro() {
  const ref = useScrollAnimation();
  const [active, setActive] = useState(0);

  const visuals = [<BankFeedVisual key="bank" />, <MaintenanceVisual key="maint" />, <PortfolioVisual key="port" />];

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            A DAY WITH PROPENTRO
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            See How It Actually Works
            <span className="font-light">.</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="animate-on-scroll flex flex-wrap items-center justify-center gap-2 mb-10">
          {scenarios.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                {s.tab}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="animate-on-scroll flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1 lg:max-w-md">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {scenarios[active].title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {scenarios[active].description}
            </p>
            <p className="mt-6 font-display text-lg font-semibold text-foreground">
              This isn{"'"}t a demo. This is Tuesday.
            </p>
          </div>
          <div className="flex-1 w-full">{visuals[active]}</div>
        </div>
      </div>
    </section>
  );
}
