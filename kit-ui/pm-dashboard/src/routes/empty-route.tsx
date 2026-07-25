import { Container } from "#/components/atoms/container";
import { Card } from "#/components/jk/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/empty-route")({
	component: EmptyRoute,
});

function EmptyRoute() {
	return (
		<main className="page-wrap pb-8 pt-6">
			<Container>
				<Card className="p-12 flex flex-col items-center justify-center text-center">
					<span
						aria-hidden="true"
						className="iconify ph--wrench size-16 text-muted-foreground/30 mb-4"
					/>
					<h2 className="text-lg font-semibold text-foreground mb-1">
						Coming Soon
					</h2>
					<p className="text-sm text-muted-foreground max-w-sm">
						This section is under development. Check back soon for updates.
					</p>
				</Card>
			</Container>
		</main>
	);
}
