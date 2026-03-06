import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddhsamarth.in";

export function generateMetadata(): Metadata {
    return {
        title: "Writeups & Blog | Siddh Samarth – Cybersecurity Analyst",
        description:
            "Technical writeups by Siddh Samarth covering Azure Sentinel KQL queries, honeypot deployments, OSINT workflows, SOC operations, and threat intelligence methodology.",
        keywords: [
            "Azure Sentinel KQL queries for SOC analysts",
            "How to build a honeypot with Azure Sentinel",
            "OSINT tools for threat hunting",
            "SOC L1 analyst incident response playbook",
            "KQL Detection Engineering",
            "Threat Intelligence OSINT",
            "Cybersecurity Writeups",
            "Siddh Samarth Blog",
        ],
        alternates: { canonical: `${SITE_URL}/writeups` },
        openGraph: {
            type: "website",
            url: `${SITE_URL}/writeups`,
            title: "Writeups & Blog | Siddh Samarth – Cybersecurity Analyst",
            description:
                "Technical writeups on Azure Sentinel, KQL, honeypots, OSINT, and SOC operations by Siddh Samarth.",
            siteName: "Siddh Samarth",
            images: [
                {
                    url: `${SITE_URL}/og-preview.png`,
                    width: 1200,
                    height: 630,
                    alt: "Siddh Samarth – Cybersecurity Writeups",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Writeups | Siddh Samarth – Cybersecurity Analyst",
            description:
                "Azure Sentinel KQL, OSINT threat hunting, honeypots, and SOC operations writeups.",
            images: [`${SITE_URL}/og-preview.png`],
        },
        robots: { index: true, follow: true },
    };
}

// JSON-LD for the writeups listing
const WRITEUPS_PAGE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Writeups & Blog",
    url: `${SITE_URL}/writeups`,
    description:
        "Technical cybersecurity writeups by Siddh Samarth covering Azure Sentinel, KQL, OSINT, honeypots, and SOC operations.",
    author: {
        "@type": "Person",
        name: "Siddh Samarth",
        url: SITE_URL,
        jobTitle: "Cybersecurity Analyst",
    },
};

const BREADCRUMB_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
            "@type": "ListItem",
            position: 2,
            name: "Writeups",
            item: `${SITE_URL}/writeups`,
        },
    ],
};

const writeups = [
    {
        id: 1,
        title: "Building a Global Threat Map with Azure Sentinel and Honeypots",
        description:
            "A step-by-step walkthrough of deploying a honeypot to capture real-world attack data and visualizing 20,000+ malicious logon attempts on a live Azure Sentinel world map dashboard using KQL analytics rules.",
        tags: ["Azure Sentinel", "KQL", "Honeypot", "Threat Visualization"],
        status: "coming-soon" as const,
        readTime: "12 min read",
        category: "SIEM Engineering",
    },
    {
        id: 2,
        title: "KQL Queries Every SOC Analyst Should Know",
        description:
            "A curated reference of essential KQL (Kusto Query Language) queries for SOC analysts — covering log correlation, anomaly detection, brute-force alerts, lateral movement indicators, and incident triage workflows in Azure Sentinel.",
        tags: ["KQL", "SIEM", "Azure Sentinel", "SOC Operations"],
        status: "coming-soon" as const,
        readTime: "15 min read",
        category: "Detection Engineering",
    },
    {
        id: 3,
        title: "OSINT Workflow for Threat Intelligence: Tools and Methodology",
        description:
            "An end-to-end OSINT methodology for threat intelligence gathering — from passive reconnaissance with Maltego and Shodan, to Python-automated enrichment pipelines that feed into SOC L1 analyst triage workflows.",
        tags: ["OSINT", "Threat Intelligence", "Python", "Security Automation"],
        status: "coming-soon" as const,
        readTime: "10 min read",
        category: "Threat Intelligence",
    },
];

const categoryColors: Record<string, string> = {
    "SIEM Engineering": "text-blue-400 border-blue-500/30 bg-blue-500/5",
    "Detection Engineering": "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    "Threat Intelligence": "text-purple-400 border-purple-500/30 bg-purple-500/5",
};

export default function WriteupsPage() {
    const jsonLdScripts = [WRITEUPS_PAGE_JSON_LD, BREADCRUMB_JSON_LD];

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
                className="min-h-screen bg-black selection:bg-blue-500/30 selection:text-blue-200"
                role="main"
            >
                <Navbar />

                {/* Hero Section */}
                <section
                    className="relative pt-40 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
                    aria-labelledby="writeups-heading"
                >
                    {/* Ambient background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/8 blur-[120px] rounded-full" />
                        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full" />
                    </div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-10">
                            <ol className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
                                <li>
                                    <Link href="/" className="hover:text-zinc-400 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="text-zinc-400">Writeups</li>
                            </ol>
                        </nav>

                        {/* Page Header */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                                    Technical Blog
                                </span>
                            </div>
                            <h1
                                id="writeups-heading"
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                            >
                                Writeups &amp;{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    Research
                                </span>
                            </h1>
                            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                                In-depth technical content on Azure Sentinel, KQL detection engineering,
                                OSINT methodology, and SOC operations — written for security practitioners.
                            </p>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-white/5">
                            {[
                                { label: "Articles", value: "3" },
                                { label: "Topics", value: "SIEM · OSINT · Detection" },
                                { label: "Status", value: "Coming Soon" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">
                                        {stat.label}
                                    </p>
                                    <p className="text-white font-semibold text-sm">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Writeup Cards */}
                <section
                    className="pb-32 px-4 sm:px-6 md:px-8 lg:px-12 relative"
                    aria-label="Blog writeups"
                >
                    <div className="max-w-5xl mx-auto space-y-6">
                        {writeups.map((post, index) => (
                            <article
                                key={post.id}
                                className="group relative rounded-2xl sm:rounded-3xl border border-white/5 bg-[#09090b]/80 backdrop-blur-xl p-7 sm:p-9 hover:border-white/10 transition-all duration-500 overflow-hidden"
                                aria-labelledby={`writeup-title-${post.id}`}
                            >
                                {/* Subtle index glow */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/3 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/6 transition-colors duration-700" />

                                <div className="relative z-10">
                                    {/* Top row: index + category + read time */}
                                    <div className="flex flex-wrap items-center gap-3 mb-5">
                                        <span className="text-zinc-700 text-xs font-black font-mono">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${categoryColors[post.category] ?? "text-zinc-400 border-white/10"}`}
                                        >
                                            {post.category}
                                        </span>
                                        <span className="text-zinc-600 text-xs font-medium ml-auto">
                                            {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2
                                        id={`writeup-title-${post.id}`}
                                        className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-blue-50 transition-colors duration-300 leading-snug"
                                    >
                                        {post.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                                        {post.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 bg-zinc-900/60 text-zinc-500 text-[10px] font-semibold uppercase tracking-wider rounded-lg border border-white/5 hover:border-white/10 hover:text-zinc-400 transition-all duration-300 cursor-default"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-amber-500/70 animate-pulse" />
                                            <span className="text-amber-500/80 text-xs font-bold uppercase tracking-widest">
                                                Coming Soon
                                            </span>
                                        </div>
                                        <p className="text-zinc-700 text-xs">
                                            Full writeup in progress — check back soon.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="max-w-5xl mx-auto mt-16 text-center">
                        <div className="inline-block rounded-2xl border border-white/5 bg-[#09090b]/60 backdrop-blur-md px-8 py-6">
                            <p className="text-zinc-500 text-sm mb-4">
                                More articles on SOC operations, penetration testing, and security automation are in progress.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors duration-300"
                            >
                                ← Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
