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
		<header className="sticky top-0 z-35 flex h-14 items-center border-b border-border bg-background/90 px-4 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75 sm:px-6">
			<div className="flex w-full items-center justify-between">
				<div className="flex items-center gap-4">
					<div className="flex lg:hidden -ml-2">
						<SidebarToggler
							variant="ghost"
							size="sm"
							iconOnly
							aria-label="Open sidebar"
						>
							<svg
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="size-4"
							>
								<rect width="18" height="18" x="3" y="3" rx="2" />
								<path d="M9 3v18" />
								<path d="m14 9 3 3-3 3" />
							</svg>
						</SidebarToggler>
					</div>
					<div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
						<span>Commerce</span>
						<span
							aria-hidden="true"
							className="iconify ph--caret-right size-3"
						/>
						<span className="font-medium text-foreground">Overview</span>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						intent="gray"
						size="sm"
						className="hidden md:flex"
					>
						<span
							aria-hidden="true"
							className="iconify ph--magnifying-glass size-4"
						/>
						<span className="ml-1">Search</span>
						<span className="ml-3 text-[10px] text-muted-foreground">⌘K</span>
					</Button>
					<Button variant="ghost" size="iconSm" aria-label="Notifications">
						<span aria-hidden="true" className="iconify ph--bell size-4" />
					</Button>
					<Menu>
						<Button
							variant="ghost"
							size="none"
							className="d-flex-place-center size-8 rounded-full bg-linear-to-tr from-bg-muted to-bg-surface text-xs font-semibold text-muted-foreground ring-1 ring-bg"
						>
							AK
						</Button>
						<MenuContent popover={{ placement: "bottom" }} className="min-w-50">
							<MenuHeader separator>
								<span className="block">alex@shopflow.com</span>
								<span className="font-normal text-muted-foreground">
									@alexkim
								</span>
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

							<MenuItem intent="destructive" href="#logout">
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
