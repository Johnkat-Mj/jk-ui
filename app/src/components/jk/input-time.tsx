"use client"


import {
  TimeField as AriaTimeField,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue,
  type ValidationResult
} from 'react-aria-components';
import { DateInput } from './input-date';
import { Description, FieldError, inputGroupVariants, type InputSize, Label } from './input';
import { cx } from '@/lib/utils';


export interface InputTimeProps<T extends TimeValue>
  extends AriaTimeFieldProps<T> {
  label?: string;
  description?: string;
  size?: InputSize,
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function InputTime<T extends TimeValue>(
  { label, description, errorMessage, size, ...props }: InputTimeProps<T>
) {
  return (
    <AriaTimeField {...props} className={cx(props.className, 'flex flex-col gap-1 font-sans')}>
      <Label>{label}</Label>
      <DateInput className={inputGroupVariants({
        size,
      })} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  );
}
