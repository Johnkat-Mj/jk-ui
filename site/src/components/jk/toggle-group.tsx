"use client"

import { createContext, use } from "react"
import {
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from "react-aria-components/ToggleButtonGroup"
import { cx } from "@/lib/utils"
import { Toggle, type ToggleProps, type ToggleSize } from "./toggle"


interface ToggleGroupContextValue
  extends Pick<ToggleButtonGroupProps, "selectionMode" | "orientation"> {
  size?: ToggleSize
  circle?: boolean
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "md",
  selectionMode: "single",
  orientation: "horizontal",
  circle: false,
})

const useToggleGroupContext = () => use(ToggleGroupContext)

interface ToggleGroupProps extends ToggleButtonGroupProps {
  size?: ToggleSize
  circle?: boolean
}

const ToggleGroup = ({
  size = "md",
  orientation = "horizontal",
  selectionMode = "single",
  circle,
  className,
  ...props
}: ToggleGroupProps) => {
  return (
    <ToggleGroupContext.Provider value={{ size, selectionMode, orientation, circle }}>
      <ToggleButtonGroup
        data-slot="control"
        selectionMode={selectionMode}
        className={cx(
          [
            "--toggle-gutter flex ring ring-border-input/70",
            "ui-card [--card-radius:calc(var(--radius-ui)+2px)] [--card-padding:2px]",
            orientation === "horizontal" ? "flex-row" : "flex-col",
            selectionMode === "single" ? "gap-(--toggle-gutter)" : "gap-0",
            ],
          className,
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
}

interface ToggleGroupItemProps extends ToggleButtonProps {
  size?: ToggleSize
}


const ToggleGroupItem = ({...props }: ToggleProps) => {
  const { size, circle } = useToggleGroupContext()

  return (
    <Toggle
      data-slot="toggle-group-item"
      size={size}
      circle={circle}
      {...props}
    />
  )
}

export type { ToggleGroupProps, ToggleGroupItemProps }
export { ToggleGroup, ToggleGroupItem }
