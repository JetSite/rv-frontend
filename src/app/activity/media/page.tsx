import { API } from '@/api'
import { MediaActivity } from '@/components/Pages/MediaActivity'
import { getAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { getInterviewData } from '@/utils/getInterviewsData'
import { getMediaActivityData } from '@/utils/getMediaActivityData'
import React from 'react'

const MediaActivityPage = async () => {
  const fetchMediaActivity = async () => {
    const res = await fetch(
      `${API.baseUrl}/media-activity-page?populate[menu_items][populate][cover][fields][0]=url`,
      {
        cache: 'no-cache',
      },
    )
    const data = await res.json()

    const resVideo = await fetch(
      `${API.baseUrl}/audio-and-videos?sort[0]=date:desc&populate[persons][populate][photo][fields][0]=url`,
      { cache: 'no-cache' },
    )

    const videoData = await resVideo.json()

    const resInterviews = await fetch(
      `${API.baseUrl}/interviews?sort[0]=date:desc&populate[person][populate][photo][fields][0]=url`,
      { cache: 'no-cache' },
    )
    const InterviewsData = await resInterviews.json()

    return { data, videoData, InterviewsData }
  }
  const data = await fetchMediaActivity()

  return (
    <MediaActivity
      interviews={getInterviewData(data.InterviewsData.data).data}
      videos={getAudioAndVideosData(data.videoData.data).data}
      data={getMediaActivityData(data.data.data)}
    />
  )
}

export default MediaActivityPage
