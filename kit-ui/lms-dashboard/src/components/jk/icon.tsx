import { cx } from "@/lib/utils"

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  intent?: "current" | "fg" | "muted" | "primary" | "secondary" | "success" | "warning" | "destructive"
}

const sizeClasses = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-6.5",
  xl: "size-7.5",
  "2xl": "size-9",
} as const

const intentClasses = {
  current: "text-current",
  fg: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
} as const

export function Icon({
  name,
  size = "sm",
  intent = "current",
  className,
  ...props
}: IconProps) {
  const sizeClass = sizeClasses[size] ?? sizeClasses.md
  const intentClass = intentClasses[intent] ?? intentClasses.current

  return (
    <span
      data-slot="icon"
      aria-hidden="true"
      className={cx("flex iconify", name, sizeClass, intentClass, className)}
      {...props}
    />
  )
}
