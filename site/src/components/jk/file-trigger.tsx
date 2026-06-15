"use client"

import {
    Button as AriaButton,
    FileTrigger as FileTriggerPrimitive,
    type FileTriggerProps as FileTriggerPrimitiveProps,
} from "react-aria-components"
import { Loader } from "./loader"
import { buttonStyles, type ButtonProps } from "./button"
import { cx } from "@/lib/utils"

export interface FileTriggerProps
    extends FileTriggerPrimitiveProps {
    isDisabled?: boolean
    isPending?: boolean
    ref?: React.RefObject<HTMLInputElement>
    className?: string,
    variant?: "ghost" | "outline" | "soft" | "none" | "solid" | "white/black-outline"
    intent?: ButtonProps<"ghost" | "outline" | "soft" | "none" | "solid" | "white/black-outline">["intent"]
    size?: ButtonProps["size"]
    radius?:ButtonProps['radius']
    iconOnly?: boolean
}

export const FileTrigger = ({
    variant = "outline",
    intent,
    size = "md",
    iconOnly,
    ref,
    radius="default",
    className,
    ...props
}: FileTriggerProps) => {
    return (
        <FileTriggerPrimitive ref={ref} {...props}>
            <AriaButton
                className={buttonStyles({
                    size,
                    variant,
                    intent,
                    iconOnly,
                    radius,
                    className : cx("gap-x-1.5", className)
                })}
                isDisabled={props.isDisabled}

            >
                {!props.isPending ? (
                    props.defaultCamera ? (
                        <span aria-hidden className="iconify size-4 ph--camera" />
                    ) : props.acceptDirectory ? (
                        <span aria-hidden className="iconify size-4 ph--folder" />
                    ) : (
                        <span aria-hidden className="iconify size-4 ph--paperclip" />
                    )
                ) : (
                    <Loader />
                )}
                {props.children ? (
                    props.children
                ) : (
                    <>
                        {props.allowsMultiple
                            ? "Browse a files"
                            : props.acceptDirectory
                                ? "Browse"
                                : "Browse a file"}
                        ...
                    </>
                )}
            </AriaButton>
        </FileTriggerPrimitive>
    )
}
