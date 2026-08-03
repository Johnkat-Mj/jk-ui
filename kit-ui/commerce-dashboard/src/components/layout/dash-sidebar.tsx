import { SidebarItem } from "../atoms/sidebar-item";
import { sidebarGroups } from "../data/sidebar-items";
import { SidebarBase, SidebarOverlayElement } from "../jk/sidebar";

export const DashSidebar = () => {
	return (
		<>
			<SidebarOverlayElement className="invisible opacity-0 lg:hidden fx-open:visible fx-open:opacity-100" />
			<SidebarBase className="fixed left-0 z-50 flex h-screen w-60 -translate-x-full flex-col overflow-y-auto border-r border-gray-800 bg-gray-950 text-gray-300 transform transition-transform ease-linear fx-open:translate-x-0 lg:translate-x-0 lg:transition-none">
				<div className="flex h-16 items-center justify-between px-4">
					<div className="flex items-center gap-2.5">
						<div className="grid size-8 place-items-center rounded-lg bg-primary text-white">
							<span
								aria-hidden="true"
								className="iconify ph--storefront size-4.5"
							/>
						</div>
						<span className="text-sm font-semibold tracking-tight text-white">
							ShopFlow
						</span>
					</div>
					<button
						type="button"
						className="grid size-7 place-items-center rounded-md text-gray-500 hover:bg-gray-800 hover:text-white"
						aria-label="Collapse sidebar"
					>
						<span
							aria-hidden="true"
							className="iconify ph--sidebar-simple size-4"
						/>
					</button>
				</div>
				<button
					type="button"
					className="mx-3 flex items-center gap-2.5 rounded-lg border border-gray-800 bg-gray-900/60 p-2 text-left transition-colors hover:border-gray-700 hover:bg-gray-900"
				>
					<div className="flex items-center gap-2.5">
						<div className="grid size-8 place-items-center rounded-md bg-primary/15 text-primary">
							<span
								aria-hidden="true"
								className="iconify ph--storefront size-4"
							/>
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-xs font-semibold text-white">
								Northstar Store
							</p>
							<p className="text-[10px] text-gray-400">
								<span className="text-success">Online</span> · USD
							</p>
						</div>
						<span
							aria-hidden="true"
							className="iconify ph--caret-up-down size-3.5 text-gray-500"
						/>
					</div>
				</button>
				<div className="flex-1 space-y-6 px-3 py-5">
					{sidebarGroups.map((group) => (
						<div key={group.id}>
							<span className="mb-1.5 block px-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
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
				<div className="border-t border-gray-800 p-3">
					<button
						type="button"
						className="flex w-full items-center gap-2.5 rounded-lg p-2 text-left text-gray-400 hover:bg-gray-900 hover:text-white"
					>
						<span className="grid size-8 place-items-center rounded-full bg-gray-800 text-[10px] font-semibold text-white">
							AK
						</span>
						<span className="min-w-0 flex-1">
							<span className="block truncate text-xs font-semibold text-white">
								Alex Kim
							</span>
							<span className="block truncate text-[10px] text-gray-500">
								Store owner
							</span>
						</span>
						<span
							aria-hidden="true"
							className="iconify ph--dots-three size-4"
						/>
					</button>
				</div>
			</SidebarBase>
		</>
	);
};
