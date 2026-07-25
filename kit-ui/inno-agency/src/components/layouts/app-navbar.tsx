"use client"

import { useState } from "react"
import { NavItems } from "./nav-items"
import { buttonStyles } from "../jk/button"


export const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div
                aria-hidden="true"
                className="absolute pointer-event-none top-0 left-0 size-40 bg-linear-to-br from-primary rounded-full blur-3xl opacity-30 dark:opacity-50"
            ></div>
            <div
                data-nav-overlay
                data-navbar-id="app-nav"
                aria-hidden={isOpen ? "false" : "true"}
                data-state={isOpen ? "open" : "close"}
                onClick={() => setIsOpen(false)}
                className="fixed invisible fx-open:visible inset-0 lg:hidden bg-gray-800/60 backdrop-blur-xl z-40"
            ></div>
            <header className="absolute inset-x-0 top-0 z-50 py-6">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <nav className="w-full flex justify-between gap-6 relative">
                        <div className="min-w-max inline-flex relative">
                            <a href="/" className="relative flex items-center gap-3">
                                <div className="relative size-7 overflow-hidden flex rounded-lg">
                                    <span
                                        className="absolute size-4 -top-1 -right-1 bg-secondary/60 rounded-md rotate-45"
                                    ></span>
                                    <span
                                        className="absolute size-4 -top-1 -left-1 bg-primary rounded-md rotate-45"
                                    ></span>
                                    <span
                                        className="absolute size-4 -bottom-1 -right-1 bg-primary rounded-md rotate-45"
                                    ></span>
                                    <span
                                        className="absolute size-4 -bottom-1 -left-1 bg-primary/60 rounded-md rotate-45"
                                    ></span>
                                    <span
                                        className="absolute size-2 rounded-full bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    ></span>
                                </div>
                                <div
                                    className="hidden sm:inline-flex text-lg font-semibold text-foreground"
                                >
                                    InnoAgency
                                </div>
                            </a>
                        </div>
                        <div
                            data-state={isOpen ? "open" : "close"}
                            className="invisible opacity-0 translate-y-10 lg:visible lg:opacity-100 fx-open:translate-y-0 fx-open:visible fx-open:opacity-100 lg:translate-y-0 duration-300 ease-linear overflow-hidden flex flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:w-max lg:flex-1 lg:justify-between lg:items-center absolute lg:relative top-14 lg:top-0 bg-background lg:bg-transparent border-x border-border lg:border-x-0 rounded-lg z-50"
                        >
                            <NavItems />
                        </div>

                        <div className="min-w-max flex items-center gap-x-3">
                            <a
                                href="#cta"
                                className={buttonStyles({ variant: "outline", size: "sm" })}
                            >
                                Get Started
                            </a>
                            <button onClick={() => setIsOpen(currentState => !currentState)}
                                data-nav-trigger
                                aria-expanded={isOpen}
                                data-toggle-nav="app-nav"
                                aria-label="Toggle navbar"
                                className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative group"
                            >
                                <span
                                    id="line-1"
                                    className="w-6 h-0.5 rounded-full bg-foreground transition-all duration-300 ease-linear group-aria-expanded:translate-y-1.5 group-aria-expanded:rotate-40"
                                ></span>
                                <span
                                    id="line-2"
                                    className="w-6 origin-center mt-1 h-0.5 rounded-full bg-foreground transition-all duration-300 ease-linear group-aria-expanded:opacity-0 group-aria-scale-x-0"
                                ></span>
                                <span
                                    id="line-3"
                                    className="w-6 mt-1 h-0.5 rounded-full bg-foreground transition-all duration-300 ease-linear group-aria-expanded:-translate-y-1.5 group-aria-expanded:-rotate-40"
                                ></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}