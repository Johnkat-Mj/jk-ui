import { Badge } from "../jk/badge";
import { Button } from "../jk/button";
import { recentOrders, type OrderStatus } from "../data/dashboard-data";

const statusIntent: Record<OrderStatus, "soft-success" | "soft-info" | "soft-warning" | "soft-danger"> = {
	delivered: "soft-success",
	shipped: "soft-info",
	processing: "soft-warning",
	cancelled: "soft-danger",
};

export const RecentOrders = () => {
	return (
		<div className="rounded-lg overflow-hidden border border-border">
			<div className="p-4 border-b border-border">
				<div className="flex items-center justify-between">
					<h3 className="text-sm font-semibold text-foreground">Recent Orders</h3>
					<Button variant="ghost" size="xs">
						View all
						<span aria-hidden="true" className="iconify ph--arrow-right size-3.5 ml-1" />
					</Button>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-border bg-muted/50">
							<th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Order</th>
							<th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Customer</th>
							<th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Product</th>
							<th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Amount</th>
							<th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-border">
						{recentOrders.map((order) => (
							<tr key={order.id} className="hover:bg-muted/30">
								<td className="px-4 py-3 font-medium text-foreground">{order.id}</td>
								<td className="px-4 py-3">
									<div>
										<div className="text-foreground">{order.customer}</div>
										<div className="text-xs text-muted-foreground">{order.email}</div>
									</div>
								</td>
								<td className="px-4 py-3 text-foreground">{order.product}</td>
								<td className="px-4 py-3 font-medium text-foreground">${order.amount.toFixed(2)}</td>
								<td className="px-4 py-3">
									<Badge variant="soft" intent={statusIntent[order.status]} size="sm" className="inline-flex items-center gap-x-1 font-medium capitalize">
										<span className="size-2 rounded-full bg-current" />
										{order.status}
									</Badge>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
