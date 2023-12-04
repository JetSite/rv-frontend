import { ILink } from '.'

export interface IItem extends ILink {
  text: string | null
  id: string | number
}

export interface EventItem extends IItem {
  date: string
  time: string
}

export interface NewsItem extends IItem {
  date: string | null
  img: string | null
  important: boolean
  time: string | null
}

export interface PriorityItem extends IItem {
  img: string
}

export interface ActivityItem extends IItem {
  img: string
}
