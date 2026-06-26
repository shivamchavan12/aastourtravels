import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, Clock, Smile } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Based in Bhopal, MP", color: "#0EA5E9" },
  { icon: Shield, label: "Transparent & Honest Process", color: "#22C55E" },
  { icon: Clock, label: "Mon–Sat, 9 AM – 7 PM", color: "#F97316" },
  { icon: Smile, label: "Dedicated Support Team", color: "#A78BFA" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-10 md:py-12 bg-[#F8FAFC] relative overflow-hidden"
      aria-label="About AAS Tour and Travels"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6" data-aos="fade-up">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight mb-0"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Trusted <span className="gradient-text">Service Partner</span> Since Day One.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: Image ── */}
          <div
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/about-hero.png"
                alt="AAS Tour & Travels professional consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/10 to-transparent" />
            </div>

            {/* Floating badge — Years of Experience */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div
                className="text-4xl font-bold text-[#0F172A] leading-none"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                5+
              </div>
              <div className="text-xs text-[#64748B] font-medium mt-1 uppercase tracking-wider">
                Years of Trust
              </div>
            </div>

            {/* Floating badge — Clients */}
            <div className="absolute -top-4 -left-4 md:-left-6 bg-[#0F172A] rounded-2xl p-4 shadow-xl">
              <div
                className="text-3xl font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                1000<span className="text-[#0EA5E9]">+</span>
              </div>
              <div className="text-xs text-[#94A3B8] font-medium mt-1 uppercase tracking-wider">
                Happy Clients
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 rounded-full border-2 border-dashed border-[#0EA5E9]/20" />
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full border-2 border-dashed border-[#F97316]/20" />
          </div>

          {/* ── Right: Content ── */}
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
          >


            <p
              className="text-[#475569] text-lg leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              AAS Tour & Travels was founded with a singular vision - to bring a comprehensive, single-window solution for every essential service under one roof. Based in the heart of Bhopal, MP, we deliver trusted, efficient, and professional support to individuals and businesses alike.
            </p>

            <p
              className="text-[#475569] text-base leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Whether you&apos;re planning an international trip, navigating a property transaction, requiring legal documentation, or seeking forex assistance - our dedicated team guides you every step of the way with complete transparency.
            </p>

            {/* Highlight pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#CBD5E1]"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${h.color}15` }}
                    >
                      <Icon size={16} style={{ color: h.color }} />
                    </div>
                    <span
                      className="text-sm font-medium text-[#334155]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
