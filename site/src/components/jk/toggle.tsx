"use client"

import type { ToggleButtonProps } from "react-aria-components/ToggleButton"
import {  ToggleButton } from "react-aria-components/ToggleButton"
import {composeRenderProps} from "react-aria-components/composeRenderProps"
import { tv } from "tailwind-variants"

export const toggleStyles = tv({
  base: "btn",
  variants: {
    variant: {
      plain: "bg-(--toggle-bg) text-(--toggle-fg) selected:bg-(--toggle-bg-selected) selected:text-(--toggle-fg-selected)",
      outline: "ring-1 ring-(--toggle-border) text-(--toggle-fg) selected:bg-(--toggle-bg-selected) selected:text-(--toggle-fg-selected) bg-(--toggle-bg) selected:bg-(--toggle-bg-selected) selected:ring-(--toggle-border-selected)",
      none: "",
    },
    intent: {
      "plain-neutral": "",
      "plain-primary": "",
      "outline-gray": "",
      "outline-primary": "",
      none: "",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      none: ""
    },
    iconOnly: {
      true: "",
      false: "",
    },
    circle: {
      true: "rounded-full",
      false: "rounded-ui",
    },
    isDisabled: {
      true: "border-0 opacity-50 forced-colors:text-[GrayText]",
    },
  },
  compoundVariants: [
    // Icon-only size variants
    { iconOnly: true, size: "xs", class: "btn-icon-xs" },
    { iconOnly: true, size: "sm", class: "btn-icon-sm" },
    { iconOnly: true, size: "md", class: "btn-icon-md" },
    { iconOnly: true, size: "lg", class: "btn-icon-lg" },
    // Plain variant intents
    { variant: "plain", intent: "plain-neutral", class: "[--toggle-bg:var(--color-bg-surface)] [--toggle-bg-selected:var(--color-fg-title)] [--toggle-fg:var(--color-fg)] [--toggle-fg-selected:var(--color-bg)]" },
    { variant: "plain", intent: "plain-primary", class: "[--toggle-bg:var(--color-bg-surface)] [--toggle-bg-selected:var(--color-primary)] [--toggle-fg:var(--color-fg)] [--toggle-fg-selected:var(--color-white)]" },
    // Outline variant intents
    {
      variant: "outline", intent: "outline-gray", class: [
        "[--toggle-border:--alpha(var(--color-border-input)/70%)]",
        "[--toggle-bg:--alpha(var(--color-bg-muted)/10%)] ",
        "[--toggle-fg:var(--color-fg)]",
        "[--toggle-bg-selected:--alpha(var(--color-bg-muted)/60%)]",
        "[--toggle-fg-selected:var(--color-fg-title)]",
        "[--toggle-border-selected:var(--color-gray-200)]",
        "dark:[--toggle-border-selected:--alpha(var(--color-gray-700)/80%)]",
      ]
    },
    {
      variant: "outline", intent: "outline-primary", class: [
        "[--toggle-border:var(--color-border)]",
        "[--toggle-bg:v--alpha(var(--color-bg-muted)/10%)] ",
        "[--toggle-fg:var(--color-fg)]",
        "[--toggle-bg-selected:--alpha(var(--color-primary-100)/40%)]",
        "[--toggle-fg-selected:var(--color-primary-600)]",
        "[--toggle-border-selected]:var(--color-primary-300)",
        "dark:[--toggle-border-selected:--alpha(var(--color-primary-900)/60%)]",
        "dark:[--toggle-bg-selected:--alpha(var(--color-primary-900)/30%)]",
        "dark:[--toggle-fg-selected:var(--color-primary-300)]"
      ]
    },
  ],
  defaultVariants: {
    variant: "plain",
    intent: "plain-neutral",
    size: "md",
    iconOnly: false,
    circle: false,
  },
})

type VariantIntentMap = {
  plain: "plain-neutral" | "plain-primary" | "none"
  outline: "outline-gray" | "outline-primary" | "none"
  none: "none"
}

type Variant = keyof VariantIntentMap
type Intent<V extends Variant> = VariantIntentMap[V]

export type ToggleSize = "xs" | "sm" | "md" | "lg" | "none"

interface CommonProps extends ToggleButtonProps {
  size?: ToggleSize
  circle?: boolean
  iconOnly?: boolean
  className?: string
  ref?: React.Ref<HTMLButtonElement>
}

export type ToggleProps<V extends Variant = "plain"> = CommonProps & {
  variant?: V
  intent?: Intent<V>
}

const defaultIntents: { [K in Variant]: Intent<K> | undefined } = {
  plain: "plain-neutral",
  outline: "outline-gray",
  none: 'none'
}

export const toggleStylesFn = <V extends Variant = "plain">({
  className,
  variant = "plain" as V,
  intent,
  size = "md",
  circle = false,
  iconOnly = false,
}: {
  className?: string,
  variant?: V,
  intent?: Intent<V>,
  size?: ToggleSize,
  circle?: boolean,
  iconOnly?: boolean,
}) => {
  const resolvedIntent =
    intent ?? (defaultIntents[variant] as Intent<V> | undefined)

  const classes = toggleStyles({
    variant,
    intent: resolvedIntent,
    size,
    circle,
    iconOnly,
    className,
  })

  // Remove btn-{size} classes when iconOnly is true, keeping only btn-icon-{size}
  const finalClasses = iconOnly
    ? classes.replace(/\bbtn-(xs|sm|md|lg)\b/g, '').replace(/\s+/g, ' ').trim()
    : classes

  return finalClasses
}

export function Toggle<V extends Variant = "plain">({
  className,
  variant = "plain" as V,
  intent,
  size = "md",
  circle = false,
  iconOnly = false,
  ref,
  ...props
}: ToggleProps<V>) {
  return (
    <ToggleButton
      ref={ref}
      className={composeRenderProps(className, (className) =>
        toggleStylesFn({
          className,
          variant,
          intent,
          size,
          circle,
          iconOnly,
        }),
      )}
      {...props}
    />
  )
}
