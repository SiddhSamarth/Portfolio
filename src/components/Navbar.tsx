"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import ContactMenu from "./ContactMenu";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "pd-acrylic py-4" : "bg-transparent py-8"
    )}>
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.div className="w-8 h-8 flex items-center justify-center" style={{ rotate: logoRotate }}>
              <svg viewBox="0 0 64 64" className="w-full h-full text-white">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="32" cy="32" r="4" fill="currentColor" />
                <circle cx="32" cy="16" r="4" fill="currentColor" />
                <circle cx="45.86" cy="39" r="4" fill="currentColor" />
                <circle cx="18.14" cy="39" r="4" fill="currentColor" />
                <path d="M24 18c6-6 16-6 22 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <path d="M48 36c-2 8-10 12-18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <path d="M16 36c2 8 10 12 18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              </svg>
            </motion.div>
            <span className="text-xl font-bold tracking-tighter hidden sm:block">Siddh Samarth</span>
          </a>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-zinc-400 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-8">
            <ContactMenu className="pd-button-white !py-2.5 !px-6 !text-[11px] uppercase tracking-[0.1em] font-black" />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-black border-b border-white/5 overflow-hidden transition-all duration-500 md:hidden",
        isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
      )}>
        <div className="p-8 space-y-8 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-zinc-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <ContactMenu className="pd-button-white w-full max-w-xs" openOnHover={false} />
        </div>
      </div>
    </nav>
  );
}
