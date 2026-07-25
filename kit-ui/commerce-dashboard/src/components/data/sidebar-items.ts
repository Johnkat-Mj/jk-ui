import type { NavigateOptions } from "@tanstack/react-router";

export type SidebarGroup = {
	id: string;
	title: string;
	items: SidebarItemProps[];
};

export type SidebarItemProps = {
	id: string;
	path: NavigateOptions["to"];
	text: string;
	icon: string;
};

export const sidebarGroups: SidebarGroup[] = [
	{
		id: "store",
		title: "Store",
		items: [
			{
				id: "s1",
				path: "/",
				text: "Dashboard",
				icon: "ph--chart-line-up",
			},
			{
				id: "s2",
				path: "#analytics",
				text: "Analytics",
				icon: "ph--chart-pie",
			},
			{
				id: "s3",
				path: "#products",
				text: "Products",
				icon: "ph--package",
			},
			{
				id: "s4",
				path: "#orders",
				text: "Orders",
				icon: "ph--shopping-cart",
			},
			{
				id: "s5",
				path: "#customers",
				text: "Customers",
				icon: "ph--users",
			},
		],
	},
	{
		id: "management",
		title: "Management",
		items: [
			{
				id: "m1",
				path: "#inventory",
				text: "Inventory",
				icon: "ph--warehouse",
			},
			{
				id: "m2",
				path: "#discounts",
				text: "Discounts",
				icon: "ph--tag",
			},
			{
				id: "m3",
				path: "#reviews",
				text: "Reviews",
				icon: "ph--star",
			},
			{
				id: "m4",
				path: "#marketing",
				text: "Marketing",
				icon: "ph--megaphone",
			},
		],
	},
	{
		id: "finance",
		title: "Finance",
		items: [
			{
				id: "f1",
				path: "#payouts",
				text: "Payouts",
				icon: "ph--currency-circle-dollar",
			},
			{
				id: "f2",
				path: "#reports",
				text: "Reports",
				icon: "ph--file-text",
			},
			{
				id: "f3",
				path: "#taxes",
				text: "Taxes",
				icon: "ph--receipt",
			},
		],
	},
];
