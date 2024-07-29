import { API } from '@/api'
import { IData } from '@/types'
import { IPersone, ISource } from './getAudioAndVideosData'

export interface IInterviewsData {
  title: string
  id: number
  date: string
  description: string
  slug: string
  content: string | null
  source: ISource | null
  videoLink: string | null
  persons: IPersone[]
}

type IGetInterviewData = (data: IData[]) => {
  data: IInterviewsData[]
  source: string
}

export const getInterviewData: IGetInterviewData = data => {
  return {
    data: data.map(e => ({
      title: e.attributes.title,
      id: e.id,
      date: e.attributes.date,
      description: e.attributes.shortDescription,
      content: e.attributes.description,
      videoLink: e.attributes.videoLink,
      slug: e.attributes.slug || '#',
      source: e.attributes.source?.data
        ? typeof e.attributes.source === 'string'
          ? { link: '#', title: e.attributes.source, id: 1 }
          : {
              ...e.attributes?.source?.data.attributes,
              id: e.attributes?.source?.data.id,
            }
        : null,
      persons: e.attributes.persons?.data.map((persone: IData) => ({
        title: persone.attributes.name,
        id: persone.id,
        avatar: persone.attributes.photo.data?.attributes.url
          ? API.imgUrl + persone.attributes.photo.data?.attributes.url
          : '/public/images/unknown-userAgent.svg',
      })) || [
        {
          title: e.attributes.person.data?.attributes.name,
          id: e.attributes.person.data?.id,
          avatar: e.attributes.person.data?.attributes.photo.data?.attributes
            .url
            ? API.imgUrl +
              e.attributes.person.data?.attributes.photo.data?.attributes.url
            : '/public/images/unknown-userAgent.svg',
        },
      ],
    })),
    source: 'interviews',
  }
}
