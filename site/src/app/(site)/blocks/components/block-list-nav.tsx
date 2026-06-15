"use client"

import { all_blocks } from '@/data/block-list'
import { BlockListFilter } from './block-list-filter'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const BlockListNav = () => {
    const pathname = usePathname()
    

    return (
        <nav data-scrollable-container
            className="sticky top-0 max-sm:pr-3.5 lg:max-w-336 xl:max-w-352 mx-auto w-full h-12 flex items-center gap-3
          before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-linear-to-l before:from-bg-muted/20
          before:via-bg-muted before:to-bg-muted/20 bg-bg/60 backdrop-blur-sm rounded-xl z-40">
            <div className="pl-3.5 sm:pl-8 pr-3 border-r border-border">
                <BlockListFilter />
            </div>
            <ul data-scrollable
                className="flex-1 flex items-center gap-0.5 h-12 pr-6 sm:pr-8 overflow-hidden overflow-x-auto scrollbar-hidden text-sm relative">
                {all_blocks.map((category) => {
                    const href = `/blocks/${category.group}/${category.key}`
                    const isCurrent = pathname === href

                    return (
                        <li key={category.key} className="border-b-2 border-transparent has-fx-current:border-primary h-full flex items-center group">
                            <Link href={href}
                                data-state={isCurrent ? "active" : null}
                                className="px-3 py-1 inline-flex text-nowrap text-fg-muted fx-current:text-fg-subtitle hover:bg-bg-muted fx-active:bg-bg-muted/70 fx-active:border-border/60 border border-transparent rounded-ui ease-linear duration-200 relative">
                                {category.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


