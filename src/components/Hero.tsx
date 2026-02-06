"use client";

import { memo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

const ResumeButton = memo(function ResumeButton() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    });
  }, []);

  return (
    <motion.a
      ref={buttonRef}
      href="https://drive.google.com/file/d/1DfS8gUKtsnkcUuPOrxPcHPNl8BCxlvhr/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Siddh Samarth resume (opens in new tab)"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative px-12 py-5 text-base font-bold rounded-full border border-white/15 text-white bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-300"
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Neon glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.25), rgba(168,85,247,0.15), transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      
      {/* Sheen effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{
          background: `linear-gradient(110deg, transparent 0%, rgba(59,130,246,0.2) 50%, transparent 100%)`,
          transform: `translateX(-100%)`,
          animation: "pd-sheen 1.2s ease-out forwards",
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        <span>View Resume</span>
        <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </span>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/20 transition-all duration-300" />
    </motion.a>
  );
});

const HIGHLIGHTS = [
  "Azure Sentinel",
  "Wireshark",
  "Nmap",
  "Nessus",
  "TensorFlow",
  "Bash/Python",
  "CEH Preparation",
  "Cyber Security Training (IIT Guwahati)",
] as const;

const BRANDS = ["BIT MESRA", "IIT GUWAHATI", "IIT PATNA", "TEACHNOOK", "DRISTI-NGO"] as const;

function Hero() {
  return (
    <section
      className="relative w-screen min-h-screen flex flex-col items-center justify-between pt-32 pb-20 overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <iframe
          src="https://unicorn.studio/embed/Rj77cbewZzmp8emYU8Bm"
          width="100%"
          height="100%"
          className="absolute inset-0 w-screen h-full border-none opacity-80"
          title="Background animation – cybersecurity visualization"
          aria-hidden="true"
        />
      </motion.div>
      <div className="pd-threat-map z-[1]" aria-hidden="true" />

      <header className="w-full px-0 z-10 text-center relative flex-grow flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="relative mb-6 min-h-[140px] md:min-h-[180px] flex items-center justify-center">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight pd-text-gradient leading-[1.05]"
            >
              Siddh Samarth
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-zinc-400 text-lg md:text-xl lg:text-2xl font-medium mb-10 max-w-2xl mx-auto"
          >
            SOC · SIEM · OSINT · Security Automation
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            {HIGHLIGHTS.map((t, idx) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + idx * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-zinc-300 text-xs font-bold uppercase tracking-[0.15em] hover:border-white/20 hover:bg-black/60 transition-all duration-300 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex justify-center"
            aria-label="Primary actions"
          >
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              <motion.span
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="#projects"
                  className="pd-button-white px-12 py-5 text-base font-bold inline-block"
                >
                  View Projects
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="#about"
                  className="pd-button-white px-12 py-5 text-base font-bold inline-block border border-white/20 bg-transparent hover:bg-white/10"
                >
                  About Me
                </Link>
              </motion.span>
              <ResumeButton />
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Exposure Section */}
      <div className="w-full z-10 pt-20">
        <div className="w-full px-0 text-center">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <p className="text-zinc-500 text-[11px] font-black mb-10 tracking-[0.4em] uppercase opacity-60">
              I HAD EXPOSURE FROM:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700 pb-10">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-white whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
