"use client";

import React from "react";
import { motion } from "framer-motion";
import { DashboardMockup } from "@/components/dashboard-mockup";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[hsl(240,20%,4%)] overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Purple glow */}
      <div className="absolute inset-0 purple-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Centered content */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            The Operating System for Modern Property Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-6 text-lg md:text-xl text-[hsl(240,10%,65%)] leading-relaxed max-w-2xl mx-auto"
          >
            One platform for your entire operation. Properties, tenants, leases,
            finances, maintenance, compliance &mdash; connected, automated, and
            always audit-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-purple-primary hover:bg-purple-light text-white font-medium transition-colors duration-200"
            >
              Book a Demo
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-white/[0.12] text-[hsl(240,10%,80%)] hover:text-white hover:border-white/[0.24] font-medium transition-all duration-200"
            >
              See the Platform
            </a>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-16 md:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Glow behind mockup */}
            <div className="absolute -inset-4 bg-[hsl(258,80%,65%)]/[0.04] rounded-2xl blur-2xl" />
            <div className="relative transform perspective-[1200px] rotate-x-[2deg]">
              <DashboardMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
