export const kpis = [
	{
		label: "Total Revenue",
		value: "$48,532",
		subtitle: "vs $43,140 last month",
		change: "+12.5%",
		trend: "up" as const,
		icon: "ph--currency-circle-dollar",
		color: "text-primary",
	},
	{
		label: "Orders",
		value: "1,423",
		subtitle: "vs 1,315 last month",
		change: "+8.2%",
		trend: "up" as const,
		icon: "ph--shopping-cart",
		color: "text-accent",
	},
	{
		label: "Avg. Order Value",
		value: "$124.32",
		subtitle: "vs $119.88 last month",
		change: "+3.7%",
		trend: "up" as const,
		icon: "ph--trend-up",
		color: "text-success",
	},
	{
		label: "Conversion Rate",
		value: "3.24%",
		subtitle: "vs 4.04% last month",
		change: "-0.8pp",
		trend: "down" as const,
		icon: "ph--percent",
		color: "text-destructive",
	},
];

export type OrderStatus = "delivered" | "shipped" | "processing" | "cancelled";

export const recentOrders = [
	{ id: "#ORD-0241", customer: "Sarah Johnson", email: "sarah@example.com", product: "Wireless Headphones", amount: 89.99, status: "delivered" as const, date: "2 min ago" },
	{ id: "#ORD-0240", customer: "Mike Chen", email: "mike@example.com", product: "Leather Backpack", amount: 149.99, status: "shipped" as const, date: "15 min ago" },
	{ id: "#ORD-0239", customer: "Emma Davis", email: "emma@example.com", product: "Running Shoes", amount: 129.99, status: "processing" as const, date: "1 hour ago" },
	{ id: "#ORD-0238", customer: "James Wilson", email: "james@example.com", product: "Smart Watch", amount: 249.99, status: "delivered" as const, date: "2 hours ago" },
	{ id: "#ORD-0237", customer: "Lisa Brown", email: "lisa@example.com", product: "Yoga Mat", amount: 39.99, status: "cancelled" as const, date: "3 hours ago" },
	{ id: "#ORD-0236", customer: "David Lee", email: "david@example.com", product: "Coffee Maker", amount: 79.99, status: "processing" as const, date: "4 hours ago" },
];

export const topProducts = [
	{ name: "Wireless Headphones", sold: 234, revenue: "$20,766", growth: "+18%" },
	{ name: "Leather Backpack", sold: 187, revenue: "$27,983", growth: "+12%" },
	{ name: "Running Shoes", sold: 156, revenue: "$20,264", growth: "+24%" },
	{ name: "Smart Watch", sold: 98, revenue: "$24,499", growth: "+8%" },
	{ name: "Yoga Mat", sold: 87, revenue: "$3,479", growth: "+32%" },
];

export const channels = [
	{ name: "Direct", percentage: 35, color: "bg-primary" },
	{ name: "Organic Search", percentage: 28, color: "bg-accent" },
	{ name: "Social Media", percentage: 20, color: "bg-success" },
	{ name: "Email", percentage: 12, color: "bg-warning" },
	{ name: "Referral", percentage: 5, color: "bg-info" },
];
