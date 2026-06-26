"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  Stamp,
  Scale,
  Key,
  GraduationCap,
  Users,
  FileText,
  PlaneTakeoff,
  Map,
  Globe2,
  CircleDollarSign,
  CarFront,
  Ticket,
} from "lucide-react";

const services = [
  {
    title: "Property Sales & Purchase",
    desc: "Expert guidance in buying and selling residential and commercial real estate across Bhopal and beyond.",
    icon: Landmark,
    color: "#0EA5E9",
    bg: "#EFF6FF",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Registry & E-Stamp",
    desc: "Hassle-free property registration, stamp duty calculations, and e-stamping — handled end to end.",
    icon: Stamp,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Notary Services",
    desc: "Authorized notarization of your legal documents with accuracy, speed, and full compliance.",
    icon: Scale,
    color: "#0891B2",
    bg: "#ECFEFF",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rent & Lease Agreement",
    desc: "Legally sound drafting and registration of rental agreements for tenants and landlords.",
    icon: Key,
    color: "#F59E0B",
    bg: "#FFFBEB",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Abroad Study Services",
    desc: "Step-by-step guidance for students pursuing international education — admissions to visas.",
    icon: GraduationCap,
    color: "#10B981",
    bg: "#ECFDF5",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Counseling & College",
    desc: "Expert academic counseling to help students make informed college and career decisions.",
    icon: Users,
    color: "#6366F1",
    bg: "#EEF2FF",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Documentation Support",
    desc: "End-to-end support for all official documents including affidavits, attestations, and certificates.",
    icon: FileText,
    color: "#EC4899",
    bg: "#FDF2F8",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Visa & Immigration",
    desc: "Seamless processing for tourist, business, student, and immigration visas across 50+ countries.",
    icon: PlaneTakeoff,
    color: "#0EA5E9",
    bg: "#EFF6FF",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Tour & Travels",
    desc: "Customized travel itineraries tailored for leisure, pilgrimage, adventure, and family trips.",
    icon: Map,
    color: "#F97316",
    bg: "#FFF7ED",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "International Packages",
    desc: "Curated international holiday packages to Southeast Asia, Europe, Middle East, and beyond.",
    icon: Globe2,
    color: "#14B8A6",
    bg: "#F0FDFA",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Forex Services",
    desc: "Secure foreign exchange, travel money, and multi-currency forex card assistance at competitive rates.",
    icon: CircleDollarSign,
    color: "#22C55E",
    bg: "#F0FDF4",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "RTO Services",
    desc: "Complete assistance for vehicle registration, transfers, licenses, and all RTO-related paperwork.",
    icon: CarFront,
    color: "#EF4444",
    bg: "#FEF2F2",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Ticket Booking",
    desc: "Quick and easy air, rail, and bus ticket booking at the best prices with zero hidden charges.",
    icon: Ticket,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=600&q=80",
  },
];

type Service = (typeof services)[0];

function ServiceCard({
  service,
  idx,
  isFlipped,
  onFlip,
}: {
  service: Service;
  idx: number;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={(idx % 4) * 80}
      data-aos-duration="700"
      onClick={onFlip}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      style={{
        height: "270px",
        cursor: "pointer",
        borderRadius: "16px",
      }}
      className="group"
    >
      {/* ── Middle: perspective context (static, no transforms here) ── */}
      <div style={{ perspective: "1200px", width: "100%", height: "100%" }}>
        {/* ── Inner: 3D flip rotation ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
          }}
        >
          {/* ── FRONT: Image + title overlay ── */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              position: "absolute",
              inset: 0,
            }}
            className="rounded-2xl overflow-hidden bg-slate-300"
          >
            {/* position:relative wrapper required by Next.js Image fill */}
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,14,30,0.85) 0%, rgba(10,14,30,0.25) 55%, transparent 100%)",
              }}
            />
            {/* Icon bubble */}
            <div className="absolute top-4 left-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: service.bg, border: `1px solid ${service.color}30` }}
              >
                <Icon size={18} style={{ color: service.color }} />
              </div>
            </div>
            {/* Title at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className="text-white font-bold text-base leading-snug"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {service.title}
              </h3>
              <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                Tap to learn more →
              </p>
            </div>
          </div>

          {/* ── BACK: Icon + title + desc ── */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
            }}
            className="rounded-2xl p-6 flex flex-col bg-white border border-[#E2E8F0] shadow-xl"
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
              style={{ background: service.bg, border: `1px solid ${service.color}20` }}
            >
              <Icon size={24} style={{ color: service.color }} />
            </div>

            {/* Title */}
            <h3
              className="text-base font-bold text-[#0F172A] mb-2 leading-snug"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm text-[#64748B] leading-relaxed flex-grow"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [flippedIdx, setFlippedIdx] = useState<number | null>(null);

  const handleFlip = (idx: number) => {
    setFlippedIdx((prev) => (prev === idx ? null : idx));
  };
  return (
    <section
      id="services"
      className="py-12 md:py-16 bg-[#F1F5F9] relative overflow-hidden"
      aria-label="Our services"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0EA5E9] via-[#F97316] to-[#0EA5E9]" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight mb-0"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            All Services, <span className="gradient-text">One Trusted Roof.</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              idx={idx}
              isFlipped={flippedIdx === idx}
              onFlip={() => handleFlip(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
