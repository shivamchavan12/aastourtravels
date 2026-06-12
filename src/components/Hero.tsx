import Link from "next/link";
import { ShieldCheck, Plane, Briefcase, FileText, Landmark, Car } from "lucide-react";

export default function Hero() {
  const badges = [
    { name: "Property", icon: <Landmark size={16} /> },
    { name: "Visa & Immigration", icon: <Plane size={16} /> },
    { name: "Tours & Travel", icon: <Car size={16} /> },
    { name: "Legal Docs", icon: <FileText size={16} /> },
    { name: "Forex", icon: <Briefcase size={16} /> },
    { name: "RTO", icon: <ShieldCheck size={16} /> },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with radial glow */}
      <div className="absolute inset-0 bg-primary z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C] opacity-[0.15] blur-[120px] rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center mt-10">
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 gold-shimmer"
          style={{ fontFamily: "'Playfair Display', serif" }}
          data-aos="fade-up"
        >
          Your Trusted Service Partner
        </h1>
        <p
          className="text-lg md:text-2xl text-off-white mb-10 max-w-3xl mx-auto font-light"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          All Services Under One Roof -  Property, Visa, Travel, Legal & More
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link href="#services" className="group px-8 py-4 rounded-full font-semibold border border-accent-gold/40 text-accent-gold hover:border-accent-gold hover:bg-accent-gold/5 transition-all duration-300 flex items-center justify-center gap-2 tracking-wide">
            Explore Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link href="#contact" className="px-8 py-4 rounded-full font-semibold bg-accent-gold text-primary hover:bg-light-gold transition-all duration-300 shadow-[0_0_25px_rgba(201,168,76,0.25)] hover:shadow-[0_0_35px_rgba(201,168,76,0.45)] tracking-wide">
            Book Consultation
          </Link>
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80"
          data-aos="fade-in"
          data-aos-delay="400"
        >
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm md:text-base font-medium">
              <span className="text-accent-gold">{badge.icon}</span>
              <span>{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
