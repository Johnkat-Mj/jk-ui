"use client"

import * as React from "react"
import { cx } from "@/lib/utils"

const LABEL_SIZES = {
    default: "divider-custom-1",
    "2": "divider-custom-2",
    "3": "divider-custom-3",
} as const

const PLACEMENTS = {
    start: "justify-start",
    middle: "justify-center",
    end: "justify-end",
} as const

const HR_SIZES = {
    default: "",
    "2": "border-2",
    "3": "border-3",
    "4": "border-4",
} as const

type SeparatorSize = keyof typeof LABEL_SIZES
type LabelPlacement = keyof typeof PLACEMENTS

interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
    size?: SeparatorSize
    label?: React.ReactNode
    labelPlacement?: LabelPlacement
    labelClass?: string
}

export const Separator = React.forwardRef<HTMLElement, SeparatorProps>(
    (
        {
            size = "default",
            label,
            labelPlacement = "start",
            labelClass,
            className,
            ...props
        },
        ref
    ) => {
        if (label) {
            return (
                <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className={cx(
                        "divider-custom w-full flex items-center",
                        LABEL_SIZES[size],
                        PLACEMENTS[labelPlacement] ?? "justify-start",
                        className
                    )}
                    {...props}
                >
                    <span className={labelClass}>
                        {label}
                    </span>
                </div>
            )
        }

        return (
            <hr
                ref={ref as React.RefObject<HTMLHRElement>}
                className={cx("w-full", HR_SIZES[size], className)}
                {...props}
            />
        )
    }
)

Separator.displayName = "Separator"