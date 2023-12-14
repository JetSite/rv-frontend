import { IData } from '@/types'

interface IActivityElement {
  id: number
  untilNow: boolean
  endDate: string | null
  content: string
  description: string
  name: string
  startDate: string
}

interface IActivityCategory {
  id: number
  title: string
  slug: string
  element: IActivityElement[]
}

export interface IActivityData {
  id: number
  title: string
  text: string
  slug: string
  category: IActivityCategory[]
}

type IGetActivityData = (data: IData) => IActivityData

export const getActivityData: IGetActivityData = data => {
  return {
    id: data.id,
    title: data.attributes.fullTitle,
    text: data.attributes.description,
    slug: data.attributes.slug,
    category: data.attributes.subcategoriesOfActivities.data.map(
      (category: IData) => ({
        id: category.id,
        title: category.attributes.subcategoryTitle,
        slug: category.attributes.slug,
        element: category.attributes.objectOfActivity.data.map((e: IData) => ({
          id: e.id,
          untilNow: e.attributes.untilNow,
          endDate: e.attributes.endDate,
          content: e.attributes.objectContent,
          description: e.attributes.objectDescription,
          name: e.attributes.objectName,
          startDate: e.attributes.startDate,
        })),
      }),
    ),
  }
}
