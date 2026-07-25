"use client"

import { useGlobalContext } from "@/providers/global-provider"

export const ToggleSiteNavbar = () => {
    const { toggleNavbar, isOpenNavbar } = useGlobalContext()
    return (
        <button aria-expanded={isOpenNavbar} onClick={toggleNavbar}
            className="flex py-2 flex-col relative justify-center items-center group" aria-label="Toggle navbar">
            <span id="line-1"
                className="w-6 h-0.5 rounded-full bg-fg-muted transition-transform duration-300 ease-linear group-aria-expanded:translate-y-1.5 group-aria-expanded:rotate-40"></span>
            <span id="line-2"
                className="w-6 origin-center  mt-1 h-0.5 rounded-full bg-fg-muted transition-all duration-300 ease-linear group-aria-expanded:scale-x-0 group-aria-expanded:opacity-0"></span>
            <span id="line-3"
                className="w-6 mt-1 h-0.5 rounded-full bg-fg-muted transition-all duration-300 ease-linear group-aria-expanded:-translate-y-1.5 group-aria-expanded:-rotate-40"></span>
        </button>
    )
}