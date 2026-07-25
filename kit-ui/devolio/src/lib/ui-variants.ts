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
      "solid-primary": "[--ui-solid-bg:var(--color-primary-600)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-primary-500)]",
      "solid-secondary": "[--ui-solid-bg:var(--color-secondary-600)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-secondary-500)]",
      "solid-success": "[--ui-solid-bg:var(--color-success-600)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-success-500)]",
      "solid-danger": "[--ui-solid-bg:var(--color-danger-600)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-danger-500)]",
      "solid-warning": "[--ui-solid-bg:var(--color-warning-600)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-warning-500)]",
      "solid-info": "[--ui-solid-bg:var(--color-info-600)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-info-500)]",
      "solid-gray": "[--ui-solid-bg:var(--color-gray-100)] [--ui-solid-text:var(--color-gray-700)] dark:[--ui-solid-bg:var(--color-gray-900)] dark:[--ui-solid-text:var(--color-gray-300)]",
      "solid-neutral": "[--ui-solid-bg:var(--color-gray-900)] [--ui-solid-text:var(--color-white)] dark:[--ui-solid-bg:var(--color-white)] dark:[--ui-solid-text:var(--color-gray-900)]",
      
      // soft intents
      "soft-primary": "[--ui-soft-bg:--alpha(var(--color-primary-100)/40%)] [--ui-soft-text:var(--color-primary-600)] dark:[--ui-soft-bg:--alpha(var(--color-primary-900)/30%)] dark:[--ui-soft-text:var(--color-primary-300)]",
      "soft-secondary": "[--ui-soft-bg:--alpha(var(--color-secondary-100)/40%)] [--ui-soft-text:var(--color-secondary-600)] dark:[--ui-soft-bg:--alpha(var(--color-secondary-900)/30%)] dark:[--ui-soft-text:var(--color-secondary-300)]",
      "soft-accent": "[--ui-soft-bg:--alpha(var(--color-accent-100)/40%)] [--ui-soft-text:var(--color-accent-600)] dark:[--ui-soft-bg:--alpha(var(--color-accent-900)/30%)] dark:[--ui-soft-text:var(--color-accent-300)]",
      "soft-success": "[--ui-soft-bg:--alpha(var(--color-success-100)/40%)] [--ui-soft-text:var(--color-success-600)] dark:[--ui-soft-bg:--alpha(var(--color-success-900)/30%)] dark:[--ui-soft-text:var(--color-success-300)]",
      "soft-danger": "[--ui-soft-bg:--alpha(var(--color-danger-100)/40%)] [--ui-soft-text:var(--color-danger-600)] dark:[--ui-soft-bg:--alpha(var(--color-danger-900)/30%)] dark:[--ui-soft-text:var(--color-danger-300)]",
      "soft-warning": "[--ui-soft-bg:--alpha(var(--color-warning-100)/40%)] [--ui-soft-text:var(--color-warning-600)] dark:[--ui-soft-bg:--alpha(var(--color-warning-900)/30%)] dark:[--ui-soft-text:var(--color-warning-300)]",
      "soft-info": "[--ui-soft-bg:--alpha(var(--color-info-100)/40%)] [--ui-soft-text:var(--color-info-600)] dark:[--ui-soft-bg:--alpha(var(--color-info-900)/30%)] dark:[--ui-soft-text:var(--color-info-300)]",
      "soft-gray": "[--ui-soft-bg:--alpha(var(--color-gray-200)/40%)] [--ui-soft-text:var(--color-gray-700)] dark:[--ui-soft-bg:--alpha(var(--color-gray-700)/30%)] dark:[--ui-soft-text:var(--color-gray-300)]",
      "soft-neutral": "[--ui-soft-bg:--alpha(var(--color-gray-200)/40%)] [--ui-soft-text:var(--color-gray-700)] dark:[--ui-soft-bg:--alpha(var(--color-gray-700)/30%)] dark:[--ui-soft-text:var(--color-gray-300)]",
      
      // subtle intents
      "subtle-primary": "[--ui-subtle-bg:--alpha(var(--color-primary-100)/40%)] [--ui-subtle-text:var(--color-primary-600)] [--ui-subtle-border:var(--color-primary-300)] dark:[--ui-subtle-bg:--alpha(var(--color-primary-900)/30%)] dark:[--ui-subtle-text:var(--color-primary-300)] dark:[--ui-subtle-border:--alpha(var(--color-primary-900)/60%)]",
      "subtle-secondary": "[--ui-subtle-bg:--alpha(var(--color-secondary-100)/40%)] [--ui-subtle-text:var(--color-secondary-600)] [--ui-subtle-border:var(--color-secondary-300)] dark:[--ui-subtle-bg:--alpha(var(--color-secondary-900)/30%)] dark:[--ui-subtle-text:var(--color-secondary-300)] dark:[--ui-subtle-border:--alpha(var(--color-secondary-900)/60%)]",
      "subtle-success": "[--ui-subtle-bg:--alpha(var(--color-success-100)/40%)] [--ui-subtle-text:var(--color-success-600)] [--ui-subtle-border:var(--color-success-300)] dark:[--ui-subtle-bg:--alpha(var(--color-success-900)/30%)] dark:[--ui-subtle-text:var(--color-success-300)] dark:[--ui-subtle-border:--alpha(var(--color-success-900)/60%)]",
      "subtle-danger": "[--ui-subtle-bg:--alpha(var(--color-danger-100)/40%)] [--ui-subtle-text:var(--color-danger-600)] [--ui-subtle-border:var(--color-danger-300)] dark:[--ui-subtle-bg:--alpha(var(--color-danger-900)/30%)] dark:[--ui-subtle-text:var(--color-danger-300)] dark:[--ui-subtle-border:--alpha(var(--color-danger-900)/60%)]",
      "subtle-accent": "[--ui-subtle-bg:--alpha(var(--color-accent-100)/40%)] [--ui-subtle-text:var(--color-accent-600)] [--ui-subtle-border:var(--color-accent-300)] dark:[--ui-subtle-bg:--alpha(var(--color-accent-900)/30%)] dark:[--ui-subtle-text:var(--color-accent-300)] dark:[--ui-subtle-border:--alpha(var(--color-accent-900)/60%)]",
      "subtle-warning": "[--ui-subtle-bg:--alpha(var(--color-warning-100)/40%)] [--ui-subtle-text:var(--color-warning-600)] [--ui-subtle-border:var(--color-warning-300)] dark:[--ui-subtle-bg:--alpha(var(--color-warning-900)/30%)] dark:[--ui-subtle-text:var(--color-warning-300)] dark:[--ui-subtle-border:--alpha(var(--color-warning-900)/60%)]",
      "subtle-info": "[--ui-subtle-bg:--alpha(var(--color-info-100)/40%)] [--ui-subtle-text:var(--color-info-600)] [--ui-subtle-border:var(--color-info-300)] dark:[--ui-subtle-bg:--alpha(var(--color-info-900)/30%)] dark:[--ui-subtle-text:var(--color-info-300)] dark:[--ui-subtle-border:--alpha(var(--color-info-900)/60%)]",
      "subtle-gray": "[--ui-subtle-bg:--alpha(var(--color-gray-200)/40%)] [--ui-subtle-text:var(--color-gray-700)] [--ui-subtle-border:var(--color-gray-200)] dark:[--ui-subtle-bg:--alpha(var(--color-gray-800)/30%)] dark:[--ui-subtle-text:var(--color-gray-300)] dark:[--ui-subtle-border:--alpha(var(--color-gray-800)/80%)]",
      "subtle-neutral": "[--ui-subtle-bg:--alpha(var(--color-gray-200)/40%)] [--ui-subtle-text:var(--color-gray-700)] [--ui-subtle-border:var(--color-gray-200)] dark:[--ui-subtle-bg:--alpha(var(--color-gray-800)/30%)] dark:[--ui-subtle-text:var(--color-gray-300)] dark:[--ui-subtle-border:--alpha(var(--color-gray-800)/80%)]",
      
      // outline intents
      "outline-primary": "[--ui-outline-border:var(--color-primary-600)] [--ui-outline-text:var(--color-primary-600)] dark:[--ui-outline-border:var(--color-primary-500)] dark:[--ui-outline-text:var(--color-primary-500)]",
      "outline-secondary": "[--ui-outline-border:var(--color-secondary-600)] [--ui-outline-text:var(--color-secondary-600)] dark:[--ui-outline-border:var(--color-secondary-500)] dark:[--ui-outline-text:var(--color-secondary-500)]",
      "outline-success": "[--ui-outline-border:var(--color-success-600)] [--ui-outline-text:var(--color-success-600)] dark:[--ui-outline-border:var(--color-success-500)] dark:[--ui-outline-text:var(--color-success-500)]",
      "outline-danger": "[--ui-outline-border:var(--color-danger-600)] [--ui-outline-text:var(--color-danger-600)] dark:[--ui-outline-border:var(--color-danger-500)] dark:[--ui-outline-text:var(--color-danger-500)]",
      "outline-warning": "[--ui-outline-border:var(--color-warning-600)] [--ui-outline-text:var(--color-warning-600)] dark:[--ui-outline-border:var(--color-warning-500)] dark:[--ui-outline-text:var(--color-warning-500)]",
      "outline-info": "[--ui-outline-border:var(--color-info-600)] [--ui-outline-text:var(--color-info-600)] dark:[--ui-outline-border:var(--color-info-500)] dark:[--ui-outline-text:var(--color-info-500)]",
      "outline-gray": "[--ui-outline-border:var(--color-gray-600)] [--ui-outline-text:var(--color-gray-600)] dark:[--ui-outline-border:var(--color-gray-500)] dark:[--ui-outline-text:var(--color-gray-500)]",
      "outline-neutral": "[--ui-outline-border:var(--color-gray-600)] [--ui-outline-text:var(--color-gray-600)] dark:[--ui-outline-border:var(--color-gray-500)] dark:[--ui-outline-text:var(--color-gray-500)]",
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
