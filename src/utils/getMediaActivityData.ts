import { API } from '@/api'
import { IBannerProps } from '@/components/Ui/Banner'
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
  banner: IBannerProps
}

type IGetMediaActivityData = (data: IData) => IMediaActivityData | null

export const getMediaActivityData: IGetMediaActivityData = data => {
  if (!data) return null
  return {
    id: data.id,
    banner: {
      text: data.attributes.contentText,
      title: data.attributes.contentTitle,
      img: data.attributes.contentImage.data?.id
        ? {
            id: data.attributes.contentImage.data.id,
            url: API.imgUrl + data.attributes.contentImage.data.attributes.url,
            alt:
              data.attributes.contentImage.data.attributes.alternativeText ||
              data.attributes.contentImage.data.attributes.name,
            width: data.attributes.contentImage.data.attributes.width,
            height: data.attributes.contentImage.data.attributes.height,
          }
        : null,
    },
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
  }
}
