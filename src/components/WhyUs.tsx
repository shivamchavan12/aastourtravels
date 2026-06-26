import {
  UserCheck,
  BadgePercent,
  ShieldCheck,
  HeadphonesIcon,
  Route,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Team",
    desc: "Our professionals bring years of domain expertise in travel, legal, property, and financial services.",
    color: "#0EA5E9",
    gradient: "from-[#0EA5E9]/10 to-[#0EA5E9]/0",
  },
  {
    icon: BadgePercent,
    title: "Affordable Pricing",
    desc: "Transparent, competitive pricing with absolutely no hidden charges — what you see is what you pay.",
    color: "#F97316",
    gradient: "from-[#F97316]/10 to-[#F97316]/0",
  },
  {
    icon: ShieldCheck,
    title: "100% Trusted Service",
    desc: "Trusted by 1000+ clients across Bhopal and India with a proven track record of honest, reliable service.",
    color: "#22C55E",
    gradient: "from-[#22C55E]/10 to-[#22C55E]/0",
  },
  {
    icon: HeadphonesIcon,
    title: "24×7 Support",
    desc: "We are always just a call or WhatsApp message away, available round the clock whenever you need us.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/10 to-[#A78BFA]/0",
  },
  {
    icon: Route,
    title: "Personalized Plans",
    desc: "Every client gets a tailored plan — no cookie-cutter solutions. Your needs, your budget, your journey.",
    color: "#38BDF8",
    gradient: "from-[#38BDF8]/10 to-[#38BDF8]/0",
  },
  {
    icon: Globe,
    title: "Safe & Comfortable",
    desc: "From departure to return, we ensure safety, comfort, and peace of mind at every single step.",
    color: "#FB923C",
    gradient: "from-[#FB923C]/10 to-[#FB923C]/0",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-10 md:py-12 relative overflow-hidden"
      style={{ background: "#020617" }}
      aria-label="Why choose AAS Tour and Travels"
    >
      {/* Divider line from Stats section */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Glow effects */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Built on Trust, <span className="gradient-text">Driven by Excellence.</span>
          </h2>
          <p
            className="text-[#94A3B8] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We understand the value of your time, trust, and money. Here is why thousands of clients choose AAS Tour & Travels year after year.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] rounded-[24px] p-8 relative overflow-hidden group transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(255,255,255,0.05)]"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
                data-aos-duration="700"
              >
                {/* Top-right gradient blob */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl bg-gradient-to-br ${feature.gradient} pointer-events-none`}
                />

                {/* Icon - Premium Apple Style */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-700 group-hover:scale-110 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}00)`,
                    border: `1px solid ${feature.color}30`,
                    boxShadow: `0 8px 32px ${feature.color}20`
                  }}
                >
                  <Icon size={22} style={{ color: feature.color, filter: `drop-shadow(0 2px 8px ${feature.color}40)` }} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#94A3B8] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {feature.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-2xl transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <blockquote
            className="text-base md:text-lg italic font-medium text-[#CBD5E1] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &ldquo;Excellence is not an act, but a habit.&rdquo;
          </blockquote>
          <p className="text-[#64748B] text-xs mt-3 tracking-widest uppercase">
            - The AAS Promise
          </p>
        </div>
      </div>
    </section>
  );
}
