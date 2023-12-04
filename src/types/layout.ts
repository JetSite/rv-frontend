import { ILink } from '.'

export interface INavItem extends ILink {
  id: string
  children: ILink[]
}

export interface ISocialsItem extends ILink {
  id: string
  img: string
}
