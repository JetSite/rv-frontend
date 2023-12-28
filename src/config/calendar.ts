export interface ICalendarConfigItem {
  ru: string
  am: string
  en: string
  value: string | number
}

export const monthsConfig: ICalendarConfigItem[] = [
  { ru: 'январь', am: 'հունվար', en: 'january', value: '01' },
  { ru: 'февраль', am: 'փետրվար', en: 'february', value: '02' },
  { ru: 'март', am: 'մարտ', en: 'march', value: '03' },
  { ru: 'апрель', am: 'ապրիլ', en: 'april', value: '04' },
  { ru: 'май', am: 'մայիս', en: 'may', value: '05' },
  { ru: 'июнь', am: 'հունիս', en: 'june', value: '06' },
  { ru: 'июль', am: 'հուլիս', en: 'july', value: '07' },
  { ru: 'август', am: 'հուլիս', en: 'august', value: '08' },
  { ru: 'сентябрь', am: 'սեպտեմբեր', en: 'september', value: '09' },
  { ru: 'октябрь', am: 'հոկտեմբեր', en: 'october', value: '10' },
  { ru: 'ноябрь', am: 'նոյեմբեր', en: 'november', value: '11' },
  { ru: 'декабрь', am: 'դեկտեմբեր', en: 'december', value: '12' },
]

export const daysOfWeek: ICalendarConfigItem[] = [
  { ru: 'Воскресенье', am: 'Կիրակի', en: 'Sunday', value: 6 },
  { ru: 'Понедельник', am: 'Առաջին', en: 'Monday', value: 0 },
  { ru: 'Вторник', am: 'Երկուշաբթի', en: 'Tuesday', value: 5 },
  { ru: 'Среда', am: 'Երեքշաբթի', en: 'Wednesday', value: 4 },
  { ru: 'Четверг', am: 'Չորեքշաբթի', en: 'Thursday', value: 3 },
  { ru: 'Пятница', am: 'Հինգշաբթի', en: 'Friday', value: 2 },
  { ru: 'Суббота', am: 'Շաբաթ', en: 'Saturday', value: 1 },
]

export const calendarConfig = { firstYear: 2010, lastYearFromCurrent: 10 }
