import { cx } from "#/lib/utils";
import type { ReactNode } from "react";

export const Container = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={cx("max-w-7xl px-4 sm:px-6 w-full mx-auto", className)}>
			{children}
		</div>
	);
};
