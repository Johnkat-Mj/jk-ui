import type { SidebarItemProps } from "../data/sidebar-items";
import { Link } from "@tanstack/react-router";
import { cx } from "#/lib/utils";
import { Icon } from "../jk/icon";
import type { ComponentType } from "react";

const ItemBadge = ({ badge }: { badge?: ComponentType }) => {
	if (!badge) return null;
	const Badge = badge;
	return <Badge />;
};

export const SidebarItem = ({ path, icon, text, badge }: SidebarItemProps) => {
	return (
		<li>
			<Link
				to={path}
				className={cx(
					"h-10 flex items-center px-2.5 rounded-lg text-[15px]",
					"aria-[current=page]:bg-card aria-[current=page]:text-foreground",
					"aria-[current=page]:shadow-[0px_0.7px_0px_0px_#E1E1E1,0px_0px_0px_1px_#F0F0F0]",
					"dark:aria-[current=page]:shadow-[0px_0.7px_0px_0px_var(--color-gray-700),0px_0px_0px_1px_var(--color-gray-800)]",
				)}
			>
				<Icon name={icon} className="mr-2.5" />
				<div className="flex-1 flex justify-between items-center">
					<span className="flex-1 line-clamp-1">{text}</span>
					<ItemBadge badge={badge} />
				</div>
			</Link>
		</li>
	);
};
