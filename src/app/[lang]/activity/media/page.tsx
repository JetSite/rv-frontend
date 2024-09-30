import { API } from '@/api'
import { MediaActivity } from '@/components/Pages/MediaActivity'
import { INextPage } from '@/types'
import { getAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { getDataArray } from '@/utils/getDataArray'
import { getInterviewData } from '@/utils/getInterviewsData'
import { getMediaActivityData } from '@/utils/getMediaActivityData'
import React, { FC } from 'react'

const MediaActivityPage: FC<INextPage> = async ({ params }) => {
  const fetchMediaActivity = async () => {
    const res = await fetch(
      `${API.baseUrl}/media-activity-page?populate[menu_items][populate][cover][fields][0]=url&populate[contentImage]=*&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )

    const data = await res.json()

    const resNews = await fetch(
      `${API.baseUrl}/news?filters[viewOnMediaPage]=true&sort[0]=date:desc&pagination[pageSize]=3&populate=*&locale=${params.lang}`,
      { cache: 'no-cache' },
    )
    const newsData = await resNews.json()

    const resEvents = await fetch(
      `${API.baseUrl}/events?filters[viewOnMediaPage]=true&sort[0]=date:desc&pagination[pageSize]=3&populate=*&locale=${params.lang}`,
      { cache: 'no-cache' },
    )

    const eventsData = await resEvents.json()

    const resInterviews = await fetch(
      `${API.baseUrl}/interviews?filters[viewOnMediaPage]=true&sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&pagination[pageSize]=3&locale=${params.lang}`,
      { cache: 'no-cache' },
    )
    const interviewsData = await resInterviews.json()

    return { data, newsData, interviewsData, eventsData }
  }
  const data = await fetchMediaActivity()

  return (
    <MediaActivity
      locale={params.lang}
      interviews={getInterviewData(data.interviewsData.data).data}
      news={getDataArray(data.newsData)}
      data={getMediaActivityData(data.data.data)}
      events={getDataArray(data.eventsData)}
    />
  )
}

export default MediaActivityPage
