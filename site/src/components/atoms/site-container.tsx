import { cx } from "@/lib/utils"
import type { ReactNode } from "react"

export const SiteContainer = ({ children, className='' }: { children: ReactNode; className?: string }) => {
    return (
        <div className={cx("w-full lg:max-w-330 lg:mx-auto", className)}>
            {children}
        </div>
    )
}