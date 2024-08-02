import { IImage, ILink } from '.'

export interface IItem extends ILink {
  text: string | null
  id: string | number
  description?: string
}

export interface EventItem extends IItem {
  date: string
  time: string
}

export interface IGalleryItem {
  key: string
  src: string
  width: number
  height: number
  title?: string
  alt?: string
}

export interface IStandartItem extends IItem {
  date: string | null
  image: IImage
  img: string | null
  important: boolean
  time: string | null
  source: string | null
  coverCaption: string | null
  content: string | null
  gallery: IGalleryItem[] | null
}

export interface PriorityItem extends IItem {
  img: string
}

export interface YearsWithMonths {
  year: string
  months: { month: string; value: string }[]
}
