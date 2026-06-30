"use client"


import type { DialogProps, DialogTriggerProps, ModalOverlayProps } from "react-aria-components"
import {
  DialogTrigger as RAC_DialogTrigger,
  ModalOverlay,
  Modal as RAC_Modal,
} from "react-aria-components/Modal"
import { cx } from "@/lib/utils"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogCloseIcon,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

const Modal = (props: DialogTriggerProps) => {
  return <RAC_DialogTrigger {...props} />
}

const sizes = {
  "2xs": "sm:max-w-2xs",
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
  fullscreen: "max-w-full",
}

interface ModalContentProps
  extends Omit<ModalOverlayProps, "children">,
    Pick<DialogProps, "aria-label" | "aria-labelledby" | "role" | "children"> {
  size?: keyof typeof sizes
  closeButton?: boolean
  isBlurred?: boolean
  overlay?: Omit<ModalOverlayProps, "children">
}

const ModalContent = ({
  className,
  isDismissable: isDismissableInternal,
  isBlurred = false,
  children,
  overlay,
  size = "lg",
  role = "dialog",
  closeButton = true,
  ...props
}: ModalContentProps) => {
  const isDismissable = isDismissableInternal ?? role !== "alertdialog"

  return (
    <ModalOverlay
      data-slot="modal-overlay"
      isDismissable={isDismissable}
      className={cx(
        "modal-overlay",
        "modal-overlay-grid",
        size === "fullscreen" ? "md:p-3" : "md:p-4",
        "modal-overlay-entering",
        "modal-overlay-exiting",
        isBlurred && "backdrop-blur-xs",
      )}
      {...props}
    >
      <RAC_Modal
        data-slot="modal-content"
        className={cx(
          "row-start-2 w-full text-left align-middle",
          "[--visual-viewport-vertical-padding:16px]",
          size === "fullscreen"
            ? "modal-size-fullscreen"
            : "sm:rounded-xl sm:[--visual-viewport-vertical-padding:32px]",
          "relative overflow-hidden bg-overlay text-fg-muted",
          "rounded-t-2xl shadow-lg ring ring-fg/5 dark:ring-border",
          sizes[size],
          "modal-transition-entering",
          "modal-transition-exiting",
          className,
        )}
        {...props}
      >
        <Dialog role={role}>
          {(values) => (
            <>
              {typeof children === "function" ? children(values) : children}
              {closeButton ? <DialogCloseIcon isDismissable={isDismissable} />:null}
            </>
          )}
        </Dialog>
      </RAC_Modal>
    </ModalOverlay>
  )
}

const ModalTrigger = DialogTrigger
const ModalHeader = DialogHeader
const ModalTitle = DialogTitle
const ModalDescription = DialogDescription
const ModalFooter = DialogFooter
const ModalBody = DialogBody
const ModalClose = DialogClose

export {
  Modal,
  ModalTrigger,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalBody,
  ModalClose,
  ModalContent,
}
