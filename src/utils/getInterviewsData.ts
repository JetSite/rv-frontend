import { API } from '@/api'
import { IData } from '@/types'
import { IPersone } from './getAudioAndVideosData'

export interface IInterviewsData {
  title: string
  id: number
  date: string
  description: string
  slug: string
  content: string | null
  source: string
  videoLink: string | null
  persons: IPersone[]
}

type IGetInterviewData = (data: IData[]) => IInterviewsData[]

export const getInterviewData: IGetInterviewData = data => {
  return data.map(e => ({
    title: e.attributes.title,
    id: e.id,
    date: e.attributes.date,
    description: e.attributes.shortDescription,
    content: e.attributes.description,
    videoLink: e.attributes.videoLink,
    slug: e.attributes.slug,
    source: e.attributes.source,
    persons: e.attributes.persons?.data.map((persone: IData) => ({
      title: persone.attributes.name,
      id: persone.id,
      avatar: API.imgUrl + persone.attributes.photo.data.attributes.url,
    })) || [
      {
        title: e.attributes.person.data?.name,
        id: e.attributes.person.data?.id,
        avatar:
          API.imgUrl +
          e.attributes.person.data?.attributes.photo.data.attributes.url,
      },
    ],
  }))
}
