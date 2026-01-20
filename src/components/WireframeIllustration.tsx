"use client";

import { useState, useEffect } from "react";

export default function WireframeIllustration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="geometricGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0.4)" />
          </linearGradient>
          <linearGradient id="geometricGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.3)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Hexagonal Grid Pattern */}
        <g transform="translate(200,200)">
          {Array.from({ length: 8 }).map((_, row) => {
            return Array.from({ length: 12 }).map((_, col) => {
              const x = col * 80 + (row % 2 === 0 ? 0 : 40);
              const y = row * 70;
              return (
                <polygon
                  key={`hex-${row}-${col}`}
                  points={`${x},${y+20} ${x+20},${y} ${x+40},${y} ${x+60},${y+20} ${x+40},${y+40} ${x+20},${y+40}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              );
            });
          })}
        </g>

        {/* Geometric Shapes - Hexagons */}
        <g transform="translate(600,400)">
          {Array.from({ length: 3 }).map((_, i) => {
            const size = 80 - (i * 20);
            const rotation = i * 30;
            return (
              <g key={`hex-shape-${i}`} transform={`rotate(${rotation})`}>
                <polygon
                  points={`0,-${size} ${size*0.866},-${size*0.5} ${size*0.866},${size*0.5} 0,${size} -${size*0.866},${size*0.5} -${size*0.866},-${size*0.5}`}
                  fill="none"
                  stroke="url(#geometricGradient1)"
                  strokeWidth="2"
                  opacity="0.6"
                  filter="url(#glow)"
                />
              </g>
            );
          })}
        </g>

        {/* Diagonal Grid Lines */}
        <g opacity="0.3">
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = i * 80;
            const y1 = 0;
            const x2 = i * 80 + 400;
            const y2 = 800;
            return (
              <line
                key={`diag-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(59,130,246,0.15)"
                strokeWidth="1"
              />
            );
          })}
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = i * 80;
            const y1 = 800;
            const x2 = i * 80 + 400;
            const y2 = 0;
            return (
              <line
                key={`diag-reverse-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(168,85,247,0.15)"
                strokeWidth="1"
              />
            );
          })}
        </g>

        {/* Floating Geometric Shapes */}
        <g transform="translate(800,300)">
          <circle
            cx={0}
            cy={0}
            r={60}
            fill="none"
            stroke="url(#geometricGradient2)"
            strokeWidth="2"
            opacity="0.4"
            filter="url(#glow)"
          />
          <polygon
            points="-40,-40 40,-40 40,40 -40,40"
            fill="none"
            stroke="rgba(6,182,212,0.5)"
            strokeWidth="2"
            opacity="0.5"
            transform="rotate(45)"
          />
        </g>

        <g transform="translate(300,600)">
          <polygon
            points="0,-50 43.3,-25 43.3,25 0,50 -43.3,25 -43.3,-25"
            fill="none"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="2"
            opacity="0.6"
            filter="url(#glow)"
          />
          <circle
            cx={0}
            cy={0}
            r={30}
            fill="none"
            stroke="rgba(168,85,247,0.4)"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>

        {/* Abstract Geometric Lines */}
        <g opacity="0.4">
          <path
            d="M 100 200 Q 300 100, 500 200 T 900 200"
            fill="none"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="2"
          />
          <path
            d="M 200 600 Q 400 700, 600 600 T 1000 600"
            fill="none"
            stroke="rgba(168,85,247,0.3)"
            strokeWidth="2"
          />
        </g>

        {/* Corner Accents */}
        <g opacity="0.3">
          {/* Top Left */}
          <polygon
            points="0,0 100,0 0,100"
            fill="none"
            stroke="rgba(59,130,246,0.2)"
            strokeWidth="1"
          />
          {/* Top Right */}
          <polygon
            points="1200,0 1100,0 1200,100"
            fill="none"
            stroke="rgba(168,85,247,0.2)"
            strokeWidth="1"
          />
          {/* Bottom Left */}
          <polygon
            points="0,800 100,800 0,700"
            fill="none"
            stroke="rgba(6,182,212,0.2)"
            strokeWidth="1"
          />
          {/* Bottom Right */}
          <polygon
            points="1200,800 1100,800 1200,700"
            fill="none"
            stroke="rgba(59,130,246,0.2)"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}
