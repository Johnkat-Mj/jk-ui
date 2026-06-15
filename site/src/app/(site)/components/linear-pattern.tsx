import { cx } from "@/lib/utils"

export const LinearPattern = ({ className }: { className: string }) => {
    return (
        <div
            className={cx(
                "h-full w-4 border-x border-pattern-fg/70 linear-gradient-pattern",
                className
            )}
        >
        </div>
    )
}