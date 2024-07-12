import { API } from '@/api'
import { IStandartItem } from '@/types/item'
import { IActivityElement } from '../getActivityData'

interface IAnyArr {
  [K: string]: unknown
}

interface IInputSearchData {
  news: IAnyArr[]
  events: IAnyArr[]
  interviews: IAnyArr[]
  'objects-of-activity': IAnyArr[]
}
// type IStandartItem = Omit<
//   IStandartItem,
//   'time' | 'source' | 'content' | 'coverCaption' | 'gallery' | 'text'
// >

export interface IPrepereSearchData {
  news: IStandartItem[]
  activities: IActivityElement[]
  interviews: IStandartItem[]
  events: IStandartItem[]
  countItems: number
}

export type IgetSearchData = (data: IInputSearchData) => IPrepereSearchData

export const getSearchData: IgetSearchData = data => {
  const dataKeys = Object.keys(data) as Array<keyof IInputSearchData>
  let countItems = 0
  dataKeys.forEach(e => (countItems += data[e].length))

  const mapToPartialIStandartItem = (e: any): IStandartItem => ({
    title: e.title as string,
    description: (e.shortDescription || e.fullDescription) as string,
    slug: e.slug as string,
    important: e.important as boolean,
    id: e.id as string,
    date: e.date as string,
    img: e.coverCaption ? API.baseUrl + e.coverCaption : null,
    time: null,
    source: null,
    content: null,
    coverCaption: null,
    gallery: null,
    text: null,
  })

  const news: IStandartItem[] = data.news.map(mapToPartialIStandartItem)

  const events: IStandartItem[] = data.events.map(mapToPartialIStandartItem)

  const interviews: IStandartItem[] = data.interviews.map(
    mapToPartialIStandartItem,
  )

  const activities: IActivityElement[] = data['objects-of-activity'].map(
    (e: any) => ({
      name: e.objectName as string,
      description: (e.objectDescription || e.objectContent) as string,
      slug: e.slug as string,
      untilNow: e.untilNow as boolean,
      id: e.id as number,
      startDate: e.startDate as string,
      endDate: e.endDate as string,
      img: e.coverCaption ? API.baseUrl + e.coverCaption : null,
      content: e.content ? (e.content as string) : null,
    }),
  )
  return { news, activities, interviews, events, countItems }
}
