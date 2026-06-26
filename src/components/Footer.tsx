import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
  "Property Sales & Purchase",
  "Registry & E-Stamp",
  "Notary Services",
  "Rent & Lease Agreement",
  "Visa & Immigration",
  "Tour & Travels",
  "Forex Services",
  "RTO Services",
  "Ticket Booking",
  "Abroad Study Services",
];

const contactDetails = [
  {
    icon: MapPin,
    text: "Bhopal, Madhya Pradesh, India",
    color: "#0EA5E9",
  },
  {
    icon: Phone,
    text: "+91 91837 86068",
    href: "tel:+919183786068",
    color: "#22C55E",
  },
  {
    icon: Mail,
    text: "tourstravelsaas@gmail.com",
    href: "mailto:tourstravelsaas@gmail.com",
    color: "#F97316",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#020617]"
      aria-label="Site footer"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl pt-16 pb-8 relative z-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            <Link href="/#home" className="flex items-center gap-3 group mb-5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#0EA5E9]/40 bg-white flex-shrink-0 group-hover:border-[#0EA5E9] transition-colors">
                <Image
                  src="/logo.png"
                  alt="AAS Tour & Travels"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div
                  className="font-bold text-white text-base tracking-wide leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  AAS TOUR & TRAVELS
                </div>

              </div>
            </Link>

            <p
              className="text-[#64748B] text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Your trusted partner for travel, visa, property, legal, and financial services in Bhopal, MP.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/aastourstravels?igsh=MW9uYmc4OHp3bjU3eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-[#64748B] hover:text-white hover:border-[#EC4899]/40 hover:bg-[#EC4899]/10 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://wa.me/919183435883?text=Hello%20AAS%20Tour%20%26%20Travels%2C%20I%20need%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-[#64748B] hover:text-white hover:border-[#22C55E]/40 hover:bg-[#22C55E]/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="tel:+919183435883"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-[#64748B] hover:text-white hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/10 transition-all"
                aria-label="Call us"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]/40 group-hover:bg-[#0EA5E9] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-[#64748B] text-sm hover:text-[#0EA5E9] transition-colors flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/40 group-hover:bg-[#F97316] transition-colors flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4 mb-6">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#64748B] text-sm hover:text-white transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p
                        className="text-[#64748B] text-sm leading-snug"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.text}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919183786068?text=Hello%20AAS%20Tour%20%26%20Travels%2C%20I%20need%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #22C55E, #16A34A)",
                boxShadow: "0 4px 16px rgba(34,197,94,0.25)",
                fontFamily: "var(--font-poppins)",
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#475569] text-sm">
          <p style={{ fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} AAS Tour & Travels Pvt Ltd. All Rights Reserved.
          </p>
          <p
            className="text-[#475569]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Bhopal, Madhya Pradesh, India ·{" "}
            <a
              href="https://www.aastourtravels.in"
              className="hover:text-[#0EA5E9] transition-colors"
            >
              www.aastourtravels.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
