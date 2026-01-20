"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-24 relative overflow-hidden mt-auto">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 flex items-center justify-center">
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
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Siddh Samarth</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8">Open Source</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">SIEM Investigation</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Honeypots</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Zero Trust</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Vulnerability Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Research Blog</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">GitHub Repos</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Security</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Privacy</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Terms</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm font-medium">
            © 2026 Siddh Samarth. All rights reserved.
          </p>
          <a 
            href="https://github.com/antcybersec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 text-sm font-medium hover:text-white transition-colors"
          >
            <span>Contributor: Anant Kumar</span>
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
