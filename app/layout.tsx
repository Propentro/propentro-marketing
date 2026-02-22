import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Propentro — The Operating System for Modern Property Management",
  description:
    "One platform for your entire property management operation. Properties, tenants, leases, finances, maintenance, compliance — connected, automated, and always audit-ready.",
  keywords:
    "property management software, property management Ireland, property management platform, tenant management, lease management, compliance automation, RTB compliance, RPZ rent calculator, property operations",
  openGraph: {
    title: "Propentro — The Operating System for Modern Property Management",
    description:
      "One platform for your entire property management operation. Properties, tenants, leases, finances, maintenance, compliance — connected, automated, and always audit-ready.",
    type: "website",
    locale: "en_IE",
    siteName: "Propentro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propentro — The Operating System for Modern Property Management",
    description:
      "One platform for your entire property management operation. Properties, tenants, leases, finances, maintenance, compliance — connected, automated, and always audit-ready.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
