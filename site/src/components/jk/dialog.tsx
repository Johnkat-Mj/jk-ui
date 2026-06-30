"use client"



import type { HeadingProps, TextProps } from "react-aria-components"
import {
  Dialog as RAC_Dialog,
} from "react-aria-components/Dialog"
import {
  Button as RAC_Button
} from "react-aria-components/Button"
import {
  Heading
} from "react-aria-components/Heading"
import { cx } from "@/lib/utils"
import { Button, type ButtonProps } from "./button"

const Dialog = ({
  role = "dialog",
  className,
  ...props
}: React.ComponentProps<typeof RAC_Dialog>) => {
  return (
    <RAC_Dialog
      data-slot="dialog"
      role={role}
      className={cx(
        "peer/dialog group/dialog relative flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-hidden outline-hidden [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",
        className,
      )}
      {...props}
    />
  )
}

const DialogTrigger = ({ className, ...props }: ButtonProps) => (
  <RAC_Button className={cx("cursor-pointer", className)} {...props} />
)

interface DialogHeaderProps extends Omit<React.ComponentProps<"div">, "title"> {
  title?: string
  description?: string,
  paddingNone?: boolean
}

const DialogHeader = ({ className, paddingNone = false, ...props }: DialogHeaderProps) => {
  return (
    <div
      data-slot="dialog-header"
      className={cx(
        "relative",
        "flex flex-col items-start gap-1.5",
        {
          'px-(--gutter) py-[calc(var(--gutter)-(--spacing(3)))]': !paddingNone,
        },
        className,
      )}
    >
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      {props.description && <DialogDescription>{props.description}</DialogDescription>}
      {!props.title && typeof props.children === "string" ? (
        <DialogTitle>{props.children}</DialogTitle>
      ) : (
        props.children
      )}
    </div>
  )
}

interface DialogTitleProps extends HeadingProps {
  ref?: React.Ref<HTMLHeadingElement>
}
const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
  <Heading
    slot="title"
    ref={ref}
    className={cx("text-balance font-semibold text-fg-title text-lg/6 sm:text-base/6", className)}
    {...props}
  />
)

interface DialogDescriptionProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}
const DialogDescription = ({ className, ref, ...props }: DialogDescriptionProps) => (
  <p
    data-slot="description"
    className={cx(
      "text-pretty text-base/6 text-fg-muted group-disabled:opacity-50 sm:text-sm/6",
      className,
    )}
    ref={ref}
    {...props}
  />
)

type DialogBodyProps = React.ComponentProps<"div">
const DialogBody = ({ className, ...props }: DialogBodyProps) => (
  <div
    data-slot="dialog-body"
    className={cx(
      "isolate flex flex-1 overflow-y-auto min-h-0 flex-col overflow-auto",
      "px-(--gutter) py-1",
      className,
    )}
    {...props}
  />
)

interface DialogFooterProps extends React.ComponentProps<"div"> {
  justify?: "start" | "end" | "between" | "center"
}
const DialogFooter = ({ className, justify = "end", ...props }: DialogFooterProps) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cx(
        "isolate mt-auto",
        "dialog-footer",
        {
          'justify-start': justify === 'start',
          'justify-end': justify == 'end',
          'justify-between': justify == 'between',
          'justify-center': justify == 'center'
        },
        className,
      )}
      {...props}
    />
  )
}

const DialogClose = ({ variant = "outline", intent = "outline-gray", ref, ...props }: ButtonProps<"outline">) => {
  return <Button variant={variant} slot="close" ref={ref} intent={intent} {...props} />
}

interface CloseButtonIndicatorProps extends Omit<ButtonProps, "children"> {
  className?: string
  isDismissable?: boolean | undefined
}

const DialogCloseIcon = ({ className, ...props }: CloseButtonIndicatorProps) => {
  return props.isDismissable ? (
    <Button size="sm" iconOnly
      aria-label="Close"
      slot="close"
      className={cx(
        "close absolute top-1 right-1 z-50",
        className
      )}
      variant="ghost"
    >
      <span aria-hidden="true" className="iconify ph--x text-sm"></span>
    </Button>
  ) : null
}

export type {
  DialogHeaderProps,
  DialogTitleProps,
  DialogBodyProps,
  DialogFooterProps,
  DialogDescriptionProps,
  CloseButtonIndicatorProps,
}
export {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogCloseIcon,
}
