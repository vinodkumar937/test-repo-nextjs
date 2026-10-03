import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Estates | Ultra-Luxury Real Estate & Prime Architectural Living",
  description: "Bespoke international real estate brokerage representing trophy villas, sky penthouses, and private coastal estates in Los Angeles, New York, Miami, and Aspen.",
  keywords: ["Luxury Real Estate", "Penthouses", "Villas", "Billionaires Row", "Star Island Miami", "Bel-Air Real Estate"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
