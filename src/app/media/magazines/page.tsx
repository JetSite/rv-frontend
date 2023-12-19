import { API } from '@/api'
import { Magazines } from '@/components/Pages/Magazines'
import { getMagazinesData } from '@/utils/getMagazinesData'

const InterviewsPage = async () => {
  const fetchMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/magazine-categories?populate[magazines][populate][magazineCover][fields][0]=url&populate[magazines][populate][ruFile][fields][1]=url&populate[magazines][populate][enFile][fields][2]=url`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchMediaItems()

  return <Magazines data={getMagazinesData(data.data)} />
}

export default InterviewsPage
