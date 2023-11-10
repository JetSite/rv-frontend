import { ILink } from '.'

export interface IItem extends ILink {
  text: string
}

export interface EventItem extends IItem {
  date: string
  time: string
}

export interface NewsItem extends IItem {
  date: string
  img: string
}

export interface PriorityItem extends IItem {
  img: string
}

export interface ActivityItem extends IItem {
  img: string
}
