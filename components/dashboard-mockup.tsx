"use client";

import React from "react";

export function DashboardMockup() {
  return (
    <div className="w-full rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,15%,8%)] shadow-2xl shadow-purple-primary/5 overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(240,15%,15%)]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-xs text-[hsl(240,10%,45%)]">
          app.propentro.com
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-48 border-r border-[hsl(240,15%,15%)] p-4 gap-1">
          <div className="text-sm font-bold text-white mb-4">Propentro</div>
          {[
            "Dashboard",
            "Properties",
            "Tenants",
            "Leases",
            "Finances",
            "Maintenance",
            "Compliance",
          ].map((item, i) => (
            <div
              key={item}
              className={`text-xs px-3 py-2 rounded-md transition-colors ${
                i === 0
                  ? "bg-[hsl(258,65%,38%)]/15 text-[hsl(258,80%,65%)] font-medium"
                  : "text-[hsl(240,10%,45%)]"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-5">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { label: "Total Units", value: "247", change: "+12" },
              { label: "Occupancy", value: "96.3%", change: "+1.2%" },
              { label: "Rent Collected", value: "\u20AC184,290", change: "\u20AC12,400" },
              { label: "Open Tasks", value: "14", change: "-3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,20%,4%)] p-3"
              >
                <div className="text-[10px] text-[hsl(240,10%,45%)] mb-1">
                  {stat.label}
                </div>
                <div className="text-base md:text-lg font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] text-[hsl(258,80%,65%)] mt-1">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,20%,4%)] overflow-hidden">
            <div className="px-4 py-2.5 border-b border-[hsl(240,15%,15%)]">
              <div className="text-xs font-medium text-white">
                Recent Activity
              </div>
            </div>
            <div className="divide-y divide-[hsl(240,15%,15%)]">
              {[
                {
                  action: "Rent payment received",
                  detail: "Unit 4B \u2014 J. Murphy",
                  status: "Matched",
                  color: "text-emerald-400",
                },
                {
                  action: "Maintenance completed",
                  detail: "Block C \u2014 Plumbing",
                  status: "Closed",
                  color: "text-[hsl(258,80%,65%)]",
                },
                {
                  action: "Lease renewal due",
                  detail: "Unit 12A \u2014 S. O\u2019Brien",
                  status: "14 days",
                  color: "text-amber-400",
                },
                {
                  action: "Gas cert uploaded",
                  detail: "Block A \u2014 All Units",
                  status: "Valid",
                  color: "text-emerald-400",
                },
                {
                  action: "Payment overdue",
                  detail: "Unit 7C \u2014 K. Walsh",
                  status: "Overdue",
                  color: "text-red-400",
                },
              ].map((row) => (
                <div
                  key={row.detail}
                  className="flex items-center justify-between px-4 py-2.5 text-xs"
                >
                  <div>
                    <div className="text-[hsl(240,10%,80%)] font-medium">
                      {row.action}
                    </div>
                    <div className="text-[hsl(240,10%,45%)] mt-0.5">
                      {row.detail}
                    </div>
                  </div>
                  <span className={`${row.color} font-medium text-[10px] md:text-xs shrink-0 ml-4`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
