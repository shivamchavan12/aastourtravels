import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Property Client",
    initial: "R",
    color: "#0EA5E9",
    rating: 5,
    text: "Exceptional service! They handled my property registration seamlessly without any hassle. Highly recommended for their professional approach and complete transparency throughout the process.",
  },
  {
    name: "Priya Patel",
    role: "Visa & Travel Client",
    initial: "P",
    color: "#F97316",
    rating: 5,
    text: "Got my visa and complete travel itinerary sorted in record time. The team is incredibly knowledgeable, supportive, and made what I thought would be a stressful process completely effortless.",
  },
  {
    name: "Amit Verma",
    role: "Multi-Service Client",
    initial: "A",
    color: "#22C55E",
    rating: 5,
    text: "A true one-stop solution. From notary services to forex, they handled everything efficiently and professionally. Excellent experience from start to finish - I wouldn't go anywhere else.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-20 bg-[#F8FAFC] relative overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Top wave divider from navy */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent"
      />

      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">

          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Trusted by People, <span className="gradient-text">Loved by Clients.</span>
          </h2>

        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-premium p-8 flex flex-col group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="700"
            >
              {/* Large decorative quote mark */}
              <Quote
                size={48}
                className="absolute top-6 right-6 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1]"
                style={{ color: t.color }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-[#334155] text-base leading-relaxed flex-grow mb-7 italic"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-[#E2E8F0] mb-5" />

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="font-bold text-[#0F172A] text-base"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs text-[#64748B] mt-0.5 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
