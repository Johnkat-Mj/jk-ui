import { Button } from "@/components/jk/button"
import { SidebarBase, SidebarOverlayElement, SidebarResizer } from "@/components/jk/sidebar"
import { SidebarNavGroup } from "./sidebar-nav-group"
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
import { cx } from "@/lib/utils"

const items = [
    {
        id: 'group01',
        title: 'Store',
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
                text: 'Products',
                href: '#',
                icon: 'ph--package',
            },
            {
                id: 'g1_04',
                text: 'Orders',
                href: '#',
                icon: 'ph--shopping-cart',
            },
            {
                id: 'g1_05',
                text: 'Customers',
                href: '#',
                icon: 'ph--users',
            },
        ],
    },
    {
        id: 'group02',
        title: 'Management',
        items: [
            {
                id: 'g2_01',
                text: 'Inventory',
                href: '#',
                icon: 'ph--warehouse',
            },
            {
                id: 'g2_02',
                text: 'Discounts',
                href: '#',
                icon: 'ph--tag',
            },
            {
                id: 'g2_03',
                text: 'Reviews',
                href: '#',
                icon: 'ph--star',
            },
            {
                id: 'g2_04',
                text: 'Marketing',
                href: '#',
                icon: 'ph--megaphone',
            },
        ],
    },
    {
        id: 'group03',
        title: 'Finance',
        items: [
            {
                id: 'g3_01',
                text: 'Payouts',
                href: '#',
                icon: 'ph--currency-circle-dollar',
            },
            {
                id: 'g3_02',
                text: 'Reports',
                href: '#',
                icon: 'ph--file-text',
            },
            {
                id: 'g3_03',
                text: 'Taxes',
                href: '#',
                icon: 'ph--receipt',
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
                        <div className="size-8 min-w-8 bg-primary text-white rounded-lg d-flex-place-center shadow-sm">
                            <span aria-hidden="true" className="iconify ph--storefront size-5" />
                        </div>
                        <div className="flex-1 md:in-fx-resized:invisible md:in-fx-resized:opacity-0 ease-linear duration-300">
                            <p className="text-sm font-medium text-foreground truncate">
                                ShopFlow
                            </p>
                            <p className="text-[10px] text-muted-foreground/60 font-medium truncate">
                                Commerce
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
                            <div className="size-6 rounded-full bg-linear-to-tr from-bg-muted to-bg-surface d-flex-place-center text-muted-foreground font-semibold ring-1 ring-bg">
                                AK
                            </div>
                            <div className="text-left flex-1 md:in-fx-resized:hidden">
                                <p className="text-xs font-medium text-foreground truncate">Alex Kim</p>
                            </div>
                            <span aria-hidden="true" className="iconify size-3.5 opacity-80 ph--caret-up md:in-fx-resized:hidden"></span>
                        </Button>
                        <MenuContent popover={{ placement: "right bottom" }} className="min-w-54">
                            <MenuHeader separator>
                                <span className="block">alex@shopflow.com</span>
                                <span className="font-normal text-muted-foreground">@alexkim</span>
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
