import { eventMock } from '@/api/mock'
import { Archive } from '@/components/Archive'
import { getCalendarData } from '@/utils/getCalendarData'
import React from 'react'

const ArchiveNews = () => {
  const title = 'Архив новостей'
  const subTitle =
    'На странице “Архив новостей” нашего сайта мы собираем все актуальные и интересные события, которые произошли в последнее время. Вы можете ознакомиться с последними репортажами о главных новостях мира, политики, экономики и культуры. Наша команда постоянно работает над обновлением базы данных, чтобы предоставлять вам наиболее полную и свежую информацию.'

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

export default ArchiveNews
