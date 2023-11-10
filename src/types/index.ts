import { ReactElement } from 'react'

export interface ILink {
  slug: string
  title: string
}

export interface IComponentWithChildren {
  children: React.ReactNode
}

export interface IComponentWithClassName {
  className?: string
}

export interface IIcon {
  className?: string
  fill?: string
}

export type IChildren =
  | Array<ReactElement | null>
  | ReactElement
  | string
  | null
  | undefined
