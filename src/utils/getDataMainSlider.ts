import { API } from '@/api'

interface IGetDataMainSliderProps {
  id: string
  attributes: {
    [K: string]: any
  }
}

export interface IDataMainSlider {
  title: string
  titleFirstLine: string
  titleSecondLine: string
  titleFirstLineBackgroundColor: string | null
  titleFirstLineTextColor: string | null
  titleSecondLineBackgroundColor: string | null
  titleSecondLineTextColor: string
  img: string
}

type IGetDataMainSlider = (
  array: IGetDataMainSliderProps[],
) => IDataMainSlider[]

export const getDataMainSlider: IGetDataMainSlider = array => {
  return array.map(item => ({
    title: item.attributes.title,
    titleFirstLine: item.attributes.titleFirstLine,
    titleSecondLine: item.attributes.titleSecondLine,
    titleFirstLineBackgroundColor:
      item.attributes.titleFirstLineBackgroundColor,
    titleFirstLineTextColor: item.attributes.titleFirstLineTextColor,
    titleSecondLineBackgroundColor:
      item.attributes.titleSecondLineBackgroundColor,
    titleSecondLineTextColor: item.attributes.titleSecondLineTextColor,
    img: API.imgUrl + item.attributes.image.data.attributes.url,
  }))
}
