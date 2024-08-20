import { API } from '@/api'
import { News } from '@/components/Pages/News'
import { Locale } from '@/i18n-config'
import { getDataArray } from '@/utils/getDataArray'

const NewsPage = async ({ params }: { params: { lang: Locale } }) => {
  const res = await fetch(
    `${API.baseUrl}/news?populate=*&sort[0]=date:desc&locale=${params.lang}`,
    {
      cache: 'default',
    },
  )
  const data = await res.json()
  const resEvents = await fetch(
    `${API.baseUrl}/events?populate=*&sort[0]=date:desc`,
  )
  const dataEvents = await resEvents.json()

  const normalizeData = getDataArray(data)
  const normalizeDataEvents = getDataArray(dataEvents)

  return <News locale={params.lang} data={normalizeData} eventsData={normalizeDataEvents} />
}

export default NewsPage
