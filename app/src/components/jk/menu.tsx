"use client"

import type {
    ButtonProps,
    MenuItemProps as MenuItemPrimitiveProps,
    MenuProps as MenuPrimitiveProps,
    MenuSectionProps as MenuSectionPrimitiveProps,
    MenuTriggerProps as MenuTriggerPrimitiveProps,
} from "react-aria-components"
import {
    Button,
    Collection,
    composeRenderProps,
    Header,
    MenuItem as MenuItemPrimitive,
    Menu as MenuPrimitive,
    MenuSection as MenuSectionPrimitive,
    MenuTrigger as MenuTriggerPrimitive,
    SubmenuTrigger as SubmenuTriggerPrimitive,
} from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"
import { cx } from "@/lib/utils"
import {
    DropdownDescription,
    DropdownIcon,
    DropdownKeyboard,
    DropdownLabel,
    DropdownSeparator,
    dropdownItemStyles,
    dropdownSectionStyles,
} from "./dropdown"
import { PopoverContent, type PopoverContentProps } from "./popover"

const Menu = (props: MenuTriggerPrimitiveProps) => <MenuTriggerPrimitive {...props} />

const MenuSubMenu = ({ delay = 0, ...props }) => (
    <SubmenuTriggerPrimitive {...props} delay={delay}>
        {props.children}
    </SubmenuTriggerPrimitive>
)

interface MenuTriggerProps extends ButtonProps {
    ref?: React.Ref<HTMLButtonElement>
}

const MenuTrigger = ({ className, ref, ...props }: MenuTriggerProps) => (
    <Button
        ref={ref}
        data-slot="menu-trigger"
        className={cx(
            "relative inline text-left outline-hidden focus-visible:ring-1 focus-visible:ring-primary",
            "*:data-[slot=chevron]:size-5 sm:*:data-[slot=chevron]:size-4",
            className,
        )}
        {...props}
    />
)

interface MenuContentProps<T>
    extends MenuPrimitiveProps<T>,
    Pick<PopoverContentProps, "placement"> {
    className?: string
    popover?: Pick<
        PopoverContentProps,
        | "arrow"
        | "className"
        | "placement"
        | "offset"
        | "crossOffset"
        | "arrowBoundaryOffset"
        | "triggerRef"
        | "isOpen"
        | "onOpenChange"
        | "shouldFlip"
    >
}

const menuContentStyles = tv({
    base: "grid max-h-[inherit] grid-cols-[auto_1fr] gap-y-1 overflow-y-auto overflow-x-hidden overscroll-contain outline-hidden *:[[role='group']+[role=group]]:mt-3",
})

const MenuContent = <T extends object>({
    className,
    placement,
    popover,
    ...props
}: MenuContentProps<T>) => {
    return (
        <PopoverContent
            className={cx("min-w-32", popover?.className)}
            placement={placement}
            {...popover}
        >
            <MenuPrimitive
                data-slot="menu-content"
                className={menuContentStyles({ className: cx(className, "p-0") })}
                {...props}
            />
        </PopoverContent>
    )
}

interface MenuItemProps extends MenuItemPrimitiveProps, VariantProps<typeof dropdownItemStyles> { }

const MenuItem = ({ className, intent, children, ...props }: MenuItemProps) => {
    const textValue = props.textValue || (typeof children === "string" ? children : undefined)
    return (
        <MenuItemPrimitive
            data-slot="menu-item"
            className={composeRenderProps(className, (className, { hasSubmenu, ...renderProps }) =>
                dropdownItemStyles({
                    ...renderProps,
                    intent,
                    className: hasSubmenu
                        ? cx(
                            intent === "destructive" && "open:bg-destructive-subtle open:text-destructive-subtle-fg",
                            intent === "warning" && "open:bg-warning-subtle open:text-warning-subtle-fg",
                            intent === undefined &&
                            className,
                            "text-muted-foreground",
                        )
                        : className,
                }),
            )}
            textValue={textValue}
            {...props}
        >
            {(values) => (
                <>
                    {values.isSelected && (
                        <span
                            className={cx(
                                "group-has-data-[slot=avatar]:absolute group-has-data-[slot=avatar]:right-0",
                                "group-has-data-[slot=icon]:absolute group-has-data-[slot=icon]:right-0",
                            )}
                        >
                            {values.selectionMode === "single" || values.selectionMode === "multiple" ? (
                                <svg aria-hidden className="-mx-0.5 mr-2 size-4 fill-current" aria-label="Icon check" data-slot="check-indicator" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="#000000" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" /></svg>
                            ) : null}

                        </span>
                    )}

                    {typeof children === "function" ? children(values) : children}

                    {values.hasSubmenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden aria-label="icon caret right" className="absolute right-2 fill-current size-3.5" width={32} height={32} fill="#000000" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" /></svg>
                    ) : null}
                </>
            )}
        </MenuItemPrimitive>
    )
}

export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
    separator?: boolean
}

const MenuHeader = ({ className, separator = false, ...props }: MenuHeaderProps) => (
    <Header
        className={cx(
            "col-span-full px-2.5 py-2 font-medium text-base sm:text-sm",
            separator && "-mx-1 border-b border-foreground/10 sm:px-3 sm:pb-2.5",
            className,
        )}
        {...props}
    />
)

const { section, header } = dropdownSectionStyles()

interface MenuSectionProps<T> extends MenuSectionPrimitiveProps<T> {
    ref?: React.Ref<HTMLDivElement>
    label?: string
}

const MenuSection = <T extends object>({
    className,
    children,
    ref,
    ...props
}: MenuSectionProps<T>) => {
    return (
        <MenuSectionPrimitive ref={ref} className={section({ className })} {...props}>
            {"label" in props && <Header className={header()}>{props.label}</Header>}
            <Collection items={props.items}>{children}</Collection>
        </MenuSectionPrimitive>
    )
}

const MenuSeparator = DropdownSeparator
const MenuShortcut = DropdownKeyboard
const MenuLabel = DropdownLabel
const MenuDescription = DropdownDescription
const MenuIcon = DropdownIcon

export type { MenuContentProps, MenuTriggerProps, MenuItemProps, MenuSectionProps }
export {
    menuContentStyles,
    Menu,
    MenuShortcut,
    MenuContent,
    MenuHeader,
    MenuItem,
    MenuSection,
    MenuSeparator,
    MenuLabel,
    MenuDescription,
    MenuTrigger,
    MenuSubMenu,
    MenuIcon
}
