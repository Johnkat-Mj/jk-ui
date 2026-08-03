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
					"h-9 flex items-center px-2.5 rounded-lg text-sm gap-2.5",
					"aria-[current=page]:bg-primary aria-[current=page]:font-medium aria-[current=page]:text-white",
					"text-gray-400 hover:text-white hover:bg-gray-900 transition-colors",
				)}
			>
				<span
					aria-hidden="true"
					className={`iconify ${icon} size-4 opacity-80`}
				/>
				<span className="flex-1 line-clamp-1">{text}</span>
			</Link>
		</li>
	);
};
