"use client"

import type { TextProps } from "react-aria-components/Text"
import { Text as RAC_Text } from "react-aria-components/Text"
import { cx } from "@/lib/utils"

interface JkTextProps extends TextProps {
  intent?: "muted" | "body" | "title" | "caption" | "primary" | "secondary" | "warning" | "destructive"
  elementType?: "p" | "span" | "div" | "label" | "small"
}

const intentClasses = {
  muted: "text-muted-foreground",
  body: "text-foreground",
  title: "text-foreground",
  caption: "text-gray-500",
  primary: "text-primary",
  secondary: "text-secondary",
  warning: "text-warning",
  destructive: "text-destructive",
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
