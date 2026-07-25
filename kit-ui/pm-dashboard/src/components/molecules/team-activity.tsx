import { Card } from "../jk/card";
import { teamActivities } from "../data/projects";

export const TeamActivity = () => {
	return (
		<Card className="p-4">
			<h3 className="text-sm font-semibold text-foreground mb-3">
				Team Activity
			</h3>
			<div className="space-y-3">
				{teamActivities.map((activity) => (
					<div key={activity.id} className="flex items-start gap-3">
						<div className="size-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
							<span className="text-[10px] font-medium text-primary">
								{activity.user.split(" ").map((n) => n[0]).join("")}
							</span>
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm text-foreground">
								<span className="font-medium text-foreground">
									{activity.user}
								</span>{" "}
								{activity.action}{" "}
								<span className="font-medium text-foreground">
									{activity.target}
								</span>
							</p>
							<span className="text-xs text-muted-foreground">
								{activity.timestamp}
							</span>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};
