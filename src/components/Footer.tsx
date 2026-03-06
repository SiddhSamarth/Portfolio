"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  return (
    <footer className="bg-black pt-20 pb-12 relative overflow-hidden mt-auto border-t border-white/5" role="contentinfo">

      {/* ROW 1: CTA BANNER — hidden on /resume (page has its own CTA) */}
      {!isResumePage && (
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 relative z-10 mb-20">
          <div className="bg-[#0f0f11] border border-white/10 rounded-3xl p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Let&apos;s build something secure.</h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                Open to SOC Analyst, Threat Detection &amp; Operations roles across India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto"
              >
                View Resume
              </Link>
              <a
                href="mailto:siddhsamarth@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-all duration-300 w-full md:w-auto"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ROW 2: FOOTER GRID */}
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">

          {/* Column 1: Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Siddh Samarth</h3>
            <p className="text-zinc-400 text-base mb-6">Cybersecurity Analyst</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </div>

            <p className="text-zinc-600 text-sm italic">
              &quot;Turning vulnerabilities into strengths.&quot;
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Column 2: EXPLORE */}
            <div>
              <h4 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-6">Explore</h4>
              <ul className="space-y-4" role="list">
                <li><Link href="/#about" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">About</Link></li>
                <li><Link href="/#experience" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Experience</Link></li>
                <li><Link href="/#projects" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Projects</Link></li>
                <li><Link href="/#skills" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Skills</Link></li>
                <li><Link href="/writeups" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Writeups</Link></li>
                <li><Link href="/resume" className="text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">Resume</Link></li>
              </ul>
            </div>

            {/* Column 3: FIND ME ON */}
            <div>
              <h4 className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] mb-6">Find Me On</h4>
              <ul className="space-y-4" role="list">
                <li>
                  <a href="https://github.com/SiddhSamarth" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">
                    GitHub
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/siddhsamarth" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">
                    LinkedIn
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://tryhackme.com/p/siddhsamarth" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">
                    TryHackMe
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="mailto:siddhsamarth@gmail.com" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-[15px] font-medium">
                    Email
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 3: BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-[11px] font-medium">
            © {new Date().getFullYear()} Siddh Samarth. All rights reserved.
          </p>
          <a
            href="https://github.com/antcybersec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 text-[11px] font-medium hover:text-zinc-400 transition-colors"
          >
            Contributor: Anant Kumar
          </a>
        </div>
      </div>
    </footer>
  );
}
