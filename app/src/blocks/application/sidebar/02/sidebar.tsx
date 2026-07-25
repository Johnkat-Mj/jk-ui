import { Button } from "@/components/jk/button";
import { SidebarBase, SidebarOverlayElement, SidebarResizer } from "@/components/jk/sidebar";
import { SidebarNavGroup } from "./sidebar-nav-group";
import { Avatar } from '@/components/jk/avatar';
import {
    Menu,
    MenuContent,
    MenuHeader,
    MenuIcon,
    MenuItem,
    MenuLabel,
    MenuSection,
    MenuSeparator,
    MenuSubMenu
} from "@/components/jk/menu"
import { cx } from "@/lib/utils";

const items = [
    {
        id: 'group01',
        title: 'Main Navigation',
        items: [
            {
                id: 'g1_01',
                text: 'Dashboard',
                href: '#',
                isActive: true,
                icon: 'ph--chart-line-up',
            },
            {
                id: 'g1_02',
                text: 'Analytics',
                href: '#',
                icon: 'ph--chart-pie',
            },
            {
                id: 'g1_03',
                text: 'Reports',
                href: '#',
                icon: 'ph--file-text',
            },
            {
                id: 'g1_04',
                text: 'Calendar',
                href: '#',
                icon: 'ph--calendar',
            },
        ],
    },
    {
        id: 'group02',
        title: 'Management',
        items: [
            {
                id: 'g2_01',
                text: 'Customers',
                href: '#',
                icon: 'ph--users',
            },
            {
                id: 'g2_02',
                text: 'Products',
                href: '#',
                icon: 'ph--package',
            },
            {
                id: 'g2_03',
                text: 'Orders',
                href: '#',
                icon: 'ph--shopping-cart',
            },
            {
                id: 'g2_04',
                text: 'Inventory',
                href: '#',
                icon: 'ph--warehouse',
            },
        ],
    },
];
export const Sidebar = () => {
    return (
        <>
            <SidebarOverlayElement className="md:hidden md:invisible invisible opacity-0 fx-open:visible fx-open:opacity-100 ease-linear transition-all duration-200 z-40" />
            <SidebarBase className={cx(
                "group w-64 bg-background border-r border-border flex-col flex z-60 md:z-20 fixed left-0 transition-all duration-200 -translate-x-full invisible fx-open:visible fx-open:translate-x-0 md:translate-x-0 md:visible transform h-dvh",
                "md:fx-resized:w-16"
            )}>
                <div className="h-14 flex items-center px-3 border-b border-border/60 relative">
                    <div className="w-full flex items-center gap-2.5 py-1.5 group text-left">
                        <div
                            className="size-8 min-w-8 bg-fg-title text-background rounded-lg d-flex-place-center shadow-sm transition-colors duration-300">
                            <svg aria-hidden="true" width="488" height="488" className="size-5" viewBox="0 0 488 488" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_13_164)">
                                    <path
                                        d="M71.5342 71L416.602 416.068V416.068C321.314 511.356 166.822 511.356 71.5342 416.068V416.068C-23.7537 320.78 -23.7537 166.288 71.5342 71V71Z"
                                        fill="currentColor" ></path>
                                    <path
                                        d="M483.659 249.5C483.659 274.629 436.788 344.5 411.659 344.5C386.53 344.5 392.659 274.629 392.659 249.5C392.659 224.371 413.03 204 438.159 204C463.288 204 483.659 224.371 483.659 249.5Z"
                                        fill="currentColor" ></path>
                                    <circle cx="243.429" cy="243.759" r="110" transform="rotate(48.3973 243.429 243.759)"
                                        fill="currentColor" stroke="white" strokeWidth="80" className="stroke-fg-title"></circle>
                                    <path
                                        d="M309 71C309 96.129 212.629 101 187.5 101C162.371 101 142 80.629 142 55.5C142 30.371 162.371 10 187.5 10C212.629 10 309 45.871 309 71Z"
                                        fill="currentColor" ></path>
                                    <path
                                        d="M417 101.5C417 126.629 415.129 215.5 390 215.5C364.871 215.5 326 126.629 326 101.5C326 76.371 346.371 56 371.5 56C396.629 56 417 76.371 417 101.5Z"
                                        fill="currentColor" ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_13_164">
                                        <rect width="488" height="488" fill="currentColor" className="text-background"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex-1 md:in-fx-resized:invisible md:in-fx-resized:opacity-0 ease-linear duration-300">
                            <p className="text-sm font-medium text-foreground truncate">
                                UnoFlex
                            </p>
                            <p className="text-[10px] text-muted-foreground/60 font-medium truncate">
                                Sales
                            </p>
                        </div>
                        <SidebarResizer variant="ghost" size="sm" iconOnly aria-label="Resize sidebar"
                        className="in-fx-resized:absolute max-md:hidden in-fx-resized:top-3 in-fx-resized:-right-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="size-4 in-fx-resized:rotate-180 ease-linear duration-300 transform">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M15 3v18" />
                                <path d="m10 15-3-3 3-3" />
                            </svg>
                        </SidebarResizer>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3 w-full">
                    {
                        items.map(group => <SidebarNavGroup key={`group-${group.id}`} {...group} />)
                    }
                </nav>
                <div className="p-3 border-t border-border/60">
                    <Menu>
                        <Button variant="ghost" size="none" className="gap-3 w-full px-2 py-2 text-sm font-medium rounded-lg transition-colors">
                            <div
                                className="size-6 rounded-full bg-linear-to-tr from-bg-muted to-bg-surface d-flex-place-center text-muted-foreground font-semibold ring-1 ring-bg">
                                JM
                            </div>
                            <div className="text-left flex-1 md:in-fx-resized:hidden">
                                <p className="text-xs font-medium text-foreground truncate">Johnkat MJ</p>
                            </div>
                            <span aria-hidden="true" className="iconify size-3.5 opacity-80 ph--caret-up md:in-fx-resized:hidden"></span>
                        </Button>
                        <MenuContent popover={{ placement: "right bottom" }} className="min-w-54">
                            <MenuHeader separator>
                                <span className="block">johnkatmj@gmail.com</span>
                                <span className="font-normal text-muted-foreground">@katmj</span>
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

                            <MenuItem intent="destructive" href="#logout">
                                <MenuIcon aria-hidden="true" className='text-current'>
                                    <span className="iconify ph--sign-out text-current" />
                                </MenuIcon>
                                <MenuLabel>Log out</MenuLabel>
                            </MenuItem>
                        </MenuContent>
                    </Menu>
                </div>
            </SidebarBase>
        </>
    )
}
