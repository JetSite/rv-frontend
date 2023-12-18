import { API } from '@/api'
import { Archive } from '@/components/Pages/Archive'
import { getCalendarData } from '@/utils/getCalendarData'
import { getDataArray } from '@/utils/getDataArray'
import React from 'react'

const ArchiveEvents = async () => {
  const res = await fetch(`${API.baseUrl}/events?populate=*&sort[0]=date:desc`)
  const data = await res.json()
  const normalizeData = getDataArray(data)

  const title = 'Архив событий'
  const subTitle =
    'На странице архива событий и интервью нашего сайта мы рады представить вам самые яркие и интересные моменты из жизни нашей организации. Здесь вы найдете не только подробное описание проведенных мероприятий, но и сможете посмотреть или даже скачать интервью с ключевыми персонами. Каждое событие представлено в виде сжатой, легко читаемой карточки, что позволит вам быстро найти нужную информацию. Мы постоянно работаем над пополнением архива, чтобы вы всегда были в курсе самых свежих новостей и актуальных событий.'

  const { yearsList } = getCalendarData(
    new Date().getFullYear(),
    new Date().getMonth(),
    'yyyy-mm-dd',
    'ru',
  )

  return (
    <div>
      <Archive
        link="/events/all/"
        itemsArchive={normalizeData}
        yearsList={yearsList}
        title={title}
        subTitle={subTitle}
        locale="ru"
      />
    </div>
  )
}

export default ArchiveEvents
