import { API } from '..'
import { IStoreData, useStoreDate } from '@/store'

interface IArr {
  attributes: { date: string }
}

export const getDate = async () => {
  try {
    let allDate: IStoreData = { newsDate: [], eventsDate: [] }
    let currentNewsPage = 1
    let currentEventsPage = 1
    let totalNewsPages = 1
    let totalEventsPages = 1

    while (currentNewsPage <= totalNewsPages) {
      const resNews = await fetch(
        `${API.baseUrl}/news/?pagination[pageSize]=100&sort[0]=date:desc&pagination[page]=${currentNewsPage}&[fields][0]=date`,
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
        `${API.baseUrl}/events/?pagination[pageSize]=100&sort[0]=date:desc&pagination[page]=${currentEventsPage}&[fields][0]=date`,
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

    return allDate
  } catch {
    console.log('error in get date')
    return null
  }
}
