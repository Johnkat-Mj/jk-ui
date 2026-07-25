"use client"
import { DocsFooter } from "@/components/organisms/docs-footer"
import { DocsNavbar } from "@/components/organisms/docs-navbar"
import { DocsSidebar } from "@/components/organisms/docs-sidebar"
import { useRouterState } from "@tanstack/react-router"

export function DocsLayoutClient({ children }: { children: React.ReactNode }) {
    const location = useRouterState({ select: (s) => s.location.pathname })

    const pathParts = location.split('/').filter(Boolean)
    const activeGroup = pathParts[0] || ''

    return (
        <>
            <DocsNavbar />
            <div
                className="grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:pl-8 xl:pr-8 docs-container"
            >
                <DocsSidebar activeGroup={activeGroup} activeItem={location} />
                <div className="grid relative">
                    {children}
                    <DocsFooter />
                </div>
            </div>
        </>
    )
}

