/**
 * Shared UI Variant Types
 * 
 * This module provides shared type definitions and utilities for components
 * that use the ui-variants system (Badge, Alert, etc.)
 */

/**
 * Common variant-intent mapping used across UI components
 * This ensures consistency between Badge, Alert, and other UI components
 */
export type UiVariantIntentMap = {
    none: "none"
    default: "none"
    solid:
    | "solid-primary"
    | "solid-secondary"
    | "solid-success"
    | "solid-danger"
    | "solid-warning"
    | "solid-info"
    | "solid-gray"
    | "solid-neutral"
    | "none"
    soft:
    | "soft-primary"
    | "soft-secondary"
    | "soft-accent"
    | "soft-success"
    | "soft-danger"
    | "soft-warning"
    | "soft-info"
    | "soft-gray"
    | "soft-neutral"
    | "none"
    subtle:
    | "subtle-primary"
    | "subtle-secondary"
    | "subtle-success"
    | "subtle-danger"
    | "subtle-accent"
    | "subtle-warning"
    | "subtle-info"
    | "subtle-gray"
    | "subtle-neutral"
    | "none"
    outline:
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-gray"
    | "outline-neutral"
    | "none"
}

/**
 * Extract variant keys from the variant-intent map
 */
export type UiComponentVariant = keyof UiVariantIntentMap

/**
 * Get valid intents for a specific variant
 */
export type UiComponentIntent<V extends UiComponentVariant> = UiVariantIntentMap[V]

/**
 * Default intents for each variant
 * Used when no intent is explicitly provided
 */
export const defaultUiComponentIntents: { [K in UiComponentVariant]: UiComponentIntent<K> } = {
    none: "none",
    default: "none",
    solid: "solid-gray",
    soft: "soft-gray",
    subtle: "subtle-gray",
    outline: "outline-gray",
}

/**
 * Helper function to resolve intent with default fallback
 */
export function resolveIntent<V extends UiComponentVariant>(
    variant: V,
    intent?: UiComponentIntent<V>
): UiComponentIntent<V> {
    return intent ?? (defaultUiComponentIntents[variant] as UiComponentIntent<V>)
}

