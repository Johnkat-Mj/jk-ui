import { SidebarItem } from "../atoms/sidebar-item";
import { sidebarGroups } from "../data/sidebar-items";
import { SidebarBase, SidebarOverlayElement } from "../jk/sidebar";

export const DashSidebar = () => {
	return (
		<>
			<SidebarOverlayElement className="md:hidden fx-open:visible fx-open:opacity-100 opacity-0 invisible" />
			<SidebarBase className="w-64 h-screen fixed border-r border-border bg-background lg:translate-x-0 left-0 -translate-x-full fx-open:translate-x-0 transform transition-transform ease-linear lg:transition-none z-50 overflow-y-auto">
				<div className="flex items-center gap-2 pt-6 px-6 pb-4 border-b border-border-strong/60">
					<div className="size-8 bg-primary text-white rounded-lg d-flex-place-center shadow-sm">
						<span aria-hidden="true" className="iconify ph--storefront size-5" />
					</div>
					<div>
						<span className="font-semibold text-foreground text-sm block leading-tight">ShopFlow</span>
						<span className="text-[10px] text-muted-foreground/60 font-medium">Commerce</span>
					</div>
				</div>
				<div className="px-3 py-4 space-y-6">
					{sidebarGroups.map((group) => (
						<div key={group.id}>
							<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2.5 block mb-1.5">
								{group.title}
							</span>
							<ul className="flex flex-col space-y-0.5">
								{group.items.map((item) => (
									<SidebarItem key={item.id} {...item} />
								))}
							</ul>
						</div>
					))}
				</div>
			</SidebarBase>
		</>
	);
};
