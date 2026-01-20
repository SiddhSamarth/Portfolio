"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Database, Terminal } from "lucide-react";
import TiltCard from "./TiltCard";

const principles = [
  {
    title: "Privacy-first research",
    description: "My research does not compromise data integrity. I use sandboxed environments and isolated tenant logic for all security testing.",
    icon: Lock,
  },
  {
    title: "Least-privilege execution",
    description: "Architecting security workflows that only use the exact endpoints and secrets required, reducing accidental cross-task data exposure.",
    icon: Shield,
  },
  {
    title: "Isolated environments",
    description: "Every security test runs in fresh, disposable containers with strict resource usage controls and forensic-grade log capture.",
    icon: Database,
  },
  {
    title: "Audit-grade reporting",
    description: "Producing actionable proof-of-concepts and evidence-backed remediation paths that hold up under strict enterprise security audits.",
    icon: Terminal,
  },
];

export default function SecurityPrinciples() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="rounded-[2.5rem] border border-white/5 bg-[#09090b] p-12 transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">{item.title}</h3>
                    <p className="text-zinc-500 text-[17px] leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
