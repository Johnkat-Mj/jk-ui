import { cx } from "@/lib/utils"


export const SiteCaret = ({ className }: { className: string }) => {
    return (
        <span
            className={cx(
                "absolute size-2 bg-bg rotate-45 border border-border-strong/60",
                className
            )}
        ></span>
    )
}
