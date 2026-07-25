import { Card } from "../jk/card";

export const KpiCard = ({
	label,
	stat,
	subtitle,
	change,
	trend,
	icon,
}: {
	label: string;
	stat: string;
	subtitle?: string;
	change: string;
	trend: "up" | "down";
	icon: string;
}) => {
	return (
		<Card>
			<div className="flex items-center justify-between mb-1">
				<span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</span>
				<span aria-hidden="true" className={`iconify ${icon} size-5 ${trend === "up" ? "text-primary" : "text-destructive"}`} />
			</div>
			<span className="text-2xl font-semibold text-foreground">{stat}</span>
			<div className="flex items-center gap-2 mt-1.5">
				<span className={`inline-flex items-center gap-0.5 text-xs font-medium ${trend === "up" ? "text-success" : "text-destructive"}`}>
					<span aria-hidden="true" className={`iconify ${trend === "up" ? "ph--trend-up" : "ph--trend-down"} size-3.5`} />
					{change}
				</span>
				{subtitle && (
					<span className="text-xs text-muted-foreground">{subtitle}</span>
				)}
			</div>
		</Card>
	);
};
