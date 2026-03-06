"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Cpu, Terminal } from "lucide-react";
import TiltCard from "./TiltCard";

const skillGrid = [
  {
    title: "Programming Languages",
    description: "Python, Bash, SQL, PowerShell",
    icon: Lock,
  },
  {
    title: "Libraries & Data",
    description: "TensorFlow (ML anomaly detection), Pandas, NumPy, Regex/re, Socket, PyAutoGUI, Scapy",
    icon: ShieldCheck,
  },
  {
    title: "Security Domains",
    description: "Network Analysis, Malware Analysis, OS Hardening, Log Analysis",
    icon: Cpu,
  },
  {
    title: "Tools & Technologies",
    description: "Azure Sentinel, Splunk, Wazuh, Nmap, Wireshark, Zeek, Suricata, Nessus, Burp Suite, Nikto, Hashcat, Aircrack-ng, TheHive, MISP, Shodan, Maltego, theHarvester, VirusTotal, AnyRun, Hybrid Analysis, CrowdStrike Falcon (studied), Microsoft Defender for Endpoint, AndroGuard, n8n",
    icon: Terminal,
  },
  {
    title: "Currently Learning",
    description: "CompTIA Security+ · CEH (in progress) · Cloud Security (Azure)",
    icon: ShieldCheck,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 md:py-32 lg:py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-14 md:mb-16 text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Technologies and tools I work with daily
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {skillGrid.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 28, rotateX: -4 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TiltCard className="pd-card p-6 sm:p-8 md:p-10 hover:border-white/10 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="pd-icon-box !bg-transparent !border-white/5 !w-9 !h-9 sm:!w-10 sm:!h-10 group-hover:scale-110 transition-transform">
                    <skill.icon size={16} className="sm:w-[18px] sm:h-[18px] text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">{skill.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm sm:text-[15px] md:text-[16px] leading-relaxed font-normal">
                  {skill.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
