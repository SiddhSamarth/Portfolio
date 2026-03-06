import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, Download } from "lucide-react";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddhsamarth.in";

const DRIVE_PREVIEW = "https://drive.google.com/file/d/1bU9Se25Ru7d2Op-wTgivJgvpzE1CXoJg/preview";
const DRIVE_VIEW = "https://drive.google.com/file/d/1bU9Se25Ru7d2Op-wTgivJgvpzE1CXoJg/view?usp=sharing";

export function generateMetadata(): Metadata {
    return {
        title: "Resume | Siddh Samarth – Cybersecurity Analyst",
        description:
            "View or download the resume of Siddh Samarth, Cybersecurity Analyst specializing in SOC operations, Azure Sentinel SIEM, KQL detection engineering, and threat response.",
        alternates: { canonical: `${SITE_URL}/resume` },
        robots: { index: false, follow: false },
    };
}

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-black selection:bg-blue-500/30 selection:text-blue-200" role="main">

            {/* STICKY TOP BAR */}
            <div className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-16 flex items-center justify-between px-4 sm:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">Back to Portfolio</span>
                    <span className="sm:hidden">Back</span>
                </Link>

                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-white font-bold tracking-tight text-lg">Siddh Samarth</span>
                </div>

                <a
                    href={DRIVE_VIEW}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-colors"
                >
                    Download Resume <Download size={14} className="ml-1" />
                </a>
            </div>

            {/* PAGE CONTENT */}
            <section className="pt-28 pb-8 px-4 sm:px-6 md:px-8" aria-labelledby="resume-heading">
                <div className="max-w-[860px] mx-auto">

                    {/* Page Header */}
                    <div className="mb-8 flex flex-col items-center text-center">
                        <h1
                            id="resume-heading"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3"
                        >
                            Resume
                        </h1>
                        <p className="text-zinc-500 text-sm sm:text-base">
                            Cybersecurity Analyst · BIT Mesra · Available Immediately
                        </p>
                        <div className="mt-5 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* PDF Embed */}
                    <div className="w-full rounded-2xl border border-white/8 overflow-hidden">
                        <iframe
                            src={DRIVE_PREVIEW}
                            className="w-full block resume-iframe"
                            style={{ border: "none", background: "transparent" }}
                            title="Siddh Samarth – Cybersecurity Analyst Resume"
                            allow="autoplay"
                        />
                    </div>

                    {/* Fallback */}
                    <p className="text-zinc-600 text-xs text-center mt-4">
                        Having trouble viewing?{" "}
                        <a
                            href={DRIVE_VIEW}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors underline"
                        >
                            Open directly in Google Drive ↗
                        </a>
                    </p>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 py-16">
                <div className="bg-[#0f0f11] border border-white/10 rounded-3xl p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                            Interested in working together?
                        </h2>
                        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                            I&apos;m currently open to SOC Analyst and Threat Detection roles across India.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
                        >
                            <ArrowLeft size={15} />
                            Back to Portfolio
                        </Link>
                        <a
                            href="mailto:siddhsamarth@gmail.com"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-all duration-300 w-full sm:w-auto"
                        >
                            Let&apos;s Connect
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
