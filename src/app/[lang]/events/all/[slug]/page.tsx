import { API } from '@/api'
import { SingleItem } from '@/components/Pages/SingleItem'
import { getDataArray } from '@/utils/getDataArray'
import React, { FC } from 'react'
import { redirect } from 'next/navigation'
import { getInterviewData } from '@/utils/getInterviewsData'
import { INextPage } from '@/types'

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
    return { data, news, events, interviews }
  }

  const { data, news, events, interviews } = await fetchNewPageData()

  if (!data.data.length) return redirect('/not-found')

  return (
    <SingleItem
      locale="ru"
      interviews={getInterviewData(interviews.data).data}
      events={getDataArray(events)}
      news={getDataArray(news)}
      data={getDataArray(data)[0]}
    />
  )
}

export default SingleNewsPage
