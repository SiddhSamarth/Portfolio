"use client";

import { memo, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function TiltCard({ children, className }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      const el = rootRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const max = 7;
      const ry = (px - 0.5) * (max * 2);
      const rx = (0.5 - py) * (max * 2);

      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      el.style.setProperty("--px", `${(px * 100).toFixed(2)}%`);
      el.style.setProperty("--py", `${(py * 100).toFixed(2)}%`);
    });
  }, []);

  const onPointerLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--px", "50%");
    el.style.setProperty("--py", "50%");
    setIsHovered(false);
  }, []);

  const onPointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.div
      ref={rootRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerEnter={onPointerEnter}
      animate={{ 
        y: isHovered ? -6 : 0, 
        scale: isHovered ? 1.015 : 1 
      }}
      transition={{ 
        type: "spring", 
        stiffness: isHovered ? 600 : 90,
        damping: 24,
        mass: isHovered ? 0.4 : 1.8
      }}
      className={["pd-tilt pd-neon", className].filter(Boolean).join(" ")}
      style={
        {
          ["--rx" as never]: "0deg",
          ["--ry" as never]: "0deg",
          ["--px" as never]: "50%",
          ["--py" as never]: "50%",
        } as React.CSSProperties
      }
    >
      {children}
    </motion.div>
  );
}

export default memo(TiltCard);
