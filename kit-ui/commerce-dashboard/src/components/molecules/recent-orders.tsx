import { Badge } from "../jk/badge";
import { Button } from "../jk/button";
import { recentOrders, type OrderStatus } from "../data/dashboard-data";

const statusIntent: Record<
	OrderStatus,
	"success" | "info" | "warning" | "destructive"
> = {
	delivered: "success",
	shipped: "info",
	processing: "warning",
	cancelled: "destructive",
};

export const RecentOrders = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-border bg-card">
			<div className="border-b border-border p-4">
				<div className="flex items-center justify-between">
					<div>
						<h3 className="text-sm font-semibold text-foreground">
							Recent orders
						</h3>
						<p className="mt-0.5 text-xs text-muted-foreground">
							Latest activity across your store
						</p>
					</div>
					<Button variant="ghost" size="xs">
						View all
						<span
							aria-hidden="true"
							className="iconify ph--arrow-right size-3.5 ml-1"
						/>
					</Button>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-border bg-muted/35">
							<th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
								Order
							</th>
							<th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
								Customer
							</th>
							<th className="hidden px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
								Product
							</th>
							<th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
								Amount
							</th>
							<th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
								Status
							</th>
							<th className="w-10 px-2 py-3">
								<span className="sr-only">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-border">
						{recentOrders.map((order) => (
							<tr
								key={order.id}
								className="transition-colors hover:bg-muted/30"
							>
								<td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-medium text-foreground">
									{order.id}
									<span className="mt-0.5 block font-sans text-[10px] font-normal text-muted-foreground">
										{order.date}
									</span>
								</td>
								<td className="px-4 py-3">
									<div>
										<div className="text-foreground">{order.customer}</div>
										<div className="text-xs text-muted-foreground">
											{order.email}
										</div>
									</div>
								</td>
								<td className="hidden px-4 py-3 text-foreground md:table-cell">
									{order.product}
								</td>
								<td className="whitespace-nowrap px-4 py-3 font-medium text-foreground">
									${order.amount.toFixed(2)}
								</td>
								<td className="px-4 py-3">
									<Badge
										variant="soft"
										intent={statusIntent[order.status]}
										size="sm"
										className="inline-flex items-center gap-x-1 font-medium capitalize"
									>
										<span className="size-2 rounded-full bg-current" />
										{order.status}
									</Badge>
								</td>
								<td className="px-2 py-3">
									<Button
										variant="ghost"
										intent="gray"
										size="none"
										iconOnly
										className="size-8"
										aria-label={`Actions for ${order.id}`}
									>
										<span
											aria-hidden="true"
											className="iconify ph--dots-three-vertical size-4"
										/>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
