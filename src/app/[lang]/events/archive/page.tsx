import { API } from '@/api'
import { getDate } from '@/api/fetch/getDate'
import { Archive } from '@/components/Pages/Archives/Archive'
import { MobileArchive } from '@/components/Pages/Archives/MobileArchive'
import { INextPage } from '@/types'
import { getDataArray } from '@/utils/getDataArray'
import React, { FC } from 'react'

const ArchiveEvents: FC<INextPage> = async ({ params }) => {
  const res = await fetch(
    `${API.baseUrl}/events?populate=*&sort[0]=date:desc&locale=${params.lang}`,
    { cache: 'no-cache' },
  )
  const data = await res.json()
  const normalizeData = getDataArray(data)

  const title = 'Архив событий'
  const subTitle =
    'На странице архива событий и интервью нашего сайта мы рады представить вам самые яркие и интересные моменты из жизни нашей организации. Здесь вы найдете не только подробное описание проведенных мероприятий, но и сможете посмотреть или даже скачать интервью с ключевыми персонами. Каждое событие представлено в виде сжатой, легко читаемой карточки, что позволит вам быстро найти нужную информацию. Мы постоянно работаем над пополнением архива, чтобы вы всегда были в курсе самых свежих новостей и актуальных событий.'

  const dateArr = await getDate(params.lang)
  if (!dateArr) {
    return <></>
  }

  return (
    <>
      <div className="notDesktop:hidden">
        <Archive
          data={dateArr}
          link="/events/all/"
          itemsArchive={normalizeData}
          title={title}
          subTitle={subTitle}
          locale="ru"
          page="eventsDate"
        />
      </div>
      <div className="desktop:hidden">
        <MobileArchive
          data={dateArr}
          link="/events/all/"
          itemsArchive={normalizeData}
          title={title}
          subTitle={subTitle}
          locale="ru"
          page="eventsDate"
        />
      </div>
    </>
  )
}

export default ArchiveEvents
