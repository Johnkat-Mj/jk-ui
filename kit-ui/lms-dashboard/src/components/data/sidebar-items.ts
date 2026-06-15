import type { NavigateOptions } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { CounterInbox } from "../atoms/counter-inbox";

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
		text: "Dashboard",
		icon: "hugeicons--dashboard-square-01",
	},
	{
		id: "02",
		path: "/empty-route",
		text: "Inbox",
		icon: "hugeicons--inbox-download",
		badge: CounterInbox,
	},
	{
		id: "03",
		path: "/empty-route",
		text: "Courses",
		icon: "hugeicons--book-open-01",
	},
	{
		id: "04",
		path: "/empty-route",
		text: "Quizzes",
		icon: "hugeicons--bubble-chat-question",
	},
	{
		id: "05",
		path: "/empty-route",
		text: "Assignments",
		icon: "hugeicons--note",
	},
	{
		id: "06",
		path: "/empty-route",
		text: "Announcement",
		icon: "hugeicons--megaphone-01",
	},
	{
		id: "07",
		path: "/empty-route",
		text: "Students",
		icon: "hugeicons--user-group",
	},
	{
		id: "08",
		path: "/empty-route",
		text: "Earnings",
		icon: "hugeicons--bitcoin-03",
	},
	{
		id: "09",
		path: "/empty-route",
		text: "Certificates",
		icon: "hugeicons--diploma",
	},
	{
		id: "10",
		path: "/empty-route",
		text: "Reports",
		icon: "hugeicons--analytics-up",
	},
	{
		id: "11",
		path: "/empty-route",
		text: "Add-ons",
		icon: "hugeicons--plug-01",
	},
	{
		id: "12",
		path: "/empty-route",
		text: "Settings",
		icon: "hugeicons--settings-01",
	},
];
