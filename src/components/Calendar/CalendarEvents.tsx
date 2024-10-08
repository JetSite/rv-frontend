'use client'
import React, { FC, useState } from 'react'
import { Calendar } from './Calendar'
import { Locale } from '@/i18n-config'
import { CalendarCarousel } from './CalendarCarousel'
import { IStandartItem } from '@/types/item'

interface Props {
  data: IStandartItem[]
  lang: Locale
}

export const CalendarEvents: FC<Props> = ({ data, lang }) => {
  const [selectMonth, setSelectMonth] = useState<number>(
    new Date().getMonth() + 1,
  )
  const [selectYear, setSelectYear] = useState<number>(new Date().getFullYear())
  const eventsDates = data.map(event => (event.date ? event.date : ''))
  const [selectEvent, setSelectEvent] = useState<string>(eventsDates[0])

  return (
    <div className="flex max-w-content relative mobile:flex-col notDesktop:w-full tablet:flex-col">
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
