"use client"


import { tv } from "tailwind-variants"
import { uiStyles, type UiVariant, type UiIntent } from "@/lib/ui-variants"
import {
    type UiComponentVariant,
    type UiComponentIntent,
    resolveIntent,
} from "@/lib/ui-variant-types"

/**
 * Alert variant configuration
 */
const alertVariants = tv({
    base: "relative w-full",
    variants: {
        size: {
            none: "",
            xs: "p-1.5 text-xs",
            sm: "p-2.5 text-sm",
            md: "p-4 text-sm",
            lg: "p-5",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

/**
 * Alert-specific type aliases using shared UI variant types
 */
type AlertVariant = UiComponentVariant
type AlertIntent<V extends AlertVariant> = UiComponentIntent<V>

/**
 * Alert component props
 */
interface AlertProps<V extends AlertVariant = "solid"> {
    variant?: V
    intent?: AlertIntent<V>
    size?: "none" | "xs" | "sm" | "md" | "lg"
    radius?: "none" | "default"
    className?: string,
    children: React.ReactNode
}

/**
 * Alert Component
 *
 * A versatile alert component with multiple variants, intents, and sizes.
 * Based on Laravel blade component structure with TypeScript type safety.
 *
 * @example
 * ```tsx
 * <Alert variant="solid" intent="solid-primary">Primary Alert</Alert>
 * <Alert variant="soft" intent="soft-success" size="sm">Success Alert</Alert>
 * <Alert variant="outline" intent="outline-danger" size="lg">Danger Alert</Alert>
 * ```
 */
export const Alert = <V extends AlertVariant = "solid">({
    variant = "solid" as V,
    intent,
    size = "md",
    className,
    radius = "default",
    children,
}: AlertProps<V>) => {
    // Handle default variant (bg-bg-subtle text-fg)
    if (variant === "default") {
        const classes = alertVariants({
            size,
            className: `bg-bg-subtle text-fg ${radius === "default" ? "ui-radius" : ""} ${className || ""}`,
        })
        return <div className={classes}>{children}</div>
    }

    // Handle none variant
    if (variant === "none") {
        const classes = alertVariants({
            size,
            className: radius === "default" ? `ui-radius ${className || ""}` : className,
        })
        return <div className={classes}>{children}</div>
    }

    // Resolve intent with default if not provided
    const resolvedIntent = resolveIntent(variant, intent)

    // Get variant classes from uiStyles
    const variantClasses = uiStyles({
        variant: variant as UiVariant,
        intent: resolvedIntent as UiIntent<UiVariant>,
    })

    // Combine all classes
    const classes = alertVariants({
        size,
        className: `${variantClasses} ${radius === "default" ? "ui-radius" : ""} ${className || ""}`,
    })

    return <div className={classes}>
        {children}
    </div>
}

export type { AlertProps, AlertVariant, AlertIntent }
