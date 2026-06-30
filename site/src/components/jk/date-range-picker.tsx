"use client"


import {
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  type DateValue,
  type ValidationResult
} from 'react-aria-components/DateRangePicker';
import { DateInput } from './input-date';
import { Description, FieldError, InputGroup as FieldGroup, Label } from './input';
import { PopoverContent } from './popover';
import { RangeCalendar } from './range-calendar';

import { FieldButton } from './field-button';
import { cx } from '@/lib/utils';

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateRangePicker<T extends DateValue>(
  { label, description, errorMessage, ...props }: DateRangePickerProps<T>
) {
  return (
    <AriaDateRangePicker {...props} className={cx(props.className, 'group flex flex-col gap-1 font-sans max-w-full')}>
      {label && <Label>{label}</Label>}
      <FieldGroup className="min-w-52 w-auto cursor-text disabled:cursor-default">
        <div className="flex-1 flex items-center overflow-x-auto overflow-y-clip scrollbar-none">
          <DateInput slot="start" className="ps-3 pe-2 text-sm flex-1 min-w-max w-max" />
          <span aria-hidden="true" className="text-fg-subtitle forced-colors:text-[ButtonText] group-disabled:text-bg-muted/60 forced-colors:group-disabled:text-[GrayText]">–</span>
          <DateInput slot="end" className="flex-1 ps-2 pe-3 text-sm min-w-max w-max" />
        </div>
        <FieldButton className="w-8 py-px mr-0.5 outline-offset-0">
          <span aria-hidden className="text-sm iconify ph--calendar" />
        </FieldButton>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <PopoverContent className="p-2 min-w-max">
        <RangeCalendar />
      </PopoverContent>
    </AriaDateRangePicker>
  );
}
