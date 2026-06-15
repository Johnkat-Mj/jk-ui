"use client"

import { useGlobalContext } from "@/providers/global-provider"
import { Button } from "react-aria-components"

export const DocsSidebarWrapper = ({ children }: { children: React.ReactNode }) => {
    const { closeSidebar, isOpenSidebar } = useGlobalContext()
    return (
        <>
            <div aria-hidden={isOpenSidebar ? "false" : "true"}
                onClick={() => closeSidebar?.()}
                data-state={isOpenSidebar ? "open" : "close"}
                className="fixed inset-0 bg-gray-800/30 z-100 backdrop-blur-md hidden fx-open:flex lg:hidden"></div>
            <aside data-state={isOpenSidebar ? "open" : "close"}
                data-offcanvas-backdrop="fixed inset-0 bg-gray-800/30 z-100 backdrop-blur-md z-100 flex lg:hidden"
                className="docs-sidebar bg-bg lg:bg-transparent z-120 lg:z-0 pt-4 border-r border-border lg:border-r-0 flex flex-col"
            >
                <Button
                    onPress={() => closeSidebar?.()}
                    aria-label="Close Sidebar"
                    className="size-8 text-fg border border-border bg-bg ease-linear absolute top-16 -right-3 flex items-center justify-center lg:hidden rounded-lg z-10"
                >
                    <span aria-hidden="true" className="flex iconify ph--caret-left"></span>
                </Button>
                {children}
            </aside>
        </>

    )
}
