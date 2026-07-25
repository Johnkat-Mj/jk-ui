"use client"

import { all_blocks } from "@/data/block-list"
import type { BlockItem } from "@/data/block-list"
import { SiteBlockCard } from "@/components/pages/site-block-card"
import { SiteContainer } from "@/components/atoms/site-container"

export const ListAllBlocks = () => {
  return (
    <section className="relative">
      <SiteContainer className="border-x border-border-strong/70 border-dashed">
        <ul className="pb-10 px-4 sm:px-6 lg:px-8 mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3.5 gap-y-6">
          {all_blocks.map((category) => (
            <li key={category.key} className="flex h-full w-full">
              <SiteBlockCard
                categoryId={category.key}
                title={category.title}
                illustrations={category.illustrations}
              />
            </li>
          ))}
        </ul>
        <div className="h-4 linear-gradient-pattern border-y border-dashed border-border-strong/70"></div>
      </SiteContainer>
    </section>
  )
}
