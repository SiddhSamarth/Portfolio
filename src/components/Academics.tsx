"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const academics = [
  {
    institution: "Birla Institute of Technology, Mesra",
    period: "2021 – 2025",
    title: "Bachelor of Technology in Computer Science and Engineering",
    details: [
      "Core CS foundations with focus on systems, security, and software engineering.",
    ],
  },
  {
    institution: "IIT Guwahati",
    period: "2024 – 2025",
    title: "Cyber Security Training Programme",
    details: [
      "Relevant coursework: Operating System, Database Management System, Cryptography and Network Security, Object Oriented Programming, OWASP Top 10.",
    ],
  },
];

export default function Academics() {
  return (
    <section className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Animated background pattern with ambient blue light */}
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
            Academics
          </h2>
          <p className="text-zinc-500 text-lg max-w-3xl">
            A security-focused computer science foundation supplemented with formal training in modern cyber security.
          </p>
        </motion.div>

        <div className="space-y-6 w-full max-w-none">
          {academics.map((item, idx) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 50, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 18
              }}
            >
              <TiltCard className="rounded-[2.5rem] border border-white/5 bg-[#09090b] p-8 md:p-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 hover:border-white/10 transition-all duration-500">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                    {item.institution}
                  </h3>
                  <p className="text-zinc-400 text-sm font-semibold uppercase tracking-[0.18em] mb-4">
                    {item.title}
                  </p>
                  <ul className="space-y-2 text-zinc-400 text-[15px] leading-relaxed">
                    {item.details.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:text-right text-zinc-500 text-sm font-semibold uppercase tracking-[0.16em] whitespace-nowrap">
                  {item.period}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

