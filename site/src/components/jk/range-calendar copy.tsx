"use client"

import {
  RangeCalendar as AriaRangeCalendar,
  type RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  type DateValue,
  Text
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { CalendarGridHeader, CalendarHeader } from './calendar';
import { cx, focusRing } from '@/lib/utils';

export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
}

const cell = tv({
  extend: focusRing,
  base: 'w-full h-full flex items-center justify-center rounded-ui forced-color-adjust-none text-neutral-900 dark:text-neutral-200',
  variants: {
    selectionState: {
      'none': 'cell-span-selection-none',
      'middle': [
        'cell-span-selection-middle-base',
        'cell-span-selection-middle-invalid',
      ],
      'cap': 'bg-primary group-invalid:bg-danger forced-colors:bg-[Highlight] forced-colors:group-invalid:bg-[Mark] text-white forced-colors:text-[HighlightText]'
    },
    isDisabled: {
      true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
    }
  }
});

export function RangeCalendar<T extends DateValue>(
  { errorMessage, ...props }: RangeCalendarProps<T>
) {
  return (
    <AriaRangeCalendar {...props} className={cx(props.className, 'font-sans w-[calc(9*var(--spacing)*7)] max-w-full @container')}>
      <CalendarHeader/>
      <CalendarGrid className="[&_td]:px-0 [&_td]:py-px border-spacing-0 pt-4">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => <>
            <CalendarCell date={date}
              className={cx(
                "cell-selection-selected group w-[calc(100cqw/7)] aspect-square text-sm",
                "cell-radius outline-0 cursor-default outside-month:text-bg-muted",
                "",
                "forced-colors:fx-selected:bg-[Highlight] invalid:selected:bg-red-100",
                "dark:invalid:fx-selected:bg-red-700/30 forced-colors:invalid:fx-selected:bg-[Mark]",
                "[-webkit-tap-highlight-color:transparent]"
              )}>
              {({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, isFocusVisible, isDisabled }) =>
                <span
                  className={cell({
                    selectionState: isSelected && (isSelectionStart || isSelectionEnd) ? 'cap' : isSelected ? 'middle' : 'none',
                    isDisabled,
                    isFocusVisible
                  })}>
                  {formattedDate}
                </span>
              }
            </CalendarCell>
          </>}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && <Text slot="errorMessage" className="text-sm text-danger">{errorMessage}</Text>}
    </AriaRangeCalendar>
  );
}
