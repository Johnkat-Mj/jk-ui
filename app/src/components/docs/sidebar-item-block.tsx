import type { ReactNode } from 'react'

export const SidebarItemBlock = ({ children, label }: { children: ReactNode, label: string }) => {
    return (
        <>
            <span
                className="text-fg-title font-medium text-sm flex items-center justify-between w-full pl-4 relative before:absolute before:h-3 before:bg-foreground before:w-0.5 before:rounded-r-2xl before:left-0"
            >
                {label}
            </span>
            <div>
                {children}
            </div>
        </>
    )
}
