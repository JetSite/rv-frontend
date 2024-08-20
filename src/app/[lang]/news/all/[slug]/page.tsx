import { API } from '@/api'
import { SingleItem } from '@/components/Pages/SingleItem'
import { getDataArray } from '@/utils/getDataArray'
import { getInterviewData } from '@/utils/getInterviewsData'
import React, { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/news?fields=slug`).then(res =>
    res.json(),
  )
  return slugs.data.map((slug: { attributes: { slug: string } }) => ({
    slug: slug.attributes.slug,
  }))
}

interface Props {
  params: { slug: string }
}

const SingleNewsPage: FC<Props> = async ({ params }) => {
  const fetchNewPageData = async () => {
    const resData = await fetch(
      `${API.baseUrl}/news?filters[slug][$eq]=${params.slug}&populate=*`,
      {
        cache: 'default',
      },
    )
    const data = await resData.json()
    const resNews = await fetch(
      `${API.baseUrl}/news?filters[$not][0][slug][$eq]=${params.slug}&populate=*&sort[0]=date:desc`,
      {
        cache: 'default',
      },
    )
    const news = await resNews.json()
    const resEvents = await fetch(
      `${API.baseUrl}/events?populate=*&sort[0]=date:desc`,
      {
        cache: 'default',
      },
    )
    const events = await resEvents.json()

    const resInterviews = await fetch(
      `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=4`,
      { cache: 'no-cache' },
    )
    const interviews = await resInterviews.json()

    return { data, news, events, interviews }
  }

  const { data, news, events, interviews } = await fetchNewPageData()

  if (!data.data.length) return <div />

  return (
    <SingleItem
      interviews={getInterviewData(interviews.data).data}
      locale="ru"
      events={getDataArray(events)}
      news={getDataArray(news)}
      data={getDataArray(data)[0]}
    />
  )
}

export default SingleNewsPage
