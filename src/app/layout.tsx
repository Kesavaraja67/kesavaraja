import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/sections/Preloader";
import KesavarajaChat from "@/components/ui/KesavarajaChat";
import { SITE_DATA } from "@/lib/data";

const jbMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_DATA.name} | ${SITE_DATA.role}`,
    template: `%s | ${SITE_DATA.name}`,
  },
  description: SITE_DATA.tagline,
  keywords: [
    "Kesavaraja",
    "Kesavaraja M",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "React",
    "Next.js",
    "India",
    "Tiruchirappalli",
    "Python",
    "Creative Developer",
    "Portfolio"
  ],
  authors: [{ name: SITE_DATA.name, url: `https://${SITE_DATA.linkedin}` }],
  creator: SITE_DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // To be updated with actual domain
    title: `${SITE_DATA.name} | ${SITE_DATA.role}`,
    description: SITE_DATA.tagline,
    siteName: `${SITE_DATA.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DATA.name} | ${SITE_DATA.role}`,
    description: SITE_DATA.tagline,
    creator: "@KesavaRaja70355",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "GMs_syvzDzng1D5OGkMN63xwPi2ZDGYB7csa38yFK0U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jbMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,700,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Scanline overlay - moved to dedicated div with GPU acceleration */}
        <div 
          className="fixed inset-0 pointer-events-none z-[9999]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          aria-hidden="true"
        />
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroll>
        <KesavarajaChat />
      </body>
    </html>
  );
}
