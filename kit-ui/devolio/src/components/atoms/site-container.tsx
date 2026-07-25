import { cx } from "@/lib/utils";
import type { ReactNode } from "react";

export const SiteContainer = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div className={cx("w-full max-w-7xl px-5 sm:px-10 xl:px-14 mx-auto", className)}>
      {children}
    </div>
  )
}
