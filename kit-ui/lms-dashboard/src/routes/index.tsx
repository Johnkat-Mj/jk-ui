import { Container } from "#/components/atoms/container";
import { KpiCard } from "#/components/atoms/kpi-card";
import { Card } from "#/components/jk/card";
import { AllCourses } from "#/components/molecules/all-courses";
import { RevenueChart } from "#/components/molecules/revenue-chart";
import { TopCourses } from "#/components/molecules/top-courses";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="page-wrap pb-8 pt-6">
			<Container className={"grid sm:grid-cols-2 lg:grid-cols-4 gap-4"}>
				<KpiCard
					title={"Total Students"}
					stat={"15,799"}
					text={"12.04%"}
					type={"increase"}
				/>
				<KpiCard
					title={"Total Enrolled "}
					stat={"13,290"}
					text={"4.06% "}
					type={"decrease"}
				/>
				<KpiCard
					title={"Total Subscription"}
					stat={"11,000"}
					text={"11.07%"}
					type={"increase"}
				/>
				<KpiCard
					title={"Total Revenue"}
					stat={"$29,390"}
					text={"16.00% "}
					type={"increase"}
				/>
			</Container>
			<Container className="grid md:grid-cols-2 lg:grid-cols-7 xl:grid-cols-8 lg:*:last:col-span-3 mt-4 gap-4">
				<Card className="lg:col-span-4 xl:col-span-5">
					<RevenueChart />
				</Card>
				<TopCourses />
			</Container>
			<Container className="mt-4">
				<AllCourses />
			</Container>
		</main>
	);
}
