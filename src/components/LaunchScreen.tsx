"use client";

import { useEffect, useRef, useState } from "react";

function LogoMark() {
  return (
    <svg
      viewBox="0 0 520 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ls-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="ls-white" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="ls-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>

      {/* Decorative top rule */}
      <line x1="120" y1="62" x2="400" y2="62" stroke="url(#ls-blue)" strokeWidth="1.5" opacity="0.6" />

      {/* Tiny airplane glyph */}
      <g transform="translate(260, 38) rotate(-35)" fill="url(#ls-blue)" opacity="0.9">
        <path d="M0 -10 L3 -1 L20 3 L20 6 L3 5 L0 14 L5 19 L5 21 L0 19 L-5 21 L-5 19 L0 14 L-3 5 L-20 6 L-20 3 L-3 -1 Z" />
      </g>

      {/* "AAS" */}
      <text
        x="260"
        y="210"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="160"
        fontWeight="800"
        fill="url(#ls-white)"
        letterSpacing="10"
      >
        AAS
      </text>

      {/* Thin rule */}
      <line x1="155" y1="248" x2="365" y2="248" stroke="url(#ls-blue)" strokeWidth="1" opacity="0.7" />

      {/* "TOUR & TRAVELS" */}
      <text
        x="260"
        y="286"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="32"
        fontWeight="600"
        letterSpacing="5"
        fill="url(#ls-blue)"
      >
        TOUR &amp; TRAVELS
      </text>

      {/* Bottom diamond accent */}
      <g opacity="0.7">
        <line x1="198" y1="316" x2="238" y2="316" stroke="url(#ls-orange)" strokeWidth="1.5" />
        <path d="M260 309 L267 316 L260 323 L253 316 Z" fill="url(#ls-orange)" />
        <line x1="282" y1="316" x2="322" y2="316" stroke="url(#ls-orange)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default function LaunchScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 700);
    const t2 = setTimeout(() => setPhase("exit"), 3200);
    const t3 = setTimeout(() => onCompleteRef.current(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-all duration-700 ${
        phase === "exit" ? "opacity-0 scale-105 blur-sm pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{ background: "#0F172A" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14,165,233,0.12) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 45%, #0F172A 100%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(14,165,233,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, black 0%, transparent 75%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 41) % 100}%`,
              top: `${(i * 57) % 100}%`,
              background: i % 3 === 0 ? "#F97316" : "#0EA5E9",
              opacity: 0.15 + (i % 4) * 0.06,
              animation: `floatY ${5 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Logo + tagline */}
      <div
        className={`relative flex flex-col items-center transition-all duration-1000 ease-out ${
          phase === "enter"
            ? "opacity-0 scale-95 translate-y-8 blur-sm"
            : "opacity-100 scale-100 translate-y-0 blur-0"
        }`}
      >
        <div style={{ width: 380, maxWidth: "88vw" }}>
          <LogoMark />
        </div>

        {/* Tagline */}
        <div
          className={`mt-4 flex items-center gap-4 transition-all duration-1000 delay-200 ${
            phase === "enter" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#F97316]" />
          <p
            className="text-xs tracking-[0.45em] uppercase text-[#94A3B8]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Your Trusted Travel Partner
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#F97316]" />
        </div>

        {/* Progress bar */}
        <div
          className="mt-8 w-52 h-[2px] rounded-full overflow-hidden"
          style={{ background: "rgba(14,165,233,0.12)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #0EA5E9, #38BDF8, #F97316)",
              animation: "loadBar 2.8s cubic-bezier(0.45,0,0.2,1) forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}