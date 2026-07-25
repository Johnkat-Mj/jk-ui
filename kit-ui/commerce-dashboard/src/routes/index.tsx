import { createFileRoute } from "@tanstack/react-router";
import { Card } from "#/components/jk/card";
import { Container } from "#/components/atoms/container";
import { KpiCard } from "#/components/atoms/kpi-card";
import { kpis } from "#/components/data/dashboard-data";
import { RevenueChart } from "#/components/molecules/revenue-chart";
import { SalesChannels } from "#/components/molecules/sales-channels";
import { RecentOrders } from "#/components/molecules/recent-orders";
import { TopProducts } from "#/components/molecules/top-products";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="py-6">
			<Container>
				<div className="mb-8">
					<h1 className="text-2xl font-semibold text-foreground">Commerce Dashboard</h1>
					<p className="text-sm text-muted-foreground mt-1">Track your store performance and sales metrics</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
					{kpis.map((kpi) => (
						<KpiCard key={kpi.label} {...kpi} />
					))}
				</div>

				<div className="grid lg:grid-cols-3 gap-4 mb-8">
					<Card className="lg:col-span-2">
						<RevenueChart />
					</Card>
					<Card>
						<SalesChannels />
					</Card>
				</div>

				<div className="grid lg:grid-cols-3 gap-4">
					<div className="lg:col-span-2">
						<RecentOrders />
					</div>
					<TopProducts />
				</div>
			</Container>
		</main>
	);
}
