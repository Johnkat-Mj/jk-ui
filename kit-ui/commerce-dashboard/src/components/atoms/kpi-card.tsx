import { Card } from "../jk/card";

export const KpiCard = ({
	label,
	value,
	subtitle,
	change,
	trend,
	icon,
}: {
	label: string;
	value: string;
	subtitle?: string;
	change: string;
	trend: "up" | "down";
	icon: string;
}) => {
	return (
		<Card className="p-4 sm:p-5">
			<div className="flex items-start justify-between gap-3">
				<div>
					<span className="text-xs font-medium text-muted-foreground">
						{label}
					</span>
					<p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
						{value}
					</p>
				</div>
				<div
					className={`grid size-9 place-items-center rounded-lg ${trend === "up" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}
				>
					<span aria-hidden="true" className={`iconify ${icon} size-4.5`} />
				</div>
			</div>
			<div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
				<span
					className={`inline-flex items-center gap-0.5 text-xs font-medium ${trend === "up" ? "text-success" : "text-destructive"}`}
				>
					<span
						aria-hidden="true"
						className={`iconify ${trend === "up" ? "ph--trend-up" : "ph--trend-down"} size-3.5`}
					/>
					{change}
				</span>
				{subtitle && (
					<span className="truncate text-[11px] text-muted-foreground">
						{subtitle}
					</span>
				)}
			</div>
		</Card>
	);
};
