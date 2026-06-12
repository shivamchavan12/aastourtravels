import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", text: "Exceptional service! They handled my property registration seamlessly without any hassle. Highly recommended for their professional approach.", rating: 5 },
    { name: "Priya Patel", text: "Got my visa and travel itinerary sorted in record time. The team is very knowledgeable and supportive.", rating: 5 },
    { name: "Amit Verma", text: "A true one-stop solution. From notary services to forex, they handled everything efficiently. Excellent experience.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-dark-section relative border-t border-[rgba(201,168,76,0.1)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Client <span className="text-accent-gold">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="bg-primary p-8 rounded-xl border border-[rgba(201,168,76,0.15)] relative mt-8 gold-glow-hover"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="absolute -top-6 left-8 bg-accent-gold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-primary fill-primary" size={20} />
              </div>
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{test.text}"</p>
              <div className="font-heading font-semibold text-off-white text-lg">
                - {test.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
