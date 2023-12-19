import { API } from '@/api'
import { SingleItem } from '@/components/Pages/SingleItem'
import { getDataArray } from '@/utils/getDataArray'
import React, { FC } from 'react'

export async function generateStaticParams() {
  const slugs = await fetch(`${API.baseUrl}/events?fields=slug`).then(res =>
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
      `${API.baseUrl}/events?filters[slug][$eq]=${params.slug}&populate=*`,
      {
        cache: 'default',
      },
    )
    const data = await resData.json()
    const resEvents = await fetch(
      `${API.baseUrl}/events?filters[$not][0][slug][$eq]=${params.slug}&populate=*&sort[0]=date:desc`,
      {
        cache: 'default',
      },
    )
    const events = await resEvents.json()
    const resNews = await fetch(
      `${API.baseUrl}/news?populate=*&sort[0]=date:desc`,
      {
        cache: 'default',
      },
    )
    const news = await resNews.json()
    return { data, news, events }
  }

  const { data, news, events } = await fetchNewPageData()

  if (!data.data.length) return <div />

  return (
    <SingleItem
      locale="ru"
      events={getDataArray(events)}
      news={getDataArray(news)}
      data={getDataArray(data)[0]}
    />
  )
}

export default SingleNewsPage
