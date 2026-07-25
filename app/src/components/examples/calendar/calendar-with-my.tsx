"use client"

import { CalendarMonthYearHeader, CalendarGrid, CalendarCell, CalendarGridHeader } from '@/components/jk/calendar'
import { CalendarGridBody } from 'react-aria-components'

import { Calendar } from 'react-aria-components'

export const CalendarWithMy = () => {
    return (
        <Calendar className={"flex flex-col font-sans w-[calc(9*var(--spacing)*7)] max-w-full @container"}>
           <CalendarMonthYearHeader/>

            <CalendarGrid>
                <CalendarGridHeader />
                <CalendarGridBody>
                    {(date) => <CalendarCell date={date} />}
                </CalendarGridBody>
            </CalendarGrid>
        </Calendar>
    )
}
