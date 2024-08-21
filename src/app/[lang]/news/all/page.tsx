import { API } from '@/api'
import { News } from '@/components/Pages/News'
import { Locale } from '@/i18n-config'
import { getDataArray } from '@/utils/getDataArray'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'

const NewsPage = async ({ params }: { params: { lang: Locale } }) => {
  const fetchNews = async () => {
    try {
      const res = await fetch(
        `${API.baseUrl}/news?populate=*&sort[0]=date:desc&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const data = await res.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Новости`,
      )
      const resEvents = await fetch(
        `${API.baseUrl}/events?populate=*&sort[0]=date:desc&locale=${params.lang}`,
      )
      const dataEvents = await resEvents.json()

      const seoData = await seoRes.json()

      return {
        data: getDataArray(data),
        seoData: getSeoData(seoData.data),
        events: getDataArray(dataEvents),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return { data: null, seoData: null, events: null }
    }
  }
  const { data, seoData, events } = await fetchNews()

  if (!data || !seoData || !events) return redirect('/error-page')

  return (
    <News
      locale={params.lang}
      data={data}
      eventsData={events}
      seoData={seoData}
    />
  )
}

export default NewsPage
