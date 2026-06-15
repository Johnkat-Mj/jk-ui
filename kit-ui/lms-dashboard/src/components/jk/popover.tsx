import type {
  DialogTriggerProps,
  PopoverProps as RAC_PopoverProps,
} from "react-aria-components"
import {
  DialogTrigger as DialogTriggerPrimitive,
  OverlayArrow,
  Popover as RAC_Popover,
} from "react-aria-components"
import { cx } from "@/lib/utils"
import {
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

type PopoverProps = DialogTriggerProps
const Popover = (props: PopoverProps) => {
  return <DialogTriggerPrimitive {...props} />
}

const PopoverTitle = DialogTitle
const PopoverHeader = DialogHeader
const PopoverBody = DialogBody
const PopoverFooter = DialogFooter

interface PopoverContentProps extends RAC_PopoverProps {
  arrow?: boolean
  ref?: React.Ref<HTMLDivElement>
}

const PopoverContent = ({
  children,
  arrow = false,
  className,
  ref,
  ...props
}: PopoverContentProps) => {
  const offset = props.offset ?? (arrow ? 12 : 8)
  return (
    <RAC_Popover
      ref={ref}
      offset={offset}
      className={cx(
        "group/popover min-w-(--trigger-width) max-w-xs origin-(--trigger-anchor-point)",
        "[--popover-padding:--spacing(1)] [--popover-radius:var(--radius-ui)]",
        "p-(--popover-padding) rounded-(--popover-radius)",
        "border border-fg/10 bg-popover text-fg-muted shadow-xs",
        "outline-hidden transition-transform ",
        "sm:text-sm",
        "entering:fade-in entering:animate-in",
        "exiting:fade-out exiting:animate-out",
        "forced-colors:bg-[Canvas]",
        "popover-animation",
        className,
      )}
      {...props}
    >
      {(values) => (
        <>
          {arrow && (
            <OverlayArrow className="group">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                className="block fill-overlay stroke-border group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrow>
          )}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </RAC_Popover>
  )
}

const PopoverTrigger = DialogTrigger
const PopoverClose = DialogClose
const PopoverDescription = DialogDescription

export type { PopoverProps, PopoverContentProps }
export {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverDescription,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
}
