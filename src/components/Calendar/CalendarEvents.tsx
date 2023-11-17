'use client'
import React, { useState } from 'react'
import { Calendar } from './Calendar'
import { calendarEventMock, newsMock } from '@/api/mock'
import { ILocale } from '@/types'
import { CalendarCarousel } from './CalendarCarousel'

export const CalendarEvents = () => {
  const [selectMonth, setSelectMonth] = useState<number>(
    new Date().getMonth() + 1,
  )
  const [selectYear, setSelectYear] = useState<number>(new Date().getFullYear())

  console.log(selectMonth, selectYear)
  const lang: ILocale = 'ru'

  return (
    <div className="flex w-content relative mobile:flex-col">
      <div className="w-1/4 mobile:w-full">
        <Calendar
          setSelectMonth={setSelectMonth}
          year={selectYear}
          month={selectMonth}
          locale={lang}
          evens={calendarEventMock}
          setSelectYear={setSelectYear}
        />
      </div>
      <div className="flex relative w-3/4 flex-col">
        <div className="w-full h-[52px] bg-amber-300 mobile:hidden"></div>
        <CalendarCarousel arr={newsMock} />
      </div>
    </div>
  )
}
