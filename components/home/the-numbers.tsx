"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const rows = [
  {
    task: "Daily rent reconciliation",
    without: "45 min/day",
    with: "5 min/day",
    savings: "~10 hours",
  },
  {
    task: "Monthly landlord reports",
    without: "1\u20132 full days",
    with: "20 minutes",
    savings: "~12 hours",
  },
  {
    task: "Arrears management",
    without: "2\u20133 hrs/week",
    with: "Automated",
    savings: "~8 hours",
  },
  {
    task: "Compliance tracking",
    without: "Spreadsheet + hope",
    with: "Dashboard",
    savings: "Priceless",
  },
  {
    task: "Landlord update calls",
    without: "5\u201310/day \u00D7 10 min",
    with: "Portal handles it",
    savings: "~15 hours",
  },
];

export function TheNumbers() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            THE MATH
          </p>
        </div>

        <div className="animate-on-scroll overflow-x-auto rounded-xl border border-border bg-background">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3.5 font-medium text-foreground">Task</th>
                <th className="text-left px-5 py-3.5 font-medium text-foreground hidden sm:table-cell">Without Propentro</th>
                <th className="text-left px-5 py-3.5 font-medium text-foreground hidden sm:table-cell">With Propentro</th>
                <th className="text-right px-5 py-3.5 font-medium text-primary">Monthly Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.task} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-5 py-3.5 text-foreground font-medium">{row.task}</td>
                  <td className="px-5 py-3.5 text-muted-foreground hidden sm:table-cell">{row.without}</td>
                  <td className="px-5 py-3.5 text-muted-foreground hidden sm:table-cell">{row.with}</td>
                  <td className="px-5 py-3.5 text-right font-medium text-primary">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="animate-on-scroll mt-8 text-center">
          <p className="text-base md:text-lg font-medium text-foreground max-w-2xl mx-auto text-balance">
            A firm managing 100 units saves 50+ hours every month. That&apos;s managing
            50 more units with the same team — or finally leaving the office by 6pm.
          </p>
        </div>
      </div>
    </section>
  );
}
