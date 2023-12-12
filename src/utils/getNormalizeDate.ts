'use client'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/am'
import { ILocale } from '@/types'

type IGetNormalizeDate = (string: string, locale: ILocale) => string

export const getNormalizeDate: IGetNormalizeDate = (string, locale) => {
  return dayjs(string).locale(locale).format('LL')
}
