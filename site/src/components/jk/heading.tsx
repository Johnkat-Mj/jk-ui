"use client"

import type { HeadingProps } from "react-aria-components/Heading"
import { Heading as RAC_Heading } from "react-aria-components/Heading"
import { cx } from "@/lib/utils"

interface JkHeadingProps extends HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5
  intent?: "title" | "body" | "muted" | "primary" | "secondary" | "danger" | "warning"
}

const levelSizeClasses = {
  1: "text-3xl font-bold tracking-tight",
  2: "text-2xl font-semibold tracking-tight",
  3: "text-xl font-semibold",
  4: "text-lg font-medium",
  5: "text-base font-medium",
} as const

const intentClasses = {
  title: "text-fg-title",
  body: "text-fg",
  muted: "text-fg-muted",
  primary: "text-primary",
  secondary: "text-secondary",
  danger: "text-danger",
  warning: "text-warning",
} as const

export function Heading({
  level = 1,
  intent = "title",
  className,
  ...props
}: JkHeadingProps) {
  const levelClass = levelSizeClasses[level] ?? levelSizeClasses[1]
  const intentClass = intentClasses[intent] ?? intentClasses.title

  return (
    <RAC_Heading
      level={level}
      data-slot="heading"
      className={cx(levelClass, intentClass, className)}
      {...props}
    />
  )
}
