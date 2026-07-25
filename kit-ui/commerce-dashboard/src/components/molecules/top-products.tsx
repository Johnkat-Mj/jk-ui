import { Icon } from "../jk/icon";
import { topProducts } from "../data/dashboard-data";

export const TopProducts = () => {
	return (
		<div className="rounded-lg overflow-hidden border border-border">
			<div className="p-4 border-b border-border">
				<h3 className="text-sm font-semibold text-foreground">Top Products</h3>
			</div>
			<div className="divide-y divide-border">
				{topProducts.map((product) => (
					<div key={product.name} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30">
						<div className="size-8 rounded-lg bg-muted/60 d-flex-place-center text-muted-foreground">
							<Icon name="ph--package" />
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-foreground truncate">{product.name}</p>
							<p className="text-xs text-muted-foreground">{product.sold} sold &middot; {product.revenue}</p>
						</div>
						<span className="text-xs font-medium text-success">{product.growth}</span>
					</div>
				))}
			</div>
		</div>
	);
};
