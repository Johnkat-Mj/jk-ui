import type { TestimonialProps } from "@/types";

import { SiteContainer } from "@/components/atoms/site-container";
import { SectionTitle } from "../elements/section-title";
import { WhatTheysay } from "../slider/what-theysay";


const testimonails: TestimonialProps[] = [
  {
    id: 1,
    image: "/clients/woman1.webp",
    by: "Sarah Johnson",
    role: "CEO at TechStart Inc",
    description: "Working with this agency transformed our business. Their innovative approach and attention to detail helped us launch a platform that exceeded all expectations. The team's expertise and dedication were unmatched."
  },
  {
    id: 2,
    image: "/clients/woman1.webp",
    by: "Michael Chen",
    role: "Marketing Director at Global Retail",
    description: "The digital strategy and website redesign they delivered increased our online conversions by 300%. They truly understand how to blend creativity with business objectives."
  },
  {
    id: 3,
    image: "/clients/woman1.webp",
    by: "Emily Rodriguez",
    role: "Founder at HealthTech Solutions",
    description: "From concept to launch, their team was exceptional. They brought our vision to life with a mobile app that our users love. Highly recommend for any complex digital project."
  },
]

export const Testimonials = () => {
  return (
    <section className="pt-24 md:pt-32 relative">
      <div aria-hidden className="absolute left-0 top-0 w-2/5 aspect-video bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-30 dark:opacity-20 rounded-full skew-y-12 pointer-events-none"></div>
      <SiteContainer className="relative">
        <div className="mx-auto text-center max-w-2xl">
          <SectionTitle htext="Client Success Stories">
            What our partners say about working with us
          </SectionTitle>
        </div>
        <WhatTheysay testimonials={testimonails} />
      </SiteContainer>
    </section>
  )
}


