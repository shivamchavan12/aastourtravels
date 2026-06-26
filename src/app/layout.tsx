import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "@/components/AosInitializer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aastourtravels.in"),
  title: {
    default: "AAS Tour & Travels",
    template: "%s | AAS Tour & Travels",
  },
  description:
    "AAS Tour & Travels - Bhopal's trusted partner for domestic & international tours, visa assistance, property services, forex, RTO, and more. All services under one roof.",
  keywords: [
    "travel agency Bhopal",
    "visa assistance Bhopal",
    "tour packages India",
    "international tours",
    "domestic tours",
    "property services Bhopal",
    "forex Bhopal",
    "RTO services",
    "AAS Tour Travels",
  ],
  icons: {
    apple: "/logo2.png",
  },
  openGraph: {
    title: "AAS Tour & Travels | Premium Travel & Services in Bhopal",
    description:
      "Your trusted travel partner providing complete travel & lifestyle solutions for families, businesses, and groups in Bhopal, MP.",
    url: "https://www.aastourtravels.in",
    siteName: "AAS Tour & Travels",
    images: [
      {
        url: "https://www.aastourtravels.in/logo2.png",
        width: 1200,
        height: 630,
        alt: "AAS Tour & Travels — Premium Travel Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAS Tour & Travels",
    description:
      "Premium travel, visa, property & lifestyle services in Bhopal, MP. All services under one roof.",
    images: ["https://www.aastourtravels.in/logo2.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "AAS Tour & Travels",
  url: "https://www.aastourtravels.in",
  description:
    "AAS Tour & Travels provides comprehensive travel, visa, property, legal, and lifestyle services in Bhopal, MP.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  telephone: "+919183786068",
  email: "tourstravelsaas@gmail.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.instagram.com/aastourstravels",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} bg-[#F8FAFC] text-[#0F172A] antialiased min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <AosInitializer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
