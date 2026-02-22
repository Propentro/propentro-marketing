"use client";

import React from "react";
import {
  Landmark,
  Table2,
  MessageCircle,
  Mail,
  FolderOpen,
  CalendarDays,
  FileText,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const tools = [
  {
    icon: Landmark,
    name: "Bank App",
    description: "Check if rent arrived",
  },
  {
    icon: Table2,
    name: "Excel",
    description: "Track who paid, who didn\u2019t",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Handle maintenance requests",
  },
  {
    icon: Mail,
    name: "Email",
    description: "Communicate with landlords",
  },
  {
    icon: FolderOpen,
    name: "Filing Cabinet",
    description: "Store leases and certificates",
  },
  {
    icon: CalendarDays,
    name: "Calendar",
    description: "Remember compliance deadlines",
  },
  {
    icon: FileText,
    name: "Word",
    description: "Generate notices and letters",
  },
];

export function Problem() {
  return (
    <section className="relative bg-[hsl(240,20%,4%)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="section-label mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Property Management Is Stuck in the Past
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="group rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,15%,8%)] p-5 hover:border-[hsl(258,60%,55%)]/30 transition-all duration-300 hover:-translate-y-0.5">
                <tool.icon className="w-5 h-5 text-[hsl(258,80%,65%)] mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm text-[hsl(240,10%,65%)] leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <p className="text-lg md:text-xl text-[hsl(240,10%,80%)] max-w-2xl mx-auto font-medium">
            Growing from 50 to 200 units doesn&rsquo;t require 2&times; the
            software &mdash; it requires 4&times; the people.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
