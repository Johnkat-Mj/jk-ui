"use client"

import React from 'react';
import {
  SwitchField,
  SwitchButton,
  type SwitchFieldProps,
  type SwitchButtonRenderProps,
  type ValidationResult
} from 'react-aria-components/Switch';
import { cx } from '@/lib/utils';
import { Label, Description, FieldError } from './input';

type SwitchSizes = "xs" | "sm" | "md" | "lg"

interface SwitchProps extends Omit<SwitchFieldProps, 'children'> {
  children?: React.ReactNode | ((values: SwitchButtonRenderProps) => React.ReactNode);
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: SwitchSizes;
  outlined?: boolean;
  indicatorClassName?: string;
  composeAll?: boolean;
}

export function Switch({ size = "sm", indicatorClassName = '', outlined = false, description, errorMessage, composeAll = false, children, ...props }: SwitchProps) {
  return (
    <SwitchField {...props} className="flex flex-col gap-1 group">
      <SwitchButton
        data-slot="control"
        className={cx(
          "group relative",
          props.className,
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
            {composeAll ? <>{children}</> : <>
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
                ] : "",
                indicatorClassName
              )}>
                <span aria-hidden="true" className="switch-knob" />
              </span>
              {typeof children === "function" ? (
                children(values)
              ) : typeof children === "string" ? (
                <SwitchLabel>{children}</SwitchLabel>
              ) : (
                children
              )}
            </>}
          </>
        )}
      </SwitchButton>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </SwitchField>
  );
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
      ] : "",
      className
    )}>
      <span aria-hidden="true" className="switch-knob" />
    </span>
  )
}

export const SwitchLabel = (props: React.ComponentProps<typeof Label>) => {
  return <Label elementType="span" data-slot="label" {...props} />
}
