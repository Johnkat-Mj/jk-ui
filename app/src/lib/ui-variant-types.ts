import type { UiIntent, UiVariant } from "@/lib/ui-variants"

export type UiComponentVariant = UiVariant | "default"
export type UiComponentIntent<V extends UiComponentVariant> =
  V extends "default" | "none" ? "none" : UiIntent

export const defaultUiComponentIntents: {
  [V in UiComponentVariant]: UiComponentIntent<V>
} = {
  none: "none",
  default: "none",
  solid: "gray",
  soft: "gray",
  subtle: "gray",
  outline: "gray",
}

export function resolveIntent<V extends UiComponentVariant>(
  variant: V,
  intent?: UiComponentIntent<V>,
): UiComponentIntent<V> {
  return intent ?? defaultUiComponentIntents[variant]
}
