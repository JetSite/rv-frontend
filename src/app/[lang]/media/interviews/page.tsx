import { API } from '@/api'
import { getFilterData } from '@/api/fetch/getFilterData'
import { Interviews } from '@/components/Pages/Interviews'
import { INextPage } from '@/types'
import { getInterviewData } from '@/utils/getInterviewsData'
import { FC } from 'react'

const InterviewsPage: FC<INextPage> = async ({ params }) => {
  const fetchInterviews = async () => {
    const res = await fetch(
      `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=2&locale=${params.lang}`,
      { cache: 'no-cache' },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchInterviews()

  return (
    <Interviews
      locale={params.lang}
      filterData={await getFilterData(data.meta.pagination, 'interviews')}
      data={getInterviewData(data.data)}
      meta={data.meta}
    />
  )
}

export default InterviewsPage
