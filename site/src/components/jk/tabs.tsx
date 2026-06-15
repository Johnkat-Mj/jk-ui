"use client"

import type {
  TabListProps as RACTabListProps,
  TabPanelProps as RACTabPanelProps,
  TabProps as RACTabProps,
  TabsProps as RACTabsProps,
} from "react-aria-components"

import {
  composeRenderProps,
  SelectionIndicator,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tab as RACTab,
  TabsContext as RACTabsContext,
  Tabs as RACTabs,
  useSlottedContext,
} from "react-aria-components"
import { cx } from "@/lib/utils"

interface TabsProps extends RACTabsProps {
  ref?: React.RefObject<HTMLDivElement>
}
const Tabs = ({ className, ref, orientation = "horizontal", ...props }: TabsProps) => {
  return (
    <RACTabsContext value={{ orientation: orientation }}>
      <RACTabs
        orientation={orientation}
        className={cx(
          "group/tabs flex forced-color-adjust-none",
          orientation === "horizontal" ? "flex-col gap-4" : "flex-row gap-6",
          className,
        )}
        ref={ref}
        {...props}
      />
    </RACTabsContext>
  )
}

interface TabListProps<T extends object> extends RACTabListProps<T> {
  ref?: React.RefObject<HTMLDivElement | null>,
  border?: boolean
}
const TabList = <T extends object>({ className, ref, border, ...props }: TabListProps<T>) => {
  return (
    <RACTabList
      ref={ref}
      data-slot="tab-list"
      {...props}
      className={composeRenderProps(className, (className, { orientation }) =>
        cx([
          "flex gap-1",
          border === false ? '' : (orientation === "horizontal"
            ? "flex-row border-b border-border-strong/20"
            : "flex-col border-l border-border-strong/20"),
          className,
        ]),
      )}
    />
  )
}

interface TabProps extends RACTabProps {
  ref?: React.RefObject<HTMLDivElement>,
  indicatorClass?: string,
  indicatorStyle?: "full" | "border" | "border-top" | "border-right"
}
const Tab = ({ children, className, ref, indicatorStyle = "full", indicatorClass = '', ...props }: TabProps) => {
  const { orientation } = useSlottedContext(RACTabsContext)!
  return (
    <RACTab
      {...props}
      data-slot="tab"
      ref={ref}
      className={cx(
        "",
        className,
      )}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}

          {/* 
          
          "px-3 cursor-pointer py-1 rounded-(--global-main-radius) 
          fx-selected:bg-white 
          fx-selected:dark:bg-gray-800 
          border border-transparent 
          fx-selected:border-gray-200 
          fx-selected:dark:border-gray-700/60 
          fx-selected:shadow
          
          */}
          {/* <SelectionIndicator
            data-slot="selected-indicator"
            data-style={indicatorStyle}
            className={clx(
              "absolute bg-primary transition-all duration-200 ease-out",
              orientation === "horizontal"
                ? "bottom-0 left-0 right-0 h-0.5"
                : "left-0 top-0 bottom-0 w-0.5",
            )}
          /> */}
        </>
      )}
    </RACTab>
  )
}

interface TabPanelProps extends RACTabPanelProps {
  ref?: React.RefObject<HTMLDivElement>
}
const TabPanel = ({ className, ref, ...props }: TabPanelProps) => {
  return (
    <RACTabPanel
      {...props}
      ref={ref}
      data-slot="tab-panel"
      className={cx(
        "fx-inert:hidden",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
    />
  )
}

export type { TabsProps, TabListProps, TabProps, TabPanelProps }
export { Tabs, TabList, Tab, TabPanel }
