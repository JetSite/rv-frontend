import { API } from '@/api'
import { Archive } from '@/components/Pages/Archive'
import { getDataArray } from '@/utils/getDataArray'
import React from 'react'

const ArchiveNews = async () => {
  const res = await fetch(`${API.baseUrl}/news?populate=*&sort[0]=date:desc`)
  const data = await res.json()
  const normalizeData = getDataArray(data)

  const title = 'Архив новостей'
  const subTitle =
    'На странице “Архив новостей” нашего сайта мы собираем все актуальные и интересные события, которые произошли в последнее время. Вы можете ознакомиться с последними репортажами о главных новостях мира, политики, экономики и культуры. Наша команда постоянно работает над обновлением базы данных, чтобы предоставлять вам наиболее полную и свежую информацию.'

  return (
    <div>
      <Archive
        locale="ru"
        itemsArchive={normalizeData}
        title={title}
        subTitle={subTitle}
      />
    </div>
  )
}

export default ArchiveNews
