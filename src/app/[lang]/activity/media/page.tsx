import { API } from '@/api'
import { MediaActivity } from '@/components/Pages/MediaActivity'
import { Locale } from '@/i18n-config'
import { INextPage } from '@/types'
import { getAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { getInterviewData } from '@/utils/getInterviewsData'
import { getMediaActivityData } from '@/utils/getMediaActivityData'
import React, { FC } from 'react'

const MediaActivityPage: FC<INextPage> = async ({ params }) => {
  const fetchMediaActivity = async () => {
    const res = await fetch(
      `${API.baseUrl}/media-activity-page?populate[menu_items][populate][cover][fields][0]=url&locale=${params.lang}`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    const resVideo = await fetch(
      `${API.baseUrl}/audio-and-videos?sort[0]=date:desc&populate[persons][populate][photo][fields][0]=url&locale=${params.lang}`,
      { cache: 'no-cache' },
    )

    const videoData = await resVideo.json()

    const resInterviews = await fetch(
      `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url&locale=${params.lang}`,
      { cache: 'no-cache' },
    )
    const InterviewsData = await resInterviews.json()

    return { data, videoData, InterviewsData }
  }
  const data = await fetchMediaActivity()

  return (
    <MediaActivity
      locale={params.lang}
      interviews={getInterviewData(data.InterviewsData.data).data}
      videos={getAudioAndVideosData(data.videoData.data).data}
      data={getMediaActivityData(data.data.data)}
    />
  )
}

export default MediaActivityPage
