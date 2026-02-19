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
    description: "TensorFlow, Pandas, NumPy, Regex/re, Socket, PyAutoGUI & more",
    icon: ShieldCheck,
  },
  {
    title: "Security Domains",
    description: "Network Analysis, Malware Analysis, OS Hardening, Log Analysis",
    icon: Cpu,
  },
  {
    title: "Tools & Technologies",
    description: "Azure Sentinel, AndroGuard, Nmap, Wireshark, Nikto, Nessus, Hashcat, Aircrack-ng, n8n",
    icon: Terminal,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Technologies and tools I work with daily
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <TiltCard className="pd-card p-10 hover:border-white/10 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="pd-icon-box !bg-transparent !border-white/5 !w-10 !h-10 group-hover:scale-110 transition-transform">
                    <skill.icon size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{skill.title}</h3>
                </div>
                <p className="text-zinc-400 text-[16px] leading-relaxed font-normal">
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
