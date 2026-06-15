"use client"


import type {
  ButtonProps,
  DisclosureGroupProps as AriaDisclosureGroupProps,
  DisclosurePanelProps,
  DisclosureProps,
} from "react-aria-components"
import {
  Button,
  Heading,
  Disclosure as PrimitiveDisclosure,
  DisclosureGroup as PrimitiveDisclosureGroup,
  DisclosurePanel as PrimitiveDisclosurePanel,
} from "react-aria-components"
import { cx } from "@/lib/utils"
import { tv } from "tailwind-variants"
import { createContext, useContext } from "react"

type DisclosureGroupVariant = "default" | "link" | "outline" | "soft" | "solid" | "subtle" | "none"


type DisclosureGroupContextValue = {
  variant: DisclosureGroupVariant,
  withIndicator: boolean
}

const DisclosureGroupContext =
  createContext<DisclosureGroupContextValue | null>(null)

const useDisclosureGroupContext = () => {
  const ctx = useContext(DisclosureGroupContext)
  if (!ctx) {
    throw new Error(
      "Disclosure components must be used inside <DisclosureGroup />",
    )
  }
  return ctx
}


export const disclosureItemVariant = tv({
  base: "grid font-medium",
  variants: {
    variant: {
      "default": "border-b border-border",
      "soft": "ui-soft ui-soft-gray",
      "solid": "ui-solid ui-solid-gray",
      "outline": "ui-outline ui-outline-gray",
      "subtle": "ui-subtle ui-subtle-gray ",
      "none": ""
    }
  },
  defaultVariants: {
    variant: "default",
  },
})


type DisclosureItemVariant =
  | "default"
  | "outline"
  | "soft"
  | "solid"
  | "subtle"
  | "none"


type DisclosureGroupProps = {
  variant?: "default" | "link" | "outline" | "soft" | "solid" | "subtle" | "none",
  withIndicator?: boolean
} & AriaDisclosureGroupProps
const DisclosureGroup = ({ className, variant = "default", withIndicator = true, ...props }: DisclosureGroupProps) => {
  return (
    <DisclosureGroupContext.Provider value={{ variant, withIndicator }}>
      <PrimitiveDisclosureGroup
        className={cx(
          [
            "[--disclosure-gutter-y:--spacing(2)]",
            "flex flex-col gap-y-2",
          ],
          {
            "[--disclosure-gutter-x:--spacing(4)] [--disclosure-radius:var(--radius-ui)]": variant !== "default" && variant !== "none"
          },
          className,
        )}
        {...props}
      />
    </DisclosureGroupContext.Provider>
  )
}

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <PrimitiveDisclosure
      className={
        cx(
          "group/disclosure-item rounded-(--disclosure-radius)",
          className,
        )
      }
      {...props}
    />
  )
}


const mapGroupVariantToItemVariant = (
  variant: DisclosureGroupVariant,
): DisclosureItemVariant => {
  if (variant === "link") return "none"
  return variant
}

type DisclosureItemProps = {
} & DisclosureProps
const DisclosureItem = ({ className, ...props }: DisclosureItemProps) => {
  const { variant } = useDisclosureGroupContext()
  return <Disclosure {...props} className={cx(disclosureItemVariant({ variant: mapGroupVariantToItemVariant(variant), className: `overflow-hidden ${className}` }))} />
}

interface DisclosureTriggerProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>,
  withIndicator?: boolean
}

const DisclosureTrigger = ({ ref, className, withIndicator = true, ...props }: DisclosureTriggerProps) => {
  return (
    <Heading>
      <Button
        {...props}
        ref={ref}
        slot="trigger"
        className={
          cx(
            [
              "outline-hidden [--width:--spacing(2.5)] disclosure-item-base",
              "relative isolate flex w-full cursor-default items-center justify-between text-left font-medium text-sm/6",
              "disabled:opacity-50",
            ],
            "group cursor-pointer",
            className,
          )}
      >
        {(values) => (
          <>
            {
              withIndicator ? <div className="flex flex-1 flex-col">
                {typeof props.children === "function" ? props.children(values) : props.children}
              </div> : <>
                {typeof props.children === "function" ? props.children(values) : props.children}
              </>
            }
            {
              withIndicator ? (
                <DisclosureItemTriggerIndicator type="sign" className="ml-auto" />
              ) : null
            }
          </>
        )}
      </Button>
    </Heading>
  )
}

type DisclosureItemTriggerProps = {
} & DisclosureTriggerProps
const DisclosureItemTrigger = ({ ref, className, ...props }: DisclosureItemTriggerProps) => {
  const { withIndicator } = useDisclosureGroupContext()
  return (
    <DisclosureTrigger ref={ref} className={className} withIndicator={withIndicator} {...props} />
  )
}


const DisclosurePanel = ({ className, contentClass, ...props }: DisclosurePanelProps & {contentClass?:string}) => {
  return (
    <PrimitiveDisclosurePanel
      data-slot="disclosure-panel"
      className={cx(
        "h-(--disclosure-panel-height) overflow-clip text-sm/6  transition-[height] duration-300",
        className,
      )}
    >
      <div
        data-slot="disclosure-panel-content"
        className={
          cx(
            "justify-start self-stretch text-pretty disclosure-item-base",
            "text-fg-muted",
            contentClass
          )
        }
      >
        {props.children}
      </div>
    </PrimitiveDisclosurePanel>
  )
}


type IndicatorIcon = {
  type: "icon",
  icon?: string,
}

type IndicatorSign = {
  type: "sign"
}


const DisclosureItemTriggerIndicator = (props: (IndicatorIcon | IndicatorSign) & { className?: string }) => {
  if (props.type === "icon") {
    const icon = props.icon || "ph--caret-down"
    return <span aria-hidden className={cx(
      "flex text-fg-muted iconify group-aria-expanded:rotate-180",
      "ease-linear duration-200",
      icon, props.className
    )}></span>
  }
  return <span aria-hidden className={cx(
    "flex text-fg-muted relative size-2.5 disclosure-indicator-plus disclosure-indicator-to-minus",
    props.className
  )}></span>
}



export { DisclosureGroup, Disclosure, DisclosureTrigger, DisclosurePanel, DisclosureItem, DisclosureItemTrigger, DisclosureItemTriggerIndicator }
