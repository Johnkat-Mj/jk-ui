"use client"

import { TestimonialProps } from "@/types";
import { CardTestimonial } from "../cards/card-testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

export const WhatTheysay = ({ testimonials }: { testimonials: TestimonialProps[] }) => {
  return (
    <div className="mt-16 relative z-20">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 items-stretch">
          {testimonials.map(testimonial => (
            <CarouselItem key={testimonial.id} className="pl-4 basis-full h-auto">
              <CardTestimonial {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pt-8 md:pt-0 md:absolute md:right-0 md:bottom-0 flex gap-2 md:h-max">
          <CarouselPrevious iconOnly className="static translate-y-0 backdrop-blur-sm size-8 border border-border text-fg transition-colors rounded-none" />
          <CarouselNext iconOnly className="static translate-y-0 backdrop-blur-sm size-8 border border-border text-fg transition-colors rounded-none" />
        </div>
      </Carousel>
    </div>
  )
}

export default WhatTheysay
