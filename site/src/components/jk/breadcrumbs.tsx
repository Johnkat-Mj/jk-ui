"use client"

import { createContext, use, useMemo } from "react"
import type { BreadcrumbProps, BreadcrumbsProps } from "react-aria-components"
import { Breadcrumb, Breadcrumbs as BreadcrumbsPrimitive } from "react-aria-components"
import { cx } from "@/lib/utils"
import { Link } from "./link"



const SPACING_MAP: Record<string, string> = {
  none: "",
  "0": "gap-0",
  "0.5": "gap-0.5",
  "1": "gap-1",
  "1.5": "gap-1.5",
  "2": "gap-2",
  "3": "gap-3",
}

type Spacing = keyof typeof SPACING_MAP

type BreadcrumbsContextProps = {
  separator: string
  separatorNotIcon: boolean
  separatorIconColor: boolean
  itemSpacing: Spacing
  activeClass: string
}

const BreadcrumbsContext = createContext<BreadcrumbsContextProps | null>(null)

interface BreadcrumbsRootProps<T extends object> extends BreadcrumbsProps<T> {
  spacing?: Spacing
  wrapper?: string
  separator?: string
  separatorNotIcon?: boolean
  separatorIconColor?: boolean
  itemSpacing?: Spacing
  activeClass?: string
}

const Breadcrumbs = <T extends object>({
  className,
  spacing = "1.5",
  wrapper,
  separator = "ph--caret-right",
  separatorNotIcon = false,
  separatorIconColor = false,
  itemSpacing = "1.5",
  activeClass = "text-fg-title font-medium",
  ...props
}: BreadcrumbsRootProps<T>) => {


  const contextValue = useMemo(() => ({
    separator,
    separatorNotIcon,
    separatorIconColor,
    itemSpacing,
    activeClass,
  }), [separator, separatorNotIcon, separatorIconColor, itemSpacing, activeClass])

  return (
    <BreadcrumbsContext.Provider value={contextValue}>
      <nav aria-label="Breadcrumbs" className={wrapper}>
        <BreadcrumbsPrimitive
          {...props}
          className={cx("flex items-center text-fg-muted", SPACING_MAP[spacing], className)}
        />
      </nav>
    </BreadcrumbsContext.Provider>
  )
}

interface BreadcrumbsItemProps extends BreadcrumbProps {
  href?: string
  spacing?: Spacing
  separator?: string
  separatorNotIcon?: boolean
  separatorIconColor?: boolean
}

const BreadcrumbsItem = ({
  href,
  className,
  spacing,
  separator,
  separatorNotIcon,
  separatorIconColor,
  children,
  ...props
}: BreadcrumbsItemProps) => {
  const ctx = use(BreadcrumbsContext)


  const finalSpacing = spacing ?? ctx?.itemSpacing ?? "1.5"

  return (
    <Breadcrumb
      className={cx("flex items-center", SPACING_MAP[finalSpacing])}
      data-slot="breadcrumb-item"
      {...props}
    >
      {(renderProps) => {
        const { isCurrent } = renderProps
        const content = typeof children === "function" ? children(renderProps) : children


        return (
          <>
            {href && !isCurrent ? (
              <Link
                href={href}
                className={cx("flex items-center ease-linear hover:text-fg-subtitle", className)}
              >
                {content}
              </Link>
            ) : (
              <span
                aria-current={isCurrent ? "page" : undefined}
                className={cx("flex items-center", isCurrent ? (ctx?.activeClass ?? "") : "", className)}
              >
                {content}
              </span>
            )}

            {!isCurrent && (
              <BreadcrumbSeparator
                separator={separator ?? ctx?.separator}
                notIcon={separatorNotIcon ?? ctx?.separatorNotIcon}
                iconColor={separatorIconColor ?? ctx?.separatorIconColor}
              />
            )}
          </>
        )
      }}
    </Breadcrumb>
  )
}

interface BreadcrumbSeparatorProps {
  separator?: string
  notIcon?: boolean
  iconColor?: boolean
  children?: React.ReactNode
}
const BreadcrumbSeparator = ({
  separator = "ph--caret-right",
  notIcon = false,
  iconColor = false,
  children,
}: BreadcrumbSeparatorProps) => (
  <span
    aria-hidden="true"
    className={cx("flex shrink-0", {
      iconify: !notIcon && !iconColor,
      "iconify-color": !notIcon && iconColor,
      [separator]: !notIcon,
    })}
  >
    {notIcon ? children : null}
  </span>
)



export type { BreadcrumbsRootProps, BreadcrumbsItemProps, BreadcrumbSeparatorProps }
export { Breadcrumbs, BreadcrumbsItem, BreadcrumbSeparator }