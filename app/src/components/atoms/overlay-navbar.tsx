"use client"

import { useGlobalContext } from "@/providers/global-provider"

export const OverlayNavbar = () => {
    const { isOpenNavbar, closeNavbar } = useGlobalContext()
    return (
        <div data-state={isOpenNavbar ? "open" : "closed"} onClick={() => closeNavbar?.()}
            className="fixed bg-gray-800/40 inset-0 z-30 hidden fx-open:flex lg:hidden lg:fx-open:invisible lg:pointer-events-none">
        </div>
    )
}  
