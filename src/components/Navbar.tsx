"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home",     href: "/#home"     },
  { name: "Services", href: "/#services" },
  { name: "About",    href: "/#about"    },
  { name: "Why Us",   href: "/#why-us"   },
];

export default function Navbar() {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-md border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between relative">

          {/* ── Logo ── */}
          <Link
            href="/#home"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="AAS Tour & Travels — Home"
          >
            <div className={`relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border transition-all duration-300 ${
              isScrolled ? "border-gray-200" : "border-white/30"
            }`}>
              <Image
                src="/logo.png"
                alt="AAS Tour & Travels"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#0F172A]" : "text-white drop-shadow-md"
              }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              AAS Tour &amp; Travels
            </span>
          </Link>

          {/* ── Desktop Nav Links — absolutely centered ── */}
          <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-bold transition-colors duration-200 group ${
                  isScrolled
                    ? "text-black hover:text-gray-600"
                    : "text-black hover:text-gray-600"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#0EA5E9]" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contact"
              className={`text-sm font-semibold px-5 py-2 rounded border transition-all duration-200 ${
                isScrolled
                  ? "bg-[#0F172A] text-white border-[#0F172A] hover:bg-[#1E293B]"
                  : "bg-white text-[#0F172A] border-white hover:bg-white/90"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contact Us
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-2 rounded transition-colors ${
              isScrolled ? "text-[#0F172A]" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </nav>

      {/* ── Mobile Menu ── */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Dropdown panel */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-lg lg:hidden pt-[64px]">
            {/* Header row with close */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span
                className="text-sm font-semibold text-[#64748B] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="px-5 py-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-3 text-[15px] font-medium text-[#1E293B] hover:text-[#0EA5E9] border-b border-gray-50 last:border-none transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-5 pb-6 pt-2">
              <Link
                href="/#contact"
                className="block w-full text-center text-sm font-semibold py-3 rounded bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}