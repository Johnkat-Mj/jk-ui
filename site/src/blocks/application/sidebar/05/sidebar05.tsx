"use client"

import { SidebarProvider, SidebarToggler, useSidebarContext } from '@/components/jk/sidebar'
import type { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Button } from '@/components/jk/button'


export const Sidebar05 = () => {
  return (
    <SidebarProvider>
      <Sidebar />
      <MainContent>
        <main>

        </main>
      </MainContent>
    </SidebarProvider>
  )
}
const MainContent = ({ children }: { children: ReactNode }) => {

  const { isResizedSidebar } = useSidebarContext()

  return <div data-resized={isResizedSidebar ? true : null} className="group md:pl-71.5 md:fx-resized:pl-16.5 min-h-screen transition-all duration-200">
    <header className="w-full flex h-16 bg-bg sticky top-0 z-35">
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
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-danger rounded-full border-2 border-bg"></span>
          </div>
        </div>
      </div>
    </header>

    {children}
  </div>

}

