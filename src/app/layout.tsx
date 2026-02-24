import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { site } from "@/data/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://churraskim-akira.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Churraskim do Akira | Japonês e Churrasco em Brasília",
    template: "%s | Churraskim do Akira",
  },
  description:
    "Restaurante em Vicente Pires com espetinhos na brasa, culinária japonesa e ambiente familiar em Brasília.",
  applicationName: "Churraskim do Akira",
  keywords: [
    "churrasco em brasília",
    "restaurante japonês vicente pires",
    "espetinhos brasília",
    "churraskim do akira",
    "fliperama retrô restaurante",
    "jogar videogame em vicente pires",
    "jogar fliperama em vicente pires",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Churraskim do Akira | Japonês e Churrasco em Brasília",
    description:
      "Sabores na brasa com toque japonês em Vicente Pires. Cardápio completo, ambiente familiar e atendimento acolhedor.",
    siteName: "Churraskim do Akira",
    images: [
      {
        url: "/images/logo-akira.jpg",
        width: 1200,
        height: 630,
        alt: "Churraskim do Akira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Churraskim do Akira | Japonês e Churrasco em Brasília",
    description:
      "Espetinhos, pratos japoneses e experiência única em Vicente Pires.",
    images: ["/images/logo-akira.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-akira.jpg",
    apple: "/images/logo-akira.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: `${siteUrl}/images/logo-akira.jpg`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.zip,
      addressCountry: "BR",
    },
    telephone: site.phone,
    servesCuisine: ["Japanese", "Brazilian Barbecue"],
    url: siteUrl,
    sameAs: [site.instagram, site.whatsapp],
    priceRange: site.priceRange,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsDirections,
  };

  return (
    <html lang="pt-BR">
      <body className="bg-black text-white overflow-x-hidden m-0 p-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="site-shell min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20 sm:pt-24 pb-24 sm:pb-0 w-full">
            <div className="max-w-7xl mx-auto px-4 w-full">{children}</div>
          </main>
          <Footer />
          <MobileQuickActions />
        </div>
        <AccessibilityWidget />
      </body>
    </html>
  );
}
