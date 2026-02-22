"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const stats = [
  { value: "50+", label: "hours saved per month", sub: "for a 100-unit portfolio" },
  { value: "0", label: "compliance deadlines missed" },
  { value: "40%", label: "fewer landlord phone calls" },
  { value: "45 min", label: "quarterly rent reviews", sub: "down from 3 days" },
];

const comparisons = [
  {
    task: "Daily rent reconciliation",
    without: "45\u201360 min/day",
    withPropentro: "5 min (automated)",
  },
  {
    task: "Monthly landlord statements",
    without: "1\u20132 full days",
    withPropentro: "20 minutes",
  },
  {
    task: "Arrears chasing",
    without: "2\u20133 hours/week",
    withPropentro: "Automated + exceptions only",
  },
  {
    task: "Compliance tracking",
    without: "Spreadsheet + anxiety",
    withPropentro: "Traffic-light dashboard",
  },
  {
    task: "Landlord update calls",
    without: "5\u201310 calls/day \u00D7 10 min",
    withPropentro: "Portal self-service",
  },
  {
    task: "Annual rent reviews (100 units)",
    without: "2\u20133 full days",
    withPropentro: "45 minutes",
  },
];

export function Numbers() {
  return (
    <section className="relative bg-[hsl(240,20%,4%)] py-24 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="section-label mb-4">The Impact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Numbers That Matter
          </h2>
        </FadeIn>

        {/* Big stats */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[hsl(258,80%,65%)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white">
                  {stat.label}
                </div>
                {stat.sub && (
                  <div className="mt-1 text-xs text-[hsl(240,10%,50%)]">
                    {stat.sub}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Comparison table */}
        <FadeIn className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,15%,8%)] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 px-5 py-3 border-b border-[hsl(240,15%,15%)] bg-[hsl(240,20%,4%)]">
              <div className="text-xs font-semibold text-[hsl(240,10%,65%)] uppercase tracking-wider">
                Task
              </div>
              <div className="text-xs font-semibold text-[hsl(240,10%,65%)] uppercase tracking-wider">
                Without Propentro
              </div>
              <div className="text-xs font-semibold text-[hsl(258,60%,55%)] uppercase tracking-wider">
                With Propentro
              </div>
            </div>

            {/* Table rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.task}
                className={`grid grid-cols-3 px-5 py-3.5 text-sm ${
                  i !== comparisons.length - 1
                    ? "border-b border-[hsl(240,15%,15%)]"
                    : ""
                }`}
              >
                <div className="text-white font-medium pr-4">{row.task}</div>
                <div className="text-[hsl(240,10%,55%)] pr-4">{row.without}</div>
                <div className="text-[hsl(258,80%,65%)] font-medium">
                  {row.withPropentro}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
