import { Icon } from "../jk/icon";
import { topProducts } from "../data/dashboard-data";

export const TopProducts = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-border bg-card">
			<div className="flex items-center justify-between border-b border-border p-4">
				<div>
					<h3 className="text-sm font-semibold text-foreground">
						Top products
					</h3>
					<p className="mt-0.5 text-xs text-muted-foreground">
						Ranked by revenue
					</p>
				</div>
				<button
					type="button"
					className="text-xs font-medium text-primary hover:underline"
				>
					View report
				</button>
			</div>
			<div className="divide-y divide-border">
				{topProducts.map((product, index) => (
					<div
						key={product.name}
						className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/30"
					>
						<span className="w-4 text-center text-[11px] font-semibold text-muted-foreground">
							{index + 1}
						</span>
						<div className="d-flex-place-center size-9 rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
							<Icon name={product.icon} />
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-foreground truncate">
								{product.name}
							</p>
							<p className="text-xs text-muted-foreground">
								{product.sold} sold · {product.revenue}
							</p>
						</div>
						<div className="text-right">
							<span className="block text-xs font-medium text-success">
								{product.growth}
							</span>
							<span
								className={
									product.stock < 10
										? "text-[10px] text-destructive"
										: "text-[10px] text-muted-foreground"
								}
							>
								{product.stock} in stock
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
