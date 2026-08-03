import { Container } from "#/components/atoms/container";
import { kpis } from "#/components/data/dashboard-data";
import { Button } from "#/components/jk/button";
import { Card } from "#/components/jk/card";
import { RecentOrders } from "#/components/molecules/recent-orders";
import { RevenueChart } from "#/components/molecules/revenue-chart";
import { SalesChannels } from "#/components/molecules/sales-channels";
import { TopProducts } from "#/components/molecules/top-products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const pulse = [
	{
		label: "Awaiting fulfillment",
		value: "24",
		meta: "6 priority orders",
		icon: "ph--package",
		tone: "bg-warning/10 text-warning",
	},
	{
		label: "Inventory alerts",
		value: "8",
		meta: "3 critical items",
		icon: "ph--warehouse",
		tone: "bg-destructive/10 text-destructive",
	},
	{
		label: "Returns requested",
		value: "5",
		meta: "$428 pending",
		icon: "ph--arrow-u-down-left",
		tone: "bg-primary/10 text-primary",
	},
];

const miniBars = [
	{ id: "a", height: 35 },
	{ id: "b", height: 52 },
	{ id: "c", height: 43 },
	{ id: "d", height: 68 },
	{ id: "e", height: 58 },
	{ id: "f", height: 82 },
	{ id: "g", height: 74 },
];

function MetricStrip() {
	return (
		<section className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
			<div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
				{kpis.map((metric, index) => (
					<div
						key={metric.label}
						className={`p-4 sm:p-5 ${index === 2 ? "sm:border-l-0 xl:border-l" : ""} ${index > 1 ? "sm:border-t xl:border-t-0" : ""}`}
					>
						<div className="flex items-center justify-between gap-2">
							<p className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
								{metric.label}
							</p>
							<span
								className={`text-xs font-semibold ${metric.trend === "up" ? "text-success" : "text-destructive"}`}
							>
								{metric.change}
							</span>
						</div>
						<div className="mt-2 flex items-end justify-between gap-3">
							<p className="text-2xl font-semibold tracking-tight text-foreground">
								{metric.value}
							</p>
							<div className="flex h-7 items-end gap-1" aria-hidden="true">
								{miniBars.map((bar) => (
									<span
										key={`${metric.label}-${bar.id}`}
										className={`w-1 rounded-full ${metric.trend === "up" ? "bg-primary/45" : "bg-destructive/40"}`}
										style={{ height: `${bar.height}%` }}
									/>
								))}
							</div>
						</div>
						<p className="mt-1.5 text-[11px] text-muted-foreground">
							{metric.subtitle}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

function App() {
	return (
		<main className="min-h-[calc(100vh-3.5rem)] bg-gray-50/80 py-5 dark:bg-background sm:py-6">
			<Container className="max-w-[90rem]">
				<header className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
					<div>
						<div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
							<span className="size-1.5 rounded-full bg-success" />
							Northstar Store
						</div>
						<h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground">
							Commerce command center
						</h1>
					</div>
					<div className="flex flex-wrap items-center gap-2">
						<div className="flex items-center rounded-lg border border-border bg-card p-1">
							{["Today", "7 days", "30 days"].map((period, index) => (
								<button
									key={period}
									type="button"
									className={`rounded-md px-3 py-1.5 text-xs font-medium ${index === 2 ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
								>
									{period}
								</button>
							))}
						</div>
						<Button variant="outline" intent="gray" size="sm">
							<span
								aria-hidden="true"
								className="iconify ph--calendar-blank size-4"
							/>
							Jul 1 – Jul 29
						</Button>
						<Button variant="solid" intent="primary" size="sm">
							<span
								aria-hidden="true"
								className="iconify ph--download-simple size-4"
							/>
							Export report
						</Button>
					</div>
				</header>

				<MetricStrip />

				<section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,2fr)_22rem]">
					<Card className="overflow-hidden p-0">
						<RevenueChart />
					</Card>
					<div className="space-y-5">
						<Card className="overflow-hidden p-0">
							<div className="flex items-center justify-between border-b border-border px-4 py-3.5">
								<div>
									<h2 className="text-sm font-semibold text-foreground">
										Daily pulse
									</h2>
									<p className="text-[11px] text-muted-foreground">
										Requires your attention
									</p>
								</div>
								<span className="rounded-md bg-destructive/10 px-2 py-1 text-[10px] font-semibold text-destructive">
									37 open
								</span>
							</div>
							<div className="divide-y divide-border">
								{pulse.map((item) => (
									<button
										key={item.label}
										type="button"
										className="flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-muted/40"
									>
										<span
											className={`grid size-8 place-items-center rounded-lg ${item.tone}`}
										>
											<span
												aria-hidden="true"
												className={`iconify ${item.icon} size-4`}
											/>
										</span>
										<span className="min-w-0 flex-1">
											<span className="block text-xs font-medium text-foreground">
												{item.label}
											</span>
											<span className="text-[10px] text-muted-foreground">
												{item.meta}
											</span>
										</span>
										<span className="text-lg font-semibold text-foreground">
											{item.value}
										</span>
									</button>
								))}
							</div>
						</Card>
						<Card className="overflow-hidden p-0">
							<SalesChannels />
						</Card>
					</div>
				</section>

				<section className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,2fr)_22rem]">
					<RecentOrders />
					<TopProducts />
				</section>
			</Container>
		</main>
	);
}
