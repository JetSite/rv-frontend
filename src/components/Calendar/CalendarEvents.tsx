'use client'
import React, { useState } from 'react'
import { Calendar } from './Calendar'
import { calendarEventMock } from '@/api/mock'
import { ILocale } from '@/types'
import { Carousel } from '../Ui/Carousel'

export const CalendarEvents = () => {
  const [selectMonth, setSelectMonth] = useState<number>(
    new Date().getMonth() + 1,
  )
  const [selectYear, setSelectYear] = useState<number>(new Date().getFullYear())

  console.log(selectMonth, selectYear)
  const lang: ILocale = 'ru'

  return (
    <div className="flex w-full mobile:flex-col">
      <div className="w-1/3 mobile:w-full">
        <Calendar
          setSelectMonth={setSelectMonth}
          year={selectYear}
          month={selectMonth}
          locale={lang}
          evens={calendarEventMock}
          setSelectYear={setSelectYear}
        />
      </div>
      <div className="flex w-full flex-col">
        <div className="w-full h-[52px] bg-amber-300 mobile:hidden"></div>
        <Carousel
          className="w-full h-[288px] mobile:h-[220px] relative flex mb-10"
          arr={[
            {
              img: '/Mock/slider.png',
              title:
                'Поздравляю с 32-х летием независимости Республики Арцах! >',
            },
            {
              img: '/Mock/slider2.png',
              title: 'Поздравляю м независимости Республики Арцах!',
            },
            {
              img: '/Mock/slider3.png',
              title: 'Поздравляю  независимости Республики Арцах! >',
            },
          ]}
        />
      </div>
    </div>
  )
}
