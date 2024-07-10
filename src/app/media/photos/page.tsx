import { API } from '@/api'
import { Photos } from '@/components/Pages/Photos'
import { getPhotosPageData } from '@/utils/getPhotosPageData'

const PhotosPage = async () => {
  const fetchMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/photo-page?populate[galleries][populate][photos][populate][1]=photo`,
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
