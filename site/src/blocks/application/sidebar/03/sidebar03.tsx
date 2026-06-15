"use client"

import type { ReactNode } from "react"
import { Sidebar } from "./sidebar"
import { SidebarProvider, SidebarToggler, useSidebarContext } from "@/components/jk/sidebar"



export const Sidebar03 = () => {
    return (
        <SidebarProvider>
            <Sidebar />
            <MainContent>
                <div></div>
            </MainContent>
        </SidebarProvider>
    )
}

const MainContent = ({ children }: { children: ReactNode }) => {
    const { isResizedSidebar } = useSidebarContext()
    return <div data-resized={isResizedSidebar ? true : null} className={`
       block min-h-vh md:ease-linear md:transition-[padding] md:fx-resized:pl-20 md:pl-68 w-full
    `}>
        <header className="h-14 bg-bg border-b border-border-strong/60 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <div className="flex md:hidden border-r border-border pr-2 -ml-2">
                    <SidebarToggler aria-label="Open Sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="size-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M9 3v18" /><path d="m14 9 3 3-3 3" />
                        </svg>
                    </SidebarToggler>
                </div>
            </div>
            <div className="flex items-center gap-1">

            </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
            {children}
        </main>
    </div>
}