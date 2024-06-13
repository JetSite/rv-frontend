import { API } from '@/api'
import { IData } from '@/types'
import { INavItem } from '@/types/layout'

export interface IPageMenu extends INavItem {
  text: string
  img: string
}

export interface IMediaActivityData {
  id: number
  title: string
  subTitle: string
  pageMenu: IPageMenu[]
}

type IGetMediaActivityData = (data: IData) => IMediaActivityData

export const getMediaActivityData: IGetMediaActivityData = data => ({
  id: data.id,
  title: data.attributes.title,
  subTitle: data.attributes.subTitle,
  pageMenu: data.attributes.menu_items.data.map((e: IData) => ({
    id: e.id,
    title: e.attributes.itemName,
    isActive: e.attributes.isActive,
    slug: e.attributes.itemLink || '#',
    text: e.attributes.shortDescription,
    img: API.imgUrl + e.attributes.cover.data.attributes.url,
  })),
})
