"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Banknote, ClipboardCheck, Wrench, FileText, Phone, FolderSearch } from "lucide-react";

const problemCards = [
  {
    icon: Banknote,
    problem: "Rent collection is chaos",
    solution: "Auto-match payments, chase arrears automatically, generate landlord statements in seconds.",
    href: "/features#finances",
  },
  {
    icon: ClipboardCheck,
    problem: "Compliance deadlines keep slipping",
    solution: "Track every cert, get 90-day warnings, never miss a gas safety or BER renewal again.",
    href: "/features#compliance",
  },
  {
    icon: Wrench,
    problem: "Maintenance requests disappear",
    solution: "Tenants submit online, auto-triage by cost threshold, contractors notified \u2014 you handle exceptions only.",
    href: "/features#maintenance",
  },
  {
    icon: FileText,
    problem: "Lease renewals sneak up on us",
    solution: "See every lease expiry 6 months ahead. Auto-generate renewals with RPZ-compliant rent calculations.",
    href: "/features#leases",
  },
  {
    icon: Phone,
    problem: "Landlords call us for everything",
    solution: "Give landlords their own portal \u2014 real-time rent, maintenance updates, statements. Fewer calls.",
    href: "/features#portals",
  },
  {
    icon: FolderSearch,
    problem: "We can\u2019t find anything",
    solution: "Every document auto-linked to its property, tenant, or landlord. Search once, find immediately.",
    href: "/features#documents",
  },
];

export function FindYourStartingPoint() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            START WITH WHAT HURTS MOST
          </p>
          <p className="animate-on-scroll mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            Propentro is modular. You don&apos;t need everything on day one — start with the problem
            that costs you the most time, and add more as you grow.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problemCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.problem}
                className="animate-on-scroll group p-6 rounded-xl border border-border bg-background hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  &ldquo;{card.problem}&rdquo;
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {card.solution}
                </p>
                <Link
                  href={card.href}
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            );
          })}
        </div>

        {/* Integration message */}
        <div className="animate-on-scroll mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Every module connects. A tenant&apos;s lease links to their payments, their maintenance history,
            their compliance documents, and their landlord&apos;s portal. Start with one — the rest clicks into place.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            Most firms start with Finances + Compliance. But it&apos;s your call.
          </p>
        </div>
      </div>
    </section>
  );
}
