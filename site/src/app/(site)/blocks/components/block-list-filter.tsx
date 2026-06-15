

"use client"

import { useState, useMemo } from "react"
import { all_blocks, BlockItem, groups } from "@/data/block-list"
import Link from "next/link"
import { Sheet, SheetBody, SheetContent } from "@/components/jk/sheet"
import { Button } from "@/components/jk/button"





export const BlockListFilter = () => {

    const [selectedGroup, setSelectedGroup] = useState<"all" | "application" | "marketing">("all")

    const [categories, setCategories] = useState<BlockItem[]>(all_blocks)

    const changeGroup = (group: "all" | "application" | "marketing") => {
        setSelectedGroup(group)
        setCategories(
            group === "all" ? all_blocks : all_blocks.filter(category => category.group === group)
        )
    }

    return (
        <Sheet >
            <Button size="sm" iconOnly className="border border-border" variant="ghost">
                <span aria-hidden="true" className="iconify ph--door-open"></span>
            </Button>
            <SheetContent side="left" >
                <SheetBody>
                    {/* Groups Section */}
                    <div className="mb-8 pt-8">
                        <span className="text-fg-title font-medium text-sm mb-3 block">
                            Groups
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {groups.map((group) => (
                                <button
                                    key={group.id}
                                    onClick={() => changeGroup(group.id as any)}
                                    data-state={selectedGroup === group.id ? 'active' : 'inactive'}
                                    className="h-7 text-sm px-2 flex items-center rounded-ui transition-colors duration-200 ring ring-border-strong/60
                                     fx-active:bg-bg-muted/50 fx-active:border-border-strong/70 fx-active:text-fg-title fx-active:shadow-md fx-active:shadow-black/5
                                     text-fg-muted hover:bg-bg-muted/70 hover:text-fg-subtitle"
                                >
                                    <span className={`iconify size-3 ${group.icon} mr-1.5`}></span>
                                    <span className="text-sm font-medium">{group.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-fg-title font-medium text-sm">
                                Categories
                            </span>
                            {categories.length > 0 && (
                                <button
                                    onClick={() => setSelectedGroup("all")}
                                    className="text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.length > 0 ? (
                                categories.map((category) => (
                                    <Link
                                        key={category.key}
                                        href={`/blocks/${category.group}/${category.key}`}
                                        className="h-7 text-sm px-2 flex items-center rounded-ui transition-colors duration-200 ring ring-border-strong/60
                                            fx-current:bg-bg-muted/50 fx-current:border-border-strong/70 fx-current:text-fg-title fx-current:shadow-md fx-current:shadow-black/5
                                            text-fg-muted hover:bg-bg-muted/70 hover:text-fg-subtitle"
                                    >
                                        {category.title}
                                        <span className="ml-1 pl-1.5 opacity-70 border-l border-border-strong/90">
                                            {Object.entries(category.blocks).length}
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-fg-muted text-sm">No categories available for this group.</p>
                            )}
                        </div>
                    </div>
                </SheetBody>
            </SheetContent>
        </Sheet>
    )
}
