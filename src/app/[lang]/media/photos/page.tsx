import { API } from '@/api'
import { Photos } from '@/components/Pages/Photos'
import { INextPage } from '@/types'
import { getPhotosPageData } from '@/utils/getPhotosPageData'
import { FC } from 'react'

const PhotosPage: FC<INextPage> = async ({ params }) => {
  const fetchMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/photo-page?populate[galleries][populate][photos][populate][1]=photo&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchMediaItems()

  return <Photos data={getPhotosPageData(data.data) || []} />
}

export default PhotosPage
