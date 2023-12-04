import { API } from '@/api'
import { NewsItem } from '@/types/item'

export interface IDataNewsItem {
  id: string
  attributes: {
    date: string | null
    slug: string
    time: string | null
    title: string
    shortDescription: string | null
    fullDescription: string | null
    important: boolean
    [K: string]: any
  }
}

export type IGetDataArray = ({
  data,
}: {
  data: IDataNewsItem[]
}) => Array<NewsItem>

export const getDataArray: IGetDataArray = ({ data }) => {
  const arr: Array<NewsItem> = data.map(item => ({
    title: item.attributes.title,
    slug: item.attributes.slug,
    id: item.id,
    date: item.attributes.date,
    img: API.imgUrl + item.attributes.cover.data.attributes.url,
    text: item.attributes.fullDescription || item.attributes.description,
    important: item.attributes.important,
    time: item.attributes.time || null,
  }))

  return arr
}
