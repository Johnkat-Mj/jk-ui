"use client"

import type { HTMLAttributes, ReactNode } from "react"
import { Tabs, TabList, Tab } from "@/components/jk/tabs"
import { cx } from "@/lib/utils"

type TabValue = string | { text: string; icon: string; value: string }

interface DocsTabProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  values: TabValue[]
  docPanelClass?: string
  triggersClass?: string
  tabList?: string
  tabListContainer?: string
  children?: ReactNode
}

export const DocsTab = ({
  values,
  docPanelClass,
  tabList,
  tabListContainer,
  triggersClass = "",
  className,
  children,
  ...rest
}: DocsTabProps) => {
  // Extract the first value as the default selected key
  const defaultSelectedKey = typeof values[0] === "string"
    ? values[0]
    : values[0]?.value

  return (
    <Tabs
      className={cx("mt-5 first:mt-0 grid", className)}
      defaultSelectedKey={defaultSelectedKey}
      {...rest}
    >
      <div
        data-tab-list-wrapper
        className={cx(
          "w-full",
          tabListContainer !== undefined ? tabListContainer : "px-4"
        )}
      >
      </div>
      <TabList
        data-tab-list
        className={cx(
          "flex items-center gap-x-3",
          tabList
            ? tabList
            : "border-b border-border-strong/60 relative text-muted-foreground"
        )}
      >
        {values.map((value) => {
          if (typeof value === "string") {
            return (
              <Tab
                key={value}
                id={value}
                data-tabs-trigger
                data-target={value}
                href={`#${value}`}
                aria-label={value}
                className={cx(
                  "relative flex disabled:cursor-not-allowed disabled:opacity-80 fx-active:text-fg-title outline-none focus:outline-0 focus:outline-transparent focus-visible:outline focus-visible:outline-primary",
                  triggersClass !== "" ? triggersClass : "px-4 pt-1.5 pb-2.5"
                )}
              >
                {value}
              </Tab>
            )
          } else {
            return (
              <Tab
                key={value.value}
                id={value.value}
                data-tabs-trigger
                data-target={value.value}
                href={`#${value.value}`}
                aria-label={value.value}
                className={cx(
                  "relative flex items-center disabled:cursor-not-allowed disabled:opacity-80 fx-active:text-fg-title outline-none focus:outline-0 focus:outline-transparent focus-visible:outline focus-visible:outline-primary",
                  triggersClass !== "" ? triggersClass : "px-4 pt-1.5 pb-2.5"
                )}
              >
                <span aria-hidden="true" className={cx("iconify text-sm", value.icon)} />
                <span className="ml-2">{value.text}</span>
              </Tab>
            )
          }
        })}
      </TabList>
      <div

        className={cx("w-full flex", docPanelClass ? docPanelClass : "pt-5")}
      >
        {children}
      </div>
    </Tabs>
  )
}
