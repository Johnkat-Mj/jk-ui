import { cx } from "#/lib/utils";
import type { ProjectStatus } from "../data/projects";

const statusConfig: Record<ProjectStatus, { label: string; class: string }> = {
	active: {
		label: "Active",
		class: "bg-primary/10 text-primary",
	},
	"on-hold": {
		label: "On Hold",
		class: "bg-accent/10 text-accent",
	},
	completed: {
		label: "Completed",
		class: "bg-success/10 text-success",
	},
	"at-risk": {
		label: "At Risk",
		class: "bg-destructive/10 text-destructive",
	},
};

export const ProjectStatusBadge = ({ status }: { status: ProjectStatus }) => {
	const config = statusConfig[status];
	return (
		<span
			className={cx(
				"inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-medium",
				config.class,
			)}
		>
			<span
				className={cx("size-1.5 rounded-full", {
					"bg-primary": status === "active",
					"bg-accent": status === "on-hold",
					"bg-success": status === "completed",
					"bg-destructive": status === "at-risk",
				})}
			/>
			{config.label}
		</span>
	);
};
