"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-32 pb-24 relative overflow-hidden mt-auto" role="contentinfo">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 64 64" className="w-full h-full text-white" aria-hidden="true">
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
              <h3 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8">Open Source</h3>
              <ul className="space-y-4" role="list">
                <li><Link href="/#projects" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Projects</Link></li>
                <li><a href="https://github.com/SiddhSamarth" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8">Resources</h3>
              <ul className="space-y-4" role="list">
                <li><Link href="/#certificates" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Certifications</Link></li>
                <li><Link href="/#about" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8">Navigate</h3>
              <ul className="space-y-4" role="list">
                <li><Link href="/#experience" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Experience</Link></li>
                <li><Link href="/#skills" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Skills</Link></li>
                <li><Link href="/#contact" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Contact</Link></li>
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
            aria-label="Contributor Anant Kumar on GitHub"
          >
            <span>Contributor: Anant Kumar</span>
            <Github size={16} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
