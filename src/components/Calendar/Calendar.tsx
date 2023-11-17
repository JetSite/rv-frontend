'use client'
import { monthsConfig } from '@/config/calendar'
import { getCalendarData } from '@/utils/getCalendarData'
import { Dispatch, FC, SetStateAction } from 'react'
import PixelArrowIcon from '../Ui/Icons/PixelArrowIcon'
import classNames from '@/utils/classNames'
import { langUIConfig } from '@/config'
import { ILocale } from '@/types'
import Select from '../Ui/Dropdowns'

interface CalendarProps {
  year: number
  month: number
  locale: ILocale
  evens: string[]
  setSelectMonth: Dispatch<SetStateAction<number>>
  setSelectYear: Dispatch<SetStateAction<number>>
}

export const Calendar: FC<CalendarProps> = ({
  year,
  month,
  locale,
  evens,
  setSelectMonth,
  setSelectYear,
}) => {
  const calendarData = getCalendarData(year, month, 'yyyy-mm-dd', locale)

  console.log(calendarData)

  return (
    <div className="mr-12 mobile:mx-auto mobile:mb-9">
      <div className="mb-7 text-first text-[22px] font-bold flex gap-4 justify-center ">
        <button
          onClick={() => {
            if (month === 1) {
              setSelectMonth(12)
              setSelectYear(year - 1)
            } else {
              setSelectMonth(month - 1)
            }
          }}
        >
          <PixelArrowIcon className="fill-first rotate-180 w-3 h-2.5" />
        </button>
        <div className="block w-36 text-center">
          <Select
            items={calendarData.yearsList}
            selected={{ id: year, title: String(year) }}
            handleChange={value => setSelectYear(value.id as number)}
          >
            <>
              <div className="flex items-center gap-0.5 pr-1.5"></div>
              {monthsConfig[month - 1][locale]}
            </>
          </Select>
        </div>
        <button
          onClick={() => {
            if (month === 12) {
              setSelectMonth(1)
              setSelectYear(year + 1)
            } else {
              setSelectMonth(month + 1)
            }
          }}
        >
          <PixelArrowIcon className="fill-first w-3 h-2.5" />
        </button>
      </div>

      <ul className="grid grid-rows-5 grid-cols-7 grid-flow-row gap-1">
        {calendarData.data.map((day, index) => {
          const col = 'col-start-' + day.dateInWeek
          return (
            <li
              className={classNames(
                'text-center relative',
                evens.find(date => date === day.value)
                  ? 'before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:bg-first  before:-top-1 before:left-[40%]'
                  : 'opacity-60',
                index === 0 ? col : '',
              )}
            >
              <button disabled={!evens.find(date => date === day.value)}>
                <span
                  className={
                    evens.find(date => date === day.value)
                      ? ' relative text-first text-[22px] font-bold before:content-[ ] before:absolute hover:before:w-full before:h-1 before:bg-h before:left-0 before:-bottom-1 '
                      : 'relative text-first text-[22px] font-bold'
                  }
                >
                  {day.title}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      <p className="mt-8 text-first text-[18px] font-bold opacity-60">
        <span>{langUIConfig.today[locale]}</span>{' '}
        <span>{calendarData.today}</span>
      </p>
    </div>
  )
}
