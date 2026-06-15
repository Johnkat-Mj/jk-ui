import { Container } from "../atoms/container";
import { Button } from "../jk/button";
import { Icon } from "../jk/icon";
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
import { SearchField, SearchInput } from "../jk/search-field";
import { SidebarToggler } from "../jk/sidebar";
import ThemeToggle from "../theme-toggle";

export const DashHeader = () => {
	return (
		<header className="sticky top-0 h-16 flex items-center border-b bg-bg border-border z-35">
			<Container className="flex items-center justify-between gap-3">
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
						<Icon name="hugeicons--notification-02" />
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
									src="/avatar.webp"
									alt="avatar"
									width={100}
									height={100}
									className="border border-border-input/50 size-full object-cover object-top rounded-full"
								/>
							</Button>
							<MenuContent
								popover={{ placement: "bottom" }}
								className="min-w-50"
							>
								<MenuHeader separator>
									<span className="block">Kurt Cobain</span>
									<span className="font-normal text-fg-muted">@cobain</span>
								</MenuHeader>

								<MenuSection>
									<MenuItem href="#dashboard">
										<MenuIcon aria-hidden="true">
											<span className="iconify hugeicons--square" />
										</MenuIcon>
										<MenuLabel>Dashboard</MenuLabel>
									</MenuItem>
									<MenuItem href="#settings">
										<MenuIcon aria-hidden="true">
											<span className="iconify hugeicons--settings-03" />
										</MenuIcon>
										<MenuLabel>Settings</MenuLabel>
									</MenuItem>
								</MenuSection>

								<MenuSeparator />

								<MenuItem>
									<MenuIcon aria-hidden="true">
										<span className="iconify hugeicons--command-line" />
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
										<span className="iconify hugeicons--logout-03 text-current" />
									</MenuIcon>
									<MenuLabel>Log out</MenuLabel>
								</MenuItem>
							</MenuContent>
						</Menu>
					</div>
				</div>
			</Container>
		</header>
	);
};
