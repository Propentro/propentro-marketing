"use client";

import React from "react";
import {
  Building2,
  Users,
  FileText,
  Banknote,
  Wrench,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const modules = [
  {
    icon: Building2,
    name: "Properties & Portfolio",
    description:
      "Manage every property and unit in a clear hierarchy. See occupancy, financials, compliance status, and maintenance at a glance \u2014 from a studio flat to a 200-unit development.",
  },
  {
    icon: Users,
    name: "People & Contacts",
    description:
      "One place for tenants, landlords, contractors, and suppliers. Full interaction history, every call logged, every email tracked. Never lose context on anyone.",
  },
  {
    icon: FileText,
    name: "Leasing & Tenancies",
    description:
      "From lease creation to renewal to termination \u2014 with RPZ-compliant rent increase calculations and legally correct notice periods generated automatically.",
  },
  {
    icon: Banknote,
    name: "Financial Operations",
    description:
      "Rent ledger per tenant. Arrears dashboard with aging. Open Banking auto-reconciliation. Management fee calculation. Landlord statement generation. Automated payouts.",
  },
  {
    icon: Wrench,
    name: "Maintenance",
    description:
      "Structured request handling, threshold-based landlord approvals, smart contractor assignment, before/after photos, cost tracking, recurring maintenance scheduling.",
  },
  {
    icon: ShieldCheck,
    name: "Compliance & Legal",
    description:
      "Track every certificate and deadline: BER, gas, fire safety, insurance, RTB registration. Traffic-light dashboard. Automated reminders. Country-specific legal automation.",
  },
  {
    icon: BarChart3,
    name: "Insights & Reporting",
    description:
      "Financial reports, operational dashboards, landlord P&L, arrears aging, compliance overview, vacancy tracking. Export as PDF or CSV. Scheduled delivery.",
  },
];

export function Platform() {
  return (
    <section
      id="platform"
      className="relative bg-[hsl(240,20%,4%)] py-24 md:py-32 border-t border-white/[0.04]"
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 purple-glow opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="section-label mb-4">The Platform</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            One Platform. Every Workflow. Zero Gaps.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {modules.map((mod) => (
            <StaggerItem key={mod.name}>
              <div className="group h-full rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,15%,8%)] p-6 hover:border-[hsl(258,60%,55%)]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[hsl(258,80%,65%)]/[0.03]">
                <mod.icon className="w-6 h-6 text-[hsl(258,80%,65%)] mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {mod.name}
                </h3>
                <p className="text-sm text-[hsl(240,10%,65%)] leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
