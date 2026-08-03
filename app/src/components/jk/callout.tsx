"use client"

import { Alert } from "./alert"
import type {
    UiComponentVariant,
    UiComponentIntent,
} from "@/lib/ui-variant-types"
import { cx } from "@/lib/utils"

/**
 * Callout type to intent mapping
 */
const calloutTypeIntents = {
    default: "gray",
    update: "info",
    note: "primary",
    warning: "warning",
    important: "destructive",
} as const

/**
 * Callout type to icon mapping
 */
const calloutTypeIcons = {
    default: "ph--info",
    update: "ph--note",
    note: "ph--lightbulb-filament",
    warning: "ph--warning",
    important: "ph--smiley-sad",
} as const

type CalloutType = keyof typeof calloutTypeIntents
type CalloutVariant = UiComponentVariant
type CalloutIntent<V extends CalloutVariant> = UiComponentIntent<V>

/**
 * Callout Title Props
 */
interface CalloutTitleProps {
    text?: string
    className?: string
    children?: React.ReactNode
}

/**
 * Callout Title Component
 */
export const CalloutTitle = ({ text, className, children }: CalloutTitleProps) => {
    return (
        <h2 data-slot="callout-title" className={cx('text-balance font-medium text-base ', className)}>
            {text || children}
        </h2>
    )
}

/**
 * Callout Description Props
 */
interface CalloutDescriptionProps {
    className?: string
    children: React.ReactNode
}

/**
 * Callout Description Component
 */
export const CalloutDescription = ({ className, children }: CalloutDescriptionProps) => {
    return (
        <div data-slot="callout-description" className={cx('text-sm flex flex-col text-pretty', className)}>
            {children}
        </div>
    )
}

/**
 * Callout Props
 */
interface CalloutProps<V extends CalloutVariant = "solid"> {
    variant?: V
    intent?: CalloutIntent<V>
    type?: CalloutType
    size?: "none" | "xs" | "sm" | "md" | "lg",
    radius?: "none" | "default",
    title?: string
    message?: string
    noIcon?: boolean
    iconWrapper?: string
    className?: string
    children?: React.ReactNode
}

/**
 * Callout Component
 *
 * A versatile callout component built on top of Alert with icon support,
 * title, and description. Based on Laravel blade component structure.
 *
 * @example
 * ```tsx
 * <Callout type="note" title="Note" message="This is a note callout" />
 * <Callout type="warning" variant="soft">
 *   <CalloutTitle>Warning</CalloutTitle>
 *   <CalloutDescription>This is a warning message</CalloutDescription>
 * </Callout>
 * ```
 */
export const Callout = <V extends CalloutVariant = "solid">({
    variant = "default" as V,
    intent,
    type = "default",
    size = "md",
    title,
    message,
    noIcon = false,
    iconWrapper = "",
    radius = "default",
    className,
    children,
}: CalloutProps<V>) => {
    // Resolve intent based on type if not explicitly provided
    const resolvedIntent = (intent || calloutTypeIntents[type]) as UiComponentIntent<V>

    // Get icon for the type
    const icon = calloutTypeIcons[type]

    // Build alert className
    const alertClassName = `${!noIcon ? "flex items-start gap-4" : ""} ${className || ""}`

    return (
        <Alert
            variant={variant}
            intent={resolvedIntent}
            size={size}
            radius={radius}
            className={alertClassName}
        >
            {!noIcon ? (
                <span className={cx('w-max', iconWrapper)}>
                    <span aria-hidden="true" className={`iconify size-6 ${icon}`} />
                </span>
            ) : null}

            {title || message ? (
                !noIcon ? (
                    <div className="flex-1 flex flex-col gap-3">
                        {title ? <CalloutTitle text={title} /> : null}
                        {message ? <CalloutDescription>{message}</CalloutDescription> : null}
                    </div>
                ) : (
                    children
                )
            ) : (
                !noIcon ? (
                    <div className="flex-1 flex flex-col gap-3">
                        {children}
                    </div>
                ) : (
                    children
                )
            )}
        </Alert>
    )
}

export type { CalloutProps, CalloutType, CalloutVariant, CalloutIntent, CalloutTitleProps, CalloutDescriptionProps }
