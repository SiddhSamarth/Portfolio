"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const contacts = [
    {
        icon: Mail,
        label: "Email",
        value: "siddhsamarth@gmail.com",
        href: "mailto:siddhsamarth@gmail.com",
        color: "text-blue-400",
        border: "border-blue-500/20 hover:border-blue-500/40",
        bg: "bg-blue-500/5",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/siddhsamarth",
        href: "https://linkedin.com/in/siddhsamarth",
        color: "text-blue-300",
        border: "border-blue-400/20 hover:border-blue-400/40",
        bg: "bg-blue-400/5",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/SiddhSamarth",
        href: "https://github.com/SiddhSamarth",
        color: "text-zinc-300",
        border: "border-white/10 hover:border-white/25",
        bg: "bg-white/5",
    },
    {
        icon: FileText,
        label: "Resume",
        value: "siddhsamarth.in/resume",
        href: "/resume",
        color: "text-emerald-400",
        border: "border-emerald-500/20 hover:border-emerald-500/40",
        bg: "bg-emerald-500/5",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 sm:py-28 md:py-32 lg:py-40 bg-black border-t border-white/5 relative overflow-hidden"
            aria-labelledby="contact-heading"
        >
            {/* Ambient background */}
            <div className="absolute inset-0 opacity-35 pointer-events-none">
                <div className="pd-section-bg-pattern" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <h2
                        id="contact-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
                    >
                        Get In{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Touch
                        </span>
                    </h2>
                    <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Let&apos;s talk security. Whether you&apos;re looking for a SOC Analyst, need a
                        threat detection engineer, or just want to geek out about KQL queries — my inbox is open.
                    </p>

                    {/* Availability badge */}
                    <div className="flex justify-center mt-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available immediately · Open to full-time roles in India
                        </span>
                    </div>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {contacts.map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -3, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-5 p-5 sm:p-6 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-xl transition-all duration-300 group`}
                            aria-label={`${item.label}: ${item.value}`}
                        >
                            <div className={`w-11 h-11 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={20} className={item.color} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                                    {item.label}
                                </p>
                                <p className={`${item.color} font-semibold text-sm sm:text-base truncate`}>
                                    {item.value}
                                </p>
                            </div>
                            <svg
                                className="ml-auto w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
