import { Container } from "#/components/atoms/container";
import { Card } from "#/components/jk/card";
import { ProjectOverview } from "#/components/molecules/project-overview";
import { RecentTasks } from "#/components/molecules/recent-tasks";
import { TeamActivity } from "#/components/molecules/team-activity";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function StatCard({
	title,
	value,
	change,
	icon,
	trend,
}: {
	title: string;
	value: string;
	change: string;
	icon: string;
	trend: "up" | "down";
}) {
	return (
		<Card className="p-4">
			<div className="flex items-start justify-between">
				<div>
					<span className="text-muted-foreground text-sm">{title}</span>
					<div className="flex items-baseline gap-2 mt-1">
						<span className="text-foreground text-2xl font-semibold">
							{value}
						</span>
						<span
							className={`text-sm ${trend === "up" ? "text-success" : "text-destructive"}`}
						>
							{trend === "up" ? "↑" : "↓"} {change}
						</span>
					</div>
				</div>
				<span
					aria-hidden="true"
					className={`iconify ${icon} size-9 text-primary/30`}
				/>
			</div>
		</Card>
	);
}

function App() {
	return (
		<main className="page-wrap pb-8 pt-6">
			<Container className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<StatCard
					title="Active Projects"
					value="12"
					change="+2"
					icon="ph--folder"
					trend="up"
				/>
				<StatCard
					title="Open Tasks"
					value="48"
					change="-6"
					icon="ph--tasks"
					trend="down"
				/>
				<StatCard
					title="Team Members"
					value="24"
					change="+1"
					icon="ph--users-four"
					trend="up"
				/>
				<StatCard
					title="Completion Rate"
					value="73%"
					change="+5%"
					icon="ph--check-circle"
					trend="up"
				/>
			</Container>
			<Container className="grid lg:grid-cols-7 gap-4 mt-4">
				<div className="lg:col-span-4">
					<div className="flex items-center justify-between mb-3">
						<h2 className="text-sm font-semibold text-foreground">
							Projects Overview
						</h2>
						<button
							type="button"
							className="text-xs text-primary hover:underline"
						>
							View all
						</button>
					</div>
					<ProjectOverview />
				</div>
				<div className="lg:col-span-3 space-y-4">
					<RecentTasks />
					<TeamActivity />
				</div>
			</Container>
		</main>
	);
}
