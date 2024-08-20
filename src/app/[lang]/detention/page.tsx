import { API } from '@/api'
import { getDate } from '@/api/fetch/getDate'
import { Archive } from '@/components/Pages/Archives/Archive'
import { MobileArchive } from '@/components/Pages/Archives/MobileArchive'
import { News } from '@/components/Pages/News'
import { INextPage } from '@/types'
import { getDataArray } from '@/utils/getDataArray'
import { FC } from 'react'

interface Props extends INextPage {}

const Detention: FC<Props> = async ({ params }) => {
  const pageDataRes = await fetch(
    `${API.baseUrl}/detention-page?locale=${params.lang}`,
  )
  const pageData = await pageDataRes.json()
  const dataRes = await fetch(
    `${API.baseUrl}/news?populate=*&sort[0]=date:desc&filters[categories][slug]=detention&locale=${params.lang}`,
    {
      cache: 'no-cache',
    },
  )
  const resEvents = await fetch(
    `${API.baseUrl}/events?populate=*&sort[0]=date:desc&filters[categories][slug]=detention&locale=${params.lang}`,
    {
      cache: 'no-cache',
    },
  )

  const dataEvents = await resEvents.json()
  const data = await dataRes.json()

  const normalizeData = getDataArray(data)
  const normalizeDataEvents = getDataArray(dataEvents)

  const title = pageData.data?.attributes.title
  const subTitle = pageData.data?.attributes.content

  const fullData = normalizeData.concat(normalizeDataEvents).sort((a, b) => {
    const dateA = new Date(a.date ?? '').getTime()
    const dateB = new Date(b.date ?? '').getTime()
    if (dateB && dateA) {
      return dateB - dateA
    }
    return -1
  })

  const dateArr = await getDate(params.lang, true)
  if (!dateArr) {
    return <></>
  }

  return (
    <>
      <div className="notDesktop:hidden">
        <Archive
          data={dateArr}
          link="/news/all/"
          itemsArchive={fullData}
          title={title}
          subTitle={subTitle}
          locale={params.lang}
          page="detentionData"
        />
      </div>
      <div className="desktop:hidden">
        <MobileArchive
          data={dateArr}
          link="/news/all/"
          itemsArchive={fullData}
          title={title}
          subTitle={subTitle}
          locale={params.lang}
          page="detentionData"
        />
      </div>
    </>
  )
}

export default Detention
