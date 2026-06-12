"use client";

import { useCallback, useState } from "react";
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
      {/* Splash screen — unmounts after animation */}
      {!launched && <LaunchScreen onComplete={handleLaunchComplete} />}

      {/* Main site — fades in once launch is done */}
      <main
        className="flex min-h-screen flex-col bg-primary transition-opacity duration-700"
        style={{ opacity: launched ? 1 : 0 }}
      >
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
