"use client"

import {
  Link as LinkPrimitive,
  type LinkProps as LinkPrimitiveProps,
} from "react-aria-components"

import { cx } from "@/lib/utils"
import { buttonStyles, type ButtonProps } from "./button"

type UnderlineOffset = "none" | "1" | "2" | "3" | "4" | "8"

interface BaseLinkProps {
  className?: string
  underlined?: boolean
  underlineOffset?: UnderlineOffset
  disabled?: boolean
  children?: React.ReactNode
}

type ConditionalLinkProps =
  | {
    asButton: true
    variant?: "ghost" | "outline" | "soft" | "none" | "solid" | "white/black-outline"
    intent?: ButtonProps<"ghost" | "outline" | "soft" | "none" | "solid" | "white/black-outline">["intent"]
    size?: ButtonProps["size"]
    circle?: boolean
    iconOnly?: boolean
  }
  | {
    asButton?: false
    variant?: never
    intent?: never
    size?: never
    circle?: never
    iconOnly?: never
  }

export type LinkProps = {
  ref?: React.RefObject<HTMLAnchorElement>
} & BaseLinkProps & ConditionalLinkProps

const underlineOffsetClasses: Record<UnderlineOffset, string> = {
  none: "",
  "1": "underline-offset-1",
  "2": "underline-offset-2",
  "3": "underline-offset-3",
  "4": "underline-offset-4",
  "8": "underline-offset-8",
}

export const Link = ({ ref, className, underlined = false, underlineOffset = "none", disabled = false, asButton = false, children, ...props }: LinkPrimitiveProps & LinkProps) => {
  const underlineOffsetClass = underlineOffset
    ? underlineOffsetClasses[underlineOffset]
    : ""
  const underlineClass = underlined
    ? cx("underline", underlineOffsetClass)
    : ""

  const buttonProps = asButton
    ? {
      variant: props.variant,
      intent: props.intent,
      size: props.size,
      circle: props.circle,
      iconOnly: props.iconOnly,
    }
    : {}

  const finalClassName = asButton
    ? buttonStyles({
      ...buttonProps,
      className: cx(underlineClass, className),
    })
    : cx(underlineClass, className)

  const { variant, intent, size, circle, iconOnly, ...restProps } = props

  return (
    <LinkPrimitive
      ref={ref}
      className={finalClassName}
      aria-disabled={disabled ? true : undefined}
      {...restProps}
    >
      {children}
    </LinkPrimitive>
  )
}

