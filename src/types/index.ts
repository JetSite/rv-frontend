import { ReactElement } from 'react'

export interface ILink {
  slug: string
  title: string
}

export interface ILogo {
  title: string
  img: string
}

export type IID = string | number

export type ILocale = 'ru' | 'en' | 'am'

export interface IComponentWithChildren {
  children?: IChildren
}

export interface IIcon {
  className?: string
  fill?: string
  variant?: 'inner' | 'main'
}

export type IChildren =
  | Array<ReactElement | null>
  | ReactElement
  | string
  | null
  | undefined
