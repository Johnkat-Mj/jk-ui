export interface MonthlyRevenue {
	month: string
	revenue: number
	previousYear: number
}

export const monthlyRevenue: MonthlyRevenue[] = [
	{ month: "Jan", revenue: 28500, previousYear: 22400 },
	{ month: "Feb", revenue: 32500, previousYear: 25600 },
	{ month: "Mar", revenue: 38200, previousYear: 29100 },
	{ month: "Apr", revenue: 35100, previousYear: 31200 },
	{ month: "May", revenue: 42700, previousYear: 34500 },
	{ month: "Jun", revenue: 48900, previousYear: 37800 },
	{ month: "Jul", revenue: 51800, previousYear: 40200 },
	{ month: "Aug", revenue: 49500, previousYear: 43800 },
	{ month: "Sep", revenue: 53200, previousYear: 45100 },
	{ month: "Oct", revenue: 57400, previousYear: 46300 },
	{ month: "Nov", revenue: 62800, previousYear: 50200 },
	{ month: "Dec", revenue: 68500, previousYear: 55800 },
]

export function formatCurrency(value: number): string {
	if (value >= 1000) {
		return `$${(value / 1000).toFixed(0)}k`
	}
	return `$${value}`
}
