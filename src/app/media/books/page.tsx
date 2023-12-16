import { API } from '@/api'
import { Books } from '@/components/Pages/Books'
import { getBooksData } from '@/utils/getBooksData'

const InterviewsPage = async () => {
  const fetchMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/book-categories?populate[book][populate][bookCover][fields][0]=url`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchMediaItems()

  return <Books data={getBooksData(data.data)} />
}

export default InterviewsPage
