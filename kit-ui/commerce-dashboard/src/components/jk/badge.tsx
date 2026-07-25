"use client"

import { tv } from "tailwind-variants"
import { uiStyles, type UiVariant, type UiIntent } from "@/lib/ui-variants"
import {
    type UiComponentVariant,
    type UiComponentIntent,
    resolveIntent,
} from "@/lib/ui-variant-types"

/**
 * Badge variant configuration
 */
const badgeVariants = tv({
    base: "inline-flex items-center font-medium",
    variants: {
        size: {
            xs: "badge-xs",
            sm: "badge-sm",
            md: "badge-md",
            lg: "badge-lg",
            xl: "badge-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

/**
 * Badge-specific type aliases using shared UI variant types
 */
type BadgeVariant = UiComponentVariant
type BadgeIntent<V extends BadgeVariant> = UiComponentIntent<V>

/**
 * Badge component props
 */
interface BadgeProps<V extends BadgeVariant = "solid"> {
    variant?: V
    intent?: BadgeIntent<V>
    size?: "xs" | "sm" | "md" | "lg" | "xl"
    className?: string,
    radius?: "none" | "default"
    children: React.ReactNode
}

/**
 * Badge Component
 *
 * A versatile badge component with multiple variants, intents, and sizes.
 *
 * @example
 * ```tsx
 * <Badge variant="solid" intent="solid-primary">Primary</Badge>
 * <Badge variant="soft" intent="soft-success" size="sm">Success</Badge>
 * <Badge variant="outline" intent="outline-danger" size="lg">Danger</Badge>
 * ```
 */
export const Badge = <V extends BadgeVariant = "solid">({
    variant = "solid" as V,
    intent,
    size = "md",
    className,
    radius = "default",
    children,
}: BadgeProps<V>) => {
    // Handle default variant (bg-muted text-foreground)
    if (variant === "default") {
        const classes = badgeVariants({
            size,
            className: `bg-muted text-foreground ${radius === "default" ? "rounded-ui" : ""} ${className || ""}`,
        })
        return <span className={classes}>{children}</span>
    }

    // Handle none variant
    if (variant === "none") {
        const classes = badgeVariants({
            size,
            className: radius === "default" ? `rounded-ui ${className || ""}` : className,
        })
        return <span className={classes}>{children}</span>
    }

    // Resolve intent with default if not provided
    const resolvedIntent = resolveIntent(variant, intent)

    // Get variant classes from uiStyles
    const variantClasses = uiStyles({
        variant: variant as UiVariant,
        intent: resolvedIntent as UiIntent<UiVariant>,
    })

    // Combine all classes
    const classes = badgeVariants({
        size,
        className: `${variantClasses} ${radius === "default" ? "rounded-ui" : ""} ${className || ""}`,
    })

    return <span className={classes}>{children}</span>
}

export type { BadgeProps, BadgeVariant, BadgeIntent }
