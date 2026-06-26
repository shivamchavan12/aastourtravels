"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero section"
    >
      {/* ── Background — Ken Burns slow zoom out ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=85"
            alt="Scenic travel landscape"
            fill
            priority
            className="object-cover object-[center_30%] sm:object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Multi-stop overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,12,22,0.88) 0%, rgba(8,12,22,0.4) 40%, rgba(8,12,22,0.08) 100%)",
          }}
        />
      </div>

      {/* ── Main content — centered with glass panel ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-24 sm:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          {/* Glass card */}
          <div
            className="rounded-2xl p-8 sm:p-10 lg:p-12"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(4px) saturate(180%)",
              WebkitBackdropFilter: "blur(4px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.45)",
              borderRadius: "20px",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.06] tracking-tight mb-5 sm:mb-6"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
            }}
          >
            Explore the World
            <br />
            <span style={{ color: "#93C5FD" }}>with Confidence.</span>
          </motion.h1>

          {/* Sub-copy — service pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {["Property", "Visa & Immigration", "Tours & Travel", "Legal Docs", "Forex", "RTO"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/90 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-[#0F172A] text-sm font-semibold rounded hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get in Touch
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-white/25 text-white/85 text-sm font-medium rounded hover:border-white/50 hover:text-white hover:bg-white/[0.06] active:scale-[0.98] transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Services
            </Link>
          </motion.div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
