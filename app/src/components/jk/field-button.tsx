"use client";

import {
	Button,
	type ButtonProps,
	type ButtonVariant,
} from "@/components/jk/button";

export type FieldButtonProps<V extends ButtonVariant = "ghost"> =
	ButtonProps<V>;

export const FieldButton = <V extends ButtonVariant = "ghost">({
	variant = "ghost" as V,
	iconOnly = true,
	...props
}: FieldButtonProps<V>) => (
	<Button variant={variant} iconOnly={iconOnly} {...props} />
);
