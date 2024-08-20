import { YearsWithMonths } from '@/types/item'
import { API } from '..'
import { IStoreDataItem } from '@/store'
import { Locale } from '@/i18n-config'

interface IArr {
  attributes: { date: string }
}

export const getDate = async (lang: Locale, detention?: boolean) => {
  try {
    let allDate: { newsDate: string[]; eventsDate: string[] } = {
      newsDate: [],
      eventsDate: [],
    }
    let currentNewsPage = 1
    let currentEventsPage = 1
    let totalNewsPages = 1
    let totalEventsPages = 1

    while (currentNewsPage <= totalNewsPages) {
      const resNews = await fetch(
        detention
          ? `${API.baseUrl}/news/?filters[categories][slug]=detention&pagination[pageSize]=100&sort[0]=date:desc&pagination[page]=${currentNewsPage}&[fields][0]=date&locale=${lang}`
          : `${API.baseUrl}/news/?pagination[pageSize]=100&sort[0]=date:desc&pagination[page]=${currentNewsPage}&[fields][0]=date&locale=${lang}`,
        { cache: 'no-cache' },
      )
      if (!resNews.ok) {
        throw new Error(`Ошибка при запросе: ${resNews.statusText}`)
      }
      const news = await resNews.json()

      allDate.newsDate = allDate.newsDate.concat(
        news.data.map((e: IArr) => e.attributes.date),
      )

      totalNewsPages = news.meta.pagination.pageCount
      currentNewsPage++
    }
    while (currentEventsPage <= totalEventsPages) {
      const resEvent = await fetch(
        detention
          ? `${API.baseUrl}/events/?filters[categories][slug]=detention&pagination[pageSize]=100&sort[0]=date:desc&[fields][0]=date&locale=${lang}`
          : `${API.baseUrl}/events/?pagination[pageSize]=100&sort[0]=date:desc&pagination[page]=${currentEventsPage}&[fields][0]=date&locale=${lang}`,
        {
          cache: 'no-cache',
        },
      )

      if (!resEvent.ok) {
        throw new Error(`Ошибка при запросе: ${resEvent.statusText}`)
      }

      const event = await resEvent.json()

      allDate.eventsDate = allDate.eventsDate.concat(
        event.data.map((e: IArr) => e.attributes.date),
      )

      totalEventsPages = event.meta.pagination.pageCount
      currentEventsPage++
    }

    const newsDate = allDate.newsDate.reduce((acc: YearsWithMonths[], date) => {
      const [year, month] = date.split('-')

      const existingYear = acc.find(entry => entry.year === year)

      if (existingYear) {
        if (!existingYear.months.find(e => e.month === month)) {
          existingYear.months.push({
            month: month,
            value: year + '-' + month,
          })
        }
      } else {
        acc.push({
          year,
          months: [{ month: month, value: year + '-' + month }],
        })
      }

      return acc
    }, [])
    const eventsDate = allDate.eventsDate.reduce(
      (acc: YearsWithMonths[], date) => {
        const [year, month] = date.split('-')

        const existingYear = acc.find(entry => entry.year === year)

        if (existingYear) {
          if (!existingYear.months.find(e => e.month === month)) {
            existingYear.months.push({
              month: month,
              value: year + '-' + month,
            })
          }
        } else {
          acc.push({
            year,
            months: [{ month: month, value: year + '-' + month }],
          })
        }

        return acc
      },

      [],
    )
    const detentionData = [...eventsDate, ...newsDate].reduce<IStoreDataItem[]>(
      (acc, current) => {
        const existingYear = acc.find(item => item.year === current.year)
        if (existingYear) {
          current.months.forEach(month => {
            if (
              !existingYear.months.some(
                existingMonth => existingMonth.month === month.month,
              )
            ) {
              existingYear.months.push(month)
            }
          })
        } else {
          acc.push(current)
        }
        return acc
      },
      [],
    )

    return {
      newsDate,
      eventsDate,
      detentionData,
    }
  } catch {
    console.log('error in get date')
    return null
  }
}
