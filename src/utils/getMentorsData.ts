import { IData } from '@/types'
import { IGalleryItem } from '@/types/item'

export interface IMentorsData {
  title: string
  id: number
  description: string
  content: string
  gallery?: IGalleryItem[]
}

type IGetMentorsData = (data: IData) => IMentorsData

export const getMentorsData: IGetMentorsData = data => {
  return {
    title: data.attributes.title,
    id: data.id,
    description: data.attributes.seoDescription,
    content: data.attributes.content,
  }
}
