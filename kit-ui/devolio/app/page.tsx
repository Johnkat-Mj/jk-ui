import { AboutIntro } from "@/components/sections/home/about-intro";
import { HomeHero } from "@/components/sections/home/home-hero";
import { Latestblog } from "@/components/sections/home/latest-blog";
import { RecentWork } from "@/components/sections/home/recent-work";
import { Values } from "@/components/sections/home/values";
import { SiteCta } from "@/components/sections/site-cta";
import { SiteStats } from "@/components/sections/site-stats";
import { Testimonials } from "@/components/sections/testimonials";


export default function Home() {
  return (
    <main>
      <HomeHero />
      <Values />
      <AboutIntro />
      <SiteStats />
      <RecentWork />
      <Testimonials />
      <Latestblog />
      <SiteCta />
    </main>
  );
}
