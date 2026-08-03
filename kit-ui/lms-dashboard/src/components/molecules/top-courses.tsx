import { Link } from "@tanstack/react-router";
import { Card } from "../jk/card";
import { Icon } from "../jk/icon";

const courses = [
	{
		id: "course-01",
		title: "Framer",
		sales_count: "342",
		sales_revenue: "3,862.00",
		logo: "/ico_framer_design.png",
		color: "bg-blue-100 dark:bg-blue-950/70",
	},
	{
		id: "course-02",
		title: "UX Design",
		sales_count: "329",
		sales_revenue: "3,752.00",
		logo: "/ico_ux_design.png",
		color: "bg-purple-100 dark:bg-purple-950/70",
	},
	{
		id: "course-03",
		title: "Webflow",
		sales_count: "123",
		sales_revenue: "1,252.00",
		logo: "/ico_webflow.png",
		color: "bg-indigo-100 dark:bg-indigo-950/70",
	},
	{
		id: "course-04",
		title: "UI Design",
		sales_count: "129",
		sales_revenue: "1,279.00",
		logo: "/ico_ui_design.png",
		color: "bg-pink-100 dark:bg-pink-950/70",
	},
	{
		id: "course-05",
		title: "Protoypes",
		sales_count: "299",
		sales_revenue: "2,542.00",
		logo: "/ico_prototype.png",
		color: "bg-fuchsia-100 dark:bg-fuchsia-950/70",
	},
	{
		id: "course-06",
		title: "Framer",
		sales_count: "342",
		sales_revenue: "3,862.00",
		logo: "/ico_framer_design.png",
		color: "bg-blue-100 dark:bg-blue-950/70",
	},
	{
		id: "course-07",
		title: "Framer",
		sales_count: "342",
		sales_revenue: "3,862.00",
		logo: "/ico_framer_design.png",
		color: "bg-blue-100 dark:bg-blue-950/70",
	},
	{
		id: "course-08",
		title: "UX Design",
		sales_count: "329",
		sales_revenue: "3,752.00",
		logo: "/ico_ux_design.png",
		color: "bg-purple-100 dark:bg-purple-950/70",
	},
	{
		id: "course-09",
		title: "Webflow",
		sales_count: "123",
		sales_revenue: "1,252.00",
		logo: "/ico_webflow.png",
		color: "bg-indigo-100 dark:bg-indigo-950/70",
	},
];

export const TopCourses = () => {
	return (
		<Card className="[--card-padding:0px] flex flex-col">
			<div className="flex items-center justify-between p-4 h-max">
				<span className="font-semibold text-foreground">Revenue</span>
				<div className="">
					<Link
						to="/"
						className="btn btn-ghost btn-ghost-gray h-8 ring ring-border-input/70 rounded-lg pl-2.5 pr-2 text-xs"
					>
						View All
						<Icon name="hugeicons--arrow-right-01" size="xs" className="ml-1" />
					</Link>
				</div>
			</div>
			<div className="flex-1 flex flex-col overflow-hidden overflow-y-auto max-h-[278px]">
				<ul className="flex flex-col divide-y divide-border-card/50">
					{courses.map((course) => (
						<li key={course.id} className="px-4 flex items-center py-2.5 gap-4">
							<div className={`flex size-9.5 p-1.5 rounded-lg ${course.color}`}>
								<img
									src={course.logo}
									alt={course.title}
									width={50}
									height={50}
									className="size-full"
								/>
							</div>
							<div className="flex items-center justify-between flex-1">
								<div className="flex flex-col flex-1">
									<span className="font-semibold text-foreground">
										{course.title}
									</span>
									<span className="text-muted-foreground text-[13px]">
										{course.sales_count} sales
									</span>
								</div>
								<span className="font-semibold text-foreground">
									${course.sales_revenue}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Card>
	);
};
