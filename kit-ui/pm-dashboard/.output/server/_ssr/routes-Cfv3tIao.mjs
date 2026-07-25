import { require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { Container, cx } from "./container-CK8U8-8t.mjs";
import { Card } from "./card-Bq-Tqwdu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cfv3tIao.js
var import_jsx_runtime = require_jsx_runtime();
var statusConfig = {
	active: {
		label: "Active",
		class: "bg-primary/10 text-primary"
	},
	"on-hold": {
		label: "On Hold",
		class: "bg-accent/10 text-accent"
	},
	completed: {
		label: "Completed",
		class: "bg-success/10 text-success"
	},
	"at-risk": {
		label: "At Risk",
		class: "bg-destructive/10 text-destructive"
	}
};
var ProjectStatusBadge = ({ status }) => {
	const config = statusConfig[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cx("inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-medium", config.class),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cx("size-1.5 rounded-full", {
			"bg-primary": status === "active",
			"bg-accent": status === "on-hold",
			"bg-success": status === "completed",
			"bg-destructive": status === "at-risk"
		}) }), config.label]
	});
};
var projects = [
	{
		id: "1",
		name: "Website Redesign",
		description: "Complete overhaul of the company website with new brand guidelines",
		status: "active",
		progress: 68,
		dueDate: "Aug 15, 2026",
		team: [
			"Sarah C.",
			"Alex K.",
			"Mike R."
		],
		tasksTotal: 24,
		tasksCompleted: 16
	},
	{
		id: "2",
		name: "Mobile App v2",
		description: "Major version update with offline support and new dashboard",
		status: "active",
		progress: 42,
		dueDate: "Oct 1, 2026",
		team: [
			"Alex K.",
			"Jamie L.",
			"Priya S."
		],
		tasksTotal: 36,
		tasksCompleted: 15
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
		tasksCompleted: 4
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
		tasksCompleted: 18
	},
	{
		id: "5",
		name: "Customer Portal",
		description: "Self-service portal for customer account management",
		status: "at-risk",
		progress: 55,
		dueDate: "Aug 5, 2026",
		team: [
			"Sarah C.",
			"Alex K.",
			"Mike R.",
			"Jamie L."
		],
		tasksTotal: 30,
		tasksCompleted: 16
	}
];
var recentTasks = [
	{
		id: "t1",
		title: "Set up CI/CD pipeline",
		project: "Website Redesign",
		assignee: "Alex K.",
		priority: "high",
		status: "in-progress",
		dueDate: "Jul 12"
	},
	{
		id: "t2",
		title: "Design system color tokens",
		project: "Design System",
		assignee: "Jamie L.",
		priority: "medium",
		status: "done",
		dueDate: "Jul 8"
	},
	{
		id: "t3",
		title: "User authentication flow",
		project: "Mobile App v2",
		assignee: "Priya S.",
		priority: "urgent",
		status: "review",
		dueDate: "Jul 10"
	},
	{
		id: "t4",
		title: "Payment webhook handler",
		project: "API Integration",
		assignee: "Mike R.",
		priority: "high",
		status: "todo",
		dueDate: "Jul 15"
	},
	{
		id: "t5",
		title: "Dashboard analytics widgets",
		project: "Customer Portal",
		assignee: "Sarah C.",
		priority: "medium",
		status: "in-progress",
		dueDate: "Jul 14"
	}
];
var teamActivities = [
	{
		id: "a1",
		user: "Alex K.",
		avatar: "",
		action: "completed",
		target: "CI/CD pipeline setup",
		timestamp: "2 hours ago"
	},
	{
		id: "a2",
		user: "Jamie L.",
		avatar: "",
		action: "commented on",
		target: "Color token proposal",
		timestamp: "3 hours ago"
	},
	{
		id: "a3",
		user: "Priya S.",
		avatar: "",
		action: "submitted",
		target: "Auth flow PR #142",
		timestamp: "5 hours ago"
	},
	{
		id: "a4",
		user: "Mike R.",
		avatar: "",
		action: "created task",
		target: "Payment webhook handler",
		timestamp: "1 day ago"
	},
	{
		id: "a5",
		user: "Sarah C.",
		avatar: "",
		action: "updated",
		target: "Customer Portal roadmap",
		timestamp: "1 day ago"
	}
];
var ProjectOverview = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground truncate",
								children: project.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectStatusBadge, { status: project.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground truncate mb-3",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "iconify ph--calendar size-3.5"
								}), project.dueDate]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "iconify ph--check-circle size-3.5"
									}),
									project.tasksCompleted,
									"/",
									project.tasksTotal,
									" tasks"
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-end gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-foreground",
							children: [project.progress, "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cx("h-full rounded-full transition-all", project.status === "at-risk" ? "bg-destructive" : "bg-primary"),
								style: { width: `${project.progress}%` }
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex -space-x-1.5",
						children: project.team.map((member, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-6 rounded-full bg-primary/10 border-2 border-bg flex items-center justify-center",
							title: member,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-medium text-primary",
								children: member.split(" ").map((n) => n[0]).join("")
							})
						}, i))
					})]
				})]
			})
		}, project.id))
	});
};
var priorityColors = {
	low: "bg-gray-400",
	medium: "bg-accent",
	high: "bg-warning",
	urgent: "bg-destructive"
};
var statusLabels = {
	todo: "Todo",
	"in-progress": "In Progress",
	review: "Review",
	done: "Done"
};
var RecentTasks = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-semibold text-foreground mb-3",
			children: "Recent Tasks"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: recentTasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 py-2 border-b border-border last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cx("size-2 rounded-full shrink-0", priorityColors[task.priority]) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-foreground truncate",
							children: task.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								task.project,
								" · ",
								task.assignee
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: task.dueDate
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cx("text-[11px] px-1.5 py-0.5 rounded-lg font-medium", task.status === "done" ? "bg-success/10 text-success" : task.status === "review" ? "bg-accent/10 text-accent" : task.status === "in-progress" ? "bg-primary/10 text-primary" : "bg-gray-100 dark:bg-gray-800 text-muted-foreground"),
							children: statusLabels[task.status]
						})]
					})
				]
			}, task.id))
		})]
	});
};
var TeamActivity = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm font-semibold text-foreground mb-3",
			children: "Team Activity"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: teamActivities.map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-medium text-primary",
						children: activity.user.split(" ").map((n) => n[0]).join("")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: activity.user
							}),
							" ",
							activity.action,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: activity.target
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: activity.timestamp
					})]
				})]
			}, activity.id))
		})]
	});
};
function StatCard({ title, value, change, icon, trend }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline gap-2 mt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground text-2xl font-semibold",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `text-sm ${trend === "up" ? "text-success" : "text-destructive"}`,
					children: [
						trend === "up" ? "↑" : "↓",
						" ",
						change
					]
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: `iconify ${icon} size-9 text-primary/30`
			})]
		})
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-wrap pb-8 pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Active Projects",
					value: "12",
					change: "+2",
					icon: "ph--folder",
					trend: "up"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Open Tasks",
					value: "48",
					change: "-6",
					icon: "ph--tasks",
					trend: "down"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Team Members",
					value: "24",
					change: "+1",
					icon: "ph--users-four",
					trend: "up"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Completion Rate",
					value: "73%",
					change: "+5%",
					icon: "ph--check-circle",
					trend: "up"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid lg:grid-cols-7 gap-4 mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold text-foreground",
						children: "Projects Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-xs text-primary hover:underline",
						children: "View all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectOverview, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentTasks, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamActivity, {})]
			})]
		})]
	});
}
//#endregion
export { App as component };
