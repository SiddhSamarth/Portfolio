import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://siddhsamarth.in";

export const metadata: Metadata = {
  title: "Siddh Samarth – Cybersecurity Portfolio",
  description:
    "Siddh Samarth – Cybersecurity Trainee & SOC Analyst. Portfolio showcasing threat detection, SIEM, incident response, and security research. IIT Guwahati. View projects and resume.",
  keywords: [
    "Siddh Samarth",
    "Cybersecurity",
    "SOC Analyst",
    "Threat Detection",
    "SIEM",
    "Incident Response",
    "IIT Guwahati",
    "Security Operations",
    "Cybersecurity Portfolio",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Siddh Samarth – Cybersecurity Portfolio",
    description:
      "Siddh Samarth – Cybersecurity Trainee & SOC Analyst. Portfolio showcasing threat detection, SIEM, incident response, and security research. IIT Guwahati.",
    siteName: "Siddh Samarth",
    images: [{ url: `${SITE_URL}/icon.svg`, width: 512, height: 512, alt: "Siddh Samarth" }],
  },
  twitter: {
    card: "summary",
    title: "Siddh Samarth – Cybersecurity Portfolio",
    description:
      "Siddh Samarth – Cybersecurity Trainee & SOC Analyst. IIT Guwahati. Threat detection, SIEM, incident response.",
  },
  verification: {
    google: "0eface33-afbc-4011-ab54-de7d8276026f",
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
