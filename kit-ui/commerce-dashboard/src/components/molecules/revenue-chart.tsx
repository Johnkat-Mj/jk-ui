"use client";

import { AreaChart } from "../jk/area-chart";
import { monthlyRevenue, formatCurrency } from "../data/revenue";

const chartConfig = {
	revenue: {
		label: "This Year",
		color: "chart-1",
	},
	previousYear: {
		label: "Last Year",
		color: "chart-3",
	},
};

export const RevenueChart = () => {
	return (
		<div className="p-4 sm:p-5">
			<div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
				<div>
					<h3 className="text-sm font-semibold text-foreground">
						Revenue overview
					</h3>
					<div className="mt-2 flex items-baseline gap-2">
						<span className="text-2xl font-semibold tracking-tight text-foreground">
							$48,532
						</span>
						<span className="text-xs font-medium text-success">+12.5%</span>
					</div>
				</div>
				<div className="flex items-center gap-1 rounded-lg bg-muted p-1 text-xs">
					{["7D", "30D", "90D", "12M"].map((period, index) => (
						<button
							key={period}
							type="button"
							className={`rounded-md px-2 py-1 ${index === 1 ? "bg-card font-medium text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
						>
							{period}
						</button>
					))}
				</div>
			</div>
			<div className="mb-3 flex items-center gap-3 text-[11px] text-muted-foreground">
				<span className="flex items-center gap-1">
					<span className="size-2.5 rounded-full bg-primary" />
					This year
				</span>
				<span className="flex items-center gap-1">
					<span className="size-2.5 rounded-full bg-success" />
					Last year
				</span>
			</div>
			<AreaChart
				data={monthlyRevenue}
				dataKey="month"
				config={chartConfig}
				fillType="gradient"
				containerHeight={400}
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
