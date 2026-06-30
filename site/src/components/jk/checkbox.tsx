"use client"

import {
  CheckboxField,
  CheckboxButton,
  type CheckboxFieldProps,
  type ValidationResult
} from 'react-aria-components/Checkbox';
import {
  CheckboxGroup as RAC_CheckboxGroup,
  type CheckboxGroupProps
} from 'react-aria-components/CheckboxGroup';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { cx } from "@/lib/utils"
import { Label, Description, FieldError } from "./input"

export function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <RAC_CheckboxGroup
      {...props}
      data-slot="control"
      className={cx(
        "ui-c_r-group",
        className,
      )}
    />
  )
}

const CheckIcon = ({ ...rest }: React.SVGProps<SVGSVGElement>) => <svg aria-label="check icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...rest}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

const MinusIcon = ({ ...rest }: React.SVGProps<SVGSVGElement>) => <svg aria-label="Minus icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...rest}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>

interface CheckboxProps extends CheckboxFieldProps {
  children?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function Checkbox({ children, description, errorMessage, ...props }: CheckboxProps) {
  return (
    <CheckboxField {...props} className="flex flex-col gap-1 group">
      <CheckboxButton
        data-slot="control"
        className={cx(
          "group block disabled:opacity-50",
          "[--checkbox-size:1.5rem] sm:[--checkbox-size:1rem]",
          "[--checkbox-indicator-size:1rem] sm:[--checkbox-indicator-size:0.875rem]",
          "ui-c_r-wrapper",
          "ui-c_r-wrapper-label",
          "ui-c_r-wrapper-description",
          "ui-c_r-wrapper-indicator",
          "grid-cols-[var(--checkbox-size)_1fr]",
          props.className,
        )}>
        {composeRenderProps(
          children,
          (children, { isSelected, isIndeterminate, isFocusVisible, isInvalid }) => {
            const isStringChild = typeof children === "string"
            const indicator = isIndeterminate ? (
              <MinusIcon data-slot="check-indicator" className="text-current" />
            ) : isSelected ? (
              <CheckIcon data-slot="check-indicator" className="text-current" />
            ) : null

            const content = isStringChild ? <CheckboxLabel>{children}</CheckboxLabel> : children

            return (
              <>
                <span
                  data-checked={isSelected ? "true" : "false"}
                  data-indeterminate={isIndeterminate ? "true" : "false"}
                  data-invalid={isInvalid ? "true" : "false"}
                  data-focus-visible={isFocusVisible ? "true" : "false"}
                  data-slot="indicator"
                  className={cx([
                    "ui-checkbox-base",
                    "ui-c_r-ring",
                    "ui_c_r",
                    "ui_color_color_base",
                    "rounded transition",
                    "ui-c_r-selected-indeterminate",
                    "ui_c_r-selected",
                    "border border-border-input"
                  ])}
                >
                  {indicator}
                </span>
                {content}
              </>
            )
          },
        )}
      </CheckboxButton>
      {description && <Description className="ms-6.5">{description}</Description>}
      <FieldError className="ms-6.5">{errorMessage}</FieldError>
    </CheckboxField>
  )
}

export function CheckboxLabel(props: React.ComponentProps<typeof Label>) {
  return <Label elementType="span" {...props} />
}
