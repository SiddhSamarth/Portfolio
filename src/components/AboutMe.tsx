"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { ANIMATION_EASE, SPRING_CONFIG } from "@/lib/animations";

const expertiseCategories = [
  {
    category: "SOC Operations & Threat Detection",
    skills: ["SOC Monitoring", "Threat Detection", "SIEM Operations", "Event Correlation"]
  },
  {
    category: "Incident Response & Analysis",
    skills: ["Incident Response", "Log Analysis", "Malware Analysis", "Network Forensics"]
  },
  {
    category: "Offensive Security",
    skills: ["Vulnerability Assessment", "OSINT", "Penetration Testing", "CEH Methodology"]
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
  }
];

function AboutMe() {
  return (
    <section id="about" className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-zinc-500 text-lg max-w-3xl">
            Cybersecurity Analyst specializing in SOC operations, threat detection, and offensive security. 
            I blend attacker mindset with defensive operations to detect threats faster, reduce false positives, and strengthen security posture.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Core Expertise - Grouped by Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseCategories.map((category, catIdx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + catIdx * 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20 relative group hover:bg-white/8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2),0_0_60px_rgba(255,255,255,0.15),0_0_90px_rgba(255,255,255,0.1),0_0_120px_rgba(255,255,255,0.05)] hover:-translate-y-0.5"
                >
                  <h4 className="text-white font-semibold mb-4 text-lg">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-zinc-200 text-xs font-medium shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.1),0_0_60px_rgba(255,255,255,0.05)] hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies - Grouped by Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Tools & Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {toolCategories.map((category, catIdx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + catIdx * 0.1 }}
                  className="p-6 rounded-2xl border border-blue-400/20 bg-blue-500/5 backdrop-blur-md transition-all duration-300 shadow-lg shadow-blue-500/10 relative group hover:bg-blue-500/12 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(59,130,246,0.3),0_0_90px_rgba(59,130,246,0.2),0_0_120px_rgba(59,130,246,0.1)] hover:-translate-y-0.5"
                >
                  <h4 className="text-blue-300 font-semibold mb-4 text-lg">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIdx) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md text-blue-200 text-xs font-medium shadow-lg shadow-blue-500/10 transition-all duration-300 hover:bg-blue-500/15 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.2),0_0_60px_rgba(59,130,246,0.1)] hover:scale-105"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
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
                initial={{ opacity: 0, y: 50, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + idx * 0.15, 
                  ease: ANIMATION_EASE,
                  type: "spring",
                  ...SPRING_CONFIG
                }}
              >
                <TiltCard className="rounded-[2.5rem] border border-white/5 bg-[#09090b] p-8 hover:border-white/10 transition-all duration-500">
                  <h4 className="text-xl font-bold text-white mb-3">{strength.title}</h4>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    {strength.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutMe);
