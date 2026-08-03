import { channels } from "../data/dashboard-data";

export const SalesChannels = () => {
	return (
		<div className="p-4 sm:p-5">
			<div className="mb-5 flex items-start justify-between">
				<div>
					<h3 className="text-sm font-semibold text-foreground">Acquisition</h3>
					<p className="mt-0.5 text-xs text-muted-foreground">
						Revenue by channel
					</p>
				</div>
				<span className="text-xs font-medium text-success">+8.4%</span>
			</div>
			<div className="space-y-4.5">
				{channels.map((item) => (
					<div key={item.name}>
						<div className="flex justify-between text-xs mb-1">
							<span className="text-foreground">{item.name}</span>
							<span className="text-muted-foreground">{item.percentage}%</span>
						</div>
						<div className="h-2 rounded-full bg-muted">
							<div
								className={`h-full rounded-full ${item.color}`}
								style={{ width: `${item.percentage}%` }}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
