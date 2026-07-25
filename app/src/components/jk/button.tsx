"use client"

import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components/Button"
import { tv } from "tailwind-variants"

type ButtonVariantIntentMap = {
  solid: "primary" | "secondary" | "accent" | "neutral" | "destructive"
  soft: "primary" | "destructive" | "warning" | "gray"
  ghost: "gray"
  outline: "gray"
  none: "none"
}

export type ButtonVariant = keyof ButtonVariantIntentMap
export type ButtonIntent<V extends ButtonVariant> = ButtonVariantIntentMap[V]
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "none"
export type ButtonRadius = "none" | "default" | "circle"

const buttonVariants = tv({
  base: "btn",
  variants: {
    variant: {
      solid: "btn-solid",
      outline: "btn-outline",
      soft: "btn-soft",
      ghost: "btn-ghost",
      none: "",
    },
    intent: {
      primary: "",
      secondary: "",
      accent: "",
      neutral: "",
      destructive: "",
      warning: "",
      gray: "",
      none: "",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
      none: "",
    },
    iconOnly: {
      true: "",
      false: "",
    },
    radius: {
      none: "",
      default: "rounded-ui",
      circle: "rounded-full",
    },
  },
  compoundVariants: [
    { variant: "solid", intent: "primary", class: "btn-solid-primary" },
    { variant: "solid", intent: "secondary", class: "btn-solid-secondary" },
    { variant: "solid", intent: "accent", class: "btn-solid-accent" },
    { variant: "solid", intent: "neutral", class: "btn-solid-neutral" },
    { variant: "solid", intent: "destructive", class: "btn-solid-destructive" },
    { variant: "soft", intent: "primary", class: "btn-soft-primary" },
    { variant: "soft", intent: "destructive", class: "btn-soft-destructive" },
    { variant: "soft", intent: "warning", class: "btn-soft-warning" },
    { variant: "soft", intent: "gray", class: "btn-soft-gray" },
    { variant: "ghost", intent: "gray", class: "btn-ghost-gray" },
    { variant: "outline", intent: "gray", class: "btn-outline-gray" },
    { iconOnly: true, size: "xs", class: "btn-icon-xs" },
    { iconOnly: true, size: "sm", class: "btn-icon-sm" },
    { iconOnly: true, size: "md", class: "btn-icon-md" },
    { iconOnly: true, size: "lg", class: "btn-icon-lg" },
    { iconOnly: true, size: "xl", class: "btn-icon-xl" },
  ],
  defaultVariants: {
    variant: "solid",
    intent: "primary",
    size: "md",
    iconOnly: false,
    radius: "default",
  },
})

const defaultIntents: {
  [V in ButtonVariant]: ButtonIntent<V>
} = {
  solid: "primary",
  soft: "gray",
  ghost: "gray",
  outline: "gray",
  none: "none",
}

export interface ButtonProps<V extends ButtonVariant = "solid">
  extends Omit<RACButtonProps, "className"> {
  variant?: V
  intent?: ButtonIntent<V>
  size?: ButtonSize
  /** @deprecated Use radius="circle" instead. */
  circle?: boolean
  iconOnly?: boolean
  radius?: ButtonRadius
  className?: string
  ref?: React.Ref<HTMLButtonElement>
}

export const buttonStyles = <V extends ButtonVariant = "solid">({
  className,
  variant = "solid" as V,
  intent,
  size = "md",
  circle = false,
  iconOnly = false,
  radius = "default",
}: {
  className?: string
  variant?: V
  intent?: ButtonIntent<V>
  size?: ButtonSize
  circle?: boolean
  iconOnly?: boolean
  radius?: ButtonRadius
}) => {
  const resolvedIntent = intent ?? defaultIntents[variant]

  const classes = buttonVariants({
    variant,
    intent: resolvedIntent,
    size,
    iconOnly,
    radius: circle ? "circle" : radius,
    className,
  })

  return iconOnly
    ? classes
        .replace(/\bbtn-(xs|sm|md|lg|xl)\b/g, "")
        .replace(/\s+/g, " ")
        .trim()
    : classes
}

export const Button = <V extends ButtonVariant = "solid">({
  className,
  variant = "solid" as V,
  intent,
  size = "md",
  circle = false,
  iconOnly = false,
  radius = "default",
  ref,
  ...props
}: ButtonProps<V>) => (
  <RACButton
    ref={ref}
    {...props}
    className={buttonStyles({
      className,
      variant,
      intent,
      size,
      circle,
      iconOnly,
      radius,
    })}
  />
)
