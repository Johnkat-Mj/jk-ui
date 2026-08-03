import { cx } from "@/lib/utils"

export type UiVariant = "none" | "solid" | "soft" | "subtle" | "outline"
export type UiIntent =
  | "none"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "destructive"
  | "warning"
  | "info"
  | "gray"
  | "neutral"

const variantClasses: Record<UiVariant, string> = {
  none: "",
  solid: "ui-solid",
  soft: "ui-soft",
  subtle: "ui-subtle",
  outline: "ui-outline",
}

const intentClasses: Record<
  Exclude<UiVariant, "none">,
  Record<Exclude<UiIntent, "none">, string>
> = {
  solid: {
    primary: "ui-solid-primary",
    secondary: "ui-solid-secondary",
    accent: "ui-solid-accent",
    success: "ui-solid-success",
    destructive: "ui-solid-destructive",
    warning: "ui-solid-warning",
    info: "ui-solid-info",
    gray: "ui-solid-gray",
    neutral: "ui-solid-neutral",
  },
  soft: {
    primary: "ui-soft-primary",
    secondary: "ui-soft-secondary",
    accent: "ui-soft-accent",
    success: "ui-soft-success",
    destructive: "ui-soft-destructive",
    warning: "ui-soft-warning",
    info: "ui-soft-info",
    gray: "ui-soft-gray",
    neutral: "ui-soft-neutral",
  },
  subtle: {
    primary: "ui-subtle-primary",
    secondary: "ui-subtle-secondary",
    accent: "ui-subtle-accent",
    success: "ui-subtle-success",
    destructive: "ui-subtle-destructive",
    warning: "ui-subtle-warning",
    info: "ui-subtle-info",
    gray: "ui-subtle-gray",
    neutral: "ui-subtle-neutral",
  },
  outline: {
    primary: "ui-outline-primary",
    secondary: "ui-outline-secondary",
    accent: "ui-outline-accent",
    success: "ui-outline-success",
    destructive: "ui-outline-destructive",
    warning: "ui-outline-warning",
    info: "ui-outline-info",
    gray: "ui-outline-gray",
    neutral: "ui-outline-neutral",
  },
}

export const uiStyles = ({
  variant = "soft",
  intent = "gray",
  className,
}: {
  variant?: UiVariant
  intent?: UiIntent
  className?: string
}) => {
  const intentClass =
    variant === "none" || intent === "none"
      ? ""
      : intentClasses[variant][intent]

  return cx(variantClasses[variant], intentClass, className)
}
