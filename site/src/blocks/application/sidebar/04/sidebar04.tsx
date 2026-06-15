import { SidebarProvider, SidebarToggler } from '@/components/jk/sidebar'
import type { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Button } from '@/components/jk/button'
import { SearchField, SearchInput } from '@/components/jk/search-field'
import { Icon } from '@/components/jk/icon'
import { Menu, MenuContent, MenuHeader, MenuIcon, MenuLabel, MenuSeparator, MenuItem, MenuSection, MenuSubMenu } from '@/components/jk/menu'


export const Sidebar04 = () => {
  return (
    <SidebarProvider>
      <Sidebar />
      <MainContent>
        <div>

        </div>
      </MainContent>
    </SidebarProvider>
  )
}
const MainContent = ({ children }: { children: ReactNode }) => {

  return <div className="md:pl-64 w-full">
    <header className="sticky top-0 h-16 flex items-center border-b bg-bg border-border z-35">
      <nav className="max-w-7xl px-4 sm:px-6 w-full mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex lg:hidden -ml-2">
            <SidebarToggler variant="ghost" size="sm" iconOnly>
              <svg
                aria-label="icon open sidebar"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <rect width={18} height={18} x={3} y={3} rx={2} />
                <path d="M9 3v18" />
                <path d="m14 9 3 3-3 3" />
              </svg>
            </SidebarToggler>
          </div>
          <span className="font-semibold text-fg-title sm:inline-flex hidden">
            Dashboard
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-1 justify-end min-w-max">
          <SearchField className={"flex-1 max-w-62.5"}>
            <SearchInput groupClass="h-9" />
          </SearchField>
          <Button
            variant="ghost"
            size="none"
            className="size-9 justify-center"
            iconOnly
            aria-label="Notification"
          >
            <Icon name="ph--bell" />
          </Button>
          <div className="flex">
            <Menu>
              <Button
                iconOnly
                size="none"
                variant="none"
                radius="circle"
                className="mr-1 size-9 rounded-full [--shadow-color:var(--color-gray-700)] dark:[--shadow-color:var(--color-gray-500)]
                      shadow-[0px_2px_2px_0px_var(--shadow-color)] ring-3 ring-bg"
              >
                <img
                  src="/avatar2.webp"
                  alt="avatar"
                  width={100}
                  height={100}
                  className="border border-border-input/50 size-full object-cover object-top rounded-full"
                />
              </Button>
              <MenuContent popover={{ placement: "bottom" }} className="min-w-50">
                <MenuHeader separator>
                  <span className="block">Kurt Cobain</span>
                  <span className="font-normal text-fg-muted">@cobain</span>
                </MenuHeader>

                <MenuSection>
                  <MenuItem href="#dashboard">
                    <MenuIcon aria-hidden="true">
                      <span className="iconify ph--squares-four" />
                    </MenuIcon>
                    <MenuLabel>Dashboard</MenuLabel>
                  </MenuItem>
                  <MenuItem href="#settings">
                    <MenuIcon aria-hidden="true">
                      <span className="iconify ph--gear-six" />
                    </MenuIcon>
                    <MenuLabel>Settings</MenuLabel>
                  </MenuItem>
                </MenuSection>

                <MenuSeparator />

                <MenuItem>
                  <MenuIcon aria-hidden="true">
                    <span className="iconify ph--terminal-window" />
                  </MenuIcon>
                  <MenuLabel>Command Menu</MenuLabel>
                </MenuItem>

                <MenuSubMenu>
                  <MenuItem>
                    <MenuIcon aria-hidden="true">
                      <span className="iconify ph--sun-horizon" />
                    </MenuIcon>
                    <MenuLabel>Switch theme</MenuLabel>
                  </MenuItem>
                  <MenuContent>
                    <MenuItem>
                      <MenuIcon aria-hidden="true">
                        <span className="iconify ph--monitor" />
                      </MenuIcon>
                      <MenuLabel>System</MenuLabel>
                    </MenuItem>
                    <MenuItem>
                      <MenuIcon aria-hidden="true">
                        <span className="iconify ph--moon-stars" />
                      </MenuIcon>
                      <MenuLabel>Dark</MenuLabel>
                    </MenuItem>
                    <MenuItem>
                      <MenuIcon aria-hidden="true">
                        <span className="iconify ph--sun-dim" />
                      </MenuIcon>
                      <MenuLabel>Light</MenuLabel>
                    </MenuItem>
                  </MenuContent>
                </MenuSubMenu>

                <MenuSeparator />

                <MenuItem href="#contact-s">
                  <MenuLabel>Contact Support</MenuLabel>
                </MenuItem>

                <MenuSeparator />

                <MenuItem intent="danger" href="#logout">
                  <MenuIcon aria-hidden="true">
                    <span className="iconify ph--sign-out text-current" />
                  </MenuIcon>
                  <MenuLabel>Log out</MenuLabel>
                </MenuItem>
              </MenuContent>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </div>
}

