"use client"

import { tv } from "tailwind-variants"
import {

  TextArea as RACTextArea,
  type TextAreaProps as RACTextAreaProps,
} from "react-aria-components"
import { useId } from "react"
import { cx } from "@/lib/utils"
import { InputVariant, Label } from "./input"



export const textareaVariants = tv({
  base: "ui-form-base ",
  variants: {
    size: {
      none: "",
      sm: "",
      md: "",
      lg: "",
    },
    variant: {
      default: "ui-form-input ui-form-outline text-fg ui-form-ring-base ui-form-ring border border-border-input bg-bg rounded-ui",
      outline: "ui-form-input ui-form-outline text-fg ui-form-ring-base ui-form-ring border border-border-input bg-transparent rounded-ui",
      flush: "ui-form-input ui-form-outline text-fg ui-form-ring-base ui-form-ring rounded-ui",
      unstyled: "",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
})

export interface TextareaProps extends Omit<RACTextAreaProps, "size"> {
  ref?: React.RefObject<HTMLTextAreaElement | null>
  size?: "none" | "sm" | "md" | "lg"
  variant?: InputVariant
  label?: string
  inlinedLabel?: boolean
  labelClass?: string
  className?: string
  fieldGroupClass?: string
}

export const Textarea = ({
  className,
  ref,
  size = "md",
  variant = "default",
  label,
  inlinedLabel = false,
  labelClass = "",
  id,
  fieldGroupClass = '',
  ...props
}: TextareaProps) => {
  const generatedId = useId();
  const textareaId = id || generatedId;

  const textareaElement = (
    <RACTextArea
      ref={ref}
      id={textareaId}
      className={textareaVariants({
        size: variant === "unstyled" ? "none" : size,
        variant,
        className: `appearance-none ${className}`,
      })}
      {...props}
    />
  )

  if (label) {
    const groupWrapper = inlinedLabel
      ? "flex items-start gap-2"
      : "flex flex-col space-y-2"

    return (
      <div className={cx(groupWrapper, fieldGroupClass)}>
        <Label htmlFor={textareaId} text={label} className={labelClass} />
        {textareaElement}
      </div>
    )
  }

  return textareaElement
}