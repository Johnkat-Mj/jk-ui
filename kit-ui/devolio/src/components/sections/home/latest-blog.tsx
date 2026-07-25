"use client"

import { SiteContainer } from "@/components/atoms/site-container";
import { SectionTitle } from "@/components/elements/section-title";
import { buttonStyles } from "@/components/jk/button";
import { RecentBlogSlider } from "@/components/slider/recent-blog-slider";

import { Blog } from "@/types";



const recentPost: Blog[] = [
  {
    id: 1,
    illustration: "/images/article1.webp",
    title: "Top 10 Web Development Trends for 2024",
    tags: [
      { id: 1, text: "Web Development" },
      { id: 2, text: "Technology" },
      { id: 3, text: "Industry Trends" },
      { id: 4, text: "Innovation" }
    ],
  },
  {
    id: 2,
    illustration: "/images/article1.webp",
    title: "How UI/UX Design Impacts Business Growth",
    tags: [
      { id: 1, text: "UI/UX Design" },
      { id: 2, text: "Business Strategy" },
      { id: 3, text: "User Experience" },
      { id: 4, text: "Conversion" }
    ],
  },
  {
    id: 3,
    illustration: "/images/article1.webp",
    title: "Mobile App Development: Best Practices",
    tags: [
      { id: 1, text: "Mobile Development" },
      { id: 2, text: "App Strategy" },
      { id: 3, text: "Performance" }
    ],
  },
  {
    id: 4,
    illustration: "/images/article1.webp",
    title: "Digital Marketing Strategies for Success",
    tags: [
      { id: 1, text: "Digital Marketing" },
      { id: 2, text: "SEO" },
      { id: 3, text: "Content Strategy" }
    ],
  },
]

export const Latestblog = () => {
  return (
    <section id="blog" className="pt-24 md:pt-32 relative scroll-mt-22">
      <div className="absolute right-0 top-10 w-2/5 aspect-video bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-30 dark:opacity-20 rounded-full -skew-y-12"></div>
      <SiteContainer className="relative mb-16 ">
        <div className="flex justify-between items-end">
          <SectionTitle htext="Insights & Resources" boxClassName="max-w-lg">
            Latest articles and industry insights
          </SectionTitle>
          <div className="min-w-max">
            <a href={"#"} className={buttonStyles({ variant: "outline" })}>
              See More
            </a>
          </div>
        </div>
      </SiteContainer>
      <RecentBlogSlider posts={recentPost} />
    </section>
  )
}

export default Latestblog
