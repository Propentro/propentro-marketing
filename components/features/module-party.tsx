"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Link2, Clock, Shield } from "lucide-react";

const highlights = [
  { icon: Users, label: "Multi-role profiles" },
  { icon: Link2, label: "Relationship mapping" },
  { icon: Clock, label: "Complete history" },
  { icon: Shield, label: "Role-based permissions" },
];

export function PartyModule() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
          {/* Visual left: hub and spoke */}
          <div className="animate-on-scroll flex-1 w-full flex items-center justify-center">
            <div className="relative w-full max-w-md" style={{ aspectRatio: "1" }}>
              {/* Center person */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <span className="text-sm font-semibold text-text-on-dark">M. Kelly</span>
                </div>
              </div>

              {/* Spokes */}
              {[
                { label: "Tenant at Unit 4B", angle: -30, color: "bg-[#1a1730]", borderColor: "border-[#2a2640]" },
                { label: "Landlord of Block C", angle: 90, color: "bg-[#1a1730]", borderColor: "border-[#2a2640]" },
                { label: "Contractor for XYZ Ltd", angle: 210, color: "bg-[#1a1730]", borderColor: "border-[#2a2640]" },
              ].map((spoke) => {
                const rad = (spoke.angle * Math.PI) / 180;
                const radius = 42;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <div
                    key={spoke.label}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 px-4 py-3 rounded-lg border ${spoke.borderColor} ${spoke.color} z-10`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span className="text-xs font-medium text-text-on-dark whitespace-nowrap">{spoke.label}</span>
                  </div>
                );
              })}

              {/* SVG lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                {[-30, 90, 210].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 42;
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  return (
                    <line
                      key={angle}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="hsl(263 70% 42% / 0.2)"
                      strokeWidth="0.3"
                      strokeDasharray="1 1"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Text right */}
          <div className="flex-1 lg:max-w-md">
            <p className="animate-on-scroll section-label text-accent mb-5">MODULE 02</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-text-on-dark">
              People<span className="font-light">, Not Just Roles.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-text-muted-on-dark">
              In reality, a person can be a tenant in one property and a landlord in another. Propentro{"'"}s Party system doesn{"'"}t force rigid roles — it models how the real world actually works. One identity, multiple relationships, complete context.
            </p>
            <div className="stagger-children mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-center gap-2.5 text-sm text-text-on-dark">
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
