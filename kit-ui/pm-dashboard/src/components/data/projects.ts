export type ProjectStatus = "active" | "on-hold" | "completed" | "at-risk";

export type Project = {
	id: string;
	name: string;
	description: string;
	status: ProjectStatus;
	progress: number;
	dueDate: string;
	team: string[];
	tasksTotal: number;
	tasksCompleted: number;
};

export type Task = {
	id: string;
	title: string;
	project: string;
	assignee: string;
	priority: "low" | "medium" | "high" | "urgent";
	status: "todo" | "in-progress" | "review" | "done";
	dueDate: string;
};

export type TeamActivity = {
	id: string;
	user: string;
	avatar: string;
	action: string;
	target: string;
	timestamp: string;
};

export const projects: Project[] = [
	{
		id: "1",
		name: "Website Redesign",
		description: "Complete overhaul of the company website with new brand guidelines",
		status: "active",
		progress: 68,
		dueDate: "Aug 15, 2026",
		team: ["Sarah C.", "Alex K.", "Mike R."],
		tasksTotal: 24,
		tasksCompleted: 16,
	},
	{
		id: "2",
		name: "Mobile App v2",
		description: "Major version update with offline support and new dashboard",
		status: "active",
		progress: 42,
		dueDate: "Oct 1, 2026",
		team: ["Alex K.", "Jamie L.", "Priya S."],
		tasksTotal: 36,
		tasksCompleted: 15,
	},
	{
		id: "3",
		name: "API Integration",
		description: "Third-party payment and analytics API integration",
		status: "on-hold",
		progress: 30,
		dueDate: "Sep 20, 2026",
		team: ["Mike R.", "Sarah C."],
		tasksTotal: 12,
		tasksCompleted: 4,
	},
	{
		id: "4",
		name: "Design System",
		description: "Build reusable component library and design tokens",
		status: "completed",
		progress: 100,
		dueDate: "Jun 30, 2026",
		team: ["Jamie L.", "Priya S."],
		tasksTotal: 18,
		tasksCompleted: 18,
	},
	{
		id: "5",
		name: "Customer Portal",
		description: "Self-service portal for customer account management",
		status: "at-risk",
		progress: 55,
		dueDate: "Aug 5, 2026",
		team: ["Sarah C.", "Alex K.", "Mike R.", "Jamie L."],
		tasksTotal: 30,
		tasksCompleted: 16,
	},
];

export const recentTasks: Task[] = [
	{
		id: "t1",
		title: "Set up CI/CD pipeline",
		project: "Website Redesign",
		assignee: "Alex K.",
		priority: "high",
		status: "in-progress",
		dueDate: "Jul 12",
	},
	{
		id: "t2",
		title: "Design system color tokens",
		project: "Design System",
		assignee: "Jamie L.",
		priority: "medium",
		status: "done",
		dueDate: "Jul 8",
	},
	{
		id: "t3",
		title: "User authentication flow",
		project: "Mobile App v2",
		assignee: "Priya S.",
		priority: "urgent",
		status: "review",
		dueDate: "Jul 10",
	},
	{
		id: "t4",
		title: "Payment webhook handler",
		project: "API Integration",
		assignee: "Mike R.",
		priority: "high",
		status: "todo",
		dueDate: "Jul 15",
	},
	{
		id: "t5",
		title: "Dashboard analytics widgets",
		project: "Customer Portal",
		assignee: "Sarah C.",
		priority: "medium",
		status: "in-progress",
		dueDate: "Jul 14",
	},
];

export const teamActivities: TeamActivity[] = [
	{
		id: "a1",
		user: "Alex K.",
		avatar: "",
		action: "completed",
		target: "CI/CD pipeline setup",
		timestamp: "2 hours ago",
	},
	{
		id: "a2",
		user: "Jamie L.",
		avatar: "",
		action: "commented on",
		target: "Color token proposal",
		timestamp: "3 hours ago",
	},
	{
		id: "a3",
		user: "Priya S.",
		avatar: "",
		action: "submitted",
		target: "Auth flow PR #142",
		timestamp: "5 hours ago",
	},
	{
		id: "a4",
		user: "Mike R.",
		avatar: "",
		action: "created task",
		target: "Payment webhook handler",
		timestamp: "1 day ago",
	},
	{
		id: "a5",
		user: "Sarah C.",
		avatar: "",
		action: "updated",
		target: "Customer Portal roadmap",
		timestamp: "1 day ago",
	},
];
