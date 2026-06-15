"use client"

import {
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
 type  DateInputProps,
  DateSegment,
 type DateValue,
  type ValidationResult
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Description, FieldError, inputGroupVariants, type InputSize, Label } from './input';
import { cx } from '@/lib/utils';

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  size?: InputSize,
  border?: boolean
  bgNone?: boolean
  radius?: boolean
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function InputDate<T extends DateValue>(
  { label, description, errorMessage, size, radius=true, ...props }: DateFieldProps<T>
) {
  return (
    <AriaDateField {...props} className={cx(props.className, 'flex flex-col gap-1')}>
      {label ? <Label>{label}</Label>:null}
      <DateInput className={inputGroupVariants({
        size,
        radius,
      })} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: 'inline px-0.5 py-px whitespace-nowrap type-literal:p-0 rounded outline outline-0 forced-color-adjust-none caret-transparent text-fg-subtitle forced-colors:text-[ButtonText] [-webkit-tap-highlight-color:transparent]',
  variants: {
    isPlaceholder: {
      true: 'ui-data-segment-placeholder'
    },
    isDisabled: {
      true: 'text-border-strong/80 forced-colors:text-[GrayText]'
    },
    isFocused: {
      true: 'ui-date-segment'
    }
  }
});


export function DateInput(props: Omit<DateInputProps, 'children'>&{unStyled?:boolean}) {
  return (
    <AriaDateInput {...props} className={cx(props.className, 'inline px-3 text-sm leading-8.5 font-sans cursor-text disabled:cursor-default whitespace-nowrap overflow-x-auto scrollbar-none')} >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  );
}
