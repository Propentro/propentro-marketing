"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ShieldCheck, Bell, Scale, Calculator, BarChart3, FileCheck } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Every cert tracked per unit (Gas, BER, Electrical, Fire, Legionella)" },
  { icon: Bell, label: "90/60/30 day automated alerts" },
  { icon: Scale, label: "RTB registration tracking & notice period calculator" },
  { icon: Calculator, label: "RPZ rent cap calculator (HICP formula built in)" },
  { icon: BarChart3, label: "Compliance dashboard: red/amber/green per property" },
  { icon: FileCheck, label: "Audit trail for every action" },
];

const certs = [
  { name: "Gas Safety \u2014 Block A", status: "Valid", expiry: "14 Mar 2027", color: "bg-emerald-500" },
  { name: "BER Certificate \u2014 Unit 4B", status: "Expiring", expiry: "28 Apr 2026", color: "bg-amber-500" },
  { name: "Electrical \u2014 Block C", status: "Expired", expiry: "02 Jan 2026", color: "bg-red-500" },
  { name: "Fire Safety \u2014 Block A", status: "Valid", expiry: "19 Sep 2027", color: "bg-emerald-500" },
];

export function ComplianceModule() {
  const ref = useScrollAnimation();

  return (
    <section id="compliance" ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20">
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">COMPLIANCE</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Never Miss a Cert
              <span className="font-light"> Renewal Again.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              The gas cert for Block A expired 3 weeks ago. You only find out when the
              landlord asks — or worse, when the inspector shows up. Propentro tracks
              every certificate, sends alerts 90 days before expiry, and gives you a
              red/amber/green dashboard across your entire portfolio.
            </p>
            <div className="stagger-children mt-8 space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-start gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-background p-5 md:p-6">
              <div className="text-xs font-medium text-muted-foreground mb-4">Compliance Dashboard</div>
              <div className="space-y-3">
                {certs.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-3">
                    <div className={`w-2 h-2 rounded-full ${cert.color} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">{cert.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">Expires: {cert.expiry}</div>
                    </div>
                    <span className={`text-[10px] font-medium ${
                      cert.status === "Valid" ? "text-emerald-600" :
                      cert.status === "Expiring" ? "text-amber-600" : "text-red-500"
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
