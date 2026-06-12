import { Landmark, Stamp, Scale, Key, GraduationCap, Users, FileText, PlaneTakeoff, Map, Globe2, CircleDollarSign, CarFront, Ticket } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Property Sales & Purchase", desc: "Expert guidance in buying and selling real estate.", icon: <Landmark size={24} /> },
    { title: "Registry & E-Stamp", desc: "Hassle-free property registration and e-stamping.", icon: <Stamp size={24} /> },
    { title: "Notary Services", desc: "Authorized notarization of your legal documents.", icon: <Scale size={24} /> },
    { title: "Rent & Lease Agreement", desc: "Legally sound drafting of rental agreements.", icon: <Key size={24} /> },
    { title: "Abroad Study Services", desc: "Guidance for your international education journey.", icon: <GraduationCap size={24} /> },
    { title: "Counseling & College", desc: "Expert counseling for college selection.", icon: <Users size={24} /> },
    { title: "Documentation Support", desc: "End-to-end support for all official documents.", icon: <FileText size={24} /> },
    { title: "Visa & Immigration", desc: "Seamless processing for passports and visas.", icon: <PlaneTakeoff size={24} /> },
    { title: "Tour & Travels", desc: "Customized travel itineraries for your trips.", icon: <Map size={24} /> },
    { title: "International Packages", desc: "Curated domestic and international holidays.", icon: <Globe2 size={24} /> },
    { title: "Forex Services", desc: "Secure money exchange and forex assistance.", icon: <CircleDollarSign size={24} /> },
    { title: "RTO Services", desc: "Assistance with all RTO related paperwork.", icon: <CarFront size={24} /> },
    { title: "Ticket Booking", desc: "Quick and easy air and rail ticket booking.", icon: <Ticket size={24} /> },
  ];

  return (
    <section id="services" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-accent-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            End-to-end solutions for all your personal and business needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-dark-section border border-[rgba(201,168,76,0.1)] rounded-lg p-8 gold-glow-hover flex flex-col items-start h-full"
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 100}
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(201,168,76,0.1)] flex items-center justify-center text-accent-gold mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-off-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
