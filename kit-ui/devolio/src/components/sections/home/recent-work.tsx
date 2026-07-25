"use client"

import { SiteContainer } from "@/components/atoms/site-container";
import { Cardwork } from "@/components/cards/card-work";
import { SectionTitle } from "@/components/elements/section-title";
import { buttonStyles } from "@/components/jk/button";

import { WorkProps } from "@/types";



const recentPortfolio: WorkProps[] = [
  {
    id: "1",
    illustration: "/portfolio/porfolio1.png",
    title: "Podcast Platform",
    tags: [
      { id: 1, text: "NuxtJS" },
      { id: 2, text: "ExpressJS" },
      { id: 3, text: "PostgreSQL" },
      { id: 4, text: "Stripe API" },
      { id: 5, text: "UnoUI" },
      { id: 6, text: "UnoCSS" }
    ],
    links: {
      detail: "#",
      preview: "#",
      isopensource: false,
      repogithub: "#"
    }
  },
  {
    id: "2",
    illustration: "/portfolio/dash-template-view.webp",
    title: "SaaS Dashboard Application",
    tags: [
      { id: 1, text: "Laravel" },
      { id: 2, text: "Livewire 4" },
      { id: 3, text: "UnoUI" },
      { id: 4, text: "Flexilla" },
      { id: 5, text: "Open Source" },
      { id: 6, text: "UnoCSS" }
    ],
    links: {
      detail: "#",
      preview: "https://unoui-laravel-main-4arl2b.laravel.cloud/login",
      isopensource: true,
      repogithub: "https://github.com/uno-forge-hub/unoui-laravel"
    }
  },
  {
    id: "3",
    illustration: "/portfolio/ino-tech-template.webp",
    title: "Innotech Agency",
    tags: [
      { id: 1, text: "React" },
      { id: 2, text: "RasenganJS" },
      { id: 3, text: "UnoUI" },
      { id: 4, text: "UnoCSS" },
      { id: 5, text: "Open Source" }
    ],
    links: {
      detail: "#",
      preview: "https://inno-agency-rasengan-iota.vercel.app/",
      isopensource: true,
      repogithub: "https://github.com/uno-forge-hub/agency-lading-page-rasengan"
    }
  },
  {
    id: "4",
    illustration: "/portfolio/demositeAgencex.webp",
    title: "Agency Lading page",
    tags: [
      { id: 1, text: "AstroJS" },
      { id: 2, text: "TailwindCSS" },
      { id: 3, text: "Flexiwind" }
    ],
    links: {
      detail: "#",
      preview: "https://agencex-astro.vercel.app/#",
      isopensource: true,
      repogithub: "https://github.com/uno-forge-hub/agency-landing-page-Astrojs"
    }
  },
  {
    id: "5",
    illustration: "/portfolio/porfolio1.png",
    title: "FinTech Banking Platform",
    tags: [
      { id: 1, text: "Angular" },
      { id: 2, text: "Spring Boot" },
      { id: 3, text: "AWS" }
    ],
    links: {
      detail: "#",
      preview: "#",
      isopensource: false,
      repogithub: "#"
    }
  },
  {
    id: "6",
    illustration: "/portfolio/porfolio1.png",
    title: "Educational LMS Platform",
    tags: [
      { id: 1, text: "Laravel" },
      { id: 2, text: "Vue.js" },
      { id: 3, text: "MySQL" },
      { id: 4, text: "Docker" }
    ],
    links: {
      detail: "#",
      preview: "#",
      isopensource: false,
      repogithub: "#"
    }
  },
]

export const RecentWork = () => {
  return (
    <section id="portfolio" className="pt-24 md:pt-20 relative scroll-mt-22">
      <SiteContainer className="flex flex-col">
        <div className="flex justify-between items-end">
          <SectionTitle htext="Our Recent Work" boxClassName="max-w-lg">
            Projects we're proud to deliver
          </SectionTitle>
          <div className="min-w-max">
            <a href={"#"} className={buttonStyles({ variant: "outline" })}>
              See more
            </a>
          </div>
        </div>
        <div className="pt-16 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none mx-auto sm:mx-0 max-w-lg">
          {recentPortfolio.map(work => (
            <Cardwork key={work.id} {...work} />
          ))
          }
        </div>
      </SiteContainer>
    </section>
  )
}

