import { API } from '@/api'
import { IResponseData, getFilterData } from '@/api/fetch/getFilterData'
import { AudioAndVideos } from '@/components/Pages/AudioAndVideos'
import { getAudioAndVideosData } from '@/utils/getAudioAndVideosData'

const AudioAndVideosPage = async () => {
  const getMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/audio-and-videos?sort[0]=date:desc&populate[persons][populate][photo][fields][0]=url&populate[source][fields][1]=title&populate[source][fields][2]=link&pagination[pageSize]=4&pagination[page]=2`,
      { cache: 'no-cache' },
    )
    const data: IResponseData = await res.json()
    return data
  }

  const data = await getMediaItems()

  return (
    <AudioAndVideos
      filterData={await getFilterData(data.meta.pagination, 'audio-and-videos')}
      data={getAudioAndVideosData(data.data)}
    />
  )
}

export default AudioAndVideosPage
