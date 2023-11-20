import { eventMock } from '@/api/mock'
import { Archive } from '@/components/Archive'
import { getCalendarData } from '@/utils/getCalendarData'
import React from 'react'

const ArchiveEvents = () => {
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
        itemsArchive={eventMock}
        yearsList={yearsList}
        title={title}
        subTitle={subTitle}
      />
    </div>
  )
}

export default ArchiveEvents
