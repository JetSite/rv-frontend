import { API } from '@/api'
import { SingleItem } from '@/components/Pages/SingleItem'
import { getDataArray } from '@/utils/getDataArray'
import React, { FC } from 'react'
import { redirect } from 'next/navigation'
import { getInterviewData } from '@/utils/getInterviewsData'
import { INextPage } from '@/types'
import { getSeoData } from '@/utils/parsedData/getSeoData'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/events?fields=slug`).then(res =>
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
        `${API.baseUrl}/events?filters[slug][$eq]=${params.slug}&populate=*&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const data = await resData.json()
      const resEvents = await fetch(
        `${API.baseUrl}/events?filters[$not][0][slug][$eq]=${params.slug}&populate=*&sort[0]=date:desc&pagination[pageSize]=4&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const events = await resEvents.json()
      const resNews = await fetch(
        `${API.baseUrl}/news?populate=*&sort[0]=date:desc&pagination[pageSize]=4&locale=${params.lang}`,
        {
          cache: 'default',
        },
      )
      const news = await resNews.json()

      const resInterviews = await fetch(
        `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=4&locale=${params.lang}`,
        { cache: 'no-cache' },
      )
      const interviews = await resInterviews.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Событие`,
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
      locale={params.lang}
      interviews={interviews}
      events={events}
      news={news}
      data={data}
      seoData={seoData}
    />
  )
}

export default SingleNewsPage
