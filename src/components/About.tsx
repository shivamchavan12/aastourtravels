import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-accent-gold">Our Company</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gold mb-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              AAS Tour & Travels was founded with a vision to provide a comprehensive, single-window solution for a wide range of essential services. Based in the heart of Bhopal, MP, we pride ourselves on delivering trusted, efficient, and professional support to individuals and businesses alike.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Whether you are looking to buy property, need legal documentation, or planning an international trip, our dedicated team is here to guide you every step of the way.
            </p>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-left">
            <div className="relative w-full max-w-xs aspect-square rounded-2xl border-2 border-[rgba(201,168,76,0.3)] shadow-[0_0_40px_rgba(201,168,76,0.15)] bg-white flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="AAS Tour & Travels"
                fill
                sizes="(max-width: 768px) 90vw, 512px"
                className="object-contain p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
