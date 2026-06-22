import { SiteContainer } from "@/components/atoms/site-container";
import { SitePageHeader } from "../components/site-page-header";
import type { Metadata } from "next";
import { AllTemplates } from "./components/all-templates";

export const metadata: Metadata = {
  title: "Templates - jk-ui",
  description: "Production-ready React templates built with jk-ui components. Start with fully structured application and marketing templates. Install, customize, and ship faster.",
  keywords: ["React templates", "UI templates", "web templates", "React components", "frontend templates", "UI library"],
  openGraph: {
    title: "Templates - jk-ui",
    description: "Production-ready React templates built with jk-ui components. Install, customize, and ship faster.",
    type: "website",
    url: "https://jk-ui.com/templates",
    images: [
      {
        url: "/cover-image.webp",
        width: 1200,
        height: 630,
        alt: "jk-ui Templates Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates - jk-ui",
    description: "Production-ready React templates built with jk-ui components. Install, customize, and ship faster.",
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

export default function TemplatesPage() {
  return (
    <main>
      <SitePageHeader tagline="Templates"
        title="Production-Ready React Templates"
        description="Start with fully structured application and marketing templates built on composable jk-ui blocks. Install, customize, and ship faster." />
      <section>
        <SiteContainer className="mx-auto w-full border-x border-border-strong/70 border-dashed">
          <AllTemplates />
          <div className="h-4 linear-gradient-pattern border-y border-dashed border-border-strong/70"></div>
        </SiteContainer>

      </section>
    </main>
  );
}

