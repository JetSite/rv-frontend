import { API } from '@/api'
import { getDate } from '@/api/fetch/getDate'
import { Archive } from '@/components/Pages/Archives/Archive'
import { MobileArchive } from '@/components/Pages/Archives/MobileArchive'
import { IStoreData } from '@/store'
import { INextPage } from '@/types'
import { getDataArray } from '@/utils/getDataArray'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'
import React, { FC } from 'react'

const ArchiveNews: FC<INextPage> = async ({ params }) => {
  const fetchNews = async () => {
    try {
      const res = await fetch(
        `${API.baseUrl}/news?populate=*&sort[0]=date:desc&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const data = await res.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Архив новостей`,
      )

      const seoData = await seoRes.json()

      return {
        data: getDataArray(data),
        seoData: getSeoData(seoData.data),
        dateArr: await getDate(params.lang),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return { data: null, seoData: null }
    }
  }

  const { data, seoData, dateArr } = await fetchNews()

  if (!data || !seoData || !dateArr) return redirect('/error-page')

  const title = seoData.seoTitle
  const subTitle = seoData.seoDescription

  return (
    <>
      <div className="notDesktop:hidden">
        <Archive
          data={dateArr}
          link="/news/all/"
          itemsArchive={data}
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
          itemsArchive={data}
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
