"use client"

import { useState } from "react"
import { all_blocks, BlockItem, groups } from "@/data/block-list"
import { SiteBlockCard } from "@/app/(site)/components/site-block-card"
import { SiteEmptyState } from "@/app/(site)/components/site-empty-state"
import { Button } from "@/components/jk/button"
import { SiteContainer } from "@/components/atoms/site-container"
import { SiteCaret } from "@/components/atoms/site-caret"


export const ListAllBlocks = () => {

    const [selectedGroup, setSelectedGroup] = useState<"all" | "application" | "marketing">("all")

    const [categories, setCategories] = useState<BlockItem[]>(all_blocks)

    const changeGroup = (group: "all" | "application" | "marketing") => {
        setSelectedGroup(group)
        setCategories(
            group === "all" ? all_blocks : all_blocks.filter(category => category.group === group)
        )
    }

  return (
    <section className="relative">
      <SiteContainer className="border-x border-border-strong/70 border-dashed">
        <div
          className="-mt-4.5 px-3.5 sm:px-8 md:px-16 lg:px-8 xl:px-0 mx-auto w-full max-w-3xl lg:max-w-5xl overflow-auto flex items-center justify-center gap-2">
          <div
            className="h-9 bg-bg-muted/60 backdrop-blur-sm flex items-center w-max ui-card [--card-padding:--spacing(0.5)] [--card-radius:var(--radius-ui)] relative">
            {groups.map((group) => (
              <button
                key={group.id}
                onClick={() => changeGroup(group.id as any)}
                data-state={selectedGroup === group.id ? 'active' : 'inactive'}
                className="text-sm cursor-pointer text-fg-muted fx-active:text-fg-title px-2 h-full flex items-center fx-active:bg-bg fx-active:ring-border/50 ring-1 ring-transparent inner-radius"
              >
                <span aria-hidden="true" className={`iconify size-3.5 ${group.icon} mr-1`}></span>
                <span>
                  {group.text}
                </span>
              </button>
            ))}

            <div className="absolute left-full flex items-center h-px w-10 bg-linear-to-r from-border-strong/70">
            <SiteCaret className="static"/>
          </div>
          <div className="absolute right-full flex justify-end items-center h-px w-10 bg-linear-to-l from-border-strong/70">
            <SiteCaret className="static"/>
          </div>
          </div>
          
        </div>
        <ul className="pb-10 px-4 sm:px-6 lg:px-8 mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3.5 gap-y-6">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.key} className="flex h-full w-full">
                <SiteBlockCard
                  group={category.group}
                  categoryId={category.key}
                  title={category.title}
                  illustrations={category.illustrations}
                />
              </li>
            ))
          ) : (
            <div className="col-span-full relative -mt-7">
              <SiteEmptyState 
                title={`No blocks found for ${selectedGroup}`} 
                description="Selected Group doesn't have any block right now, stay tuned..."
              >
                <div className="mt-7 flex">
                  <Button onClick={()=>setSelectedGroup("all")} variant="outline" size="sm">
                    Clear Filter
                  </Button>
                </div>
              </SiteEmptyState>
            </div>
          )}
        </ul>
        <div className="h-4 linear-gradient-pattern border-y border-dashed border-border-strong/70"></div>
      </SiteContainer>
    </section>
  )
}