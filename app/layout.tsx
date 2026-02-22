import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Propentro  Property Management Software for Ireland & UK",
  description:
    "Propentro replaces the spreadsheets, WhatsApp threads, and calendar reminders you use to run your portfolio  with one platform that actually talks to itself. Rent collection, compliance, maintenance, leases, and landlord reporting. Book a 20-minute demo.",
  keywords:
    "property management software Ireland, property management platform, landlord software Ireland, rental management software, tenant management system, lease management software, property compliance software Ireland, property maintenance software, RTB compliance, RPZ rent calculator, BER tracking, property management UK",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c0a17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-clash-display: 'Clash Display', system-ui, sans-serif;
                --font-general-sans: 'General Sans', system-ui, sans-serif;
              }
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
