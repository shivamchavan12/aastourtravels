"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import LaunchScreen from "@/components/LaunchScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const [launched, setLaunched] = useState(false);
  const handleLaunchComplete = useCallback(() => setLaunched(true), []);

  return (
    <>
      {/* Splash screen */}
      {!launched && <LaunchScreen onComplete={handleLaunchComplete} />}

      {/* Main site */}
      <AnimatePresence>
        {launched && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen flex-col bg-[#F8FAFC]"
          >
            <Navbar />
            <Hero />
            <Services />
            <About />
            <WhyUs />
            <Testimonials />
            <Stats />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* ── Floating WhatsApp Button ── */}
      {launched && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://wa.me/919183786068?text=Hello%20AAS%20Tour%20%26%20Travels%2C%20I%20need%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-transform hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 8px 24px rgba(37,211,102,0.45)",
            }}
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "rgba(37,211,102,0.4)",
                animation: "pulse-ring 2s ease-out infinite",
              }}
            />
            <MessageCircle size={26} />
          </a>
        </motion.div>
      )}
    </>
  );
}
