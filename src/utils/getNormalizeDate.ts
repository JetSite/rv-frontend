import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
// import 'dayjs/locale/hy-AM'
import { Locale } from '@/i18n-config'

const locale = {
  name: 'hy-AM',
  weekdays:
    'Կիրակի_Երկուշաբթի_Երեքշաբթի_Չորեքշաբթի_Հինգշաբթի_Ուրբաթ_Շաբաթ'.split('_'),
  months:
    'Հունվար_Փետրվար_Մարտ_Ապրիլ_Մայիս_Հունիս_Հուլիս_Օգոստոս_Սեպտեմբեր_Հոկտեմբեր_Նոյեմբեր_Դեկտեմբեր'.split(
      '_',
    ),
  // Дополнительно добавьте остальные настройки, если необходимо
}

type IGetNormalizeDate = (string: string | Date, locale: Locale) => string

export const getNormalizeDate: IGetNormalizeDate = (string, locale) => {
  return dayjs(string).locale(locale).format('DD MMMM YYYY [г.]')
}
