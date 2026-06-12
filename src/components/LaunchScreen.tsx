// "use client";

// import { useEffect, useRef, useState } from "react";

// function AasLogoSvg() {
//   return (
//     <svg
//       viewBox="0 0 640 380"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-full h-auto"
//       style={{ filter: "drop-shadow(0 0 40px rgba(201,168,76,0.3))" }}
//     >
//       {/* "AAS" — extra bold, white, very large */}
//       <text
//         x="320"
//         y="215"
//         textAnchor="middle"
//         fontFamily="Inter, sans-serif"
//         fontSize="200"
//         fontWeight="900"
//         fill="#FFFFFF"
//         letterSpacing="8"
//       >
//         AAS
//       </text>

//       {/* "TOUR & TRAVELS" — bold, gold, below */}
//       <text
//         x="320"
//         y="295"
//         textAnchor="middle"
//         fontFamily="Inter, sans-serif"
//         fontSize="50"
//         fontWeight="700"
//         fill="#C9A84C"
//         textLength="490"
//         lengthAdjust="spacing"
//       >
//         {"TOUR & TRAVELS"}
//       </text>
//     </svg>
//   );
// }

// export default function LaunchScreen({ onComplete }: { onComplete: () => void }) {
//   const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
//   const onCompleteRef = useRef(onComplete);
//   useEffect(() => { onCompleteRef.current = onComplete; });

//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase("hold"), 800);
//     const t2 = setTimeout(() => setPhase("exit"), 2400);
//     const t3 = setTimeout(() => onCompleteRef.current(), 3100);
//     return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-700
//         ${phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
//       style={{ background: "#0A0A0A" }}
//     >
//       {/* Gold radial glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(201,168,76,0.13) 0%, transparent 70%)",
//         }}
//       />

//       {/* Subtle gold grid */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "linear-gradient(rgba(201,168,76,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.07) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Logo + tagline */}
//       <div
//         className={`relative flex flex-col items-center transition-all duration-700
//           ${phase === "enter" ? "opacity-0 scale-90 translate-y-6" : "opacity-100 scale-100 translate-y-0"}`}
//       >
//         <div style={{ width: 400, maxWidth: "90vw" }}>
//           <AasLogoSvg />
//         </div>

//         <p
//           className={`mt-4 text-sm tracking-[0.35em] uppercase transition-all duration-1000 delay-300
//             ${phase === "enter" ? "opacity-0 translate-y-4" : "opacity-60 translate-y-0"}`}
//           style={{ color: "#C9A84C", fontFamily: "var(--font-cormorant, serif)" }}
//         >
//           Your Trusted Travel Partner
//         </p>

//         {/* Loading bar */}
//         <div className="mt-8 w-48 h-[2px] bg-[rgba(201,168,76,0.12)] rounded-full overflow-hidden">
//           <div
//             className="h-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080] rounded-full"
//             style={{ animation: "loadBar 2.4s ease-in-out forwards" }}
//           />
//         </div>
//       </div>

//       <style>{`
//         @keyframes loadBar {
//           0%   { width: 0%; }
//           20%  { width: 20%; }
//           65%  { width: 72%; }
//           100% { width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

function AasLogoSvg() {
  return (
    <svg
      viewBox="0 0 640 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      style={{ filter: "drop-shadow(0 0 50px rgba(201,168,76,0.25))" }}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#F0D080" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D8D8D8" />
        </linearGradient>
      </defs>

      {/* Decorative airplane glyph */}
      <g transform="translate(320, 60) rotate(-35)" fill="url(#goldGrad)">
        <path d="M0 -14 L4 -2 L26 4 L26 8 L4 6 L0 18 L6 24 L6 27 L0 25 L-6 27 L-6 24 L0 18 L-4 6 L-26 8 L-26 4 L-4 -2 Z" />
      </g>

      {/* Top thin divider */}
      <line x1="160" y1="100" x2="480" y2="100" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.5" />

      {/* "AAS" */}
      <text
        x="320"
        y="245"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="190"
        fontWeight="800"
        fill="url(#silverGrad)"
        letterSpacing="14"
      >
        AAS
      </text>

      {/* Thin rule above subtitle */}
      <line x1="190" y1="290" x2="450" y2="290" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />

      {/* "TOUR & TRAVELS" */}
      <text
        x="320"
        y="335"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="42"
        fontWeight="600"
        letterSpacing="6"
        fill="url(#goldGrad)"
      >
        TOUR &amp; TRAVELS
      </text>

      {/* Bottom flourish — small diamond + lines */}
      <g opacity="0.7">
        <line x1="250" y1="370" x2="300" y2="370" stroke="#C9A84C" strokeWidth="1" />
        <path d="M320 363 L327 370 L320 377 L313 370 Z" fill="#C9A84C" />
        <line x1="340" y1="370" x2="390" y2="370" stroke="#C9A84C" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function LaunchScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 900);
    const t2 = setTimeout(() => setPhase("exit"), 4300);
    const t3 = setTimeout(() => onCompleteRef.current(), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-all duration-700
        ${phase === "exit" ? "opacity-0 scale-105 blur-sm pointer-events-none" : "opacity-100 scale-100"}`}
      style={{ background: "#0A0A0A" }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.14) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, #0A0A0A 100%)",
        }}
      />

      {/* Fine gold grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 75%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              background: "#C9A84C",
              opacity: 0.18 + (i % 4) * 0.05,
              animation: `floatY ${6 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Logo + tagline */}
      <div
        className={`relative flex flex-col items-center transition-all duration-1000 ease-out
          ${phase === "enter" ? "opacity-0 scale-95 translate-y-8 blur-sm" : "opacity-100 scale-100 translate-y-0 blur-0"}`}
      >
        <div style={{ width: 420, maxWidth: "88vw" }}>
          <AasLogoSvg />
        </div>

        <div
          className={`mt-6 flex items-center gap-4 transition-all duration-1000 delay-300
            ${phase === "enter" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          <span className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
          <p
            className="text-sm tracking-[0.4em] uppercase whitespace-nowrap"
            style={{ color: "#E8D9B5", fontFamily: "var(--font-cormorant, serif)" }}
          >
            Your Trusted Travel Partner
          </p>
          <span className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
        </div>

        {/* Loading bar */}
        <div className="mt-10 w-56 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(201,168,76,0.12)" }}>
          <div
            className="h-full rounded-full relative"
            style={{
              background: "linear-gradient(90deg, #C9A84C, #F0D080, #C9A84C)",
              animation: "loadBar 2.6s cubic-bezier(0.45,0,0.2,1) forwards",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadBar {
          0%   { width: 0%; }
          25%  { width: 28%; }
          70%  { width: 78%; }
          100% { width: 100%; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  );
}