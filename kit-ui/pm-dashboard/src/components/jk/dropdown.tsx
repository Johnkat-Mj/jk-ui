"use client"

import type {
    ListBoxItemProps,
    ListBoxSectionProps,
    SeparatorProps,
    TextProps,
} from "react-aria-components"
import {
    Collection,
    composeRenderProps,
    Header,
    ListBoxItem as Rac_ListBoxItem,
    ListBoxSection,
    Separator,
    Text,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { Keyboard } from "./keyboard"
import { cx } from "@/lib/utils"

const dropdownSectionStyles = tv({
    slots: {
        section: "col-span-full grid grid-cols-[auto_1fr]",
        header:
            "col-span-full px-3 py-2 font-medium text-muted-foreground text-sm/6 sm:px-2.5 sm:py-1.5 sm:text-xs/3",
    },
})

const { section, header } = dropdownSectionStyles()

interface DropdownSectionProps<T> extends ListBoxSectionProps<T> {
    title?: string
}

const DropdownSection = <T extends object>({
    className,
    children,
    ...props
}: DropdownSectionProps<T>) => {
    return (
        <ListBoxSection className={section({ className })}>
            {"title" in props && <Header className={header()}>{props.title}</Header>}
            <Collection items={props.items}>{children}</Collection>
        </ListBoxSection>
    )
}

const dropdownItemStyles = tv({
    base: [
        "dropdown-item-base",
        "dropdown-item-base-vars",
        "min-w-0 [--mr-icon:--spacing(2.5)] sm:[--mr-icon:--spacing(2)]",
        "not-has-[[slot=description]]:items-center",
        "group relative cursor-default select-none dropdown-item-radius rounded-dropdown-item",
        "outline-0",
        "text-base/6 text-muted-foreground sm:text-sm/6 forced-colors:text-[CanvasText]",
        "ease-linear duration-200",
        "dropdown-item-grid",
        "dropdown-item-icon",
        "dropdown-item-keyboard",
        "dropdown-item-description",
        "dropdown-item-has-description",
        "dropdown-item-label",
        "dropdown-item-avatar",
        "dropdown-item-force-color",
        "dropdown-item-hover",
        "dropdown-item-disabled",
        "dropdown-item-selected",
        "dropdown-item-selected-icon",
        "dropdown-item-selected-avatar-icon",
        "dropdown-item-selected-avatar",
        "ease-linear duration-200",
    ],
    variants: {
        intent: {
            danger: [
                "dropdown-item-danger text-(--dropdown-item-danger-fg)"
            ],
            warning: [
                "dropdown-item-warning text-(--dropdown-item-warning-fg)"
            ],
        },
    },
})

interface DropdownItemProps extends ListBoxItemProps {
    intent?: "danger" | "warning"
}

const DropdownItem = ({ className, children, intent, ...props }: DropdownItemProps) => {
    const textValue = typeof children === "string" ? children : undefined
    return (
        <Rac_ListBoxItem
            textValue={textValue}
            className={composeRenderProps(className, (className, renderProps) =>
                dropdownItemStyles({ ...renderProps, intent, className }),
            )}
            {...props}
        >
            {composeRenderProps(children, (children, { isSelected }) => (
                <>
                    <span data-selected={isSelected ? true : null} aria-hidden="true" data-slot="check-indicator" className={cx(
                        "mr-1.5 -ml-0.5 h-lh shrink-0",
                        " not-fx-selected:hidden ",
                        "group-has-data-[slot=icon]:absolute group-has-data-[slot=icon]:top-1/2 group-has-data-[slot=icon]:right-0.5 group-has-data-[slot=icon]:-translate-y-1/2",
                        "group-has-data-[slot=avatar]:absolute group-has-data-[slot=avatar]:top-1/2 group-has-data-[slot=avatar]:right-0.5 group-has-data-[slot=avatar]:-translate-y-1/2",
                    )}>
                        <svg aria-label="Icon checkmark" className="h-lh w-3.5" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" /></svg>
                    </span>
                    {typeof children === "string" ? <DropdownLabel>{children}</DropdownLabel> : children}
                </>
            ))}
        </Rac_ListBoxItem>
    )
}

interface DropdownLabelProps extends TextProps {
    ref?: React.Ref<HTMLDivElement>
}

const DropdownIcon = ({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            slot="icon"
            data-slot="icon"
            className={cx("w-max flex items-center mr-(--mr-icon)", className)}
            {...props}
        >
            {children}
        </span>
    )
}


const DropdownLabel = ({ className, ref, ...props }: DropdownLabelProps) => (
    <Text slot="label" ref={ref} className={cx("col-start-2 text-sm", className)} {...props} />
)

interface DropdownDescriptionProps extends TextProps {
    ref?: React.Ref<HTMLDivElement>
}

const DropdownDescription = ({ className, ref, ...props }: DropdownDescriptionProps) => (
    <Text
        slot="description"
        ref={ref}
        className={cx("col-start-2 font-normal text-muted-foreground text-sm", className)}
        {...props}
    />
)

const DropdownSeparator = ({ className, ...props }: Omit<SeparatorProps, "orientation">) => (
    <Separator
        orientation="horizontal"
        className={cx("col-span-full -mx-1 h-px bg-fg/10", className)}
        {...props}
    />
)

type DropdownKeyboardProps = React.ComponentProps<typeof Keyboard> & {
    keys?: React.ReactNode
}

const DropdownKeyboard = ({ className, ...props }: DropdownKeyboardProps) => {
    return (
        <Keyboard
            className={cx(
                "absolute right-2 pl-2",
                className,
            )}
            {...props}
        />
    )
}


export type {
    DropdownSectionProps,
    DropdownItemProps,
    DropdownLabelProps,
    DropdownDescriptionProps,
}
export {
    DropdownSeparator,
    DropdownItem,
    DropdownLabel,
    DropdownDescription,
    DropdownKeyboard,
    dropdownItemStyles,
    DropdownSection,
    dropdownSectionStyles,
    DropdownIcon
}
