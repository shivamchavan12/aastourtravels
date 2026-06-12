import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    "Professional Expertise",
    "One-Stop Solution for All Services",
    "Trusted by 1000+ Clients",
    "Transparent & Honest Process",
    "Dedicated Support Team",
    "Affordable & Efficient",
  ];

  return (
    <section id="why-us" className="py-24 bg-dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Choose <span className="text-accent-gold">AAS?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We understand the value of your time and money. That's why we bring all essential services together in one place. With our commitment to excellence, transparency, and a dedicated team of professionals, we ensure a seamless experience for every client.
            </p>
            <div className="inline-block p-4 border border-accent-gold rounded-lg bg-[rgba(201,168,76,0.05)]">
              <p className="font-accent text-xl italic text-accent-gold">
                "Excellence is not an act, but a habit."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-primary p-4 rounded-lg border border-[rgba(201,168,76,0.1)] shadow-lg hover:border-accent-gold transition-colors">
                  <CheckCircle2 className="text-accent-gold flex-shrink-0" size={24} />
                  <span className="font-medium text-off-white">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
