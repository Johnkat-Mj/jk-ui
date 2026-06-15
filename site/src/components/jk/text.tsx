"use client"

import type { TextProps } from "react-aria-components"
import { Text as RAC_Text } from "react-aria-components"
import { cx } from "@/lib/utils"

interface JkTextProps extends TextProps {
  intent?: "muted" | "body" | "title" | "caption" | "primary" | "secondary" | "warning" | "danger"
  elementType?: "p" | "span" | "div" | "label" | "small"
}

const intentClasses = {
  muted: "text-fg-muted",
  body: "text-fg",
  title: "text-fg-title",
  caption: "text-gray-500",
  primary: "text-primary",
  secondary: "text-secondary",
  warning: "text-warning",
  danger: "text-danger",
} as const

export function Text({
  intent = "muted",
  elementType = "p",
  className,
  ...props
}: JkTextProps) {
  const intentClass = intentClasses[intent] ?? intentClasses.muted

  return (
    <RAC_Text
      elementType={elementType}
      data-slot="text"
      className={cx(intentClass, className)}
      {...props}
    />
  )
}
