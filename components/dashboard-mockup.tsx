export function DashboardMockup() {
  return (
    <div className="w-full rounded-xl border border-[#2a2640] bg-[#0c0b14] shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1b2e]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-xs text-[#6b6584]">app.propentro.com</div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-52 border-r border-[#1e1b2e] p-4 gap-1">
          <div className="font-display text-sm font-semibold text-[#f0eef5] mb-4">
            Propentro<span className="text-[#a78bfa]">.</span>
          </div>
          {["Dashboard", "Properties", "Tenants", "Leases", "Finances", "Maintenance", "Compliance"].map(
            (item, i) => (
              <div
                key={item}
                className={`text-xs px-3 py-2 rounded-md ${
                  i === 0
                    ? "bg-[#5B21B6]/20 text-[#a78bfa] font-medium"
                    : "text-[#6b6584] hover:text-[#9b94b0]"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Total Units", value: "247", change: "+12" },
              { label: "Occupancy", value: "96.3%", change: "+1.2%" },
              { label: "Rent Collected", value: "€184,290", change: "€12,400" },
              { label: "Open Tasks", value: "14", change: "-3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[#1e1b2e] bg-[#13111f] p-3 md:p-4"
              >
                <div className="text-[10px] md:text-xs text-[#6b6584] mb-1">{stat.label}</div>
                <div className="text-base md:text-xl font-semibold text-[#f0eef5]">{stat.value}</div>
                <div className="text-[10px] text-[#a78bfa] mt-1">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Data table */}
          <div className="rounded-lg border border-[#1e1b2e] bg-[#13111f] overflow-hidden">
            <div className="px-4 py-3 border-b border-[#1e1b2e]">
              <div className="text-xs font-medium text-[#f0eef5]">Recent Activity</div>
            </div>
            <div className="divide-y divide-[#1e1b2e]">
              {[
                { action: "Rent payment received", detail: "Unit 4B — J. Murphy", status: "Matched", statusColor: "text-emerald-400" },
                { action: "Maintenance completed", detail: "Block C — Plumbing", status: "Closed", statusColor: "text-[#a78bfa]" },
                { action: "Lease renewal due", detail: "Unit 12A — S. O'Brien", status: "14 days", statusColor: "text-amber-400" },
                { action: "Gas cert uploaded", detail: "Block A — All Units", status: "Valid", statusColor: "text-emerald-400" },
                { action: "Payment overdue", detail: "Unit 7C — K. Walsh", status: "Overdue", statusColor: "text-red-400" },
              ].map((row) => (
                <div key={row.detail} className="flex items-center justify-between px-4 py-3 text-xs">
                  <div className="flex-1">
                    <div className="text-[#c4bfd4] font-medium">{row.action}</div>
                    <div className="text-[#6b6584] mt-0.5">{row.detail}</div>
                  </div>
                  <span className={`${row.statusColor} font-medium text-[10px] md:text-xs`}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
