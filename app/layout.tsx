import React from "react"
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Propentro — The Operating System for Modern Property Management",
  description:
    "Propentro brings your properties, tenants, leases, finances, maintenance, and compliance into one platform — so you can run your portfolio like a modern business.",
  keywords:
    "property management software, property management platform, landlord software, rental management software, property operations platform, tenant management system, lease management software, property compliance software, property maintenance software",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
