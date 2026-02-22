import React from "react";

const platformLinks = [
  { label: "Properties", href: "#platform" },
  { label: "Tenants", href: "#platform" },
  { label: "Leasing", href: "#platform" },
  { label: "Finances", href: "#platform" },
  { label: "Maintenance", href: "#platform" },
  { label: "Compliance", href: "#platform" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[hsl(240,20%,4%)] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="text-xl font-bold text-white tracking-tight">
              Propentro
            </span>
            <p className="mt-4 text-sm text-[hsl(240,10%,65%)] leading-relaxed max-w-xs">
              The Operating System for Modern Property Management
            </p>
            <a
              href="mailto:hello@propentro.com"
              className="inline-block mt-4 text-sm text-[hsl(258,60%,55%)] hover:text-[hsl(258,80%,65%)] transition-colors"
            >
              hello@propentro.com
            </a>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(240,10%,65%)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(240,10%,65%)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(240,10%,65%)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(240,10%,65%)]">
            &copy; 2026 Propentro. All rights reserved.
          </p>
          <p className="text-sm text-[hsl(240,10%,65%)]">
            Built in Dublin, Ireland
          </p>
        </div>
      </div>
    </footer>
  );
}
