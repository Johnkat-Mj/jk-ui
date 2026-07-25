"use client"


import { tv } from "tailwind-variants"
import {
  type FieldErrorProps,
  Group,
  type GroupProps,
  Input as RACInput,
  type InputProps as RACInputProps,
  Label as RACLabel,
  type LabelProps as RACLabelProps,
  Text,
  type TextProps,
  FieldError as RACFieldError
} from "react-aria-components"
import { useId } from "react"
import { cx } from "@/lib/utils"


export type InputSize = "none" | "sm" | "md" | "lg"
export type InputVariant = "default" | "outline" | "flush" | "unstyled"
// ============================================================================
// Label Component
// ============================================================================

const labelVariants = tv({
  base: "text-sm font-medium leading-none text-muted-foreground block peer-disabled:cursor-not-allowed peer-disabled:opacity-70 disabled:opacity-70",
})

interface LabelProps extends RACLabelProps {
  htmlFor?: string
  text?: string
  className?: string
  children?: React.ReactNode
}

export const Label = ({
  htmlFor,
  text,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <RACLabel
      htmlFor={htmlFor}
      className={labelVariants({ className })}
      {...props}
    >
      {text ?? children}
    </RACLabel>
  )
}


export function FieldError(props: FieldErrorProps) {
  return <RACFieldError {...props} className={cx(props.className, 'text-sm text-red-600 forced-colors:text-[Mark]')} />
}

// ============================================================================
// Description
// ============================================================================
export const descriptionStyles = tv({
  base: "block text-muted-foreground text-sm/6 in-disabled:opacity-50 group-disabled:opacity-50",
})
export function Description({ className, ...props }: TextProps) {
  return <Text {...props} slot="description" className={descriptionStyles({ className })} />
}


// ============================================================================
// InputGroup Component
// ============================================================================

export const inputGroupVariants = tv({
  base: "ui-form-group-base ui-form-group ui-form-group-ring ui-form-ring-base relative flex text-foreground",
  variants: {
    size: {
      none: "",
      sm: "h-8",
      md: "h-9",
      lg: "h-10",
    },
    variant: {
      default: "border border-input bg-background ",
      outline: "border border-input bg-transparent ",
      flush: "rounded-ui",
      unstyled: "",
    },
    radius:{
      true:"rounded-ui",
      false:""
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default",
    radius:true
  },
})

interface InputGroupProps extends Omit<GroupProps, "children"> {
  size?: InputSize,
  variant?: InputVariant
  className?: string
  children?: React.ReactNode,
  radius?:boolean
}

export const InputGroup = ({
  size = "md",
  variant = "default",
  className,
  children,
  radius,

  ...props
}: InputGroupProps) => {
  return (
    <Group
      data-slot="control"
      className={inputGroupVariants({
        size,
        variant,
        className,
        radius
      })}
      {...props}
    >
      {children}
    </Group>
  )
}

// ============================================================================
// InputGroup.Leading Component
// ============================================================================

interface InputGroupLeadingProps extends React.HTMLAttributes<HTMLSpanElement> {
  absolute?: boolean
  className?: string
  clickable?: boolean
  children?: React.ReactNode
}

export const InputLeading = ({
  absolute = false,
  className = "",
  clickable,
  children,
  ...props
}: InputGroupLeadingProps) => {
  const positionClass = absolute ? "absolute inset-y-0 left-[var(--left-space,12px)]" : ""
  return (
    <span
      className={cx(className, positionClass, "flex justify-center items-center", {
        "pointer-events-none": !clickable && absolute
      })}
      {...props}
    >
      {children}
    </span>
  )
}

// ============================================================================
// InputGroup.Trailing Component
// ============================================================================

interface InputGroupTrailingProps extends React.HTMLAttributes<HTMLSpanElement> {
  absolute?: boolean
  className?: string
  clickable?: boolean
  children?: React.ReactNode
}

export const InputTrailing = ({
  absolute = false,
  className = "",
  children,
  clickable,
  ...props
}: InputGroupTrailingProps) => {
  const positionClass = absolute ? "absolute inset-y-0 flex items-center right-[var(--right-space,12px)]" : ""
  return (
    <span
      className={cx(className, positionClass, "flex justify-center items-center", {
        "pointer-events-none": !clickable && absolute
      })}
      {...props}
    >
      {children}
    </span>
  )
}

// Attach sub-components to InputGroup
InputGroup.Leading = InputLeading
InputGroup.Trailing = InputTrailing

// ============================================================================
// Input Component
// ============================================================================

export const inputVariants = tv({
  base: "ui-form-base ",
  variants: {
    size: {
      none: "",
      sm: "ui-form-input-sm",
      md: "ui-form-input-md",
      lg: "ui-form-input-lg",
    },
    variant: {
      default: "ui-form-input ui-form-outline text-foreground ui-form-ring-base ui-form-ring border border-input bg-background rounded-ui",
      outline: "ui-form-input ui-form-outline text-foreground ui-form-ring-base ui-form-ring border border-input bg-transparent rounded-ui",
      flush: "ui-form-input ui-form-outline text-foreground ui-form-ring-base ui-form-ring rounded-ui",
      unstyled: "",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
})

export interface InputProps extends Omit<RACInputProps, "size"> {
  ref?: React.RefObject<HTMLInputElement | null>
  size?: "none" | "sm" | "md" | "lg"
  variant?: InputVariant
  label?: string
  inlinedLabel?: boolean
  labelClass?: string
  className?: string
  fieldGroupClass?: string
}

export const Input = ({
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
}: InputProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const inputElement = (
    <RACInput
      ref={ref}
      id={inputId}
      className={inputVariants({
        size: variant === "unstyled" ? "none" : size,
        variant,
        className: `[&::-webkit-search-cancel-button]:hidden appearance-none ${className}`,
      })}
      {...props}
    />
  )

  if (label) {
    const groupWrapper = inlinedLabel
      ? "flex items-center gap-2"
      : "flex flex-col space-y-2"

    return (
      <div className={cx(groupWrapper, fieldGroupClass)}>
        <Label htmlFor={inputId} text={label} className={labelClass} />
        {inputElement}
      </div>
    )
  }

  return inputElement
}
