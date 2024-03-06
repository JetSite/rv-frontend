import { IID } from '@/types'
import { API } from '..'

type IGetFilterData = (
  pagination: IPagination,
  src: string,
) => Promise<IFilterData>

export interface IFilterData {
  dates: string[]
  titles: string[]
  sources: string[]
}

export interface IPagination {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export interface IResponseData {
  data: any[]
  meta: { pagination: IPagination }
}

export const getFilterData: IGetFilterData = async ({ total }, src) => {
  const resolvePageCount = total / 100 > 1 ? Math.ceil(total / 100) : 1
  const resolveFilterData = []
  for (let i = 1; i <= resolvePageCount; i++) {
    const resolve = await fetch(
      `${API.baseUrl}/${src}?sort[0]=date:desc&populate[persons][fields][0]=id&populate[source][fields][1]=title&populate[source][fields][2]=link&fields[3]=date&fields[4]=title&pagination[pageSize]=100&pagination[page]=${i}`,
      { cache: 'no-cache' },
    )
    const resolveData: IResponseData = await resolve.json()

    resolveFilterData.push(...resolveData.data)
  }

  const filterDateData: string[] = []
  const filterTitleData: string[] = []
  const filterSourceData: string[] = []

  resolveFilterData.forEach(item => {
    filterDateData.push(item.attributes.date.split('-')[0])
    filterTitleData.push(item.attributes.title)
    filterSourceData.push(
      item.attributes.source?.data?.attributes.title || null,
    )
  })

  return {
    dates: [...new Set(filterDateData)],
    titles: filterTitleData,
    sources: [...new Set(filterSourceData.filter(Boolean))],
  }
}
