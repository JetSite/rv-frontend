'use client'
import React, { FC, useState } from 'react'
import { Calendar } from './Calendar'
import { ILocale } from '@/types'
import { CalendarCarousel } from './CalendarCarousel'
import { IStandartItem } from '@/types/item'

interface Props {
  data: IStandartItem[]
}

export const CalendarEvents: FC<Props> = ({ data }) => {
  const [selectMonth, setSelectMonth] = useState<number>(
    new Date().getMonth() + 1,
  )
  const [selectYear, setSelectYear] = useState<number>(new Date().getFullYear())
  const eventsDates = data.map(event => (event.date ? event.date : ''))
  const [selectEvent, setSelectEvent] = useState<string>(eventsDates[0])

  const lang: ILocale = 'ru'

  return (
    <div className="flex w-content relative mobile:flex-col notDesktop:w-full tablet:flex-col">
      <div className="w-1/4 mobile:w-full tablet:w-full tablet:mb-6">
        <Calendar
          setSelectMonth={setSelectMonth}
          year={selectYear}
          month={selectMonth}
          locale={lang}
          evens={eventsDates}
          setSelectYear={setSelectYear}
          selectEvent={selectEvent}
          setSelectEvent={setSelectEvent}
        />
      </div>
      <div className="flex relative w-3/4 flex-col notDesktop:w-full">
        <div className="w-full mb-6 notDesktop:hidden">
          <Calendar
            simple
            setSelectMonth={setSelectMonth}
            year={selectYear}
            month={selectMonth}
            locale={lang}
            evens={eventsDates}
            setSelectYear={setSelectYear}
            selectEvent={selectEvent}
            setSelectEvent={setSelectEvent}
          />
        </div>
        <CalendarCarousel
          arr={data}
          selectEvent={selectEvent}
          setSelectEvent={setSelectEvent}
          locale={lang}
        />
      </div>
    </div>
  )
}
