"use client"

import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  type ValidationResult
} from 'react-aria-components';
import { Calendar } from './calendar';
import { DateInput } from './input-date';
import { Description, FieldError, InputGroup as FieldGroup, Label } from './input';
import { PopoverContent } from './popover';
import { cx } from '@/lib/utils'
import { FieldButton } from './field-button';

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  monthYearHeader?:boolean,
  errorMessage?: string | ((validation: ValidationResult) => string);
  beforeCurrentYear?: number, afterCurrentYear?: number,
  fieldGroup?:string
}

export function DatePicker<T extends DateValue>(
  { label, description, errorMessage, monthYearHeader=true, fieldGroup, afterCurrentYear, beforeCurrentYear, ...props }: DatePickerProps<T>
) {
  return (
    <AriaDatePicker {...props} className={cx(props.className, 'group flex flex-col gap-2 font-sans')}>
      {label && <Label>{label}</Label>}
      <FieldGroup className={cx("min-w-52 w-auto cursor-text disabled:cursor-default")}>
        <DateInput className="flex-1 min-w-37.5 px-3 text-sm" />
        <FieldButton className="w-8 py-px mr-0.5 outline-offset-0">
          <span aria-hidden className="iconify ph--calendar" />
        </FieldButton>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverContent className="p-2">
        <Calendar yearBeforeCurrent={beforeCurrentYear} yearAfterCurrent={afterCurrentYear} monthYearHeader={monthYearHeader}/>
      </PopoverContent>
    </AriaDatePicker>
  );
}
