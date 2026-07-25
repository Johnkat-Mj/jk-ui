import { channels } from "../data/dashboard-data";

export const SalesChannels = () => {
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-semibold text-foreground">Sales by Channel</h3>
			</div>
			<div className="space-y-4">
				{channels.map((item) => (
					<div key={item.name}>
						<div className="flex justify-between text-xs mb-1">
							<span className="text-foreground">{item.name}</span>
							<span className="text-muted-foreground">{item.percentage}%</span>
						</div>
						<div className="h-1.5 rounded-full bg-muted">
							<div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
