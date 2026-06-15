import { SiteCta } from "@/components/organisms/site-cta";
import { BlockListHome } from "./components/block-list-home";
import { HeroSection } from "./components/hero-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "jk-ui - Composable UI Blocks for Modern React Apps",
  description: "Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components designed for modern applications.",
  keywords: ["React UI", "UI components", "React blocks", "web development", "frontend", "UI library", "composable UI"],
  openGraph: {
    title: "jk-ui - Composable UI Blocks for Modern React Apps",
    description: "Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components.",
    type: "website",
    url: "https://jk-ui.com",
    images: [
      {
        url: "/cover-image.webp",
        width: 1200,
        height: 630,
        alt: "jk-ui - Composable UI Blocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "jk-ui - Composable UI Blocks for Modern React Apps",
    description: "Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components.",
    images: ["/cover-image.webp"],
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
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "jk-ui",
    "description": "Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components designed for modern applications.",
    "url": "https://jk-ui.com",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "unoForge",
      "url": "https://github.com/johnkat-mj/jk-ui"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <BlockListHome />
        <SiteCta />
      </main>
    </>
  );
}
