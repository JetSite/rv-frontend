import { NextPage } from 'next'
import { FC, ReactElement } from 'react'

export interface IData {
  attributes: { [K: string]: any }
  id: number
}

export interface IPagination {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export interface IImage {
  url: string
  alt: string
  width: number
  height: number
}

export interface IMeta {
  pagination: IPagination
  [K: string]: unknown
}

export interface ILink {
  slug: string
  title: string
}

export interface ILogo {
  title: string
  img: string
}

export type IID = string | number

export interface INextPage {
  params: { [K: string]: string | undefined }
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ILocale = 'ru' | 'en' | 'am'

export interface IComponentWithChildren {
  children?: IChildren
}

export interface IIcon {
  className?: string
  fill?: string
  variant?: 'inner' | 'main'
  fillOpacity?: string
}

export type IChildren =
  | Array<ReactElement | null>
  | ReactElement
  | string
  | null
  | undefined
