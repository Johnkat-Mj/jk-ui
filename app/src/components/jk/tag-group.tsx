"use client"

import type { TagGroupProps, TagListProps, TagProps } from "react-aria-components/TagGroup"
import {
  Button,
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagList as AriaTagList,
} from "react-aria-components"

import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/utils"

export function TagGroup({ className, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup
      data-slot="control"
      className={twMerge("flex flex-col gap-y-1 *:data-[slot=label]:font-medium", className)}
      {...props}
    />
  )
}

export function TagList<T extends object>({ className, ...props }: TagListProps<T>) {
  return <AriaTagList className={cx("flex flex-wrap gap-1", className)} {...props} />
}

export function Tag({ children, className, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined

  return (
    <AriaTag
      textValue={textValue}
      className={cx(
        "text-fg [--tag-selected-bg:color-mix(in_oklab,var(--color-primary)_10%,transparent)] [--tag-selected-fg:var(--color-primary)]",
        "[--tag-selected-ring:color-mix(in_oklab,var(--color-primary)_35%,transparent)]",
        "inset-ring inset-ring-border-input outline-hidden bg-background",
        "inline-flex items-center gap-x-1.5 py-0.5 font-medium text-xs/5 forced-colors:outline",
        "*:data-[slot=icon]:size-3 *:data-[slot=icon]:shrink-0",
        "cursor-default rounded-full px-2",
        "selected:inset-ring-(--tag-selected-ring) selected:bg-(--tag-selected-bg) selected:text-(--tag-selected-fg)",
        "disabled:opacity-50 disabled:forced-colors:text-[GrayText]",
        props.href && "cursor-pointer hover:inset-ring-muted-fg",
        className,
      )}
      {...props}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving ? (
            <Button slot="remove" className="bg-foreground text-background -me-1 flex size-3.5 items-center-safe justify-center rounded-full in-selected:bg-primary in-selected:text-white">
              <span aria-hidden className="size-2.5 iconify ph--x" />
            </Button>
          ):null}
        </>
      )}
    </AriaTag>
  )
}
