import { Card } from "../jk/card";
import { recentTasks } from "../data/projects";
import { cx } from "#/lib/utils";

const priorityColors: Record<string, string> = {
	low: "bg-gray-400",
	medium: "bg-accent",
	high: "bg-warning",
	urgent: "bg-destructive",
};

const statusLabels: Record<string, string> = {
	todo: "Todo",
	"in-progress": "In Progress",
	review: "Review",
	done: "Done",
};

export const RecentTasks = () => {
	return (
		<Card className="p-4">
			<h3 className="text-sm font-semibold text-foreground mb-3">
				Recent Tasks
			</h3>
			<div className="space-y-2">
				{recentTasks.map((task) => (
					<div
						key={task.id}
						className="flex items-center gap-3 py-2 border-b border-border last:border-0"
					>
						<span
							className={cx(
								"size-2 rounded-full shrink-0",
								priorityColors[task.priority],
							)}
						/>
						<div className="flex-1 min-w-0">
							<p className="text-sm text-foreground truncate">{task.title}</p>
							<p className="text-xs text-muted-foreground">
								{task.project} &middot; {task.assignee}
							</p>
						</div>
						<div className="flex items-center gap-2 shrink-0">
							<span className="text-xs text-muted-foreground">{task.dueDate}</span>
							<span
								className={cx(
									"text-[11px] px-1.5 py-0.5 rounded-lg font-medium",
									task.status === "done"
										? "bg-success/10 text-success"
										: task.status === "review"
											? "bg-accent/10 text-accent"
											: task.status === "in-progress"
												? "bg-primary/10 text-primary"
												: "bg-gray-100 dark:bg-gray-800 text-muted-foreground",
								)}
							>
								{statusLabels[task.status]}
							</span>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};
