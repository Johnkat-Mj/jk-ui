"use client"

import { tv } from "tailwind-variants"
import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components"

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
      "solid-primary": "[--btn-solid-top-shadow:var(--color-primary-500)] [--btn-solid-bottom-shadow:var(--color-primary-700)] [--btn-solid-top-shadow-hover:var(--color-primary-600)] [--btn-solid-bottom-shadow-hover:var(--color-primary-800)] [--btn-solid-color:var(--color-primary-600)] [--btn-solid-color-hover:var(--color-primary-700)] [--btn-solid-color-press:var(--color-primary-800)] text-white",
      "solid-secondary": "[--btn-solid-top-shadow:var(--color-secondary-500)] [--btn-solid-bottom-shadow:var(--color-secondary-700)] [--btn-solid-top-shadow-hover:var(--color-secondary-600)] [--btn-solid-bottom-shadow-hover:var(--color-secondary-800)] [--btn-solid-color:var(--color-secondary-600)] [--btn-solid-color-hover:var(--color-secondary-700)] [--btn-solid-color-press:var(--color-secondary-800)] text-white",
      "solid-success": "[--btn-solid-top-shadow:var(--color-success-500)] [--btn-solid-bottom-shadow:var(--color-success-700)] [--btn-solid-top-shadow-hover:var(--color-success-600)] [--btn-solid-bottom-shadow-hover:var(--color-success-800)] [--btn-solid-color:var(--color-success-600)] [--btn-solid-color-hover:var(--color-success-700)] [--btn-solid-color-press:var(--color-success-800)] text-white",
      "solid-danger": "[--btn-solid-top-shadow:var(--color-danger-500)] [--btn-solid-bottom-shadow:var(--color-danger-700)] [--btn-solid-top-shadow-hover:var(--color-danger-600)] [--btn-solid-bottom-shadow-hover:var(--color-danger-800)] [--btn-solid-color:var(--color-danger-600)] [--btn-solid-color-hover:var(--color-danger-700)] [--btn-solid-color-press:var(--color-danger-800)] text-white",
      "solid-neutral": "[--btn-solid-top-shadow:var(--color-gray-800)] [--btn-solid-bottom-shadow:var(--color-gray-700)] [--btn-solid-top-shadow-hover:var(--color-gray-800)] [--btn-solid-bottom-shadow-hover:var(--color-gray-900)] [--btn-solid-color:var(--color-gray-900)] [--btn-solid-color-hover:var(--color-gray-950)] [--btn-solid-color-press:var(--color-gray-900)] text-background dark:[--btn-solid-top-shadow:var(--color-gray-200)] dark:[--btn-solid-bottom-shadow:var(--color-gray-100)] dark:[--btn-solid-top-shadow-hover:var(--color-gray-300)] dark:[--btn-solid-bottom-shadow-hover:var(--color-gray-200)] dark:[--btn-solid-color:var(--color-gray-100)] dark:[--btn-solid-color-hover:var(--color-white)] dark:[--btn-solid-color-press:var(--color-gray-200)]",
      // outline intents
      "outline-gray": "[--btn-outline-bg:var(--color-gray-50)] [--btn-outline-color:var(--color-gray-200)] [--btn-outline-text-color:var(--color-gray-800)] [--btn-outline-bg-hover:--alpha(var(--color-gray-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-gray-500)/30%)] dark:[--btn-outline-text-color:var(--color-gray-300)] dark:[--btn-outline-bg:--alpha(var(--color-gray-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-gray-500)/15%)]",
      "outline-primary": "[--btn-outline-bg:var(--color-primary-50)] [--btn-outline-color:var(--color-primary-200)] [--btn-outline-text-color:var(--color-primary-800)] [--btn-outline-bg-hover:--alpha(var(--color-primary-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-primary-500)/30%)] dark:[--btn-outline-text-color:var(--color-primary-300)] dark:[--btn-outline-bg:--alpha(var(--color-primary-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-primary-500)/10%)]",
      "outline-secondary": "[--btn-outline-bg:var(--color-secondary-50)] [--btn-outline-color:var(--color-secondary-200)] [--btn-outline-text-color:var(--color-secondary-800)] [--btn-outline-bg-hover:--alpha(var(--color-secondary-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-secondary-500)/30%)] dark:[--btn-outline-text-color:var(--color-secondary-300)] dark:[--btn-outline-bg:--alpha(var(--color-secondary-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-secondary-500)/10%)]",
      "outline-success": "[--btn-outline-bg:var(--color-success-50)] [--btn-outline-color:var(--color-success-200)] [--btn-outline-text-color:var(--color-success-800)] [--btn-outline-bg-hover:--alpha(var(--color-success-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-success-500)/30%)] dark:[--btn-outline-text-color:var(--color-success-300)] dark:[--btn-outline-bg:--alpha(var(--color-success-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-success-500)/10%)]",
      "outline-danger": "[--btn-outline-bg:var(--color-danger-50)] [--btn-outline-color:var(--color-danger-200)] [--btn-outline-text-color:var(--color-danger-800)] [--btn-outline-bg-hover:--alpha(var(--color-danger-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-danger-500)/30%)] dark:[--btn-outline-text-color:var(--color-danger-300)] dark:[--btn-outline-bg:--alpha(var(--color-danger-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-danger-500)/10%)]",
      "outline-neutral": "[--btn-outline-bg:var(--color-gray-50)] [--btn-outline-color:var(--color-gray-200)] [--btn-outline-text-color:var(--color-gray-800)] [--btn-outline-bg-hover:--alpha(var(--color-gray-100)/60%)] dark:[--btn-outline-color:--alpha(var(--color-gray-500)/30%)] dark:[--btn-outline-text-color:var(--color-gray-300)] dark:[--btn-outline-bg:--alpha(var(--color-gray-500)/5%)] dark:[--btn-outline-bg-hover:--alpha(var(--color-gray-500)/15%)]",
      // soft intents
      "soft-gray": "[--btn-soft-bg-color:var(--color-gray-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-soft-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-soft-text-color:var(--color-gray-800)] [--btn-soft-text-color-hover:var(--color-gray-900)] dark:[--btn-soft-bg-color:--alpha(var(--color-gray-600)/20%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-soft-text-color:var(--color-gray-100)] dark:[--btn-soft-text-color-hover:var(--color-gray-50)]",
      "soft-primary": "[--btn-soft-bg-color:var(--color-primary-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-primary-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-primary-400)/40%)] [--btn-soft-text-color:var(--color-primary-600)] [--btn-soft-text-color-hover:var(--color-primary-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-primary-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-primary-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-primary-600)/25%)] dark:[--btn-soft-text-color:var(--color-primary-300)] dark:[--btn-soft-text-color-hover:var(--color-primary-300)]",
      "soft-secondary": "[--btn-soft-bg-color:var(--color-secondary-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-secondary-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-secondary-400)/40%)] [--btn-soft-text-color:var(--color-secondary-600)] [--btn-soft-text-color-hover:var(--color-secondary-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-secondary-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-secondary-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-secondary-600)/25%)] dark:[--btn-soft-text-color:var(--color-secondary-300)] dark:[--btn-soft-text-color-hover:var(--color-secondary-300)]",
      "soft-success": "[--btn-soft-bg-color:var(--color-success-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-success-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-success-400)/40%)] [--btn-soft-text-color:var(--color-success-600)] [--btn-soft-text-color-hover:var(--color-success-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-success-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-success-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-success-600)/25%)] dark:[--btn-soft-text-color:var(--color-success-300)] dark:[--btn-soft-text-color-hover:var(--color-success-300)]",
      "soft-danger": "[--btn-soft-bg-color:var(--color-danger-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-danger-400)/60%)] [--btn-soft-bg-color-press:--alpha(var(--color-danger-400)/40%)] [--btn-soft-text-color:var(--color-danger-600)] [--btn-soft-text-color-hover:var(--color-danger-700)] dark:[--btn-soft-bg-color:--alpha(var(--color-danger-600)/15%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-danger-600)/30%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-danger-600)/25%)] dark:[--btn-soft-text-color:var(--color-danger-300)] dark:[--btn-soft-text-color-hover:var(--color-danger-300)]",
      "soft-neutral": "[--btn-soft-bg-color:var(--color-gray-50)] [--btn-soft-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-soft-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-soft-text-color:var(--color-gray-800)] [--btn-soft-text-color-hover:var(--color-gray-900)] dark:[--btn-soft-bg-color:--alpha(var(--color-gray-600)/20%)] dark:[--btn-soft-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-soft-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-soft-text-color:var(--color-gray-100)] dark:[--btn-soft-text-color-hover:var(--color-gray-50)]",
      // ghost intents
      "ghost-gray": "[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-ghost-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-ghost-text-color:var(--color-gray-800)] [--btn-ghost-text-color-hover:var(--color-gray-900)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-ghost-text-color:var(--color-gray-100)] dark:[--btn-ghost-text-color-hover:var(--color-gray-50)]",
      "ghost-primary": "[--btn-ghost-bg-color-hover:--alpha(var(--color-primary-100)/50%)] [--btn-ghost-bg-color-press:--alpha(var(--color-primary-100)/70%)] [--btn-ghost-text-color:var(--color-primary-600)] [--btn-ghost-text-color-hover:var(--color-primary-700)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-primary-600)/30%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-primary-600)/25%)] dark:[--btn-ghost-text-color:var(--color-primary-300)] dark:[--btn-ghost-text-color-hover:var(--color-primary-200)]",
      "ghost-secondary": "[--btn-ghost-bg-color-hover:--alpha(var(--color-secondary-100)/50%)] [--btn-ghost-bg-color-press:--alpha(var(--color-secondary-100)/70%)] [--btn-ghost-text-color:var(--color-secondary-600)] [--btn-ghost-text-color-hover:var(--color-secondary-700)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-secondary-600)/30%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-secondary-600)/25%)] dark:[--btn-ghost-text-color:var(--color-secondary-300)] dark:[--btn-ghost-text-color-hover:var(--color-secondary-200)]",
      "ghost-danger": "[--btn-ghost-bg-color-hover:--alpha(var(--color-danger-100)/50%)] [--btn-ghost-bg-color-press:--alpha(var(--color-danger-100)/70%)] [--btn-ghost-text-color:var(--color-danger-600)] [--btn-ghost-text-color-hover:var(--color-danger-700)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-danger-600)/30%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-danger-600)/25%)] dark:[--btn-ghost-text-color:var(--color-danger-300)] dark:[--btn-ghost-text-color-hover:var(--color-danger-200)]",
      "ghost-neutral": "[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-200)/75%)] [--btn-ghost-bg-color-press:--alpha(var(--color-gray-200)/80%)] [--btn-ghost-text-color:var(--color-gray-800)] [--btn-ghost-text-color-hover:var(--color-gray-900)] dark:[--btn-ghost-bg-color-hover:--alpha(var(--color-gray-600)/40%)] dark:[--btn-ghost-bg-color-press:--alpha(var(--color-gray-600)/25%)] dark:[--btn-ghost-text-color:var(--color-gray-100)] dark:[--btn-ghost-text-color-hover:var(--color-gray-50)]",
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
type Radius = "none" | "default"|"circle"

interface CommonProps extends RACButtonProps {
  size?: Size
  circle?: boolean
  iconOnly?: boolean
  className?: string,
  radius?: Radius
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
  radius?: Radius
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
