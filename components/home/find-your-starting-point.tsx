"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Landmark,
  ShieldCheck,
  Wrench,
  FileText,
  Phone,
  FolderOpen,
} from "lucide-react";

const problems = [
  {
    icon: Landmark,
    headline: "Rent collection is chaos",
    description:
      "Auto-match payments, chase arrears automatically, generate landlord statements in seconds.",
    anchor: "/features#finances",
  },
  {
    icon: ShieldCheck,
    headline: "Compliance deadlines keep slipping",
    description:
      "Track every cert, get 90-day warnings, never miss a gas safety or BER renewal again.",
    anchor: "/features#compliance",
  },
  {
    icon: Wrench,
    headline: "Maintenance requests disappear",
    description:
      "Tenants submit online, auto-triage by cost threshold, contractors notified  you handle exceptions only.",
    anchor: "/features#maintenance",
  },
  {
    icon: FileText,
    headline: "Lease renewals sneak up on us",
    description:
      "See every lease expiry 6 months ahead. Auto-generate renewals with RPZ-compliant rent calculations.",
    anchor: "/features#leases",
  },
  {
    icon: Phone,
    headline: "Landlords call us for everything",
    description:
      "Give landlords their own portal  real-time rent, maintenance updates, statements. Fewer calls.",
    anchor: "/features#portals",
  },
  {
    icon: FolderOpen,
    headline: "We can\u2019t find anything",
    description:
      "Every document auto-linked to its property, tenant, or landlord. Search once, find immediately.",
    anchor: "/features#documents",
  },
];

export function FindYourStartingPoint() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            START WITH WHAT HURTS MOST
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Propentro Is Modular
            <span className="font-light">.</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            You don{"'"}t need everything on day one  start with the problem
            that costs you the most time, and add more as you grow.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.headline}
                href={p.anchor}
                className="animate-on-scroll group p-6 rounded-xl border border-border bg-background hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {p.headline}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {p.description}
                </p>
                <span className="text-xs font-medium text-primary group-hover:underline">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>

        {/* Connection message */}
        <div className="animate-on-scroll mt-12 md:mt-14 text-center">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every module connects. A tenant{"'"}s lease links to their payments,
            their maintenance history, their compliance documents, and their
            landlord{"'"}s portal.{" "}
            <span className="text-foreground font-medium">
              Start with one  the rest clicks into place.
            </span>
          </p>
          <p className="mt-4 text-sm font-semibold text-foreground">
            Most firms start with Finances + Compliance. But it{"'"}s your call.
          </p>
        </div>
      </div>
    </section>
  );
}
