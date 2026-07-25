"use client"

import { all_blocks } from "@/data/block-list"
import { Link } from "@tanstack/react-router"
import { Sheet, SheetBody, SheetContent } from "@/components/jk/sheet"
import { Button } from "@/components/jk/button"

export const BlockListFilter = () => {
  return (
    <Sheet>
      <Button size="sm" iconOnly className="border border-border" variant="ghost">
        <span aria-hidden="true" className="iconify ph--door-open"></span>
      </Button>
      <SheetContent side="left">
        <SheetBody>
          <div className="pt-8">
            <span className="text-fg-title font-medium text-sm mb-3 block">
              Categories
            </span>
            <div className="flex flex-wrap gap-2">
              {all_blocks.map((category) => (
                <Link
                  key={category.key}
                  to={`/blocks/${category.key}`}
                  className="h-7 text-sm px-2 flex items-center rounded-ui transition-colors duration-200 ring ring-border-strong/60
                    fx-current:bg-bg-muted/50 fx-current:border-border-strong/70 fx-current:text-fg-title fx-current:shadow-md fx-current:shadow-black/5
                    text-fg-muted hover:bg-bg-muted/70 hover:text-fg-subtitle"
                >
                  {category.title}
                  <span className="ml-1 pl-1.5 opacity-70 border-l border-border-strong/90">
                    {Object.entries(category.blocks).length}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}
