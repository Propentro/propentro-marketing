import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/hero";
import { PropertyModule } from "@/components/features/module-property";
import { PartyModule } from "@/components/features/module-party";
import { LeaseModule } from "@/components/features/module-lease";
import { FinanceModule } from "@/components/features/module-finance";
import { MaintenanceModule } from "@/components/features/module-maintenance";
import { ComplianceModule } from "@/components/features/module-compliance";
import { DocumentModule } from "@/components/features/module-document";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Features — Propentro Property Management Platform",
  description:
    "Seven integrated modules that replace your disconnected stack with one intelligent platform. Properties, people, leases, finances, maintenance, compliance, and documents.",
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <PropertyModule />
      <PartyModule />
      <LeaseModule />
      <FinanceModule />
      <MaintenanceModule />
      <ComplianceModule />
      <DocumentModule />
      <CTA />
    </>
  );
}
