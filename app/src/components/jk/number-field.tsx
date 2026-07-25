"use client"



import type { ButtonProps, NumberFieldProps } from "react-aria-components"
import { Button, NumberField as NumberFieldPrimitive } from "react-aria-components"
import { Input, InputGroup, type InputProps } from "./input"
import { cx } from "@/lib/utils"
import { fieldStyles } from "./text-field"
import type { ReactNode } from "react"

const NumberField = ({ className, ...props }: NumberFieldProps) => {
    return (
        <NumberFieldPrimitive {...props} data-slot="control" className={cx(fieldStyles(), className)} />
    )
}

function NumberInput({ className, controls, groupClass, ...props }: InputProps & { controls?: ReactNode, groupClass?: boolean }) {
    return (
        <InputGroup className={cx("[--input-gutter-end:--spacing(20)]", groupClass)}>
            <Input variant="unstyled" className={cx("tabular-nums ps-3", className)} {...props} />
            {
                !controls ? (
                    <div
                        data-slot="text"
                        className="in-disabled:pointer-events-none pointer-events-auto inset-e-0 p-px in-disabled:opacity-50"
                    >
                        <div className="flex h-full items-center divide-x divide-border-input border-border-input overflow-hidden rounded-e-[calc(var(--radius-lg)-1px)] border-s">
                            <StepperButton slot="decrement" />
                            <StepperButton slot="increment" />
                        </div>
                    </div>
                ) : <>
                    {controls}
                </>
            }
        </InputGroup>
    )
}

interface StepperButtonProps extends ButtonProps {
    slot: "increment" | "decrement"
    emblemType?: "chevron" | "default"
    className?: string,
    unStyled?: boolean,
    icon?: string
}

const StepperButton = ({
    slot,
    className,
    emblemType = "default",
    unStyled = false,
    icon,
    ...props
}: StepperButtonProps) => {
    return (
        <Button
            className={cx(
                !unStyled ? [
                    "inline-grid place-content-center pressed:text-foreground text-muted-foreground enabled:hover:text-foreground",
                    "size-full min-w-11 grow bg-input/20 pressed:bg-input/60 sm:min-w-8.5",
                    "disabled:pointer-events-none disabled:opacity-50"
                ] : '',
                className,
            )}
            slot={slot}
            {...props}
        >
            <span aria-hidden className={cx("size-4 iconify", {
                "ph--plus": !icon && slot === "increment",
                "ph--minus": !icon && slot === "decrement",
            }, icon ?? '')} data-slot="stepper-icon" />
        </Button>
    )
}


export type { NumberFieldProps }
export { NumberInput, NumberField, StepperButton }