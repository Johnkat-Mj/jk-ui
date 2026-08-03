"use client";

import { Children, isValidElement, useMemo, useRef } from "react";
import type {
	Key,
	ListBoxProps,
	SelectProps as SelectPrimitiveProps,
} from "react-aria-components";
import {
	Autocomplete,
	ListBox,
	Select as SelectPrimitive,
	SelectValue,
	useFilter,
} from "react-aria-components";
import { cx } from "@/lib/utils";
import {
	DropdownDescription,
	DropdownItem,
	type DropdownItemProps,
	DropdownLabel,
	DropdownSection,
	DropdownSeparator,
} from "./dropdown";
import { FieldButton } from "./field-button";
import { PopoverContent } from "./popover";
import { SearchField, SearchInput } from "./search-field";
import { Tag, TagGroup, TagList } from "./tag-group";
import { fieldStyles } from "./text-field";

type MultiSelectOption = {
	id: string | number;
	name: string;
};

interface MultiSelectProps<T extends MultiSelectOption>
	extends Omit<
		SelectPrimitiveProps<T, "multiple">,
		| "children"
		| "selectionMode"
		| "selectedKey"
		| "defaultSelectedKey"
		| "onSelectionChange"
	> {
	children?: React.ReactNode;
	selectedKeys?: "all" | Iterable<Key>;
	defaultSelectedKeys?: "all" | Iterable<Key>;
	onSelectionChange?: (keys: "all" | Set<Key>) => void;
	placeholder?: string;
	searchPlaceholder?: string;
	searchValue?: string;
	onSearchChange?: (value: string) => void;
}

interface MultiSelectContentProps<T extends MultiSelectOption>
	extends Omit<ListBoxProps<T>, "layout" | "orientation"> {
	items: Iterable<T>;
}

const contentDisplayName = "MultiSelectContent";

const MultiSelectContent = <T extends MultiSelectOption>(
	_props: MultiSelectContentProps<T>,
) => null;
MultiSelectContent.displayName = contentDisplayName;

const MultiSelectPrimitive = SelectPrimitive as React.ComponentType<
	SelectPrimitiveProps<MultiSelectOption, "multiple"> & {
		selectedKeys?: "all" | Iterable<Key>;
		defaultSelectedKeys?: "all" | Iterable<Key>;
		onSelectionChange?: (keys: "all" | Set<Key>) => void;
	}
>;

const MultiSelect = <T extends MultiSelectOption>({
	children,
	className,
	placeholder = "No selected items",
	searchPlaceholder = "Search options",
	searchValue,
	onSearchChange,
	...props
}: MultiSelectProps<T>) => {
	const triggerRef = useRef<HTMLDivElement | null>(null);
	const { contains } = useFilter({ sensitivity: "base" });

	const { before, after, list } = useMemo(() => {
		const childArray = Children.toArray(children);
		const contentIndex = childArray.findIndex(
			(child) =>
				isValidElement(child) &&
				(child.type as typeof MultiSelectContent)?.displayName ===
				contentDisplayName,
		);

		if (contentIndex === -1) {
			return {
				before: childArray,
				after: [],
				list: null as MultiSelectContentProps<T> | null,
			};
		}

		const element = childArray[contentIndex] as React.ReactElement<
			MultiSelectContentProps<T>
		>;

		return {
			before: childArray.slice(0, contentIndex),
			after: childArray.slice(contentIndex + 1),
			list: element.props,
		};
	}, [children]);

	const {
		className: listClassName,
		items,
		children: listChildren,
		...listProps
	} = list ?? {};

	return (
		<MultiSelectPrimitive
			data-slot="control"
			selectionMode="multiple"
			className={cx(fieldStyles(), className)}
			{...(props as React.ComponentProps<typeof MultiSelectPrimitive>)}
		>
			{before}
			{list ? (
				<>
					<div
						data-slot="control"
						ref={triggerRef}
						className={cx(
							"group/multi-select flex min-h-10 w-full items-start gap-2 rounded-ui border border-input bg-background p-1",
							"outline-hidden transition duration-200",
							"in-focus-visible:ring-2 in-focus-visible:ring-ring in-invalid:border-destructive in-disabled:opacity-50",
						)}
					>
						<SelectValue<T> className="min-w-0 flex-1 py-0.5">
							{({ selectedItems, state }) => (
								<TagGroup
									aria-label="Selected items"
									selectionMode="multiple"
									onRemove={(keys) => {
										const selectedKeys = new Set(
											selectedItems
												.filter((item): item is T => item !== null)
												.map((item) => item.id),
										);

										keys.forEach((key) => {
											selectedKeys.delete(key);
										});
										state.selectionManager.setSelectedKeys(selectedKeys);
									}}
								>
									<TagList
										items={selectedItems.filter(
											(item): item is T => item !== null,
										)}
										renderEmptyState={() => (
											<span className="block px-2 py-0.5 text-muted-foreground text-sm/6">
												{placeholder}
											</span>
										)}
									>
										{(item) => <Tag className="rounded-md">{item.name}</Tag>}
									</TagList>
								</TagGroup>
							)}
						</SelectValue>
						<FieldButton size="sm" variant="outline" className="mt-0.5 shrink-0 ">
							<svg xmlns="http://www.w3.org/2000/svg" aria-hidden className="size-3.5" viewBox="0 0 256 256"><rect width={256} height={256} fill="none" /><line x1={40} y1={128} x2={216} y2={128} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} /><line x1={128} y1={40} x2={128} y2={216} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} /></svg>

						</FieldButton>
					</div>
					<PopoverContent
						triggerRef={triggerRef}
						placement="bottom"
						className={cx(
							"min-w-(--trigger-width) overflow-hidden p-0",
							"*:data-[slot=popover-inner]:flex *:data-[slot=popover-inner]:max-h-96 *:data-[slot=popover-inner]:flex-col",
						)}
					>
						<Autocomplete filter={contains}>
							<SearchField
								autoFocus
								className="rounded-none p-1"
								value={searchValue}
								onChange={onSearchChange}
							>
								<SearchInput
									groupClass="border-0 shadow-none bg-transparent"
									placeholder={searchPlaceholder}
								/>
							</SearchField>
							<ListBox
								layout="stack"
								orientation="vertical"
								className={cx(
									"grid min-h-0 w-full flex-1 grid-cols-[auto_1fr] gap-y-1 overflow-y-auto border-t border-input p-1 outline-hidden",
									"*:data-[slot=section]:col-span-full *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
									listClassName,
								)}
								items={items}
								{...listProps}
							>
								{listChildren}
							</ListBox>
						</Autocomplete>
					</PopoverContent>
				</>
			) : null}
			{after}
		</MultiSelectPrimitive>
	);
};

const MultiSelectItem = (props: DropdownItemProps) => (
	<DropdownItem {...props} />
);
const MultiSelectSection = DropdownSection;
const MultiSelectSeparator = DropdownSeparator;
const MultiSelectLabel = DropdownLabel;
const MultiSelectDescription = DropdownDescription;

export type { MultiSelectProps, MultiSelectContentProps };
export {
	MultiSelect,
	MultiSelectContent,
	MultiSelectDescription,
	MultiSelectItem,
	MultiSelectLabel,
	MultiSelectSection,
	MultiSelectSeparator,
};
