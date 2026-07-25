import { Card } from "../jk/card";
import { ProjectStatusBadge } from "../atoms/project-status-badge";
import { projects } from "../data/projects";
import { cx } from "#/lib/utils";

export const ProjectOverview = () => {
	return (
		<div className="space-y-3">
			{projects.map((project) => (
				<Card key={project.id} className="p-4">
					<div className="flex items-start justify-between gap-4">
						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2 mb-1">
								<h3 className="text-sm font-semibold text-foreground truncate">
									{project.name}
								</h3>
								<ProjectStatusBadge status={project.status} />
							</div>
							<p className="text-xs text-muted-foreground truncate mb-3">
								{project.description}
							</p>
							<div className="flex items-center gap-4 text-xs text-muted-foreground">
								<span className="flex items-center gap-1">
									<span aria-hidden="true" className="iconify ph--calendar size-3.5" />
									{project.dueDate}
								</span>
								<span className="flex items-center gap-1">
									<span aria-hidden="true" className="iconify ph--check-circle size-3.5" />
									{project.tasksCompleted}/{project.tasksTotal} tasks
								</span>
							</div>
						</div>
						<div className="flex items-center gap-3 shrink-0">
							<div className="flex flex-col items-end gap-1">
								<span className="text-xs font-medium text-foreground">
									{project.progress}%
								</span>
								<div className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
									<div
										className={cx(
											"h-full rounded-full transition-all",
											project.status === "at-risk"
												? "bg-destructive"
												: "bg-primary",
										)}
										style={{ width: `${project.progress}%` }}
									/>
								</div>
							</div>
							<div className="flex -space-x-1.5">
								{project.team.map((member, i) => (
									<div
										key={i}
										className="size-6 rounded-full bg-primary/10 border-2 border-bg flex items-center justify-center"
										title={member}
									>
										<span className="text-[10px] font-medium text-primary">
											{member.split(" ").map((n) => n[0]).join("")}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
};
