import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/hy-AM'
import { Locale } from '@/i18n-config'

type IGetNormalizeDate = (string: string | Date, locale: Locale) => string

export const getNormalizeDate: IGetNormalizeDate = (string, locale) => {
  return dayjs(string).locale(locale).format('DD MMMM YYYY [г.]')
}
