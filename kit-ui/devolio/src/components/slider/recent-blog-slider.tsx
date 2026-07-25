"use client"

import { Blog } from "@/types"
import { SiteContainer } from "@/components/atoms/site-container"
import { CardPost } from "../cards/card-post";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

export const RecentBlogSlider = ({ posts }: { posts: Blog[] }) => {
  return (
    <SiteContainer className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 sm:-ml-6 lg:-ml-8 items-stretch">
          {posts.map(post => (
            <CarouselItem key={post.id} className="pl-4 sm:pl-6 lg:pl-8 sm:basis-1/2 lg:basis-1/3 h-auto">
              <CardPost {...post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="backdrop-blur-sm size-8 border border-border text-foreground hover:border-primary/50 absolute -left-3.5 z-5 top-1/2 -translate-y-1/2 hidden md:flex rounded-none" />
        <CarouselNext className="backdrop-blur-sm size-8 border border-border text-foreground hover:border-primary/50 absolute -right-3.5 top-1/2 -translate-y-1/2 hidden md:flex rounded-none" />
      </Carousel>
    </SiteContainer>
  )
}