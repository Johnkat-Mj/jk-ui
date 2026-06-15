"use client"

import { tv } from "tailwind-variants"
import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components/Button"

const buttonVariants = tv({
  base: "btn",
  variants: {
    variant: {
      solid: "btn-solid",
      outline: "btn-outline",
      soft: "btn-soft",
      ghost: "btn-ghost",
      "white/black-outline": "btn-white-black-base btn-white-black",
      none: ""
    },

    intent: {
      // solid intents
      "solid-primary": "btn-solid-primary text-white",
      "solid-secondary": "btn-solid-secondary text-white",
      "solid-success": "btn-solid-success text-white",
      "solid-danger": "btn-solid-danger text-white",
      "solid-neutral": "btn-solid-neutral text-bg",
      // outline intents
      "outline-gray": "btn-outline-gray",
      "outline-primary": "btn-outline-primary",
      "outline-secondary": "btn-outline-secondary",
      "outline-success": "btn-outline-success",
      "outline-danger": "btn-outline-danger",
      "outline-neutral": "btn-outline-neutral",
      // soft intents
      "soft-gray": "btn-soft-gray",
      "soft-primary": "btn-soft-primary",
      "soft-secondary": "btn-soft-secondary",
      "soft-success": "btn-soft-success",
      "soft-danger": "btn-soft-danger",
      "soft-neutral": "btn-soft-neutral",
      // ghost intents
      "ghost-gray": "btn-ghost-gray",
      "ghost-primary": "btn-ghost-primary",
      "ghost-secondary": "btn-ghost-secondary",
      "ghost-danger": "btn-ghost-danger",
      "ghost-neutral": "btn-ghost-neutral",
      // default/none
      default: "",
      none: "",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
      none: ''
    },
    iconOnly: {
      true: "",
      false: ""
    },
    radius:{
      none:"",
      default:"rounded-ui",
      circle:"rounded-full"
    }
  },
  compoundVariants: [
    // Icon-only size variants
    { iconOnly: true, size: "xs", class: "btn-icon-xs" },
    { iconOnly: true, size: "sm", class: "btn-icon-sm" },
    { iconOnly: true, size: "md", class: "btn-icon-md" },
    { iconOnly: true, size: "lg", class: "btn-icon-lg" },
    { iconOnly: true, size: "xl", class: "btn-icon-xl" },
  ],
  defaultVariants: {
    variant: "solid",
    intent: "solid-primary",
    size: "md",
    iconOnly:true,
    radius: "default",
  }
})

type VariantIntentMap = {
  solid: "solid-primary" | "solid-secondary" | "solid-success" | "solid-danger" | "solid-neutral" | "none"
  outline: "outline-gray" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-neutral" | "none"
  soft: "soft-gray" | "soft-primary" | "soft-secondary" | "soft-success" | "soft-danger" | "soft-neutral" | "none"
  ghost: "ghost-gray" | "ghost-primary" | "ghost-secondary" | "ghost-danger" | "ghost-neutral" | "none"
  "white/black-outline": "default" | "none",
  none: "none"
}

type Variant = keyof VariantIntentMap
type Intent<V extends Variant> = VariantIntentMap[V]

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "none"
export type ButtonRadius = "none" | "default"|"circle"

interface CommonProps extends RACButtonProps {
  size?: Size
  circle?: boolean
  iconOnly?: boolean
  className?: string,
  radius?: ButtonRadius
  ref?: React.Ref<HTMLButtonElement>
}

export type ButtonProps<V extends Variant = "solid"> = CommonProps & {
  variant?: V
  intent?: Intent<V>
}

const defaultIntents: { [K in Variant]: Intent<K> | undefined } = {
  solid: "solid-primary",
  outline: "outline-gray",
  soft: "soft-gray",
  ghost: "ghost-gray",
  "white/black-outline": "default",
  none: 'none'
}


export const buttonStyles = <V extends Variant = "solid">({
  className,
  variant = "solid" as V,
  intent,
  size = "md",
  iconOnly = false,
  radius
}: {
  className?: string,
  variant?: V,
  intent?: Intent<V>,
  size?: Size,
  iconOnly?: boolean,
  radius?: ButtonRadius
}) => {
  const resolvedIntent =
    intent ?? (defaultIntents[variant] as Intent<V> | undefined)

  const classes = buttonVariants({
    variant,
    intent: resolvedIntent,
    size,
    iconOnly,
    className,
    radius
  })

  // Remove btn-{size} classes when iconOnly is true, keeping only btn-icon-{size}
  const finalClasses = iconOnly
    ? classes.replace(/\bbtn-(xs|sm|md|lg|xl)\b/g, '').replace(/\s+/g, ' ').trim()
    : classes

  return finalClasses
}

export const Button = <V extends Variant = "solid">({
  className,
  variant = "solid" as V,
  intent,
  size = "md",
  iconOnly = false,
  radius,
  ref,
  ...props
}: ButtonProps<V>) => {

  return (
    <RACButton
      ref={ref}
      {...props}
      className={buttonStyles({
        radius,
        variant,
        intent,
        size,
        iconOnly,
        className,
      })}
    />
  )
}
