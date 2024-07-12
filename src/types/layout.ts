import { ILink } from '.'

export interface INavItem extends ILink {
  id: string
  children: INavItem[]
  isActive: boolean
}

export interface IHeaderNavSettings {
  linkColor: string
  linkColorActive: string
  linkColorHover: string
}

export interface ISocialsItem extends ILink {
  id: string
  img: string
}
