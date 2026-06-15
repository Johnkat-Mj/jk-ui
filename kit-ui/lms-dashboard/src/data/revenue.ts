export interface RevenueData {
	month: string;
	revenue: number;
}

export const monthlyRevenueData: RevenueData[] = [
	{ month: "Jan", revenue: 1400 },
	{ month: "Feb", revenue: 1800 },
	{ month: "Mar", revenue: 2300 },
	{ month: "Apr", revenue: 3000 },
	{ month: "May", revenue: 3800 },
	{ month: "Jun", revenue: 4900 },
	{ month: "Jul", revenue: 5600 },
	{ month: "Aug", revenue: 6400 },
	{ month: "Sep", revenue: 7000 },
	{ month: "Oct", revenue: 7500 },
	{ month: "Nov", revenue: 8200 },
	{ month: "Dec", revenue: 9200 },
];

export const revenueYAxisTicks = [0, 2000, 4000, 6000, 8000, 10000];

export const formatRevenue = (value: number): string => {
	if (value >= 1000) {
		return `${(value / 1000).toFixed(0)}k`;
	}
	return value.toString();
};
