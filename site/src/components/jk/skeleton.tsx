"use client"

import { forwardRef } from "react"
import { cx } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    radius?: "none" | "full"
    bg?: boolean
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
    ({ className, radius = "full", bg = true, ...props }, ref) => {

        return (
            <div
                className={cx(
                    "animate-pulse",
                    bg ? "bg-bg-muted" : "",
                    radius === "full" ? "rounded-full" : "",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Skeleton.displayName = "Skeleton"

export { Skeleton }