"use client"

import { cx } from "@/lib/utils"
import { uiStyles, type UiVariant, type UiIntent } from "@/lib/ui-variants"
import { resolveIntent, type UiComponentVariant, type UiComponentIntent } from "@/lib/ui-variant-types"

type AvatarSize = "default" | "xs" | "sm" | "md" | "lg" | "xl"
type AvatarRadius = "none" | "default" | "circle"

interface BaseAvatarProps {
  size?: AvatarSize
  radius?: AvatarRadius
  className?: string
}

interface AvatarImageProps extends BaseAvatarProps, React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

interface AvatarPlaceholderProps<V extends UiComponentVariant = "solid"> extends BaseAvatarProps {
  src?: never
  text?: string | null
  variant?: V
  intent?: UiComponentIntent<V>
  children?: React.ReactNode
}

type AvatarProps<V extends UiComponentVariant = "solid"> =
  | AvatarImageProps
  | AvatarPlaceholderProps<V>

const Avatar = <V extends UiComponentVariant = "solid">({
  size = "default",
  radius = "circle",
  className,
  ...props
}: AvatarProps<V> & Omit<React.ComponentPropsWithoutRef<"img" | "span">, "radius">) => {
  const imageSizes: Record<AvatarSize, string> = {
    default: "avatar-md",
    xs: "avatar-xs",
    sm: "avatar-sm",
    md: "avatar-md",
    lg: "avatar-lg",
    xl: "avatar-xl",
  }

  const placeholderSizes: Record<AvatarSize, string> = {
    default: "avatar-placeholder-md",
    xs: "avatar-placeholder-xs",
    sm: "avatar-placeholder-sm",
    md: "avatar-placeholder-md",
    lg: "avatar-placeholder-lg",
    xl: "avatar-placeholder-xl",
  }

  const radii: Record<AvatarRadius, string> = {
    none: "",
    default: "rounded-ui",
    circle: "rounded-full",
  }

  if ("src" in props && props.src) {
    const { src, alt = "", ...restProps } = props as AvatarImageProps & React.ComponentPropsWithoutRef<"img">

    return (
      <img
        src={src}
        alt={alt}
        data-slot="avatar"
        className={cx(
          imageSizes[size] ?? imageSizes["default"],
          "object-cover",
          radii[radius] ?? radii["circle"],
          className,
        )}
        {...restProps}
      />
    )
  }

  const {
    text,
    variant = "solid" as V,
    intent,
    children,
    ...restProps
  } = props as AvatarPlaceholderProps<V> & React.ComponentPropsWithoutRef<"span">

  const resolvedIntent = resolveIntent(variant, intent)
  const uiVariant = (variant === "default" ? "none" : variant) as UiVariant
  const variantClasses = uiStyles({
    variant: uiVariant,
    intent: resolvedIntent as UiIntent<UiVariant>,
  })

  const placeholderRadius = radius === "none" ? "" : (radii[radius] ?? radii["circle"])

  return (
    <span
      data-slot="avatar"
      className={cx(
        "avatar-placeholder",
        placeholderSizes[size] ?? placeholderSizes["default"],
        variantClasses,
        placeholderRadius,
        className,
      )}
      {...restProps}
    >
      {text ? text : children}
    </span>
  )
}

export type { AvatarProps, AvatarSize, AvatarRadius }
export { Avatar }
