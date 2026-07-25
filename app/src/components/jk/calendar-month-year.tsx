"use client"

import type { CalendarDate } from '@internationalized/date';
import { CalendarStateContext, RangeCalendarStateContext } from 'react-aria-components';
import { type ReactElement, useContext } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from './select';
import { useDateFormatter } from 'react-aria';



export const MonthDropdown = (): ReactElement => {
    let calendarState = useContext(CalendarStateContext);
    let rangeCalendarState = useContext(RangeCalendarStateContext);
    let state = calendarState || rangeCalendarState!;
    const formatter = useDateFormatter({
        month: "long",
        timeZone: state.timeZone,
    })



    let months = [];
    const numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate)
    for (let i = 1; i <= numMonths; i++) {
        const date = state.focusedDate.set({ month: i })
        months.push(formatter.format(date.toDate(state.timeZone)))
    }
    return (
        <Select
            aria-label="Month"
            style={{ flex: 1, width: 'fit-content' }}
            onChange={value => {
                state.setFocusedDate(state.focusedDate.set({ month: Number(value) }))
            }}
            value={state.focusedDate.month.toString() ?? (new Date().getMonth() + 1).toString()}
        >
            <SelectTrigger size="sm" className={`w-20 text-sm/5 **:data-[slot=select-value]:inline-block 
                **:data-[slot=select-value]:truncate sm:px-2.5 sm:py-1.5 sm:*:text-sm/5`} />
            <SelectContent>
                {months.map((month, index) => (
                    <SelectItem key={index} id={(index + 1).toString()} textValue={month}>
                        {month}
                    </SelectItem>
                ))}
            </SelectContent>

        </Select>
    );
}


export function YearDropdown({ beforeCurrentYear = -20, afterCurrentYear = 20 }: { beforeCurrentYear?: number, afterCurrentYear?: number }): ReactElement {
    let calendarState = useContext(CalendarStateContext);
    let rangeCalendarState = useContext(RangeCalendarStateContext);
    let state = calendarState || rangeCalendarState!;
    let formatter = useDateFormatter({
        year: 'numeric',
        timeZone: state.timeZone
    });


    let years = [];
    for (let i = beforeCurrentYear; i <= afterCurrentYear; i++) {
        const date = state.focusedDate.add({ years: i })
        years.push({
            value: date,
            formatted: formatter.format(date.toDate(state.timeZone)),
        })
    }

    return (
        <Select
            aria-label="Year"
            style={{ flex: 1, width: 'fit-content' }}
            onChange={(value) => {
                state.setFocusedDate(years[Number(value)]?.value as CalendarDate)
            }}
            value={20}
        >
            <SelectTrigger size="sm" className={`w-20 text-sm/5 **:data-[slot=select-value]:inline-block 
                **:data-[slot=select-value]:truncate sm:px-2.5 sm:py-1.5 sm:*:text-sm/5`} />
            <SelectContent>
                {years.map((year, i) => (
                    <SelectItem key={i} id={i} textValue={year.formatted}>
                        {year.formatted}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
