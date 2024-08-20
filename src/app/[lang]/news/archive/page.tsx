import { API } from '@/api'
import { getDate } from '@/api/fetch/getDate'
import { Archive } from '@/components/Pages/Archives/Archive'
import { MobileArchive } from '@/components/Pages/Archives/MobileArchive'
import { IStoreData } from '@/store'
import { INextPage } from '@/types'
import { getDataArray } from '@/utils/getDataArray'
import React, { FC } from 'react'

const ArchiveNews: FC<INextPage> = async ({ params }) => {
  const res = await fetch(
    `${API.baseUrl}/news?populate=*&sort[0]=date:desc&locale=${params.lang}`,
    {
      cache: 'no-cache',
    },
  )
  const data = await res.json()
  const normalizeData = getDataArray(data)

  const title = 'Архив новостей'
  const subTitle =
    'На странице “Архив новостей” нашего сайта мы собираем все актуальные и интересные события, которые произошли в последнее время. Вы можете ознакомиться с последними репортажами о главных новостях мира, политики, экономики и культуры. Наша команда постоянно работает над обновлением базы данных, чтобы предоставлять вам наиболее полную и свежую информацию.'
  const dateArr = await getDate(params.lang)
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
          locale={params.lang}
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
          locale={params.lang}
          page="newsDate"
        />
      </div>
    </>
  )
}

export default ArchiveNews
