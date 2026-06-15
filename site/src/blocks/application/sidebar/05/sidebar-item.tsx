"use client"

import { Icon } from "@/components/jk/icon"
import { Link } from "@/components/jk/link"
import { useSidebarContext } from "@/components/jk/sidebar"
import { Tooltip, TooltipContent } from "@/components/jk/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"

const itemClass = `flex flex-1 items-center gap-3 px-3 py-2.5 rounded-ui text-sm text-white/65 hover:bg-white/5 hover:text-white/90 font-medium whitespace-nowrap transition-all duration-150
                fx-active:bg-white/8 fx-active:text-white fx-current:bg-white/8 fx-current:text-white`
export const SidebarItem = ({ text, icon, href, isActive }: { text: string, icon: string, href: string, isActive?: boolean }) => {
    const { isResizedSidebar } = useSidebarContext()
    const isMobile = useIsMobile()
    return (
        <li
            className="flex h-max w-full">
            {
                !isMobile && isResizedSidebar ?
                    <Tooltip>
                        <Link href={href} data-state={isActive ? "active" : "inactive"}
                            className={itemClass}
                        >
                            <Icon name={icon} />
                        </Link>
                        <TooltipContent placement="right">
                            {text}
                        </TooltipContent>
                    </Tooltip>
                    : <a
                    data-state={isActive ? "active" : "inactive"}
                        href={href}
                        className={itemClass}
                    >
                        <Icon name={icon} />
                        <span className="md:group-fx-resized:hidden">
                            {text}
                        </span>
                    </a>
            }
        </li>
    )
}
