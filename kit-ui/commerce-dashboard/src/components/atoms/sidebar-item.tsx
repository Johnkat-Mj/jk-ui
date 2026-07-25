import { Link } from "@tanstack/react-router";
import { cx } from "#/lib/utils";

export const SidebarItem = ({
	path,
	icon,
	text,
}: {
	path: string;
	icon: string;
	text: string;
}) => {
	return (
		<li>
			<Link
				to={path}
				className={cx(
					"h-10 flex items-center px-2.5 rounded-lg text-[15px] gap-2.5",
					"aria-[current=page]:bg-card aria-[current=page]:text-foreground",
					"text-muted-foreground hover:text-foreground hover:bg-card/50 transition-colors",
				)}
			>
				<span aria-hidden="true" className={`iconify ${icon} size-4 opacity-80`} />
				<span className="flex-1 line-clamp-1">{text}</span>
			</Link>
		</li>
	);
};
