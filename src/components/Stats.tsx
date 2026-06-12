"use client";
import CountUp from "react-countup";
import { Users, LayoutList, CalendarHeart, ShieldCheck } from "lucide-react";

export default function Stats() {
  const stats = [
    { value: 1000, suffix: "+", label: "Happy Clients", icon: <Users size={24} /> },
    { value: 15, suffix: "+", label: "Services", icon: <LayoutList size={24} /> },
    { value: 5, suffix: "+", label: "Years Experience", icon: <CalendarHeart size={24} /> },
    { value: 100, suffix: "%", label: "Trusted", icon: <ShieldCheck size={24} /> },
  ];

  return (
    <section className="bg-dark-section py-12 border-y border-[rgba(201,168,76,0.1)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="text-accent-gold mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-1 text-off-white">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
