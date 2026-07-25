"use client"

import { AreaChart } from "../jk/area-chart"
import { monthlyRevenue, formatCurrency } from "../data/revenue"

const chartConfig = {
	revenue: {
		label: "This Year",
		color: "chart-1",
	},
	previousYear: {
		label: "Last Year",
		color: "chart-3",
	},
}

export const RevenueChart = () => {
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-semibold text-foreground">Revenue Overview</h3>
				<div className="flex items-center gap-3 text-xs text-muted-foreground">
					<span className="flex items-center gap-1">
						<span className="size-2.5 rounded-full bg-primary" />
						This year
					</span>
					<span className="flex items-center gap-1">
						<span className="size-2.5 rounded-full bg-success" />
						Last year
					</span>
				</div>
			</div>
			<AreaChart
				data={monthlyRevenue}
				dataKey="month"
				config={chartConfig}
				fillType="gradient"
				containerHeight={280}
				valueFormatter={formatCurrency}
				legend={false}
				intervalType="preserveStartEnd"
				xAxisProps={{
					tickLine: false,
					axisLine: false,
					interval: "preserveStartEnd",
				}}
				yAxisProps={{
					tickLine: false,
					axisLine: false,
					domain: [0, 80000],
					tickFormatter: formatCurrency,
				}}
				tooltipProps={{
					indicator: "dot",
				}}
			/>
		</div>
	);
};
