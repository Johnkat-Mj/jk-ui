import type { RadioGroupProps, RadioProps } from "react-aria-components"
import {
    composeRenderProps,
    RadioGroup as RadioGroupPrimitive,
    Radio as RadioPrimitive,
} from "react-aria-components"
import { cx } from "@/lib/utils"
import { Label } from "./input"

export function RadioGroup({ className, ...props }: RadioGroupProps) {
    return (
        <RadioGroupPrimitive
            {...props}
            data-slot="control"
            className={cx(
                "ui-c_r-group",
                className,
            )}
        />
    )
}

export function Radio({ className, children, ...props }: RadioProps) {
    return (
        <RadioPrimitive {...props} className={cx("group block disabled:opacity-50", className)}>
            {composeRenderProps(children, (children, { isSelected, isFocusVisible, isInvalid }) => {
                const isStringChild = typeof children === "string"
                const content = isStringChild ? <Label>{children}</Label> : children

                return (
                    <div
                        className={cx(
                            "[--radio-size:1.5rem] sm:[--radio-size:1rem]",
                            "[--radio-indicator-size:0.75rem]",
                            "[--radio-indicator-size:1rem] sm:[--radio-indicator-size:0.875rem]",
                            "ui-c_r-wrapper",
                            "ui-c_r-wrapper-label",
                            "ui-c_r-wrapper-description",
                            "ui-c_r-wrapper-indicator",
                            "grid-cols-[var(--radio-size)_1fr]",
                            ""
                        )}
                    >
                        <span
                            data-slot="indicator"
                            data-checked={isSelected ? "true" : "false"}
                            data-invalid={isInvalid ? "true" : "false"}
                            data-focus-visible={isFocusVisible ? "true" : "false"}
                            className={cx([
                                "ui_c_r",
                                "ui-c_r-ring",
                                "ui-radio-base",
                                "ui_color_color_base",
                                "ui_c_r-selected",
                                "ui-c_r-selected-indeterminate",
                                "ui-radio-indicator",
                                "border border-border-input"
                            ])}
                        />
                        {content}
                    </div>
                )
            })}
        </RadioPrimitive>
    )
}
