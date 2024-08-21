import { API } from '@/api'
import { SingleItem } from '@/components/Pages/SingleItem'
import { INextPage } from '@/types'
import { getDataArray } from '@/utils/getDataArray'
import { getInterviewData } from '@/utils/getInterviewsData'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'
import React, { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/news?fields=slug`).then(res =>
    res.json(),
  )
  return slugs.data.map((slug: { attributes: { slug: string } }) => ({
    slug: slug.attributes.slug,
  }))
}

interface Props extends INextPage {}

const SingleNewsPage: FC<Props> = async ({ params }) => {
  const fetchNewPageData = async () => {
    try {
      const resData = await fetch(
        `${API.baseUrl}/news?filters[slug][$eq]=${params.slug}&populate=*&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const data = await resData.json()
      const resNews = await fetch(
        `${API.baseUrl}/news?filters[$not][0][slug][$eq]=${params.slug}&populate=*&sort[0]=date:desc&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const news = await resNews.json()
      const resEvents = await fetch(
        `${API.baseUrl}/events?populate=*&sort[0]=date:desc&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const events = await resEvents.json()

      const resInterviews = await fetch(
        `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=4&locale=${params.lang}`,
        { cache: 'no-cache' },
      )
      const interviews = await resInterviews.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Новость`,
      )

      const seoData = await seoRes.json()

      return {
        data: getDataArray(data)[0],
        news: getDataArray(news),
        events: getDataArray(events),
        interviews: getInterviewData(interviews.data).data,
        seoData: getSeoData(seoData.data),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return {
        data: null,
        news: null,
        events: null,
        interviews: null,
        seoData: null,
      }
    }
  }

  const { data, news, events, interviews, seoData } = await fetchNewPageData()

  if (!data || !news || !events || !interviews || !seoData)
    return redirect('/error-page')

  return (
    <SingleItem
      interviews={interviews}
      locale={params.lang}
      events={events}
      news={news}
      data={data}
      seoData={seoData}
    />
  )
}

export default SingleNewsPage
