"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LaunchScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const onCompleteRef = useRef(onComplete);
  
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    // 1. Enter (0ms - 800ms)
    const t1 = setTimeout(() => setPhase("hold"), 800);
    // 2. Hold & load bar (800ms - 2800ms)
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    // 3. Exit animation completes (2800ms - 3500ms)
    const t3 = setTimeout(() => onCompleteRef.current(), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        phase === "exit" ? "opacity-0 scale-105 blur-md pointer-events-none" : "opacity-100 scale-100 blur-0"
      }`}
      style={{ background: "#020617" }}
      aria-hidden="true"
    >
      {/* Background Mesh Gradients - Premium Apple Style */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.15]"
        style={{
          background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.15]"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
          transform: "translate(50%, 50%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main Content Container - Pure Typography */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="overflow-hidden pb-2">
          <motion.h1
            initial={{ y: "100%", opacity: 0, rotateX: -20 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            AAS TOUR &amp; TRAVELS
          </motion.h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden pt-2">
          <motion.p
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] md:text-xs font-semibold tracking-[0.5em] uppercase text-[#0EA5E9]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Premium Travel &amp; Lifestyle
          </motion.p>
        </div>
      </div>

      {/* Ultra-thin glowing loading line at the very bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.03]">
        <motion.div
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"
          initial={{ x: "-200%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2.8,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}