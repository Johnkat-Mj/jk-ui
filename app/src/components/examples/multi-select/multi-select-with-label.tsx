"use client";

import { Description, Label } from "@/components/jk/input";
import {
	MultiSelect,
	MultiSelectContent,
	MultiSelectDescription,
	MultiSelectItem,
	MultiSelectLabel,
} from "@/components/jk/multi-select";

const teammates = [
	{ id: "ak", name: "Amina Kabasele", role: "Product" },
	{ id: "jm", name: "Jonas Mbala", role: "Engineering" },
	{ id: "sn", name: "Sarah Ngoy", role: "Design" },
	{ id: "mp", name: "Mika Penda", role: "Support" },
];

export const MultiSelectWithLabel = () => {
	return (
		<MultiSelect
			aria-label="Project members"
			className="w-full max-w-sm"
			placeholder="Assign teammates"
			searchPlaceholder="Search teammates"
		>
			<Label>Project members</Label>
			<Description>Choose everyone who should receive updates.</Description>
			<MultiSelectContent items={teammates}>
				{(item) => (
					<MultiSelectItem id={item.id} textValue={item.name}>
						<MultiSelectLabel>{item.name}</MultiSelectLabel>
						<MultiSelectDescription>{item.role}</MultiSelectDescription>
					</MultiSelectItem>
				)}
			</MultiSelectContent>
		</MultiSelect>
	);
};
