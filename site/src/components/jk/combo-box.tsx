"use client"


import type {
    ComboBoxProps as ComboBoxPrimitiveProps,
    ComboBoxValueProps,
    ListBoxProps,
    PopoverProps,
} from "react-aria-components"


import {
    Button,
    ComboBoxContext,
    ComboBox as ComboBoxPrimitive,
    ComboBoxValue as ComboBoxValuePrimitive,
    ListBox,
    useSlottedContext,
} from "react-aria-components"
import { fieldStyles } from "./text-field"
import { Input, type InputProps } from "./input"
import { cx } from "@/lib/utils"
import { DropdownDescription, DropdownItem, DropdownLabel, DropdownSection } from "./dropdown"
import { PopoverContent } from "./popover"

interface ComboBoxProps<T extends object, M extends "single" | "multiple" = "single">
    extends Omit<ComboBoxPrimitiveProps<T, M>, "children"> {
    children: React.ReactNode
}

const ComboBox = <T extends object, M extends "single" | "multiple" = "single">({
    className,
    ...props
}: ComboBoxProps<T, M>) => {
    return (
        <ComboBoxPrimitive data-slot="control" className={cx(fieldStyles(), className)} {...props} />
    )
}

interface ComboBoxListProps<T extends object>
    extends Omit<ListBoxProps<T>, "layout" | "orientation">,
    Pick<PopoverProps, "placement"> {
    popover?: Omit<PopoverProps, "children">
}

const ComboBoxContent = <T extends object>({
    children,
    items,
    className,
    popover,
    ...props
}: ComboBoxListProps<T>) => {
    return (
        <PopoverContent
            placement={popover?.placement ?? "bottom"}
            className={cx(
                "min-w-(--trigger-width) scroll-py-1 overflow-y-auto overscroll-contain",
                popover?.className,
            )}
            {...popover}
        >
            <ListBox
                layout="stack"
                orientation="vertical"
                className={cx(
                    "grid max-h-96 w-full grid-cols-[auto_1fr] flex-col gap-y-1 overflow-y-auto p-1 outline-hidden *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
                    className,
                )}
                items={items}
                {...props}
            >
                {children}
            </ListBox>
        </PopoverContent>
    )
}

const ComboBoxInput = ({ className, placeholder, wrapperClass = '', ...rest }: InputProps & { wrapperClass?: string }) => {
    const context = useSlottedContext(ComboBoxContext)!
    return (
        <span
            data-slot="control"
            className={cx(
                "relative isolate block flex-1",
                wrapperClass
            )}
        >
            <Input className={cx("pe-10", className)} {...rest} placeholder={placeholder} />
            <Button className="absolute inset-e-0 top-0 grid h-full w-11 cursor-default place-content-center sm:w-9">
                {!context?.inputValue && (
                    <svg
                        data-slot="chevron"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="caret up down"
                        width={32}
                        height={32}
                        fill="#000000"
                        viewBox="0 0 256 256"
                        className="fill-fg-muted -me-1 size-5 sm:size-4"
                    >
                        <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" />
                    </svg>
                )}
            </Button>
        </span>
    )
}

const ComboBoxSection = DropdownSection
const ComboBoxItem = DropdownItem
const ComboBoxLabel = DropdownLabel
const ComboBoxDescription = DropdownDescription
const ComboBoxValue = <T extends object>(props: ComboBoxValueProps<T>) => (
    <ComboBoxValuePrimitive data-slot="control" {...props} />
)

export type { ComboBoxProps, ComboBoxListProps }
export {
    ComboBox,
    ComboBoxInput,
    ComboBoxContent,
    ComboBoxItem,
    ComboBoxLabel,
    ComboBoxDescription,
    ComboBoxSection,
    ComboBoxValue,
}
