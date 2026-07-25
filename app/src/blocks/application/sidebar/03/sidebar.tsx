import { Button } from "@/components/jk/button";
import { SidebarBase, SidebarOverlayElement, SidebarResizer } from "@/components/jk/sidebar";
import { SidebarNavGroup } from "./sidebar-nav-group";

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
import { Icon } from "@/components/jk/icon";
import { Input, InputGroup, InputLeading } from "@/components/jk/input";
import { SidebarItem } from "./sidebar-item";

const items = [
    {
        id: '0001',
        text: 'Dashboard',
        icon: 'ph--squares-four',
        href: '/dashboard',
        isActive: true
    },
    {
        id: '0002',
        text: 'Inbox',
        icon: 'ph--tray',
        href: '/dashboard/inbox',
    },
    {
        id: '0003',
        text: 'Leads',
        icon: 'ph--fire',
        href: '/dashboard/leads',
    },
    {
        id: '0005',
        text: 'Contacts',
        icon: 'ph--address-book',
        href: '/dashboard/contacts',
    },
    {
        id: '0004',
        text: 'Deals & Opportunities',
        icon: 'ph--handshake',
        href: '#',
        has_children: true,
        items: [
            {
                id: "sub01",
                text: 'Deals',
                href: '/dashboard/deals',
            },
            {
                id: "sub02",
                text: 'Opportunities',
                href: '/dashboard/deals/opportunities'
            },
            {
                id: "sub03",
                text: 'Reports & Analytics',
                href: '/dashboard/deals/reports'
            },
        ],
    },

    {
        id: '0006',
        text: 'Companies',
        icon: 'ph--building',
        href: '/dashboard/companies',
    },
    {
        id: '0007',
        text: 'Tasks',
        icon: 'ph--kanban',
        href: '/dashboard/tasks',
    },
];
export const Sidebar = () => {
    return (
        <>
            <SidebarOverlayElement className="md:hidden md:invisible invisible opacity-0 fx-open:visible fx-open:opacity-100 ease-linear transition-all duration-200 z-40" />
            <SidebarBase
                className="fixed top-0 h-dvh bg-background border-r border-border max-w-68 w-11/12 md:max-w-none md:w-68 p-4 -translate-x-full md:translate-x-0 left-0 fx-open:translate-x-0 opacity-0 fx-open:opacity-100 md:opacity-100 ease-linear duration-200 md:transition-[width] md:duration-200 z-60 md:z-auto md:fx-resized:w-19">
                <div className="flex flex-col size-full">
                    <div className="flex md:in-fx-resized:flex-col items-center gap-3 justify-between relative">
                        <a href="#">
                            <div className="size-9 md:in-fx-resized:w-10.5 bg-card border border-border rounded-lg flex items-center justify-center ease-linear transition-[width]">
                                <svg width={700} height={700} className="size-8" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_13_163)">
                                        <path d="M177.534 177L522.602 522.068C427.314 617.356 272.822 617.356 177.534 522.068C82.2463 426.78 82.2463 272.288 177.534 177Z" fill="currentColor" className="text-foreground" />
                                        <path d="M589.659 355.5C589.659 380.629 542.788 450.5 517.659 450.5C492.53 450.5 498.659 380.629 498.659 355.5C498.659 330.371 519.03 310 544.159 310C569.288 310 589.659 330.371 589.659 355.5Z" fill="currentColor" className="text-foreground" />
                                        <circle cx="349.429" cy="349.759" r={110} transform="rotate(48.3973 349.429 349.759)" fill="currentColor" stroke="white" strokeWidth={80} className="text-foreground stroke-bg" />
                                        <path d="M415 177C415 202.129 318.629 207 293.5 207C268.371 207 248 186.629 248 161.5C248 136.371 268.371 116 293.5 116C318.629 116 415 151.871 415 177Z" fill="currentColor" className="text-foreground" />
                                        <path d="M523 207.5C523 232.629 521.129 321.5 496 321.5C470.871 321.5 432 232.629 432 207.5C432 182.371 452.371 162 477.5 162C502.629 162 523 182.371 523 207.5Z" fill="currentColor" className="text-foreground" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13_163">
                                            <rect width={488} height={488} fill="white" transform="translate(106 106)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </a>
                        <div className="md:flex hidden ">
                            <SidebarResizer aria-label="Resize sidebar" variant="ghost" size="sm" iconOnly data-toggle-sidebar-size className="md:in-fx-resized:w-10.5">
                                <Icon name="ph--arrow-line-left" className="in-fx-resized:rotate-180 transform ease-linear" />
                            </SidebarResizer>
                        </div>
                    </div>
                    <div className="mt-6">
                        <form className="relative w-full">
                            <InputGroup className="md:in-fx-resized:[--left-space:12px]">
                                <Input variant="unstyled" placeholder="start typing..." className="ps-9 px-3 md:in-fx-resized:opacity-0" />
                                <InputLeading absolute className="text-foreground text-sm">
                                    <Icon name="ph--magnifying-glass" className="flex iconify" />
                                </InputLeading>
                            </InputGroup>
                        </form>
                    </div>
                    <nav className="flex flex-1 flex-col pt-7">
                        <ul className="flex flex-col space-y-1">
                            {
                                items.map(item => item.has_children ? <SidebarNavGroup
                                    key={item.id}
                                    text={item.text} icon={item.icon}
                                    items={item.items}
                                /> : <SidebarItem key={item.id} isActive={item?.isActive} icon={item.icon} text={item.text} href={item.href} />)
                            }
                        </ul>
                    </nav>
                    <div className="h-max w-full pt-3 border-t border-border">
                        <nav>
                            <ul className="flex flex-col space-y-1">
                                <SidebarItem href="/settings/" icon="ph--gear" text="Settings" />
                                <li className="flex w-full">
                                    <Menu>
                                        <Button intent="none" variant="none" size="none"
                                            className="flex items-center text-sm gap-2.5 md:in-fx-resized:pl-0 px-1 py-1 text-muted-foreground hover:bg-card hover:text-foreground-subtitle rounded-lg w-full">
                                            <span
                                                className="size-8 min-w-8 md:in-fx-resized:w-10.5 md:in-fx-resized:min-w-10.5 flex items-center justify-center rounded-lg ui-subtle ui-subtle-gray">
                                                J
                                            </span>
                                            <span
                                                className="flex-1 truncate text-left font-medium md:in-fx-resized:opacity-0 md:in-fx-resized:transition-opacity">
                                                Johnkat Mj
                                            </span>
                                            <svg
                                                data-slot="chevron"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-label="caret up down"
                                                width={32}
                                                height={32}
                                                fill="#000000"
                                                viewBox="0 0 256 256"
                                                className="fill-fg-muted size-4 flex md:in-fx-resized:opacity-0 md:in-fx-resized:transition-opacity"
                                            >
                                                <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" />
                                            </svg>
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
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </SidebarBase>
        </>
    )
}
