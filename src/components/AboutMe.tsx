"use client";

import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";
import { ANIMATION_EASE, SPRING_CONFIG } from "@/lib/animations";

const expertiseCategories = [
  {
    category: "SOC Operations & Threat Detection",
    skills: ["SOC Monitoring", "Threat Detection", "SIEM Operations", "Event Correlation", "Splunk", "IBM QRadar (familiar)", "CrowdStrike EDR"]
  },
  {
    category: "Incident Response & Analysis",
    skills: ["Incident Response", "Log Analysis", "Malware Analysis", "Network Forensics", "TheHive", "Malware Sandboxing", "VirusTotal", "AnyRun"]
  },
  {
    category: "Offensive Security",
    skills: ["Vulnerability Assessment", "OSINT", "Penetration Testing", "CEH Methodology", "Shodan", "Maltego", "theHarvester", "Recon-ng"]
  },
  {
    category: "Automation & Scripting",
    skills: ["Python Automation", "Bash Scripting", "Workflow Automation", "Tool Development"]
  }
];

const toolCategories = [
  {
    category: "SIEM & Security Platforms",
    tools: ["Splunk", "Azure Sentinel", "Wazuh"]
  },
  {
    category: "Network Analysis",
    tools: ["Wireshark", "Nmap", "Packet Analysis"]
  },
  {
    category: "Security Testing",
    tools: ["Nessus", "Burp Suite", "Kali Linux"]
  },
  {
    category: "Development & Automation",
    tools: ["Python", "Bash", "SQL", "n8n"]
  },
  {
    category: "Endpoint & EDR",
    tools: ["CrowdStrike Falcon (studied)", "Microsoft Defender for Endpoint", "VirusTotal", "AnyRun", "Hybrid Analysis"]
  },
  {
    category: "Threat Intelligence",
    tools: ["MISP", "OpenCTI", "VirusTotal Intelligence"]
  },
  {
    category: "IDS / IPS & Network Monitoring",
    tools: ["Suricata", "Snort", "Zeek (Bro)"]
  },
  {
    category: "OSINT Tools",
    tools: ["Maltego", "Shodan", "theHarvester", "Recon-ng"]
  },
  {
    category: "Incident Response & Ticketing",
    tools: ["TheHive", "Jira (ticketing)", "ServiceNow (familiar)"]
  }
];

function AboutMe() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 lg:py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              About <span className="text-zinc-500">Me</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </motion.div>

        {/* Bento Grid Layout - The ultimate professional presentation */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">

          {/* Main Intro Block (Spans 8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-8 lg:row-span-2 rounded-[2rem] border border-white/10 bg-[#09090b]/80 p-6 sm:p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500 shadow-xl"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-4 sm:mb-6">
                Cybersecurity Analyst & Threat Hunter
              </h3>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-4 max-w-3xl italic border-l-2 border-blue-500/30 pl-4">
                I am a Cybersecurity Analyst and BIT Mesra Computer Science graduate, actively seeking SOC Analyst, Threat Detection Engineer, and Security Operations roles. I specialize in Azure Sentinel SIEM, KQL-based detection engineering, network forensics, and Python-driven security automation.
              </p>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
                I&apos;m a Cybersecurity Analyst and BIT Mesra Computer Science graduate actively seeking SOC Analyst and Threat Detection Engineer roles across India. I specialize in Azure Sentinel SIEM engineering, KQL-based detection, network forensics, and Python-driven security automation — blending an attacker&apos;s mindset with defensive operations to detect threats faster and reduce false positives.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white tracking-wide shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors">SOC OPERATIONS</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white tracking-wide shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors">INCIDENT RESPONSE</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white tracking-wide shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors">OFFENSIVE SECURITY</span>
              </div>
              <p className="mt-4 text-emerald-400/80 text-xs sm:text-sm font-medium pt-3 border-t border-white/5">
                Currently open to full-time SOC Analyst, Threat Detection, and Security Operations roles. Available immediately.
              </p>
            </div>
          </motion.div>

          {/* High-Resolution Picture - 4K Friendly with next/image (Spans 4 cols, 3 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-3 lg:col-span-4 lg:row-span-3 rounded-[2rem] border border-white/10 overflow-hidden relative group min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] shadow-2xl shadow-black h-full flex"
          >
            {/* Using next/image for automatic resolution scaling, optimized lazy loading, and incredible crispness */}
            <Image
              src="/MyPic.jpg.jpeg"
              alt="Siddh Samarth – Cybersecurity Analyst"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              priority
              className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Ambient gradients for perfect dark theme integration */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10 opacity-50 pointer-events-none" />

            {/* Floating identity card */}
            <div className="absolute bottom-6 left-6 right-6 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/80">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <p className="text-white font-bold text-lg sm:text-xl tracking-tight">Siddh Samarth</p>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm font-medium">Turning vulnerabilities into strengths.</p>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full z-20 pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-500" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-500/10 blur-[60px] rounded-full z-20 pointer-events-none group-hover:bg-emerald-400/20 transition-colors duration-500" />
          </motion.div>

          {/* TryHackMe Badge Block (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-3 lg:col-span-5 border border-emerald-500/20 rounded-[2rem] bg-[#09090b]/80 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-center justify-between mb-4 relative z-20">
              <h4 className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                TryHackMe Profile
              </h4>
              <a href="https://tryhackme.com/p/SiddhSamarth" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

            <div className="w-full flex justify-center relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2542397"
                style={{ border: "none", width: "340px", height: "100px", maxWidth: "100%" }}
                loading="lazy"
                title="TryHackMe Badge"
                className="pointer-events-auto rounded-xl drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* LinkedIn Badge Block (Spans 3 cols) — direct native embed, no card wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="md:col-span-3 lg:col-span-3 flex items-center justify-center"
          >
            <div
              onClick={() => window.open('https://linkedin.com/in/siddhsamarth', '_blank', 'noopener,noreferrer')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open('https://linkedin.com/in/siddhsamarth', '_blank', 'noopener,noreferrer');
                }
              }}
              role="link"
              aria-label="View Siddh Samarth's LinkedIn profile"
              tabIndex={0}
              style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="siddhsamarth"
                data-version="v1"
                style={{ cursor: "pointer" }}
                suppressHydrationWarning
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://in.linkedin.com/in/siddhsamarth?trk=profile-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siddh Samarth
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Core Expertise & Strengths */}
        <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Expertise Grid */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#09090b]/60 backdrop-blur-md rounded-[2rem] border border-white/5 p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/20"></span>
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 border-l border-white/5 pl-4 sm:pl-6">
                {expertiseCategories.map((cat, idx) => (
                  <div key={idx} className="mb-2">
                    <h4 className="text-white font-medium mb-3 text-sm sm:text-base">{cat.category}</h4>
                    <ul className="space-y-2">
                      {cat.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="text-zinc-400 text-xs sm:text-sm flex items-center gap-2 group cursor-default">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></span>
                          <span className="group-hover:text-zinc-300 transition-colors">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools Grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="bg-[#09090b]/60 backdrop-blur-md rounded-[2rem] border border-white/5 p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/20"></span>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-l border-white/5 pl-4 sm:pl-6">
                {toolCategories.map((cat, idx) => (
                  <div key={idx} className="mb-2">
                    <h4 className="text-zinc-200 font-medium mb-3 text-sm sm:text-base">{cat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-xs font-medium shadow-sm hover:bg-white/10 hover:text-white transition-colors duration-300 cursor-default">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8">
            {[
              {
                title: "Analytical",
                description: "Pattern detection, log correlation, and scenario-based reasoning with attacker-to-defender mindset."
              },
              {
                title: "Automation",
                description: "Python and Bash scripting for OSINT tools, SOC utilities, and workflow automation."
              },
              {
                title: "Dual Perspective",
                description: "Unique ability to blend offensive security logic into defensive operations for better threat detection."
              }
            ].map((strength, idx) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              >
                <TiltCard className="rounded-[2rem] border border-white/5 bg-[#09090b]/80 p-6 sm:p-8 hover:border-white/10 transition-all duration-500 h-full backdrop-blur-md group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      {idx === 0 && <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                      {idx === 1 && <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                      {idx === 2 && <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">{strength.title}</h4>
                  </div>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {strength.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutMe);
