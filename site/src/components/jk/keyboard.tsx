"use client"


import { tv } from "tailwind-variants"
import { uiStyles, type UiVariant, type UiIntent } from "@/lib/ui-variants"
import {
    type UiComponentVariant,
    type UiComponentIntent,
    resolveIntent,
} from "@/lib/ui-variant-types"
import type { ComponentProps } from "react"
import { Keyboard as RAC_Keyboard } from "react-aria-components"

/**
 * Kbd variant configuration
 */
const kbdVariants = tv({
    base: "font-mono",
    variants: {
        size: {
            none: "",
            default: "kbd-md",
            xs: "kbd-xs",
            sm: "kbd-sm",
            lg: "kbd-lg",
            xl: "kbd-xl",
        },
    },
    defaultVariants: {
        size: "default",
    },
})

/**
 * Kbd-specific type aliases using shared UI variant types
 */
type KbdVariant = UiComponentVariant
type KbdIntent<V extends KbdVariant> = UiComponentIntent<V>

/**
 * Kbd component props
 */
export interface KeyboardProps<V extends KbdVariant = "solid"> extends ComponentProps<typeof RAC_Keyboard> {
    variant?: V
    intent?: KbdIntent<V>
    size?: "none" | "default" | "xs" | "sm" | "lg" | "xl"
    className?: string
    children: React.ReactNode
}


export const Keyboard = <V extends KbdVariant = "solid">({
    variant = "solid" as V,
    intent,
    size = "default",
    className,
    ...rest
}: KeyboardProps<V>) => {
    // Handle default variant (bg-bg-subtle text-fg)
    if (variant === "default") {
        const classes = kbdVariants({
            size,
            className: `bg-bg-subtle text-fg ui-radius ${className || ""}`,
        })
        return <RAC_Keyboard className={classes} {...rest}/>
    }

    // Handle none variant
    if (variant === "none") {
        const classes = kbdVariants({
            size,
            className: `ui-radius ${className || ""}`,
        })
        return <RAC_Keyboard className={classes} {...rest}/>
    }

    // Resolve intent with default if not provided
    const resolvedIntent = resolveIntent(variant, intent)

    // Get variant classes from uiStyles
    const variantClasses = uiStyles({
        variant: variant as UiVariant,
        intent: resolvedIntent as UiIntent<UiVariant>,
    })

    // Combine all classes
    const classes = kbdVariants({
        size,
        className: `${variantClasses} ui-radius ${className || ""}`,
    })

    return <RAC_Keyboard className={classes} {...rest}/>
}

