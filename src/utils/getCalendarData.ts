import { ILocale } from '@/types'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/am'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/am'
import { ISelectItem } from '@/components/Ui/Dropdowns/Select'
import { calendarConfig } from '@/config/calendar'

dayjs.extend(localizedFormat)

export interface ICalendarData {
  dateInWeek: number
  value: string
  title: string
}
;[]

export interface IGetCalendarDataResult {
  data: ICalendarData[]
  today: string
  yearsList: ISelectItem[]
}

export type IGetCalendarData = (
  year: number,
  month: number,
  format: 'yyyy-mm-dd' | 'yyyy-m-d',
  locale: ILocale,
) => IGetCalendarDataResult

export const getCalendarData: IGetCalendarData = (
  year,
  month,
  format = 'yyyy-mm-dd',
  locale,
) => {
  const today = dayjs(new Date()).locale(locale).format('LL')

  const yearsList = Array.from(
    {
      length:
        new Date().getFullYear() -
        calendarConfig.firstYear +
        calendarConfig.lastYearFromCurrent +
        1,
    },
    (_, index) => {
      const year = index + calendarConfig.firstYear
      return { id: year, title: String(year) }
    },
  )

  const data: ICalendarData[] = Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, index) => {
      const date = index + 1
      const dateInWeek = new Date(year, month - 1, index).getDay() + 1
      const value = {
        ['yyyy-mm-dd']: `${year}-${month >= 10 ? month : '0' + month}-${
          date >= 10 ? date : '0' + date
        }`,
        ['yyyy-m-d']: `${year}-${month}-${date}`,
      }[format]
      return { dateInWeek, value, title: String(date) }
    },
  )

  return { data, today, yearsList }
}
