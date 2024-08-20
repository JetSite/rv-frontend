export interface ICalendarConfigItem {
  ru: string
  'hy-AM': string
  en: string
  value: string | number
}

export const monthsConfig: ICalendarConfigItem[] = [
  { ru: 'январь', 'hy-AM': 'հունվար', en: 'january', value: '01' },
  { ru: 'февраль', 'hy-AM': 'փետրվար', en: 'february', value: '02' },
  { ru: 'март', 'hy-AM': 'մարտ', en: 'march', value: '03' },
  { ru: 'апрель', 'hy-AM': 'ապրիլ', en: 'april', value: '04' },
  { ru: 'май', 'hy-AM': 'մայիս', en: 'may', value: '05' },
  { ru: 'июнь', 'hy-AM': 'հունիս', en: 'june', value: '06' },
  { ru: 'июль', 'hy-AM': 'հուլիս', en: 'july', value: '07' },
  { ru: 'август', 'hy-AM': 'հուլիս', en: 'august', value: '08' },
  { ru: 'сентябрь', 'hy-AM': 'սեպտեմբեր', en: 'september', value: '09' },
  { ru: 'октябрь', 'hy-AM': 'հոկտեմբեր', en: 'october', value: '10' },
  { ru: 'ноябрь', 'hy-AM': 'նոյեմբեր', en: 'november', value: '11' },
  { ru: 'декабрь', 'hy-AM': 'դեկտեմբեր', en: 'december', value: '12' },
]

export const daysOfWeek: ICalendarConfigItem[] = [
  { ru: 'Воскресенье', 'hy-AM': 'Կիրակի', en: 'Sunday', value: 6 },
  { ru: 'Понедельник', 'hy-AM': 'Առաջին', en: 'Monday', value: 0 },
  { ru: 'Вторник', 'hy-AM': 'Երկուշաբթի', en: 'Tuesday', value: 5 },
  { ru: 'Среда', 'hy-AM': 'Երեքշաբթի', en: 'Wednesday', value: 4 },
  { ru: 'Четверг', 'hy-AM': 'Չորեքշաբթի', en: 'Thursday', value: 3 },
  { ru: 'Пятница', 'hy-AM': 'Հինգշաբթի', en: 'Friday', value: 2 },
  { ru: 'Суббота', 'hy-AM': 'Շաբաթ', en: 'Saturday', value: 1 },
]

export const calendarConfig = { firstYear: 2010, lastYearFromCurrent: 10 }
