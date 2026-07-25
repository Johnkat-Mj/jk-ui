import { SidebarBase, SidebarOverlayElement } from "#/components/jk/sidebar";
import { Button } from "#/components/jk/button";
import { Avatar } from "#/components/jk/avatar";
import {
    Menu,
    MenuContent,
    MenuHeader,
    MenuIcon,
    MenuItem,
    MenuLabel,
    MenuSection,
    MenuSeparator,
    MenuSubMenu,
} from "#/components/jk/menu";
import { SidebarItem } from "./sidebar-item";

const items = [
    {
        id: "01",
        href: "/",
        text: "Overview",
        icon: "ph--layout",
        isActive: true,
    },
    {
        id: "02",
        href: "/empty-route",
        text: "Projects",
        icon: "ph--folder",
    },
    {
        id: "03",
        href: "/empty-route",
        text: "Tasks",
        icon: "ph--kanban",
    },
    {
        id: "04",
        href: "/empty-route",
        text: "Team",
        icon: "ph--users-three",
    },
    {
        id: "05",
        href: "/empty-route",
        text: "Calendar",
        icon: "ph--calendar",
    },
    {
        id: "06",
        href: "/empty-route",
        text: "Messages",
        icon: "ph--chat-circle",
    },
    {
        id: "07",
        href: "/empty-route",
        text: "Files",
        icon: "ph--file-text",
    },
    {
        id: "08",
        href: "/empty-route",
        text: "Analytics",
        icon: "ph--chart-bar",
    },
    {
        id: "09",
        href: "/empty-route",
        text: "Reports",
        icon: "ph--clipboard-text",
    },
    {
        id: "10",
        href: "/empty-route",
        text: "Settings",
        icon: "ph--gear",
    },
];

export const Sidebar = () => {
    return (
        <>
            <SidebarOverlayElement className="md:hidden invisible opacity-0 fx-open:visible fx-open:opacity-100 ease-linear transition-all duration-200 z-50" />

            <SidebarBase className="fixed h-dvh py-3 overflow-hidden w-11/12 max-w-64 md:w-64 transition-all -translate-x-full fx-open:translate-x-0 md:translate-x-0 md:transition-none bg-card border-r border-bg-muted/70 flex flex-col justify-between px-4 ease-linear z-80">
                <div>
                    <div className="min-h-max py-2 border-b border-border">
                        <a href="/" className="flex items-center gap-x-3 font-semibold text-fg-subtitle">
                            <span className="size-8 bg-fg-title text-background rounded-lg d-flex-place-center shadow-sm transition-colors duration-300">
                                <svg aria-hidden="true" width="488" height="488" className="size-5" viewBox="0 0 488 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_13_164)">
                                        <path d="M71.5342 71L416.602 416.068V416.068C321.314 511.356 166.822 511.356 71.5342 416.068V416.068C-23.7537 320.78 -23.7537 166.288 71.5342 71V71Z" fill="currentColor" />
                                        <path d="M483.659 249.5C483.659 274.629 436.788 344.5 411.659 344.5C386.53 344.5 392.659 274.629 392.659 249.5C392.659 224.371 413.03 204 438.159 204C463.288 204 483.659 224.371 483.659 249.5Z" fill="currentColor" />
                                        <circle cx="243.429" cy="243.759" r="110" transform="rotate(48.3973 243.429 243.759)" fill="currentColor" stroke="white" strokeWidth="80" className="stroke-fg-title" />
                                        <path d="M309 71C309 96.129 212.629 101 187.5 101C162.371 101 142 80.629 142 55.5C142 30.371 162.371 10 187.5 10C212.629 10 309 45.871 309 71Z" fill="currentColor" />
                                        <path d="M417 101.5C417 126.629 415.129 215.5 390 215.5C364.871 215.5 326 126.629 326 101.5C326 76.371 346.371 56 371.5 56C396.629 56 417 76.371 417 101.5Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13_164">
                                            <rect width="488" height="488" fill="currentColor" className="text-background" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            ProjectHub
                        </a>
                    </div>

                    <nav className="pt-6 flex flex-col">
                        <span className="mb-2 text-sm text-muted-foreground uppercase tracking-wider">Navigation</span>
                        <ul className="text-muted-foreground space-y-1 w-full">
                            {items.map((item) => (
                                <SidebarItem key={`sidebar-item-${item.id}`} {...item} />
                            ))}
                        </ul>
                    </nav>
                </div>

                <div>
                    <ul className="flex flex-col gap-y-2 text-muted-foreground">
                        <li className="w-full">
                            <Menu>
                                <Button aria-label="Open user menu" size="none" variant="ghost" className="gap-3 w-full p-1.5 border border-border-strong/40">
                                    <Avatar size="md" radius="default" src="https://avatars.githubusercontent.com/u/59884686?v=4" width={100} height={100} alt="Sarah Chen Profile Picture" />
                                    <div className="flex flex-1 justify-between items-center overflow-hidden">
                                        <div className="flex flex-col -space-y-0.5 text-left flex-1 overflow-hidden">
                                            <span className="font-semibold text-sm text-foreground truncate">
                                                Sarah Chen
                                            </span>
                                            <span className="text-xs text-muted-foreground truncate">
                                                sarah.chen@projecthub.io
                                            </span>
                                        </div>
                                        <span aria-hidden="true" className="flex min-w-max text-muted-foreground opacity-60">
                                            <span className="iconify ph--caret-up-down" />
                                        </span>
                                    </div>
                                </Button>
                                <MenuContent popover={{ placement: "top left" }} className="min-w-54">
                                    <MenuHeader separator>
                                        <span className="block">sarah.chen@projecthub.io</span>
                                        <span className="font-normal text-muted-foreground">@sarahchen</span>
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
                                        <MenuIcon aria-hidden="true" className="text-current">
                                            <span className="iconify ph--sign-out text-current" />
                                        </MenuIcon>
                                        <MenuLabel>Log out</MenuLabel>
                                    </MenuItem>
                                </MenuContent>
                            </Menu>
                        </li>
                    </ul>
                </div>
            </SidebarBase>
        </>
    );
};
