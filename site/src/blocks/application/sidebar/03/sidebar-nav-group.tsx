"use client"

import { Disclosure, DisclosurePanel, DisclosureTrigger } from "@/components/jk/disclosure-group"
import { Icon } from "@/components/jk/icon"
import { useSidebarContext } from "@/components/jk/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"


export const SidebarNavGroup = ({ text, icon, items }: { icon: string, text: string, items: { id: string, href: string, text: string }[] }) => {
    const { isResizedSidebar, resizeSidebar } = useSidebarContext()
    const isMobile = useIsMobile()
    return (
        <>
            {
                isResizedSidebar && !isMobile ?
                    <button onClick={() => resizeSidebar?.()} type="button" className="group flex items-center text-sm px-3 py-2 text-fg-muted hover:bg-bg-surface hover:text-fg-subtitle rounded-ui">
                        <div className="flex items-center gap-2.5 w-full">
                            <span className="flex min-w-max">
                                <Icon name={icon} className="size-4.5 transition duration-75" />
                            </span>
                        </div>
                    </button> :
                    <Disclosure defaultExpanded className="w-full flex flex-col">
                        <DisclosureTrigger withIndicator={false}
                            className="group flex flex-row items-center text-sm px-3 py-2 text-fg-muted hover:bg-bg-surface hover:text-fg-subtitle rounded-ui">
                            <div className="flex items-center gap-2.5 w-full">
                                <span className="flex min-w-max">
                                    <Icon name={icon} className="size-4.5 transition duration-75" />
                                </span>
                                <span className="flex-1 truncate inline ease-linear">
                                    {text}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="flex size-4 text-sm opacity-70 group-aria-expanded:rotate-180 ease-linear transition-transform md:in-fx-resized:opacity-0 md:in-fx-resized:transition-opacity"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z">
                                    </path>
                                </svg>
                            </div>
                        </DisclosureTrigger>
                        <DisclosurePanel>
                            <ul
                                className="space-y-1 relative before:absolute before:inset-y-0 before:left-4.5 before:w-0.5 before:rounded-ui before:bg-bg-muted pt-2">
                                {
                                    items.map(item => <li key={item.id}>
                                        <a href="{{ $item['href'] ?? '#' }}"
                                            className="flex fx-current:relative fx-active:relative items-center text-sm gap-2.5 px-3 py-1.5 text-fg-muted hover:bg-bg-surface hover:text-fg-subtitle fx-current:bg-bg-muted/60 fx-current:text-fg-title rounded-ui nav-sub-item-ind"
                                        >
                                            <span className="ml-7">
                                                {item.text}
                                            </span>
                                        </a>
                                    </li>)
                                }
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
            }

        </>
    )
}
