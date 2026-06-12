// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X, Globe } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Services", href: "#services" },
//     { name: "About", href: "#about" },
//     { name: "Why Us", href: "#why-us" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-header py-4" : "bg-transparent py-6"}`}>
//       <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="#home" className="flex items-center gap-2 group">
//           <Globe className="text-[var(--color-accent-gold)] w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
//           <div className="flex flex-col">
//             <span className="font-heading text-2xl font-bold tracking-wider text-[var(--color-off-white)]">AAS TOUR & TRAVELS</span>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-[var(--color-accent-gold)] transition-colors">
//               {link.name}
//             </Link>
//           ))}
//           <Link href="#contact" className="bg-[var(--color-accent-gold)] text-[var(--color-primary)] px-6 py-2 rounded font-semibold hover:bg-[var(--color-light-gold)] transition-colors">
//             Get a Free Consultation
//           </Link>
//         </div>

//         {/* Mobile Nav Toggle */}
//         <button className="lg:hidden text-[var(--color-off-white)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full glass-header flex flex-col py-6 px-6 gap-4 border-t border-[rgba(201,168,76,0.1)]">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="text-lg font-medium hover:text-[var(--color-accent-gold)]"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             href="#contact"
//             className="bg-[var(--color-accent-gold)] text-[var(--color-primary)] px-6 py-3 rounded font-semibold text-center mt-4"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Get a Free Consultation
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-header py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[var(--color-accent-gold)] transition-transform duration-500 group-hover:scale-105 bg-white">
            <Image
              src="/logo.png"
              alt="AAS Tour & Travels"
              fill
              sizes="(max-width: 768px) 40px, 48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg md:text-2xl font-bold tracking-wider text-[var(--color-off-white)]">
              AAS TOUR &amp; TRAVELS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-[var(--color-accent-gold)] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="bg-[var(--color-accent-gold)] text-[var(--color-primary)] px-6 py-2 rounded-full font-semibold hover:bg-[var(--color-light-gold)] transition-colors">
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden text-[var(--color-off-white)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-header flex flex-col py-6 px-6 gap-4 border-t border-[rgba(201,168,76,0.1)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-[var(--color-accent-gold)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-[var(--color-accent-gold)] text-[var(--color-primary)] px-6 py-3 rounded-full font-semibold text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}