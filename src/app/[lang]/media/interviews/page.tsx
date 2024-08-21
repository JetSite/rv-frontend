import { API } from '@/api'
import { getFilterData } from '@/api/fetch/getFilterData'
import { Interviews } from '@/components/Pages/Interviews'
import { INextPage } from '@/types'
import { getInterviewData } from '@/utils/getInterviewsData'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'
import { FC } from 'react'

const InterviewsPage: FC<INextPage> = async ({ params }) => {
  const fetchInterviews = async () => {
    try {
      const res = await fetch(
        `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=2&locale=${params.lang}`,
        { cache: 'no-cache' },
      )
      const data = await res.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Интервью`,
      )

      const seoData = await seoRes.json()

      return {
        data,
        seoData: getSeoData(seoData.data),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return { data: null, seoData: null }
    }
  }
  const { data, seoData } = await fetchInterviews()
  if (!data || !seoData) return redirect('/error-page')

  return (
    <Interviews
      locale={params.lang}
      filterData={await getFilterData(data.meta.pagination, 'interviews')}
      data={getInterviewData(data.data)}
      meta={data.meta}
      seoData={seoData}
    />
  )
}

export default InterviewsPage
