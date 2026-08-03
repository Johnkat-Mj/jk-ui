"use client";

import {
	MultiSelect,
	MultiSelectContent,
	MultiSelectItem,
} from "@/components/jk/multi-select";

const frameworks = [
	{ id: "react", name: "React" },
	{ id: "next", name: "Next.js" },
	{ id: "tanstack", name: "TanStack Start" },
	{ id: "remix", name: "Remix" },
	{ id: "astro", name: "Astro" },
	{ id: "svelte", name: "SvelteKit" },
	{ id: "vue", name: "Vue" },
];

export const MultiSelectDemo = () => {
	return (
		<MultiSelect
			aria-label="Frameworks"
			className="w-full max-w-sm"
			defaultSelectedKeys={new Set(["react", "next"])}
			placeholder="Select frameworks"
			searchPlaceholder="Search frameworks"
		>
			<MultiSelectContent items={frameworks}>
				{(item) => (
					<MultiSelectItem id={item.id} textValue={item.name}>
						{item.name}
					</MultiSelectItem>
				)}
			</MultiSelectContent>
		</MultiSelect>
	);
};
