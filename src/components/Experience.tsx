"use client";

import { motion } from "framer-motion";
import { Zap, Brain, ClipboardCheck, ShieldCheck } from "lucide-react";
import TiltCard from "./TiltCard";
import WireframeIllustration from "./WireframeIllustration";

const items = [
  {
    title: "IIT Patna — Code Vulnerability Analytic and Research Intern",
    period: "May 2024 – July 2024",
    description:
      "Conducted symbolic and concolic execution on Solidity smart contracts to identify vulnerabilities, leveraging LLMs and advanced analysis techniques for smart contract security.",
    icon: Zap,
  },
  {
    title: "Teachnook — Trainee & Intern",
    period: "Jan 2024 – Feb 2024",
    description:
      "Gained hands-on exposure to network security and malware analysis: identifying and mitigating potential threats, and analyzing malware behavior to understand network vulnerabilities.",
    icon: ShieldCheck,
  },
  {
    title: "Dristi NGO, Deoghar — Documentation Head",
    period: "Aug 2022 – Aug 2024",
    description:
      "Led documentation for a social-impact NGO: managed a team, organized security-sensitive records, and ensured accurate, efficient communication across stakeholders.",
    icon: Brain,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      {/* Wireframe Illustration Background */}
      <WireframeIllustration />
      
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Header Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-[4rem] font-bold mb-8 tracking-tighter leading-[1.1] text-white"
              >
                Internship & field experience
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-500 text-xl leading-relaxed mb-12 font-medium max-w-md"
              >
                Places where I turned theory into practice—from research internships to real-world documentation and coordination work.
              </motion.p>
              
              {/* Optional: Add a subtle graphic or leave clean as per screenshot */}
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 18
                }}
              >
                <TiltCard className="rounded-[2rem] border border-white/5 bg-[#09090b] p-12 transition-all duration-300">
                  <div className="flex items-start gap-8">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white tracking-tight">{item.title}</h3>
                      <p className="text-zinc-500 text-sm font-semibold mb-4">
                        {item.period}
                      </p>
                      <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
