import { API } from '@/api'
import { Archive } from '@/components/Archive'
import { getCalendarData } from '@/utils/getCalendarData'
import { getDataArray } from '@/utils/getDataArray'
import React from 'react'

const ArchiveNews = async () => {
  const res = await fetch(`${API.baseUrl}/news?populate=*&sort[0]=date:desc`)
  const data = await res.json()
  const normalizeData = getDataArray(data)

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
        itemsArchive={normalizeData}
        yearsList={yearsList}
        title={title}
        subTitle={subTitle}
      />
    </div>
  )
}

export default ArchiveNews
