import { SitePageHeader } from "../components/site-page-header";
import { ListAllBlocks } from "./components/list-all-blocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Blocks - jk-ui",
  description: "Explore our collection of production-ready UI blocks for React applications. From hero sections to feature lists, build faster with composable components.",
  keywords: ["React UI blocks", "UI components", "React templates", "web components", "frontend development", "UI library"],
  openGraph: {
    title: "UI Blocks - jk-ui",
    description: "Explore our collection of production-ready UI blocks for React applications. Build faster with composable components.",
    type: "website",
    url: "https://jk-ui.com/blocks",
    images: [
      {
        url: "/cover-image.webp",
        width: 1200,
        height: 630,
        alt: "jk-ui UI Blocks Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Blocks - jk-ui",
    description: "Explore our collection of production-ready UI blocks for React applications. Build faster with composable components.",
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

export default function BlocksPage() {
  return (
    <main>
      <SitePageHeader tagline="Blocks"
        title="Production-Ready UI Blocks for Modern React Apps"
        description="Start with fully structured application and marketing templates built on composable React UI blocks. Install, customize, and ship faster." />
      <ListAllBlocks />
    </main>
  );
}

