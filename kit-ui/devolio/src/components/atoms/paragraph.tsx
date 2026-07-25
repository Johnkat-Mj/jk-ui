import { cx } from "@/lib/utils";
import { ReactNode } from "react"

export const Paragraph = (props: { className?: string; children: ReactNode }) => {
  const { className, children } = props
  return (
    <p className={cx(
      "text-gray-900 dark:text-white  md:text-lg leading-6",
      className
    )}>
      {children}
    </p>
  )
}

export default Paragraph
