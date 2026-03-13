import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddhsamarth.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Siddh Samarth | Cybersecurity Analyst – SOC, SIEM & Threat Detection",
  description:
    "Cybersecurity Analyst specializing in SOC operations, SIEM engineering with Azure Sentinel, threat detection, and incident response. BIT Mesra CSE graduate with hands-on project experience in KQL, Wireshark, and Python automation.",
  keywords: [
    "Cybersecurity Analyst",
    "SOC Analyst India",
    "SIEM Engineer Azure Sentinel",
    "Threat Detection Engineer",
    "KQL Detection Engineering",
    "Incident Response Analyst",
    "Network Forensics",
    "OSINT Security",
    "Python Security Automation",
    "Penetration Testing Portfolio",
    "BIT Mesra Cybersecurity",
    "Siddh Samarth",
    "SOC L1 Analyst",
    "Security Automation",
    "Azure Sentinel",
    "Wireshark",
    "CEH",
    "Cybersecurity Portfolio India",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Siddh Samarth | Cybersecurity Analyst – SOC, SIEM & Threat Detection",
    description:
      "Cybersecurity Analyst specializing in SOC operations, Azure Sentinel SIEM engineering, threat detection, and incident response. Available for security roles in India.",
    siteName: "Siddh Samarth",
    images: [
      {
        url: `${SITE_URL}/og-preview.png`,
        width: 1200,
        height: 630,
        alt: "Siddh Samarth – Cybersecurity Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddh Samarth | Cybersecurity Analyst",
    description:
      "SOC Analyst | Azure Sentinel SIEM | Threat Detection | Incident Response | BIT Mesra CSE",
    images: [`${SITE_URL}/og-preview.png`],
  },
  verification: {
    google: "0eface33-afbc-4011-ab54-de7d8276026f",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external badge hosts for faster load */}
        <link rel="preconnect" href="https://tryhackme.com" />
        <link rel="preconnect" href="https://platform.linkedin.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://media.licdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tryhackme.com" />
        <link rel="dns-prefetch" href="https://platform.linkedin.com" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
