"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check } from "lucide-react";

/* ─── Inline UI visuals ────────────────────────────────────────────────── */

function ContactsVisual() {
  const contacts = [
    { name: "James Murphy", roles: ["Tenant", "Owner"], unit: "Unit 4B" },
    { name: "Sarah O'Brien", roles: ["Tenant"], unit: "Unit 12A" },
    { name: "Dublin PM Ltd", roles: ["Supplier"], unit: "" },
    { name: "Patrick Byrne", roles: ["Owner"], unit: "Block A" },
  ];
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 space-y-2">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Contacts
      </div>
      {contacts.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-primary">
              {c.name[0]}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground">{c.name}</div>
            {c.unit && (
              <div className="text-[10px] text-muted-foreground">{c.unit}</div>
            )}
          </div>
          <div className="flex gap-1 flex-wrap justify-end">
            {c.roles.map((r) => (
              <span
                key={r}
                className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PropertyVisual() {
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 space-y-2">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Property Hierarchy
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3">
          <span className="text-xs font-semibold text-primary">▸</span>
          <span className="text-xs font-semibold text-foreground">
            Clonskeagh Portfolio
          </span>
          <span className="ml-auto text-[10px] text-muted-foreground">
            Group
          </span>
        </div>
        <div className="ml-4 space-y-1.5">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3">
            <span className="text-xs font-semibold text-primary">▸</span>
            <span className="text-xs font-medium text-foreground">
              Block A — 24 units
            </span>
            <span className="ml-auto text-[10px] text-muted-foreground">
              Building
            </span>
          </div>
          <div className="ml-4 space-y-1">
            {["Unit 1A", "Unit 1B", "Unit 2A"].map((u) => (
              <div
                key={u}
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5"
              >
                <span className="text-xs text-foreground">{u}</span>
                <span className="ml-auto text-[10px] text-emerald-600 font-medium">
                  Occupied
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinancialVisual() {
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 space-y-3">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Financial Operations
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Collected", value: "€48,500", color: "text-foreground" },
          { label: "Disbursed", value: "€41,200", color: "text-foreground" },
          { label: "Pending", value: "€2,300", color: "text-amber-500" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-background p-3 text-center"
          >
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
            <div className={`text-sm font-semibold mt-1 ${s.color}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { ref: "SEPA-0125-001", desc: "Owner disbursement — D. Fitzgerald", amount: "€4,850", status: "Sent" },
          { ref: "SEPA-0125-002", desc: "Owner disbursement — M. Clarke", amount: "€3,100", status: "Sent" },
          { ref: "SEPA-0125-003", desc: "Supplier — Dublin Plumbing", amount: "€285", status: "Pending" },
        ].map((tx) => (
          <div
            key={tx.ref}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5"
          >
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-medium text-foreground truncate">
                {tx.ref}
              </div>
              <div className="text-[10px] text-muted-foreground truncate">
                {tx.desc}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xs font-semibold text-foreground">
                {tx.amount}
              </div>
              <div
                className={`text-[9px] font-medium ${tx.status === "Sent" ? "text-emerald-600" : "text-amber-500"}`}
              >
                {tx.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComplianceVisual() {
  const docs = [
    { name: "Gas Safety Certificate", unit: "Block A", expires: "2026-03-15", status: "valid" },
    { name: "BER Certificate", unit: "Unit 4B", expires: "2026-01-20", status: "expiring" },
    { name: "RTB Registration", unit: "Unit 12A", expires: "2026-06-01", status: "valid" },
    { name: "Insurance Policy", unit: "All units", expires: "2025-11-30", status: "expired" },
  ];
  const statusStyles: Record<string, string> = {
    valid: "text-emerald-600 bg-emerald-50",
    expiring: "text-amber-600 bg-amber-50",
    expired: "text-red-500 bg-red-50",
  };
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 space-y-2">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Compliance Tracker
      </div>
      {docs.map((d) => (
        <div
          key={d.name}
          className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-3"
        >
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-foreground truncate">
              {d.name}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {d.unit} · Exp {d.expires}
            </div>
          </div>
          <span
            className={`text-[9px] font-semibold px-2 py-0.5 rounded-full capitalize ${statusStyles[d.status]}`}
          >
            {d.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function MaintenanceVisual() {
  return (
    <div className="rounded-xl border border-border bg-secondary p-5 space-y-3">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Maintenance — Work Order #1847
      </div>
      <div className="space-y-2">
        {[
          { time: "11:14 PM", label: "Tenant submitted request", sub: "Unit 6A — Leaking pipe", dot: "bg-primary" },
          { time: "11:14 PM", label: "Auto-triage: Under €200", sub: "Auto-approved per policy", dot: "bg-emerald-500" },
          { time: "11:15 PM", label: "Contractor notified", sub: "Dublin Plumbing Services", dot: "bg-primary" },
          { time: "8:30 AM", label: "Job completed", sub: "Cost: €85 · Resolved in 9h", dot: "bg-emerald-500" },
        ].map((step, i, arr) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center mt-1">
              <div className={`w-2 h-2 rounded-full ${step.dot} shrink-0`} />
              {i < arr.length - 1 && <div className="w-px h-7 bg-border mt-1" />}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">{step.time}</span>
                <span className="text-xs font-medium text-foreground">{step.label}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Feature data ─────────────────────────────────────────────────────── */

const features = [
  {
    label: "CONTACTS & RELATIONSHIPS",
    title: "Flexible contacts that model real-world complexity.",
    description:
      "People and organisations can hold multiple roles — tenant, owner, supplier, contractor — without duplication. Every interaction, document, and transaction is linked.",
    bullets: [
      "Multi-role contacts (tenant + owner, director + guarantor)",
      "Full interaction and document history per contact",
      "Linked to properties, leases, and finances automatically",
    ],
    visual: <ContactsVisual />,
  },
  {
    label: "PROPERTY HIERARCHY",
    title: "From single lets to large multi-unit blocks.",
    description:
      "Model your portfolio accurately. Groups, buildings, units, and their relationships are first-class concepts, not afterthoughts. Track BER ratings, floor plans, and compliance status per unit.",
    bullets: [
      "Groups → Buildings → Units hierarchy",
      "Per-unit BER ratings, compliance status, attributes",
      "Portfolio-level and unit-level reporting",
    ],
    visual: <PropertyVisual />,
  },
  {
    label: "FINANCIAL OPERATIONS",
    title: "Rent collection, payments, and reporting in one place.",
    description:
      "Built for SEPA, with clear audit trails and automated reconciliation. No more cross-referencing bank statements against spreadsheets.",
    bullets: [
      "Auto-matched rent payments and arrears chasing",
      "SEPA owner disbursements with full audit trail",
      "Supplier payments, expense tracking, VAT reporting",
    ],
    visual: <FinancialVisual />,
  },
  {
    label: "COMPLIANCE & DOCUMENTS",
    title: "Centralised documents with automated reminders.",
    description:
      "Automated reminders for lease renewals, RTB registrations, insurance expiry, and certification deadlines. Every document linked to its property and contact.",
    bullets: [
      "90-day early warnings for every expiry",
      "RTB, BER, gas safety, insurance all in one place",
      "Documents auto-linked to property and contact",
    ],
    visual: <ComplianceVisual />,
  },
  {
    label: "MAINTENANCE & WORK ORDERS",
    title: "From request to resolution with full cost tracking.",
    description:
      "Tenants report issues, property managers triage and assign, contractors get notified, owners see costs — a complete workflow that runs itself.",
    bullets: [
      "Tenant portal for submitting requests",
      "Auto-triage by cost threshold and contractor rules",
      "Full cost tracking linked to property and owner",
    ],
    visual: <MaintenanceVisual />,
  },
];

/* ─── Component ────────────────────────────────────────────────────────── */

export function FeaturesSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            WHAT PROPENTRO DOES
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Every module connected
            <span className="font-light">. Nothing in silos.</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`animate-on-scroll flex flex-col gap-10 lg:gap-16 lg:flex-row lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1 lg:max-w-[480px]">
                <p className="section-label text-accent mb-4">{f.label}</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-[1.2] mb-4">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  {f.description}
                </p>
                <ul className="space-y-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1">{f.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
