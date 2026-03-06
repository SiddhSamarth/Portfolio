"use client";

import { memo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

const ResumeButton = memo(function ResumeButton() {
  return (
    <motion.a
      href="/resume"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Siddh Samarth resume (opens in new tab)"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="pd-button-white group relative w-full sm:w-auto !bg-white !text-black !border-none !px-8 sm:!px-10 md:!px-12 !py-3.5 sm:!py-4 md:!py-5"
    >
      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
        <FileText
          size={18}
          className="text-black/80 group-hover:rotate-6 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <span>View Resume</span>
        <ExternalLink
          size={14}
          className="text-black/70 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </span>
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
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="relative mb-4 sm:mb-6 min-h-[100px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight pd-text-gradient leading-[1.05] px-2"
            >
              Siddh Samarth
            </motion.h1>
          </div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to SOC Analyst &amp; Threat Detection roles
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-8 sm:mb-10 max-w-2xl mx-auto px-4 text-center"
          >
            Cybersecurity Analyst — I find threats before they find you.
            <br />
            <span className="text-zinc-500 text-sm sm:text-base">SOC Operations · SIEM Engineering · Threat Detection · India</span>
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 px-4"
          >
            {HIGHLIGHTS.map((t, idx) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.96, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.5 + idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-zinc-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:border-white/20 hover:bg-black/60 transition-all duration-300 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.nav
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex justify-center px-4"
            aria-label="Primary actions"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch sm:items-center justify-center w-full sm:w-auto max-w-md sm:max-w-none">
              <motion.span
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#projects"
                  className="pd-button-white px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base font-bold inline-block w-full sm:w-auto text-center"
                >
                  View Projects
                </Link>
              </motion.span>
              <div className="w-full sm:w-auto">
                <ResumeButton />
              </div>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Exposure Section */}
      <div className="w-full z-10 pt-12 sm:pt-16 md:pt-20">
        <div className="w-full px-0 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <p className="text-zinc-500 text-[9px] sm:text-[10px] md:text-[11px] font-black mb-6 sm:mb-8 md:mb-10 tracking-[0.3em] sm:tracking-[0.4em] uppercase opacity-60 px-4">
              TRAINED &amp; WORKED WITH
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700 pb-6 sm:pb-8 md:pb-10 px-4">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black tracking-tighter text-white whitespace-nowrap"
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
