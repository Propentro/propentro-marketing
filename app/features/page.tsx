import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/hero";
import { FinanceModule } from "@/components/features/module-finance";
import { ComplianceModule } from "@/components/features/module-compliance";
import { MaintenanceModule } from "@/components/features/module-maintenance";
import { LeaseModule } from "@/components/features/module-lease";
import { PropertyModule } from "@/components/features/module-property";
import { PortalsModule } from "@/components/features/module-portals";
import { DocumentModule } from "@/components/features/module-document";
import { FeaturesCTA } from "@/components/features/features-cta";

export const metadata: Metadata = {
  title: "Features — Propentro Property Management Platform",
  description:
    "One platform, your modules. Finances, compliance, maintenance, leases, properties, portals, and documents — start with what hurts most, add more as you grow.",
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FinanceModule />
      <ComplianceModule />
      <MaintenanceModule />
      <LeaseModule />
      <PropertyModule />
      <PortalsModule />
      <DocumentModule />
      <FeaturesCTA />
    </>
  );
}
