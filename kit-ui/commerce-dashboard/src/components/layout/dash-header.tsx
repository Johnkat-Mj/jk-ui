import { Button } from "../jk/button";
import {
	Menu,
	MenuContent,
	MenuHeader,
	MenuIcon,
	MenuItem,
	MenuLabel,
	MenuSection,
	MenuSeparator,
} from "../jk/menu";
import { SidebarToggler } from "../jk/sidebar";
import ThemeToggle from "../theme-toggle";

export const DashHeader = () => {
	return (
		<header className="sticky top-0 h-14 flex items-center border-b bg-background border-border-strong/60 z-35 px-6">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-4">
					<div className="flex lg:hidden -ml-2">
						<SidebarToggler variant="ghost" size="sm" iconOnly aria-label="Open sidebar">
							<svg role="img" aria-label="Open sidebar icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
								<rect width="18" height="18" x="3" y="3" rx="2" />
								<path d="M9 3v18" />
								<path d="m14 9 3 3-3 3" />
							</svg>
						</SidebarToggler>
					</div>
					<div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
						<span className="iconify ph--calendar size-3.5" />
						<span>Jan 1 - Mar 31, 2026</span>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="sm" className="hidden sm:flex">
						<span aria-hidden="true" className="iconify ph--download-simple size-4" />
						<span className="ml-1">Export</span>
					</Button>
					<Button variant="ghost" size="iconSm" aria-label="Notifications">
						<span aria-hidden="true" className="iconify ph--bell size-4" />
					</Button>
					<Menu>
						<Button
							variant="ghost"
							size="none"
							className="size-8 rounded-full bg-linear-to-tr from-bg-muted to-bg-surface d-flex-place-center text-muted-foreground font-semibold ring-1 ring-bg text-xs"
						>
							AK
						</Button>
						<MenuContent popover={{ placement: "bottom" }} className="min-w-50">
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

							<ThemeToggle />
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
		</header>
	);
};
