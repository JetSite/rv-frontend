import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/hy-am'
import { Locale } from '@/i18n-config'

type IGetNormalizeDate = (string: string | Date, locale: Locale) => string

export const getNormalizeDate: IGetNormalizeDate = (string, locale) => {
  return dayjs(string).locale(locale.toLowerCase()).format('DD MMMM YYYY [г.]')
}
