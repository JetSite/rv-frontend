import { API } from '@/api'
import { getDate } from '@/api/fetch/getDate'
import { Archive } from '@/components/Pages/Archives/Archive'
import { MobileArchive } from '@/components/Pages/Archives/MobileArchive'
import { News } from '@/components/Pages/News'
import { INextPage } from '@/types'
import { getDataArray } from '@/utils/getDataArray'
import { FC } from 'react'

interface Props extends INextPage {}

const Detention: FC<Props> = async ({}) => {
  const dataRes = await fetch(
    `${API.baseUrl}/news?populate=*&sort[0]=date:desc&filters[categories][id]=5`,
    {
      cache: 'no-cache',
    },
  )
  const resEvents = await fetch(
    `${API.baseUrl}/events?populate=*&sort[0]=date:desc`,
  )

  const dataEvents = await resEvents.json()
  const data = await dataRes.json()

  const normalizeData = getDataArray(data)
  const normalizeDataEvents = getDataArray(dataEvents)

  const title = 'Архив новостей'
  const subTitle =
    'На странице “Архив новостей” нашего сайта мы собираем все актуальные и интересные события, которые произошли в последнее время. Вы можете ознакомиться с последними репортажами о главных новостях мира, политики, экономики и культуры. Наша команда постоянно работает над обновлением базы данных, чтобы предоставлять вам наиболее полную и свежую информацию.'

  const dateArr = await getDate()
  if (!dateArr) {
    return <></>
  }

  return (
    <>
      <div className="notDesktop:hidden">
        <Archive
          data={dateArr}
          link="/news/all/"
          itemsArchive={normalizeData}
          title={title}
          subTitle={subTitle}
          locale="ru"
          page="newsDate"
        />
      </div>
      <div className="desktop:hidden">
        <MobileArchive
          data={dateArr}
          link="/news/all/"
          itemsArchive={normalizeData}
          title={title}
          subTitle={subTitle}
          locale="ru"
          page="newsDate"
        />
      </div>
    </>
  )
}

export default Detention
