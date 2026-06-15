import { tv } from "tailwind-variants"

/**
 * UI Styles variant configuration based on PHP variants structure
 * Provides a comprehensive variant system for UI components with different styles and intents
 */
export const uiStyles = tv({
  base: "",
  variants: {
    variant: {
      none: "",
      solid: "ui-solid",
      soft: "ui-soft",
      subtle: "ui-subtle",
      outline: "ui-outline",
    },
    intent: {
      // none
      none: "",
      
      // solid intents
      "solid-primary": "ui-solid-primary",
      "solid-secondary": "ui-solid-secondary",
      "solid-success": "ui-solid-success",
      "solid-danger": "ui-solid-danger",
      "solid-warning": "ui-solid-warning",
      "solid-info": "ui-solid-info",
      "solid-gray": "ui-solid-gray",
      "solid-neutral": "ui-solid-neutral",
      
      // soft intents
      "soft-primary": "ui-soft-primary",
      "soft-secondary": "ui-soft-secondary",
      "soft-accent": "ui-soft-accent",
      "soft-success": "ui-soft-success",
      "soft-danger": "ui-soft-danger",
      "soft-warning": "ui-soft-warning",
      "soft-info": "ui-soft-info",
      "soft-gray": "ui-soft-gray",
      "soft-neutral": "ui-soft-neutral",
      
      // subtle intents
      "subtle-primary": "ui-subtle-primary",
      "subtle-secondary": "ui-subtle-secondary",
      "subtle-success": "ui-subtle-success",
      "subtle-danger": "ui-subtle-danger",
      "subtle-accent": "ui-subtle-accent",
      "subtle-warning": "ui-subtle-warning",
      "subtle-info": "ui-subtle-info",
      "subtle-gray": "ui-subtle-gray",
      "subtle-neutral": "ui-subtle-neutral",
      
      // outline intents
      "outline-primary": "ui-outline-primary",
      "outline-secondary": "ui-outline-secondary",
      "outline-success": "ui-outline-success",
      "outline-danger": "ui-outline-danger",
      "outline-warning": "ui-outline-warning",
      "outline-info": "ui-outline-info",
      "outline-gray": "ui-outline-gray",
      "outline-neutral": "ui-outline-neutral",
    },
  },
  defaultVariants: {
    variant: "solid",
    intent: "solid-primary",
  },
})


export type UiVariantIntentMap = {
  none: "none"
  solid: 
    | "solid-primary" 
    | "solid-secondary" 
    | "solid-success" 
    | "solid-danger" 
    | "solid-warning" 
    | "solid-info" 
    | "solid-gray" 
    | "solid-neutral"
    | "none"
  soft: 
    | "soft-primary" 
    | "soft-secondary" 
    | "soft-accent" 
    | "soft-success" 
    | "soft-danger" 
    | "soft-warning" 
    | "soft-info" 
    | "soft-gray" 
    | "soft-neutral"
    | "none"
  subtle: 
    | "subtle-primary" 
    | "subtle-secondary" 
    | "subtle-success" 
    | "subtle-danger" 
    | "subtle-accent" 
    | "subtle-warning" 
    | "subtle-info" 
    | "subtle-gray" 
    | "subtle-neutral"
    | "none"
  outline: 
    | "outline-primary" 
    | "outline-secondary" 
    | "outline-success" 
    | "outline-danger" 
    | "outline-warning" 
    | "outline-info" 
    | "outline-gray" 
    | "outline-neutral"
    | "none"
}

export type UiVariant = keyof UiVariantIntentMap
export type UiIntent<V extends UiVariant> = UiVariantIntentMap[V]

export const defaultUiIntents: { [K in UiVariant]: UiIntent<K> } = {
  none: "none",
  solid: "solid-gray",
  soft: "soft-gray",
  subtle: "subtle-gray",
  outline: "outline-gray",
}
