"use client"


import {
  Calendar as AriaCalendar,
  CalendarGridHeader as AriaCalendarGridHeader,
  type CalendarProps as AriaCalendarProps,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  type DateValue,
  Heading,
  Text,
  type CalendarCellProps,
  type CalendarGridProps
} from 'react-aria-components/Calendar';
import { tv } from 'tailwind-variants';
import { Button } from './button';
import { cx } from '@/lib/utils';
import { MonthDropdown, YearDropdown } from './calendar-month-year';
import { useLocale } from 'react-aria-components';

const cellStyles = tv({

  base: 'w-[calc(100cqw/7)] aspect-square text-sm cursor-default rounded-ui flex items-center justify-center forced-color-adjust-none [-webkit-tap-highlight-color:transparent]',
  variants: {
    isSelected: {
      false: 'text-fg-title hover:bg-bg-muted pressed:bg-bg-muted/60',
      true: 'bg-primary invalid:bg-danger text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]'
    },
    isDisabled: {
      true: 'text-border-strong forced-colors:text-[GrayText]'
    }
  }
});



export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string;
  monthYearHeader?: boolean,
  yearBeforeCurrent?: number,
  yearAfterCurrent?: number
}

export const CalendarCell = (props: CalendarCellProps) => {
  return (
    <AriaCalendarCell {...props} className={cellStyles} />
  );
}

export const CalendarGrid = (props: CalendarGridProps) => {
  return <AriaCalendarGrid className="border-spacing-0" {...props} />;
}


export function Calendar<T extends DateValue>(
  { errorMessage, monthYearHeader, yearBeforeCurrent, yearAfterCurrent, ...props }: CalendarProps<T>
) {
  return (
    <AriaCalendar {...props} className={cx(props.className, 'flex flex-col font-sans w-[calc(9*var(--spacing)*7)] max-w-full @container')}>
      {
        monthYearHeader ? <CalendarMonthYearHeader yearAfterCurrent={yearAfterCurrent} yearBeforeCurrent={yearBeforeCurrent} /> : <CalendarHeader />
      }
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && <Text slot="errorMessage" className="text-sm text-danger">{errorMessage}</Text>}
    </AriaCalendar>
  );
}

export const CalendarMonthYearHeader = ({ yearAfterCurrent, yearBeforeCurrent }: {
  yearBeforeCurrent?: number,
  yearAfterCurrent?: number
}) => {
  let { direction } = useLocale();
  return <>
    <header className="flex items-center justify-between gap-4 pb-4 w-full max-w-full flex-1">
      <div className="hidden sm:flex min-w-max gap-1 items-center">
        <Button variant="ghost" iconOnly size="xs" className={``} slot="previous" >
          {direction === 'rtl' ? <span aria-hidden className={"iconify ph--caret-right text-sm"} /> : <span aria-hidden className={"iconify ph--caret-left text-sm"} />}
        </Button>
        <Button variant="ghost" iconOnly size="xs" className={``} slot="next" >
          {direction === 'rtl' ? <span aria-hidden className={"iconify ph--caret-left text-sm"} /> : <span aria-hidden className={"iconify ph--caret-right text-sm"} />}
        </Button>
      </div>
      <div className="flex items-center *:flex-1 gap-1">
        <MonthDropdown />
        <YearDropdown afterCurrentYear={yearAfterCurrent} beforeCurrentYear={yearBeforeCurrent} />
      </div>
    </header>
  </>
}

export function CalendarHeader({ controlled = false }: { controlled?: boolean }) {
  let { direction } = useLocale();

  if (controlled) {
    return <CalendarMonthYearHeader />
  }

  return (
    <header className="flex items-center gap-1 pb-4 px-1 border-box flex-1">
      <Button variant="soft" iconOnly size="sm" className={``} slot="previous">
        {direction === 'rtl' ? <span aria-hidden className={"iconify ph--caret-right text-sm"} /> : <span aria-hidden className={"iconify ph--caret-left text-sm"} />}
      </Button>
      <div className="flex-1">
        <Heading className="font-sans font-semibold [font-variation-settings:normal] text-base text-center mx-2 my-0 text-fg-title truncate" />
      </div>
      <Button variant="soft" iconOnly size="sm" className={``} slot="next">
        {direction === 'rtl' ? <span aria-hidden className={"iconify ph--caret-left text-sm"} /> : <span aria-hidden className={"iconify ph--caret-right text-sm"} />}
      </Button>
    </header>
  );
}

export function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  )
}
