"use client"

import NextLink from "next/link"
import { cx } from "@/lib/utils"
import { buttonStyles, type ButtonProps } from "./button"
import { forwardRef } from "react"

type UnderlineOffset = "none" | "1" | "2" | "3" | "4" | "8"

interface BaseLinkProps {
  href: string
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

export type LinkProps = BaseLinkProps & ConditionalLinkProps

const underlineOffsetClasses: Record<UnderlineOffset, string> = {
  none: "",
  "1": "underline-offset-1",
  "2": "underline-offset-2",
  "3": "underline-offset-3",
  "4": "underline-offset-4",
  "8": "underline-offset-8",
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      className,
      underlined = false,
      underlineOffset = "none",
      disabled = false,
      asButton = false,
      children,
      ...props
    },
    ref
  ) => {
    // Determine if link is internal
    const isInternal = href.startsWith("/") || href.startsWith("#")

    // Build underline classes
    const underlineOffsetClass = underlineOffset
      ? underlineOffsetClasses[underlineOffset]
      : ""
    const underlineClass = underlined
      ? cx("underline", underlineOffsetClass)
      : ""

    // Extract button-specific props if asButton is true
    const buttonProps = asButton
      ? {
          variant: props.variant,
          intent: props.intent,
          size: props.size,
          circle: props.circle,
          iconOnly: props.iconOnly,
        }
      : {}

    // Build final className
    const finalClassName = asButton
      ? buttonStyles({
          ...buttonProps,
          className: cx(underlineClass, className),
        })
      : cx(underlineClass, className)

    // Filter out button-specific props from remaining props
    const { variant, intent, size, circle, iconOnly, ...restProps } = props

    // Common props
    const commonProps = {
      ref,
      className: finalClassName,
      "aria-disabled": disabled ? true : undefined,
      tabIndex: disabled ? -1 : undefined,
      ...(asButton ? {} : restProps), // Spread remaining props only if not asButton
    }

    // External link
    if (!isInternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {children}
        </a>
      )
    }

    // Internal link
    return (
      <NextLink href={href} {...commonProps}>
        {children}
      </NextLink>
    )
  }
)

Link.displayName = "Link"
