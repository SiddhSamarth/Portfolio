"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Solorigate Incident Response",
    subtitle: "AZURE SENTINEL SIEM",
    description: "Engineered end-to-end incident detection workflow. Utilized ASIM and KQL to normalize multi-source telemetry and streamline forensic handover.",
    link: "https://github.com/SiddhSamarth/SIEM-Investigation",
    tags: ["AZURE SENTINEL", "KQL", "ASIM", "THREAT HUNTING"],
  },
  {
    title: "Global Threat Visualization",
    subtitle: "HONEYPOT & AZURE SENTINEL",
    description: "Designed and deployed a honeypot to capture real-world attack data. Visualized 20,000+ malicious logon attempts on a world map.",
    link: "https://github.com/SiddhSamarth/SIEM-Honeypot",
    tags: ["AZURE SENTINEL", "HONEYPOT", "KQL", "VISUALIZATION"],
  },
  {
    title: "Zero Trust Architecture",
    subtitle: "ELK CONSULTING CASE STUDY",
    description: "Developed a consulting-level case study for a crypto exchange's network perimeter. Recommended and designed a Zero Trust model.",
    link: "https://github.com/SiddhSamarth/siem-zero-trust-deployment",
    tags: ["ZERO TRUST", "ELK STACK", "NETWORK DESIGN", "CONSULTING"],
  },
  {
    title: "Threat Intelligence Integration",
    subtitle: "SOC L1 ANALYST FRAMEWORK",
    description: "Demonstrated comprehensive Threat Intelligence Integration for SOC L1 Analysts. Built frameworks for threat detection, analysis, and response workflows.",
    link: "https://github.com/SiddhSamarth/Threat-Intelligence-SOC-L1",
    tags: ["THREAT INTELLIGENCE", "SOC OPERATIONS", "PYTHON", "FRAMEWORK"],
  },
  {
    title: "Security Assessment via SDLC",
    subtitle: "DEVSECOPS METHODOLOGY",
    description: "Implemented security assessment practices integrated throughout the Software Development Lifecycle. Automated security checks and vulnerability scanning in CI/CD pipelines.",
    link: "https://github.com/SiddhSamarth/Security-Assessment-via-SDLC",
    tags: ["DEVSECOPS", "SDLC", "SECURITY ASSESSMENT", "AUTOMATION"],
  },
  {
    title: "Incident Response Framework",
    subtitle: "CYBERSECURITY OPERATIONS",
    description: "Developed comprehensive incident response procedures and playbooks. Designed workflows for detection, containment, eradication, and recovery phases.",
    link: "https://github.com/SiddhSamarth/Incident-Response",
    tags: ["INCIDENT RESPONSE", "FORENSICS", "PLAYBOOKS", "OPERATIONS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Real-world security solutions and research initiatives
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94], // anime.js inOutQuad-like
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <TiltCard className="bg-[#09090b] border border-white/5 rounded-[2.5rem] p-10 flex flex-col h-full hover:border-white/10 transition-all duration-500 group">
                <h3 className="text-white text-2xl font-bold mb-2 tracking-tighter group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#3b82f6] text-[12px] mb-8 font-bold uppercase tracking-widest">
                  {project.subtitle}
                </p>

                <p className="text-zinc-400 text-[16px] leading-relaxed mb-10 font-normal flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.3 + tagIdx * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-zinc-900/60 text-zinc-400 text-[10px] font-semibold uppercase tracking-wider rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.div 
                  className="flex items-center gap-8 pt-8 border-t border-white/5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    whileHover={{ x: 4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-white text-[13px] font-bold uppercase tracking-widest hover:text-[#3b82f6] transition-colors cursor-pointer"
                  >
                    GITHUB <Github size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-white text-[13px] font-bold uppercase tracking-widest hover:text-[#3b82f6] transition-colors cursor-pointer"
                  >
                    REPRO <ExternalLink size={16} />
                  </motion.a>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
