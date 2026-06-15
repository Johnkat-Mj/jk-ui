import { Bar } from "recharts";
import { BarChart } from "../jk/bar-chart";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../jk/select";
import {
	formatRevenue,
	monthlyRevenueData,
	revenueYAxisTicks,
} from "@/data/revenue";

export const RevenueChart = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<span className="font-semibold text-fg-title">Revenue</span>
				<div className="">
					<Select defaultValue={"monthly"}>
						<SelectTrigger size="sm" className="w-max" />
						<SelectContent>
							<SelectItem id={"daily"} textValue="Daily">
								Daily
							</SelectItem>
							<SelectItem id={"weekly"} textValue="Weekly">
								Weekly
							</SelectItem>
							<SelectItem id={"monthly"} textValue="Monthly">
								Monthly
							</SelectItem>
							<SelectItem id={"yearly"} textValue="Yearly">
								Yearly
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="mt-4 ">
				<BarChart
					data={monthlyRevenueData}
					dataKey="month"
					config={{
						revenue: {
							label: "Revenue",
							color: "chart-1",
						},
					}}
					containerHeight={260}
					barSize={16}
					valueFormatter={formatRevenue}
					yAxisProps={{
						ticks: revenueYAxisTicks,
						domain: [0, 10000],
					}}
					xAxisProps={{
						tickLine: false,
						axisLine: false,
						interval: 0,
						type: "category",
						scale: "point",
						padding: { left: 20, right: 20 },
						tick: { transform: "translate(0, 6)" },
					}}
					legend={false}
					tooltipProps={{
						cursor: { fill: "var(--color-bg-muted)" },
					}}
				>
					<defs>
						<linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="var(--color-bg-muted)" stopOpacity={1} />
							<stop offset="60%" stopColor="var(--color-bg-muted)" stopOpacity={0.5} />
							<stop offset="100%" stopColor="var(--color-bg-muted)" stopOpacity={0.8} />
						</linearGradient>
						<linearGradient id="revenueGradientHover" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="var(--color-primary)" stopOpacity={1} />
							<stop offset="60%" stopColor="var(--color-primary)" stopOpacity={0.4} />
							<stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.2} />
						</linearGradient>
					</defs>
					<Bar
						dataKey="revenue"
						fill="url(#revenueGradient)"
						radius={[4, 4, 0, 0]}
						stroke="var(--chart-1)"
						strokeWidth={0}
						activeBar={{
							fill: "url(#revenueGradientHover)",
							stroke: "var(--chart-2)",
							strokeWidth: 0,
						}}
					/>
				</BarChart>
			</div>
		</>
	);
};
