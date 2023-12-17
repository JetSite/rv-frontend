import { API } from '@/api'
import { IStandartItem } from '@/types/item'

export interface IDataIStandartItem {
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
  data: IDataIStandartItem[]
}) => Array<IStandartItem>

export const getDataArray: IGetDataArray = ({ data }) => {
  const arr: Array<IStandartItem> = data.map(item => ({
    title: item.attributes.title || item.attributes.shortTitle,
    slug: item.attributes.slug || '#',
    id: item.id,
    date: item.attributes.date,
    img: API.imgUrl + item.attributes.cover.data.attributes.url,
    text:
      item.attributes.fullDescription ||
      item.attributes.description ||
      item.attributes.shortDescription,
    important: item.attributes.important,
    time: item.attributes.time || null,
    coverCaption: item.attributes.coverCaption,
    source: item.attributes.source,
    gallery: item.attributes?.gallery?.data.map((e: any) => ({
      key: e.id.toString(),
      src: API.imgUrl + e.attributes.url,
      width: e.attributes.width,
      height: e.attributes.height,
    })),
    content: item.attributes?.content,
  }))

  return arr
}
