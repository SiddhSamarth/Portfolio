"use client";

import { motion } from "framer-motion";
import { Brain, Code, Shield } from "lucide-react";
import TiltCard from "./TiltCard";

const insights = [
  {
    title: "Signal-driven SIEM engineering beats alert noise",
    description:
      "I design detection workflows in Azure Sentinel with KQL, ASIM normalization, and correlation logic so analysts see high-confidence signals, not clutter.",
    icon: Brain,
  },
  {
    title: "Network forensics turns packets into intent",
    description:
      "From Wireshark/tcpdump to anomaly visualization, I decode C2 patterns, beaconing, and protocol misuse to surface attacker behavior early.",
    icon: Code,
  },
  {
    title: "Security research that blends AI with execution",
    description:
      "I pair symbolic + concolic analysis for smart contracts with ML-assisted telemetry to prioritize exploitability and reduce false positives.",
    icon: Shield,
    highlight: true,
  },
];

export default function SecurityInsights() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-24">
          <p className="text-zinc-500 text-lg font-medium">
            Premium security outcomes come from reasoning, context, and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard
                className={`rounded-[2.5rem] p-12 flex flex-col h-full border ${
                  insight.highlight
                    ? "bg-[#0c111d] border-blue-500/20 shadow-[inset_0_0_40px_rgba(59,130,246,0.05)]"
                    : "bg-[#09090b] border-white/5"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-12">
                  <insight.icon size={20} />
                </div>

                <h3 className="text-white text-3xl font-bold mb-8 tracking-tighter leading-tight">
                  {insight.title}
                </h3>

                <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                  {insight.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
