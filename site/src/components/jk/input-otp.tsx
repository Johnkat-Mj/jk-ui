"use client"

import { OTPInput, OTPInputContext } from "input-otp"
import { use } from "react"
import { Label } from "./input"
import { cx } from "@/lib/utils"
import { tv } from "tailwind-variants"

export const InputOTP = ({
    className,
    containerClassName,
    ...props
}: React.ComponentPropsWithoutRef<typeof OTPInput>) => {
    return (
        <span data-slot="control" className="relative block">
            <OTPInput
                data-slot="input-otp"
                containerClassName={
                    cx(
                        "has-[:disabled]:opacity-50 ",
                        "",
                        containerClassName
                    )
                }
                {...props}
            />
        </span>
    )
}

export const InputOTPControl = ({ className, ...props }: React.ComponentProps<"span">) => {
    return (
        <span
            data-slot="control"
            className={cx("flex items-center gap-2 has-disabled:opacity-50", className)}
            {...props}
        />
    )
}

export const InputOTPGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot="input-otp-group"
            className={cx("flex items-center gap-2", className)}
            {...props}
        />
    )
}


const inputOtpVariants = tv({
    base: [
        "relative ui-form-ring-base ui-input-opt-ring ui-input-opt-ring-danger ui-form-otp-outline",
        "flex items-center justify-center text-fg data-[active=true]:z-10"
    ],
    variants: {
        size: {
            none: "",
            sm: "size-8 text-xs",
            md: "size-9 text-sm",
            lg: "size-10 text-sm",
        },
        border: {
            true: "border border-border-input",
            false: "",
        },
        bg: {
            true: "bg-bg",
            false: "",
        },
        radius: {
            none: "",
            default: "rounded-ui",
        },
    },
    defaultVariants: {
        size: "md",
        border: true,
        bg: true,
        radius: "default",
    },
    compoundVariants: [
        {
            class: "",
        },
    ],
})
export const InputOTPSlot = ({
    index,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    index: number
}) => {
    const inputOTPContext = use(OTPInputContext)
    const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}
    // className

    // "relative flex size-9 items-center justify-center border-input",
    //                 "border-y border-r shadow-xs outline-none transition-all",
    //                 "",
    //                 "",
    //                 "last:rounded-r-(--input-otp-radius) aria-invalid:border-danger",
    //                 " ",
    //                 "data-[active=true]:bg-primary-subtle/10 data-[active=true]:ring-3",

    //                 "sm:text-sm/6 "
    return (
        <div
            data-slot="input-otp-slot"
            data-active={isActive}
            className={inputOtpVariants({
                className: className
            })}
            {...props}
        >
            {char}
            {hasFakeCaret ? (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-px animate-caret-blink bg-fg duration-1000" />
                </div>
            ) : null}
        </div>
    )
}

export const InputOTPSeparator = ({ ...props }: React.ComponentProps<"div">) => {
    return (
        <div data-slot="input-otp-separator" {...props}>
            <span aria-hidden className="text-sm iconify ph--minus-bold" />
        </div>
    )
}

export const InputOTPLabel = (props: React.ComponentProps<typeof Label>) => {
    return <Label elementType="span" {...props} />
}
