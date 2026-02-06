import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Academics from "@/components/Academics";
import AboutMe from "@/components/AboutMe";
import SecurityInsights from "@/components/SecurityInsights";
import Certificates from "@/components/Certificates";
import SecurityPrinciples from "@/components/SecurityPrinciples";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddhsamarth.in";

export function generateMetadata(): Metadata {
  return {
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
    alternates: { canonical: SITE_URL },
    openGraph: {
      type: "website",
      url: SITE_URL,
      title: "Siddh Samarth – Cybersecurity Portfolio",
      description:
        "Siddh Samarth – Cybersecurity Trainee & SOC Analyst. Portfolio showcasing threat detection, SIEM, incident response, and security research. IIT Guwahati.",
      siteName: "Siddh Samarth",
      images: [
        {
          url: `${SITE_URL}/icon.svg`,
          width: 512,
          height: 512,
          alt: "Siddh Samarth",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Siddh Samarth – Cybersecurity Portfolio",
      description:
        "Siddh Samarth – Cybersecurity Trainee & SOC Analyst. IIT Guwahati. Threat detection, SIEM, incident response.",
    },
    robots: { index: true, follow: true },
  };
}

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siddh Samarth",
  url: SITE_URL,
  jobTitle: "Cybersecurity Trainee / SOC Analyst",
  affiliation: { "@type": "Organization", name: "IIT Guwahati" },
  sameAs: [
    "https://www.linkedin.com/in/samarthsiddh/",
    "https://github.com/SiddhSamarth",
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
        text: "Siddh Samarth is a Cybersecurity Trainee and SOC Analyst specializing in threat detection, SIEM operations, incident response, and security research. He has training from IIT Guwahati and experience in Azure Sentinel, KQL, and defensive security operations.",
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
          className="relative w-full h-32 -mt-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Academics />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <AboutMe />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <SecurityInsights />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Certificates />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <SecurityPrinciples />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Experience />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Projects />
        {/* Transition between sections */}
        <div
          className="relative w-full h-32 -mt-16 -mb-16 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute inset-0 pd-section-bg-pattern opacity-25" />
        </div>
        <Skills />
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
