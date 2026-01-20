"use client";

import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ExternalLink } from "lucide-react";

type Props = {
  /** Tailwind classes for the trigger button */
  className?: string;
  /** If true, opens on hover as well as click */
  openOnHover?: boolean;
};

const LINKS = [
  {
    key: "email",
    label: "Email",
    href: "mailto:siddhsamarthsp@gmail.com",
    Icon: Mail,
    sub: "siddhsamarthsp@gmail.com",
    external: false,
    accent: "from-cyan-500/25 to-blue-500/0",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/SiddhSamarth",
    Icon: Github,
    sub: "@SiddhSamarth",
    external: true,
    accent: "from-zinc-200/18 to-zinc-200/0",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samarthsiddh/",
    Icon: Linkedin,
    sub: "/in/samarthsiddh",
    external: true,
    accent: "from-sky-500/25 to-sky-500/0",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/siddh_samarth?igsh=MTAxeGFnbm5ncjY1bw==",
    Icon: Instagram,
    sub: "@siddh_samarth",
    external: true,
    accent: "from-fuchsia-500/25 to-fuchsia-500/0",
  },
] as const;

function ContactMenu({ className, openOnHover = true }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const onDown = useCallback((e: MouseEvent) => {
    const el = rootRef.current;
    if (!el) return;
    if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
  }, []);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [onDown, onKey]);

  return (
    <div
      ref={rootRef}
      className="relative inline-flex"
      onMouseEnter={openOnHover ? () => setOpen(true) : undefined}
      onMouseLeave={openOnHover ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`contact-menu-${id}`}
        onClick={() => setOpen((v) => !v)}
        className={className}
      >
        Know me more
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`contact-menu-${id}`}
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="absolute right-0 top-[calc(100%+12px)] w-[340px] rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl p-3 shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
          >
            <div className="px-3 pt-2 pb-3">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-zinc-500">
                Connect
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {LINKS.map(({ key, label, href, Icon, sub, external, accent }) => (
                <motion.a
                  key={key}
                  role="menuitem"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 2000, damping: 50, mass: 0.3 }}
                  className={[
                    "group relative rounded-2xl border border-white/10 bg-[#09090b] p-4",
                    "transition-all duration-75 hover:border-white/20",
                    "pd-tilt pd-neon",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      "bg-gradient-to-br",
                      accent,
                    ].join(" ")}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-10 w-10 rounded-xl border border-white/10 bg-zinc-900/60 flex items-center justify-center">
                        <Icon size={18} className="text-white/90" />
                      </div>
                      <div>
                        <p className="text-white font-bold tracking-tight leading-tight">
                          {label}
                        </p>
                        <p className="text-zinc-500 text-xs font-medium">{sub}</p>
                      </div>
                    </div>
                    <div className="text-zinc-500 group-hover:text-white transition-colors mt-1">
                      {external ? <ExternalLink size={16} /> : <Mail size={16} />}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(ContactMenu);
