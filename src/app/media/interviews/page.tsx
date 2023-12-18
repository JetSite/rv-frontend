import { API } from '@/api'
import { Interviews } from '@/components/Pages/Interviews'
import { getInterviewData } from '@/utils/getInterviewsData'

const InterviewsPage = async () => {
  const fetchInterviews = async () => {
    const res = await fetch(
      `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url`,
      { cache: 'no-cache' },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchInterviews()

  return <Interviews data={getInterviewData(data.data)} />
}

export default InterviewsPage
