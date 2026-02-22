"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link2, GitBranch, Search, Layers, FileText, Building2, Users, Upload } from "lucide-react";

const highlights = [
  { icon: Link2, label: "Auto-linked to property, tenant, landlord, lease" },
  { icon: Search, label: "Smart tagging & categories" },
  { icon: GitBranch, label: "Version control" },
  { icon: Upload, label: "Bulk upload & OCR" },
  { icon: Layers, label: "Secure sharing via portals" },
];

export function DocumentModule() {
  const ref = useScrollAnimation();

  return (
    <section id="documents" ref={ref} className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Text left */}
          <div className="flex-1 lg:max-w-lg">
            <p className="animate-on-scroll section-label text-accent mb-5">DOCUMENTS</p>
            <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground">
              Find Anything
              <span className="font-light"> in 5 Seconds.</span>
            </h2>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Where{"'"}s the lease for 14B? Is it in email, Google Drive, or the
              folder on someone{"'"}s desktop? Propentro auto-links every document
              to its property, tenant, and landlord. Search once, find
              immediately.
            </p>
            <div className="stagger-children mt-8 space-y-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="animate-on-scroll flex items-start gap-2.5 text-sm text-foreground">
                    <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{h.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual right: document tree */}
          <div className="animate-on-scroll flex-1 w-full">
            <div className="rounded-xl border border-border bg-background p-5 md:p-6">
              {/* Search bar */}
              <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 mb-5">
                <Search className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Search documents...
                </span>
              </div>

              {/* Document list */}
              <div className="space-y-2.5">
                {[
                  {
                    name: "Lease Agreement  Unit 4B",
                    type: "Contract",
                    links: [
                      { icon: Building2, label: "Riverside Court" },
                      { icon: Users, label: "J. Murphy" },
                    ],
                    version: "v3",
                  },
                  {
                    name: "Gas Safety Certificate 2025",
                    type: "Certificate",
                    links: [{ icon: Building2, label: "Block A" }],
                    version: "v1",
                  },
                  {
                    name: "Maintenance Invoice #1247",
                    type: "Invoice",
                    links: [{ icon: Building2, label: "Oak House" }],
                    version: "v1",
                  },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="rounded-lg border border-border bg-secondary p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-foreground">
                            {doc.name}
                          </div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {doc.type}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-accent bg-primary/8 px-2 py-0.5 rounded">
                        {doc.version}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2.5 ml-7">
                      {doc.links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                          <span
                            key={link.label}
                            className="inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-background px-2 py-0.5 rounded border border-border"
                          >
                            <LinkIcon className="w-3 h-3" />
                            {link.label}
                          </span>
                        );
                      })}
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
