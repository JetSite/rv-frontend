import { ILink } from '.'

export interface INavItem extends ILink {
  id: string
  children: INavItem[]
}

export interface ISocialsItem extends ILink {
  id: string
  img: string
}
