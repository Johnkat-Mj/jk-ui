import type {
	ListBoxProps,
	PopoverProps,
	SelectProps as SelectPrimitiveProps,
} from "react-aria-components";
import {
	Button,
	ListBox,
	Select as SelectPrimitive,
	SelectValue,
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
import { inputGroupVariants, type InputSize } from "./input";
import { PopoverContent } from "./popover";
import { tv } from "tailwind-variants";

interface SelectProps<
	T extends object,
	M extends "single" | "multiple" = "single",
> extends SelectPrimitiveProps<T, M> {
	items?: Iterable<T, M>;
}

const Select = <T extends object, M extends "single" | "multiple" = "single">({
	className,
	...props
}: SelectProps<T, M>) => {
	return (
		<SelectPrimitive
			data-slot="control"
			className={cx("group/select", className)}
			{...props}
		/>
	);
};

interface SelectListProps<T extends object>
	extends Omit<ListBoxProps<T>, "layout" | "orientation"> {
	items?: Iterable<T>;
	popover?: Omit<PopoverProps, "children">;
}

export const selectGroupVariants = inputGroupVariants;

const SelectContent = <T extends object>({
	items,
	className,
	popover,
	...props
}: SelectListProps<T>) => {
	return (
		<PopoverContent
			placement={popover?.placement ?? "bottom"}
			className={cx(
				"min-w-(--trigger-width) scroll-py-1 overflow-y-auto overscroll-contain [--popover-padding:--spacing(1)] [--popover-radius:var(--radius-ui)]",
				popover?.className,
			)}
			{...popover}
		>
			<ListBox
				layout="stack"
				orientation="vertical"
				className={cx(
					"grid max-h-96 w-full grid-cols-[auto_1fr] flex-col",
					"gap-y-1 overflow-y-auto outline-hidden *:[[role='group']+[role=group]]:mt-4",
					"*:[[role='group']+[role=separator]]:mt-1",
					className,
				)}
				items={items}
				{...props}
			/>
		</PopoverContent>
	);
};

interface SelectTriggerProps extends React.ComponentProps<typeof Button> {
	prefix?: React.ReactNode;
	className?: string;
	size?: InputSize;
	border?: boolean;
	bg?: boolean;
	radius?: "none" | "default";
	variant?: "styled" | "unstyled";
}

export const selectTriggerVariants = tv({
	base: [],
	variants: {
		size: {
			none: "",
			sm: "ui-form-input-sm",
			md: "ui-form-input-md",
			lg: "ui-form-input-lg",
		},
		border: {
			true: "border border-input",
			false: "",
		},
		bg: {
			true: "bg-background",
			false: "",
		},
		radius: {
			none: "",
			default: "rounded-ui",
		},
		variant: {
			styled: [
				"ui-input-select-trigger-base",
				"group/select-trigger cursor-default",
				"gap-x-2",
				"text-start text-foreground outline-hidden transition duration-200",
				"sm:text-sm/6 sm:*:text-sm/6 dark:shadow-none",
				"ui-form-select-trigger-access",
				"ui-form-select-trigger-invalid",
				"ui-form-select-trigger-invalid-outline",
				"ui-form-select-triger-invalid-base",
				"ui-form-ring-base",
				"ui-form-outline",
				"ui-form-select-trigger-ring",
			],
			unstyled: "",
		},
	},
	defaultVariants: {
		size: "md",
		border: true,
		bg: true,
		radius: "default",
		variant: "styled",
	},
	compoundVariants: [
		{
			class: "",
		},
	],
});

const SelectTrigger = ({
	children,
	className,
	variant = "styled",
	size = "md",
	border = true,
	bg = true,
	radius = "default",
	...props
}: SelectTriggerProps) => {
	return (
		<span data-slot="control" className="relative block w-full">
			<Button
				className={selectTriggerVariants({
					size,
					border,
					bg,
					radius,
					className,
					variant,
				})}
			>
				{(values) => (
					<>
						{props.prefix && (
							<span className="text-muted-foreground">{props.prefix}</span>
						)}
						{typeof children === "function" ? children(values) : children}

						{!children ? (
							<>
								<SelectValue
									data-slot="select-value"
									className={cx([
										"truncate text-start data-placeholder:text-muted-foreground sm:text-sm/6 **:[[slot=description]]:hidden",
										"has-data-[slot=avatar]:grid has-data-[slot=avatar]:grid-cols-[1fr_auto] has-data-[slot=avatar]:items-center has-data-[slot=avatar]:gap-x-2",
										"has-data-[slot=icon]:grid has-data-[slot=icon]:grid-cols-[1fr_auto] has-data-[slot=icon]:items-center has-data-[slot=icon]:gap-x-2",
										"*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
										"*:mt-0 *:data-[slot=avatar]:[--avatar-size:--spacing(5)] sm:*:data-[slot=avatar]:[--avatar-size:--spacing(4.5)]",
									])}
								/>
								<svg
									data-slot="chevron"
									xmlns="http://www.w3.org/2000/svg"
									aria-label="caret up down"
									width={32}
									height={32}
									fill="#000000"
									viewBox="0 0 256 256"
									className="fill-fg-muted -mr-1 ml-auto size-4"
								>
									<path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" />
								</svg>
							</>
						) : null}
					</>
				)}
			</Button>
		</span>
	);
};

const SelectSection = DropdownSection;
const SelectSeparator = DropdownSeparator;
const SelectLabel = DropdownLabel;
const SelectDescription = DropdownDescription;
const SelectItem = ({ className, ...rest }: DropdownItemProps) => {
	return (
		<DropdownItem
			className={cx("[--dropdown-item-py:--spacing(1.5)]", className)}
			{...rest}
		/>
	);
};

export {
	Select,
	SelectDescription,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectSection,
	SelectTrigger,
	SelectContent,
};
export type { SelectProps, SelectTriggerProps };
