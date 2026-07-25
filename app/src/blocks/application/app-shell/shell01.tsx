"use client"

import { SidebarProvider, SidebarToggler } from '@/components/jk/sidebar'
import { Sidebar } from '../sidebar/01/sidebar'
import { Button } from '@/components/jk/button'

export const Shell01 = () => {
    return (
        <SidebarProvider>
            <Sidebar />
            <main className="md:pl-64">
                <header className="w-full flex h-16 bg-background sticky top-0 z-35">
                    <div className="flex items-center justify-between w-full h-full px-4 sm:px-8">
                        <div className="flex items-center gap-3">
                            <div
                                className="flex md:hidden pr-2 relative before:absolute before:inset-y-2 before:right-0 before:w-0.5 before:bg-border">
                                <SidebarToggler aria-label='Open sidebar'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="size-4">
                                        <rect width="18" height="18" x="3" y="3" rx="2" />
                                        <path d="M9 3v18" /><path d="m14 9 3 3-3 3" />
                                    </svg>
                                </SidebarToggler>
                            </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                            <Button variant="ghost" size="sm" iconOnly>
                                <span className="iconify ph--gear size-4.5"></span>
                            </Button>
                            <div className="relative">
                                <Button variant="ghost" size="sm" iconOnly>
                                    <span className="iconify ph--bell size-4.5"></span>
                                </Button>
                                <span className="absolute top-1.5 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-bg"></span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 ">
                    <div className="lg:max-w-346 mx-auto animate-fade-in" id="main-content-area">
                        <div className="mb-8">
                            <h1 className="text-xl font-semibold tracking-tight text-foreground">
                                Dashboard
                            </h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Real-time overview of system performance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="rounded-lg h-40 border border-border/70">

                            </div>
                            <div className="rounded-lg h-40 border border-border/70">

                            </div>
                            <div className="rounded-lg h-40 border border-border/70">

                            </div>
                        </div>


                        <div className="rounded-lg h-70 border border-border/70">

                        </div>
                    </div>
                </div>
            </main>
        </SidebarProvider>
    )
}
