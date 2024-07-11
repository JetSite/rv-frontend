import { IData } from '@/types'

export interface IActivityElement {
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
  elements: IActivityElement[]
}

interface IActivityGroupedCategory {
  groupId: number
  groupTitle: string
  slug: string
  categories: IActivityCategory[]
}

export interface IActivityData {
  id: number
  title: string
  text: string
  slug: string
  categories: IActivityCategory[]
  groupedCategory: IActivityGroupedCategory[] | null
}

type IGetActivityData = (data: IData) => IActivityData

export const getActivityData: IGetActivityData = data => {
  function getCategoriesGroup(array: IData[]) {
    const groupedCategories: Record<number | 'null', IActivityGroupedCategory> =
      array.reduce(
        (acc, e) => {
          const key: number | 'null' =
            e.attributes.subcategory_groups.data?.id !== undefined
              ? e.attributes.subcategory_groups.data.id
              : 'null'
          if (key !== 'null') {
            if (!acc[key]) {
              acc[key] = key
                ? {
                    groupTitle: e.attributes.subcategory_groups.data?.attributes
                      ?.groupTitleShort
                      ? e.attributes.subcategory_groups.data?.attributes
                          .groupTitleShort
                      : null,
                    groupId: key,
                    slug:
                      e.attributes.subcategory_groups.data?.attributes.slug ||
                      '#',
                    categories: [],
                  }
                : {
                    groupId: e.id,
                    groupTitle: e.attributes.subcategoryTitleShort,
                    slug: e.attributes.slug || '#',
                    categories: [],
                  }
            }
            acc[key].categories.push({
              id: e.id,
              title: e.attributes.subcategoryTitleShort,
              slug: e.attributes.slug || '#',
              elements: e.attributes.objectOfActivity.data.map(
                (element: IData) => ({
                  id: e.id,
                  untilNow: element.attributes.untilNow,
                  endDate: element.attributes.endDate,
                  content: element.attributes.objectContent,
                  description: element.attributes.objectDescription,
                  name: element.attributes.objectName,
                  startDate: element.attributes.startDate,
                }),
              ),
            })
          }
          return acc
        },
        {} as Record<number | 'null', IActivityGroupedCategory>,
      )

    return Object.values(groupedCategories)
  }

  const categories: IActivityCategory[] = []
  data.attributes.subcategoriesOfActivities.data.forEach((category: IData) => {
    if (!category.attributes.subcategory_groups.data) {
      categories.push({
        id: category.id,
        title: category.attributes.subcategoryTitleShort,
        slug: category.attributes.slug || '#',
        elements: category.attributes.objectOfActivity.data.map((e: IData) => ({
          id: e.id,
          untilNow: e.attributes.untilNow,
          endDate: e.attributes.endDate,
          content: e.attributes.objectContent,
          description: e.attributes.objectDescription,
          name: e.attributes.objectName,
          startDate: e.attributes.startDate,
        })),
      })
    }
  })

  const groupedCategory =
    getCategoriesGroup(data.attributes.subcategoriesOfActivities.data).filter(
      e => e.groupTitle,
    ) || null

  return {
    id: data.id,
    title: data.attributes.fullTitle,
    text: data.attributes.description,
    slug: data.attributes.slug || '#',
    groupedCategory,
    categories,
  }
}
