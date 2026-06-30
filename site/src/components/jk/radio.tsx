"use client"

import React from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import {
  RadioField,
  RadioButton,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioFieldProps,
  type RadioButtonRenderProps
} from 'react-aria-components/RadioGroup';
import { cx } from '@/lib/utils';
import { Label, Description } from './input';

export function RadioGroup({ className, ...props }: RACRadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      data-slot="control"
      className={cx(
        "ui-c_r-group",
        className,
      )}
    />
  )
}

interface RadioProps extends Omit<RadioFieldProps, 'children'> {
  children?: React.ReactNode | ((values: RadioButtonRenderProps) => React.ReactNode);
  description?: string;
}

export function Radio({ children, description, className, ...props }: RadioProps) {
  return (
    <RadioField {...props} className="flex flex-col gap-1 group">
      <RadioButton
        className={cx(
          "group block disabled:opacity-50",
          "[--radio-size:1.5rem] sm:[--radio-size:1rem]",
          "[--radio-indicator-size:0.75rem]",
          "[--radio-indicator-size:1rem] sm:[--radio-indicator-size:0.875rem]",
          "ui-c_r-wrapper",
          "ui-c_r-wrapper-label",
          "ui-c_r-wrapper-description",
          "ui-c_r-wrapper-indicator",
          "grid-cols-[var(--radio-size)_1fr]",
          className,
        )}>
        {composeRenderProps(children, (children, { isSelected, isFocusVisible, isInvalid }) => {
          const isStringChild = typeof children === "string"
          const content = isStringChild ? <Label>{children}</Label> : children

          return (
            <>
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
            </>
          )
        })}
      </RadioButton>
      {description && <Description className="ms-6.5">{description}</Description>}
    </RadioField>
  )
}
