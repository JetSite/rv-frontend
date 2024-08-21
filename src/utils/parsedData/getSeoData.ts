interface ITranslateItem {
  id: number
  stringContent: string
  stringHook: string
}

export interface ISeoData {
  [key: string]: string
}

export const getSeoData: (data: Array<any>) => ISeoData | null = data => {
  if (!data || !data.length) return null
  const translateObject = data[0].attributes.translate.reduce(
    (acc: ISeoData, item: ITranslateItem) => {
      acc[item.stringHook] = item.stringContent
      return acc
    },
    {},
  )
  return {
    seoTitle: data[0].attributes.seoTitle,
    seoDescription: data[0].attributes.seoDescription,
    ...translateObject,
  }
}
