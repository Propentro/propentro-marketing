"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const rows = [
  {
    task: "Daily rent reconciliation",
    without: "45 min/day",
    withP: "5 min/day",
    savings: "~10 hours",
  },
  {
    task: "Monthly landlord reports",
    without: "1\u20132 full days",
    withP: "20 minutes",
    savings: "~12 hours",
  },
  {
    task: "Arrears management",
    without: "2\u20133 hrs/week",
    withP: "Automated",
    savings: "~8 hours",
  },
  {
    task: "Compliance tracking",
    without: "Spreadsheet + hope",
    withP: "Dashboard",
    savings: "Priceless",
  },
  {
    task: "Landlord update calls",
    without: "5\u201310/day \u00D7 10 min",
    withP: "Portal handles it",
    savings: "~15 hours",
  },
];

export function TheNumbers() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(264 30% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(264 30% 95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            THE MATH
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-text-on-dark text-balance">
            Time You Get Back
            <span className="font-light">. Every Month.</span>
          </h2>
        </div>

        {/* Table */}
        <div className="animate-on-scroll rounded-xl border border-[#1e1b2e] bg-surface-dark-secondary overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 border-b border-[#1e1b2e] text-[10px] font-semibold uppercase tracking-widest text-text-muted-on-dark">
            <span>Task</span>
            <span>Without Propentro</span>
            <span>With Propentro</span>
            <span>Monthly Savings</span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.task}
              className={`grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 ${
                i < rows.length - 1 ? "border-b border-[#1e1b2e]" : ""
              }`}
            >
              <div className="text-sm font-medium text-text-on-dark">{row.task}</div>
              <div className="flex md:block">
                <span className="md:hidden text-[10px] text-text-muted-on-dark mr-2">Before:</span>
                <span className="text-sm text-text-muted-on-dark">{row.without}</span>
              </div>
              <div className="flex md:block">
                <span className="md:hidden text-[10px] text-text-muted-on-dark mr-2">After:</span>
                <span className="text-sm text-accent font-medium">{row.withP}</span>
              </div>
              <div className="flex md:block">
                <span className="md:hidden text-[10px] text-text-muted-on-dark mr-2">Saved:</span>
                <span className="text-sm font-semibold text-emerald-400">{row.savings}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="animate-on-scroll mt-10 text-center">
          <p className="font-display text-lg md:text-xl font-semibold text-text-on-dark text-balance">
            A firm managing 100 units saves 50+ hours every month.
          </p>
          <p className="mt-2 text-sm text-text-muted-on-dark">
            That{"'"}s managing 50 more units with the same team \u2014 or finally
            leaving the office by 6pm.
          </p>
        </div>
      </div>
    </section>
  );
}
