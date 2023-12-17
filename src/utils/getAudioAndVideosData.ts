import { API } from '@/api'
import { IData } from '@/types'

export interface IPersone {
  title: string
  id: number
  avatar: string
}

export interface IAudioAndVideosData {
  title: string
  id?: number
  date: string
  description?: string
  link: string
  source: string
  slug: string
  persons: IPersone[]
}

type IGetAudioAndVideosData = (data: IData[]) => IAudioAndVideosData[]

export const getAudioAndVideosData: IGetAudioAndVideosData = data => {
  return data.map(e => ({
    title: e.attributes.title,
    id: e.id,
    date: e.attributes.date,
    description: e.attributes.description,
    link: e.attributes.link,
    source: e.attributes.source,
    slug: e.attributes.slug || '#',
    persons: e.attributes.persons?.data.map((persone: IData) => ({
      title: persone.attributes.name,
      id: persone.id,
      avatar: API.imgUrl + persone.attributes.photo.data.attributes.url,
    })) || [
      {
        title: e.attributes.person.data.name,
        id: e.attributes.person.data.id,
        avatar:
          API.imgUrl +
          e.attributes.person.data.attributes.photo.data.attributes.url,
      },
    ],
  }))
}
