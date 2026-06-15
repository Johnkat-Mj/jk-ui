"use client"

import React from 'react';
import {
    Switch as AriaSwitch,
    type SwitchProps as AriaSwitchProps
} from 'react-aria-components';
import { cx } from '@/lib/utils';
import { Label } from './input';


type SwitchSizes = "xs" | "sm" | "md" | "lg"
export interface SwitchProps extends AriaSwitchProps {
    outlined?: boolean,
    size?: SwitchSizes,
    indicatorClassName?: string,
    composeAll?: boolean
}



export const SwitchIndicator = ({ size = "sm", outlined = false, className = "" }: { outlined?: boolean, size?: SwitchSizes, className?: string }) => {
    return (
        <span data-slot="indicator" className={cx(
            "switch",
            {
                "switch-xs": size === "xs",
                "switch-sm": size === "sm",
                "switch-md": size === "md",
                "switch-lg": size === "lg",
                "switch-placement-xs": size === "xs",
                "switch-placement-sm": size === "sm",
                "switch-placement-md": size === "md",
                "switch-placement-lg": size === "lg",
            },
            outlined ? [
                "outline-border group-fx-focus-visible:ring-(--ui-input-focus-outline)",
                "outline-1 outline-offset-0"
            ] : ""
            , className)}>
            <span
                aria-hidden="true"
                className={cx(
                    "switch-knob",
                )}
            />
        </span>
    )
}

export const Switch = ({ size = "sm", indicatorClassName = '', outlined = false, className, composeAll = false, children, ...props }: SwitchProps) => {
    return (
        <AriaSwitch
            {...props}
            data-slot="control"
            className={cx(
                "group relative",
                className,
                composeAll ? "" : [
                    "grid cursor-default items-center grid-cols-[1fr_auto]",
                    "gap-x-6 disabled:opacity-50",
                    "*:data-[slot=indicator]:col-start-2 *:data-[slot=label]:col-start-1",
                    "*:data-[slot=label]:row-start-1 *:data-[slot=indicator]:self-start",
                    "has-[[slot=description]]:**:data-[slot=label]:font-medium",
                    "has-[[slot=description]]:**:data-[slot=label]:text-fg-title",
                    "sm:*:data-[slot=indicator]:mt-0.5 *:[[slot=description]]:col-start-1",
                    "*:[[slot=description]]:row-start-2"
                ]
            )}
            style={({ defaultStyle }) => ({
                ...defaultStyle,
                WebkitTapHighlightColor: "transparent",
            })}
        >
            {(values) => (
                <>
                    {
                        composeAll ? <>{children}</> : <>
                            <SwitchIndicator size={size} outlined={outlined} className={indicatorClassName} />
                            {typeof children === "function" ? (
                                children(values)
                            ) : typeof children === "string" ? (
                                <SwitchLabel>{children}</SwitchLabel>
                            ) : (
                                children
                            )}
                        </>
                    }
                </>
            )}
        </AriaSwitch>
    );
}

export const SwitchLabel = (props: React.ComponentProps<typeof Label>) => {
    return <Label data-slot="label" {...props} />
}
