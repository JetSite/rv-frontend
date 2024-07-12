import { API } from '@/api'
import { IData, IID } from '@/types'
import { IGalleryItem } from '@/types/item'

export interface IGallery {
  id: IID
  title: string | null
  text: string | null
  // order: string | null
  photos: IGalleryItem[]
}

export interface IPhotoPageData {
  id: IID
  slug: string
  title: string | null
  description: string | null
  galleries: IGallery[]
}

export type IGetPhotosPageData = (data: IData) => IPhotoPageData

export const getPhotosPageData: IGetPhotosPageData = data => {
  return {
    id: data.id,
    slug: data.attributes?.slug,
    title: data.attributes?.title || null,
    description: data.attributes?.description || null,
    galleries: data.attributes?.galleries?.data?.map((item: IData) => ({
      id: item.id,
      title: item.attributes.title || null,
      text: item.attributes.content || null,
      // opder: item.attributes.order || null,
      photos: item.attributes.photos.data.map((photo: IData) => {
        return {
          id: photo.id,
          alt: photo.attributes.caption,
          title: photo.attributes.alternativeText || null,
          src: API.imgUrl + photo.attributes.url,
          key: photo.id.toString(),
          width: photo.attributes.width,
          height: photo.attributes.height,
        }
      }),
    })),
  }
}
