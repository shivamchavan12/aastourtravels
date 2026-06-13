import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "@/components/AosInitializer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const cormorant = Cormorant_Garamond({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aastourtravels.in"),
  title: "AAS Tour & Travels",
  description: "All Services Under One Roof - Property, Visa, Travel, Legal & More.",
  icons: {
    icon: "/logo2.png", // This makes it visible on the browser tab
    apple: "/logo2.png",
  },
  openGraph: {
    title: "AAS Tour & Travels",
    description: "All Services Under One Roof - Property, Visa, Travel, Legal & More.",
    url: "https://www.aastourtravels.in",
    siteName: "AAS Tour & Travels",
    images: [
      {
        url: "/logo2.png", // This makes it visible when sharing on WhatsApp, FB, IG
        width: 1200,
        height: 630,
        alt: "AAS Tour & Travels Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} bg-primary text-off-white font-body antialiased min-h-screen flex flex-col`}>
        <AosInitializer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
