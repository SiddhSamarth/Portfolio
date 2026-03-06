import type { Metadata } from "next";
import dynamic from "next/dynamic";
// Above-fold: static imports for instant LCP
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

// Below-fold: dynamic imports to minimize initial JS payload
const Academics = dynamic(() => import("@/components/Academics"), { ssr: true });
const SecurityInsights = dynamic(() => import("@/components/SecurityInsights"), { ssr: true });
const Certificates = dynamic(() => import("@/components/Certificates"), { ssr: true });
const SecurityPrinciples = dynamic(() => import("@/components/SecurityPrinciples"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddhsamarth.in";

export function generateMetadata(): Metadata {
  return {
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
    alternates: { canonical: SITE_URL },
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
    robots: { index: true, follow: true },
  };
}

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siddh Samarth",
  url: SITE_URL,
  jobTitle: "Cybersecurity Analyst",
  description:
    "Cybersecurity Analyst specializing in SOC operations, SIEM engineering, threat detection, and incident response.",
  knowsAbout: [
    "SOC Operations",
    "SIEM",
    "Azure Sentinel",
    "Threat Detection",
    "Incident Response",
    "KQL",
    "Wireshark",
    "Nmap",
    "Penetration Testing",
    "OSINT",
    "Python Automation",
    "Bash Scripting",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Birla Institute of Technology, Mesra" },
    { "@type": "CollegeOrUniversity", name: "IIT Guwahati" },
  ],
  sameAs: [
    "https://github.com/SiddhSamarth",
    "https://www.linkedin.com/in/siddhsamarth",
    SITE_URL,
  ],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Siddh Samarth – Cybersecurity Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Siddh Samarth, Cybersecurity Trainee & SOC Analyst. Threat detection, SIEM, incident response, security research. IIT Guwahati.",
  publisher: { "@type": "Person", name: "Siddh Samarth" },
};

const PROJECTS_FOR_SCHEMA = [
  {
    name: "Solorigate Incident Response",
    description: "Engineered end-to-end incident detection workflow. Utilized ASIM and KQL to normalize multi-source telemetry and streamline forensic handover.",
    url: "https://github.com/SiddhSamarth/SIEM-Investigation",
    keywords: ["Azure Sentinel", "KQL", "ASIM", "Threat Hunting"],
  },
  {
    name: "Global Threat Visualization",
    description: "Designed and deployed a honeypot to capture real-world attack data. Visualized 20,000+ malicious logon attempts on a world map.",
    url: "https://github.com/SiddhSamarth/SIEM-Honeypot",
    keywords: ["Azure Sentinel", "Honeypot", "KQL", "Visualization"],
  },
  {
    name: "Zero Trust Architecture",
    description: "Developed a consulting-level case study for a crypto exchange's network perimeter. Recommended and designed a Zero Trust model.",
    url: "https://github.com/SiddhSamarth/siem-zero-trust-deployment",
    keywords: ["Zero Trust", "ELK Stack", "Network Design", "Consulting"],
  },
  {
    name: "Threat Intelligence Integration",
    description: "Demonstrated comprehensive Threat Intelligence Integration for SOC L1 Analysts. Built frameworks for threat detection, analysis, and response workflows.",
    url: "https://github.com/SiddhSamarth/Threat-Intelligence-SOC-L1",
    keywords: ["Threat Intelligence", "SOC Operations", "Python", "Framework"],
  },
  {
    name: "Security Assessment via SDLC",
    description: "Implemented security assessment practices integrated throughout the Software Development Lifecycle. Automated security checks and vulnerability scanning in CI/CD pipelines.",
    url: "https://github.com/SiddhSamarth/Security-Assessment-via-SDLC",
    keywords: ["DevSecOps", "SDLC", "Security Assessment", "Automation"],
  },
  {
    name: "Incident Response Framework",
    description: "Developed comprehensive incident response procedures and playbooks. Designed workflows for detection, containment, eradication, and recovery phases.",
    url: "https://github.com/SiddhSamarth/Incident-Response",
    keywords: ["Incident Response", "Forensics", "Playbooks", "Operations"],
  },
];

const PROJECT_SCHEMAS = PROJECTS_FOR_SCHEMA.map((p) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": p.url,
  name: p.name,
  description: p.description,
  url: p.url,
  keywords: p.keywords.join(", "),
  author: { "@type": "Person", name: "Siddh Samarth" },
}));

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Siddh Samarth do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siddh Samarth is a Cybersecurity Analyst and BIT Mesra Computer Science graduate specializing in SOC operations, Azure Sentinel SIEM engineering, KQL-based threat detection, incident response, and Python-driven security automation. He is actively seeking SOC Analyst, Threat Detection Engineer, and Security Operations roles in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are Siddh Samarth's key cybersecurity skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siddh Samarth specializes in Azure Sentinel SIEM, KQL detection engineering, network forensics using Wireshark and Nmap, OSINT for threat intelligence, penetration testing, and Python and Bash scripting for security automation.",
      },
    },
  ],
};

export default function Home() {
  const jsonLdScripts = [
    PERSON_JSON_LD,
    WEBSITE_JSON_LD,
    BREADCRUMB_JSON_LD,
    FAQ_JSON_LD,
    ...PROJECT_SCHEMAS,
  ];

  return (
    <>
      {jsonLdScripts.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <main
        className="min-h-screen bg-black selection:bg-blue-500/30 selection:text-blue-200 pd-acrylic-page"
        role="main"
      >
        <Navbar />
        <Hero />
        {/* Transition background element */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <AboutMe />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Experience />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Projects />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Skills />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Academics />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Certificates />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <SecurityInsights />
        {/* Transition between sections */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <SecurityPrinciples />
        {/* Transition before contact */}
        <div
          className="relative w-full h-16 sm:h-24 md:h-32 -mt-8 sm:-mt-12 md:-mt-16 -mb-8 sm:-mb-12 md:-mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Contact />
        {/* Transition before footer */}
        <div
          className="relative w-full h-32 -mt-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Footer />
      </main>
    </>
  );
}
