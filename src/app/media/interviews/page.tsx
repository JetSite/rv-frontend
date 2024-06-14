import { API } from '@/api'
import { getFilterData } from '@/api/fetch/getFilterData'
import { Interviews } from '@/components/Pages/Interviews'
import { getInterviewData } from '@/utils/getInterviewsData'

const InterviewsPage = async () => {
  const fetchInterviews = async () => {
    const res = await fetch(
      `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=2`,
      { cache: 'no-cache' },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchInterviews()

  return (
    <Interviews
      filterData={await getFilterData(data.meta.pagination, 'interviews')}
      data={getInterviewData(data.data)}
      meta={data.meta}
    />
  )
}

export default InterviewsPage
