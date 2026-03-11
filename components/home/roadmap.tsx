"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const milestones = [
  {
    version: "v0.1",
    title: "Foundation",
    status: "completed",
    items: "Database architecture, authentication, multi-tenancy, CI/CD pipeline",
  },
  {
    version: "v0.2",
    title: "Core Data",
    status: "completed",
    items: "Contacts system, property hierarchy, role management",
  },
  {
    version: "v0.3",
    title: "Application Layer",
    status: "in-progress",
    items: "Frontend application, API endpoints, dashboard, search and filtering",
  },
  {
    version: "v0.4",
    title: "Financial Operations",
    status: "planned",
    items: "Rent tracking, payment processing, owner statements, SEPA integration",
  },
  {
    version: "v0.5",
    title: "Compliance & Documents",
    status: "planned",
    items: "Document management, compliance tracking, automated reminders",
  },
  {
    version: "v1.0",
    title: "Launch",
    status: "planned-launch",
    items: "Public release for early adopter firms in Ireland — 2026",
  },
];

const statusConfig: Record<string, { icon: string; label: string; dot: string; badge: string }> = {
  completed: {
    icon: "✅",
    label: "Completed",
    dot: "bg-emerald-500",
    badge: "text-emerald-600 bg-emerald-50",
  },
  "in-progress": {
    icon: "🔄",
    label: "In Progress",
    dot: "bg-primary animate-pulse",
    badge: "text-primary bg-primary/10",
  },
  planned: {
    icon: "📋",
    label: "Planned",
    dot: "bg-border",
    badge: "text-muted-foreground bg-muted",
  },
  "planned-launch": {
    icon: "🚀",
    label: "2026",
    dot: "bg-border",
    badge: "text-muted-foreground bg-muted",
  },
};

export function Roadmap() {
  const ref = useScrollAnimation();

  return (
    <section id="roadmap" ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            WHERE WE ARE
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Transparent by default
            <span className="font-light">.</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-base text-muted-foreground max-w-md mx-auto">
            This is a real, active project. Here's exactly where it stands.
          </p>
        </div>

        <div className="stagger-children relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {milestones.map((m) => {
              const config = statusConfig[m.status];
              return (
                <div
                  key={m.version}
                  className="animate-on-scroll flex gap-5 sm:gap-6"
                >
                  {/* Dot */}
                  <div className="hidden sm:flex flex-col items-center shrink-0 pt-4">
                    <div
                      className={`w-[10px] h-[10px] rounded-full ${config.dot} ring-2 ring-background`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-xl border px-5 py-4 transition-all ${
                      m.status === "in-progress"
                        ? "border-primary/30 bg-primary/5"
                        : "border-border bg-secondary"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm">{config.icon}</span>
                        <span className="font-display text-sm font-semibold text-foreground">
                          {m.version} — {m.title}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${config.badge}`}
                      >
                        {config.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {m.items}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
