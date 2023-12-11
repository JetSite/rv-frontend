import { API } from '@/api'
import { SingleItem } from '@/components/Pages/SingleItem'
import { getDataArray } from '@/utils/getDataArray'
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
        cache: 'no-cache',
      },
    )
    const data = await resData.json()
    const resNews = await fetch(
      `${API.baseUrl}/news?filters[$not][0][slug][$eq]=${params.slug}&populate=*&sort[0]=date:desc`,
    )
    const news = await resNews.json()
    const resEvents = await fetch(
      `${API.baseUrl}/events?populate=*&sort[0]=date:desc`,
    )
    const events = await resEvents.json()
    return { data, news, events }
  }

  const { data, news, events } = await fetchNewPageData()

  return (
    <SingleItem
    locale='ru'
      events={getDataArray(events)}
      news={getDataArray(news)}
      data={getDataArray(data)[0]}
    />
  )
}

export default SingleNewsPage