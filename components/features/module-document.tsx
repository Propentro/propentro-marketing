"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link2, Tag, History, Upload, Share2 } from "lucide-react";

const highlights = [
  { icon: Link2, label: "Auto-linked to property, tenant, landlord, lease" },
  { icon: Tag, label: "Smart tagging & categories" },
  { icon: History, label: "Version control" },
  { icon: Upload, label: "Bulk upload & OCR" },
  { icon: Share2, label: "Secure sharing via portals" },
];

export function DocumentModule() {
  const ref = useScrollAnimation();

  return (
    <section id="documents" ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">DOCUMENTS</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Find Anything
              <span className="font-light"> in 5 Seconds.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Where&apos;s the lease for 14B? Is it in email, Google Drive, or that folder
              on someone&apos;s desktop? Propentro auto-links every document to its property,
              tenant, landlord, and lease. One search, instant results. No more digging.
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
              <div className="text-xs font-medium text-muted-foreground mb-4">Document Library</div>
              <div className="space-y-3">
                {[
                  { name: "Lease Agreement \u2014 Unit 4B", linked: "J. Murphy", type: "Lease", date: "12 Jan 2026" },
                  { name: "Gas Safety Cert \u2014 Block A", linked: "All units", type: "Compliance", date: "14 Mar 2025" },
                  { name: "Landlord Statement \u2014 Jan 2026", linked: "D. Fitzgerald", type: "Financial", date: "01 Feb 2026" },
                  { name: "Maintenance Invoice #1845", linked: "Unit 12A", type: "Maintenance", date: "18 Feb 2026" },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">{doc.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        {doc.linked} &middot; {doc.type} &middot; {doc.date}
                      </div>
                    </div>
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
