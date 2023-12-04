import { API } from '@/api'
import { ILogo } from '@/types'
import { INavItem, ISocialsItem } from '@/types/layout'

export interface ILayoutData {
  navHeader: INavItem[]
  navFooter: INavItem[]
  logo: ILogo
  socials: ISocialsItem[]
}

type IGetLayoutData = (data: any) => ILayoutData

export const getLayoutData: IGetLayoutData = data => {
  const res = {
    navHeader: data.data.attributes?.header_menu.data.attributes.menu.map(
      (item: any) => ({
        id: item.id,
        title: item.itemName,
        slug: item.menu_item.data.attributes.slug,
        children: item.submenu_items.data || [],
      }),
    ),
    logo: {
      img: API.imgUrl + data.data.attributes?.siteLogo.data.attributes.url,
      title: data.data.attributes?.logoText,
    },
    socials: data.data.attributes.social_medias?.data.map((item: any) => ({
      id: item.id,
      slug: item.attributes.mediaLink,
      title: item.attributes.mediaTitle,
      img: API.imgUrl + item.attributes.mediaLogo.data.attributes.url,
    })),
    navFooter: data.data.attributes?.footer_menus.data.map((item: any) => ({
      id: item.id,
      title: item.attributes.menuTitle,
      slug: item.attributes.menuTitleLink,
      children: item.attributes.menu.map((children: any) => ({
        id: children.id,
        title: children.itemName,
        slug: children.menu_item.data.attributes.slug,
      })),
    })),
  }
  return res
}
