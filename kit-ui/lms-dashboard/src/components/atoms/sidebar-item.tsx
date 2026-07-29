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
					"h-10 flex items-center px-2.5 rounded-lg text-sm transition-colors",
					"text-muted-foreground hover:bg-muted hover:text-foreground",
					"aria-[current=page]:bg-gray-50 dark:aria-[current=page]:bg-gray-900/80 aria-[current=page]:text-foreground aria-[current=page]:shadow-sm aria-[current=page]:ring-1 aria-[current=page]:ring-border/80",
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
