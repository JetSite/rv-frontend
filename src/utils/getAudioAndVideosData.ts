import { API } from '@/api'
import { IData, IID } from '@/types'

export interface IPersone {
  title: string
  id: number
  avatar: string
}

export interface ISource {
  id: IID
  title: string
  link: string
}

export interface IAudioAndVideosData {
  title: string
  id?: number
  date: string
  description?: string
  link: string
  source: ISource | null
  slug?: string
  persons: IPersone[]
}

type IGetAudioAndVideosData = (data: IData[]) => {
  data: IAudioAndVideosData[]
  source: string
}

export const getAudioAndVideosData: IGetAudioAndVideosData = data => {
  return {
    data: data.map(e => ({
      title: e.attributes.title,
      id: e.id,
      date: e.attributes.date,
      description: e.attributes.description,
      link: e.attributes.link,
      slug: e.attributes.slug || '#',
      source: e.attributes.source?.data
        ? {
            ...e.attributes.source?.data.attributes,
            id: e.attributes.source?.data.id,
          }
        : null,
      persons: e.attributes.persons?.data.map((persone: IData) => ({
        title: persone.attributes.name,
        id: persone.id,
        avatar: persone.attributes.photo.data?.attributes.url
          ? API.imgUrl + persone.attributes.photo.data?.attributes.url
          : '/images/unknown-user.svg',
      })) || [
        {
          title: e.attributes.person.data.name,
          id: e.attributes.person.data.id,
          avatar: e.attributes.person.data.attributes.photo.data?.attributes.url
            ? API.imgUrl +
              e.attributes.person.data.attributes.photo.data?.attributes.url
            : '/images/unknown-user.svg',
        },
      ],
    })),
    source: 'audio-and-videos',
  }
}
