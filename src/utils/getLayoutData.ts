import { API } from '@/api'
import { IData, ILogo } from '@/types'
import { INavItem, ISocialsItem } from '@/types/layout'

export interface ILayoutData {
  navHeader: INavItem[]
  navFooter: INavItem[]
  logo: ILogo
  socials: ISocialsItem[]
}

type IGetLayoutData = (data: { data: IData }) => ILayoutData

export const getLayoutData: IGetLayoutData = data => {
  const res: ILayoutData = {
    navHeader: data.data.attributes?.header_menu.data.attributes.menu.map(
      (item: any) => ({
        id: item.id,
        title: item.itemName,
        isActive: item.menu_item.data.attributes.isActive,
        slug: item.menu_item.data.attributes.itemLink || '#',
        children:
          item.submenu_items.data.map((e: any) => ({
            id: e.id,
            title: e.attributes.itemName,
            isActive: e.attributes.isActive,
            slug: e.attributes.itemLink || '#',
          })) || [],
      }),
    ),
    logo: {
      img: API.imgUrl + data.data.attributes?.siteLogo.data.attributes.url,
      title: data.data.attributes?.logoText,
    },
    socials: data.data.attributes.social_medias?.data.map((item: any) => ({
      id: item.id,
      slug: item.attributes.mediaLink || '#',
      title: item.attributes.mediaTitle,
      img: API.imgUrl + item.attributes.mediaLogo.data.attributes.url,
    })),
    navFooter: data.data.attributes?.footer_menus.data.map((item: any) => ({
      id: item.id,
      title: item.attributes.menuTitle,
      isActive: item.attributes.isActive,
      slug: item.attributes.menuTitleLink || '#',
      children: item.attributes.menu.map((children: any) => ({
        id: children.id,
        title: children.itemName,
        isActive: children.menu_item.data.attributes.isActive,
        slug: children.menu_item.data.attributes.itemLink || '#',
      })),
    })),
  }
  return res
}
