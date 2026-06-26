"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { Users, LayoutList, CalendarHeart, ShieldCheck } from "lucide-react";

const stats = [
  { value: 1000, suffix: "+", label: "Happy Clients",     icon: Users,        color: "#38BDF8" },
  { value: 13,   suffix: "+", label: "Services Offered",  icon: LayoutList,   color: "#F97316" },
  { value: 5,    suffix: "+", label: "Years of Excellence",icon: CalendarHeart,color: "#22C55E" },
  { value: 100,  suffix: "%", label: "Client Satisfaction",icon: ShieldCheck,  color: "#A78BFA" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      className="h-full"
    >
      <div className="flex flex-col items-center text-center bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] rounded-[24px] p-5 md:p-6 relative overflow-hidden group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(255,255,255,0.05)] h-full">
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: stat.color }}
        />
        
        {/* Icon circle - Apple style smooth gradient */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform duration-700 group-hover:scale-110 shadow-lg"
          style={{ 
            background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}00)`, 
            border: `1px solid ${stat.color}30`,
            boxShadow: `0 8px 32px ${stat.color}20`
          }}
        >
          <Icon size={20} style={{ color: stat.color, filter: `drop-shadow(0 2px 8px ${stat.color}40)` }} />
        </div>

        {/* Counter - Metallic gradient text */}
        <div
          className="text-3xl md:text-4xl font-bold mb-1.5 relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 tracking-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {isInView ? (
            <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
          ) : (
            0
          )}
          <span style={{ color: stat.color }}>{stat.suffix}</span>
        </div>

        <div
          className="text-xs text-[#94A3B8] uppercase tracking-[0.15em] font-semibold relative z-10 mt-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-10 md:py-12 relative overflow-hidden bg-[#020617]"
      aria-label="Company statistics"
    >
      {/* Apple-style deep mesh gradient backgrounds */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          transform: "translate(20%, 20%)",
          filter: "blur(100px)",
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
