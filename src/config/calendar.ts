export interface ICalendarConfigItem {
  ru: string
  am: string
  en: string
  value: string | number
}

export const monthsConfig: ICalendarConfigItem[] = [
  { ru: 'Январь', am: 'հունվար', en: 'January', value: '01' },
  { ru: 'Февраль', am: 'փետրվար', en: 'February', value: '02' },
  { ru: 'Март', am: 'մարտ', en: 'March', value: '03' },
  { ru: 'Апрель', am: 'ապրիլ', en: 'April', value: '04' },
  { ru: 'Май', am: 'մայիս', en: 'May', value: '05' },
  { ru: 'Июнь', am: 'հունիս', en: 'June', value: '06' },
  { ru: 'Июль', am: 'հուլիս', en: 'July', value: '07' },
  { ru: 'Август', am: 'հուլիս', en: 'August', value: '08' },
  { ru: 'Сентябрь', am: 'սեպտեմբեր', en: 'September', value: '09' },
  { ru: 'Октябрь', am: 'հոկտեմբեր', en: 'October', value: '10' },
  { ru: 'Ноябрь', am: 'նոյեմբեր', en: 'November', value: '11' },
  { ru: 'Декабрь', am: 'դեկտեմբեր', en: 'December', value: '12' },
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
