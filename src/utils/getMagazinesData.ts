import { API } from '@/api'
import { IData } from '@/types'

export interface IMagazinesData {
  title: string
  id: number
  slug: string
  magazines: IMagazine[]
}
export interface IMagazine {
  id: number
  ruLink: string
  enLink: string
  title: string
  img: string
}

type IGetMagazinesData = (data: IData[]) => IMagazinesData[]

export const getMagazinesData: IGetMagazinesData = data => {
  return data.map(category => ({
    title: category.attributes.title,
    id: category.id,
    slug: category.attributes.slug || '#',
    magazines: category.attributes.magazines.data.map((magazine: IData) => ({
      id: magazine.id,
      ruLink: API.imgUrl + magazine.attributes.ruFile.data?.attributes.url,
      enLink: API.imgUrl + magazine.attributes.enFile.data?.attributes.url,
      title: magazine.attributes.magazineTitle,
      img: API.imgUrl + magazine.attributes.magazineCover.data.attributes.url,
    })),
  }))
}
