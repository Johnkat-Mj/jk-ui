"use client"
import { useGlobalContext } from '@/providers/global-provider'
import { Button } from 'react-aria-components'

export const ToggleDocsSidebar = () => {
    const { toggleSidebar, isOpenSidebar } = useGlobalContext()
    return (
        <Button onPress={() => toggleSidebar?.()}
            data-sidebar-trigger
            aria-label="toggle sidebar"
            className="flex flex-col space-y-2 text-muted-foreground hover:bg-bg-subtle ease-linear duration-200 px-1.5 py-2.5 lg:hidden group pr-2 border-r border-bg-muted mr-2"
        >
            <span
                aria-hidden="true"
                className="group-fx-open:rotate-45 group-fx-open:translate-y-1.5 w-6 h-0.5 rounded-full bg-current"
            ></span>
            <span
                aria-hidden="true"
                className="group-fx-open:-rotate-45 group-fx-open:-translate-y-1 w-6 h-0.5 rounded-full bg-current"
            ></span>
        </Button>
    )
}
