import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    "Property Sales & Purchase",
    "Registry & E-Stamp",
    "Notary Services",
    "Rent & Lease Agreement",
    "Passport & Visa",
    "Tour & Travels",
    "Forex Services",
    "RTO Services",
  ];

  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-[rgba(201,168,76,0.2)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 group mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A84C] bg-white flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="AAS Tour & Travels"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wider text-off-white">AAS</span>
                <span className="font-accent text-[10px] text-[#C9A84C] uppercase tracking-widest">Tour & Travels</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your Trusted Service Partner. End-to-end solutions for all your personal and business needs under one roof.
            </p>
            <div className="flex gap-2 text-accent-gold mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent-gold" />
              ))}
            </div>
            {/* Social */}
            <a
              href="https://www.instagram.com/aastourstravels?igsh=MW9uYmc4OHp3bjU3eQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#C9A84C] transition-colors group"
            >
              <svg className="group-hover:scale-110 transition-transform" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              @aastourstravels
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-off-white font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-accent-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-off-white font-heading font-semibold text-lg mb-4">Key Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
              {serviceLinks.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(201,168,76,0.1)] text-center text-gray-500 text-sm flex justify-center items-center gap-4">
          <p>© 2026 AAS Tour & Travels Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
