export interface ICalendarConfigItem {
  ru: string
  am: string
  en: string
  value?: number
}

export const monthsConfig: ICalendarConfigItem[] = [
  { ru: 'Январь', am: 'հունվար', en: 'January', value: 1 },
  { ru: 'Февраль', am: 'փետրվար', en: 'February', value: 2 },
  { ru: 'Март', am: 'մարտ', en: 'March', value: 3 },
  { ru: 'Апрель', am: 'ապրիլ', en: 'April', value: 4 },
  { ru: 'Май', am: 'մայիս', en: 'May', value: 5 },
  { ru: 'Июнь', am: 'հունիս', en: 'June', value: 6 },
  { ru: 'Июль', am: 'հուլիս', en: 'July', value: 7 },
  { ru: 'Август', am: 'հուլիս', en: 'August', value: 8 },
  { ru: 'Сентябрь', am: 'սեպտեմբեր', en: 'September', value: 9 },
  { ru: 'Октябрь', am: 'հոկտեմբեր', en: 'October', value: 10 },
  { ru: 'Ноябрь', am: 'նոյեմբեր', en: 'November', value: 11 },
  { ru: 'Декабрь', am: 'դեկտեմբեր', en: 'December', value: 12 },
]

export const daysOfWeek: ICalendarConfigItem[] = [
  { ru: 'Воскресенье', am: 'Կիրակի', en: 'Sunday' },
  { ru: 'Понедельник', am: 'Առաջին', en: 'Monday' },
  { ru: 'Вторник', am: 'Երկուշաբթի', en: 'Tuesday' },
  { ru: 'Среда', am: 'Երեքշաբթի', en: 'Wednesday' },
  { ru: 'Четверг', am: 'Չորեքշաբթի', en: 'Thursday' },
  { ru: 'Пятница', am: 'Հինգշաբթի', en: 'Friday' },
  { ru: 'Суббота', am: 'Շաբաթ', en: 'Saturday' },
]

export const calendarConfig = { firstYear: 2010, lastYearFromCurrent: 10 }
