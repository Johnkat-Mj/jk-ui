import type { NavigateOptions } from "@tanstack/react-router";
import type { ComponentType } from "react";

export type SidebarItemProps = {
	id: string;
	path: NavigateOptions["to"];
	text: string;
	icon: string;
	badge?: ComponentType<unknown>;
};

export const sidebarItems: SidebarItemProps[] = [
	{
		id: "01",
		path: "/",
		text: "Overview",
		icon: "ph--layout",
	},
	{
		id: "02",
		path: "/empty-route",
		text: "Projects",
		icon: "ph--folder",
	},
	{
		id: "03",
		path: "/empty-route",
		text: "Tasks",
		icon: "ph--kanban",
	},
	{
		id: "04",
		path: "/empty-route",
		text: "Team",
		icon: "ph--users-three",
	},
	{
		id: "05",
		path: "/empty-route",
		text: "Calendar",
		icon: "ph--calendar",
	},
	{
		id: "06",
		path: "/empty-route",
		text: "Messages",
		icon: "ph--chat-circle",
	},
	{
		id: "07",
		path: "/empty-route",
		text: "Files",
		icon: "ph--file",
	},
	{
		id: "08",
		path: "/empty-route",
		text: "Analytics",
		icon: "ph--chart-bar",
	},
	{
		id: "09",
		path: "/empty-route",
		text: "Reports",
		icon: "ph--clipboard-text",
	},
	{
		id: "10",
		path: "/empty-route",
		text: "Settings",
		icon: "ph--gear",
	},
];
