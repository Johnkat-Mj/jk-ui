import { Sidebar } from "@/blocks/application/sidebar/02/sidebar"
import { SidebarProvider, SidebarToggler } from "@/components/jk/sidebar"
import type { ReactNode } from "react"



const MainContent = ({ children }: { children: ReactNode }) => {
    return <main className="md:pl-64 flex-1 flex flex-col h-full relative overflow-hidden bg-bg">
        <header className="h-14 bg-bg border-b border-border-strong/60 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <div className="flex md:hidden border-r border-border pr-2 -ml-2">
                    <SidebarToggler>
                        <span aria-hidden="true" className="iconify ph--door-open"></span>
                    </SidebarToggler>
                </div>
            </div>
            <div className="flex items-center gap-1">

            </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
            {children}
        </div>
    </main>
}

export const DemoSidebar = () => {
    return (
        <SidebarProvider>
            <Sidebar />
            <MainContent>
                <></>
            </MainContent>
        </SidebarProvider>
    )
}