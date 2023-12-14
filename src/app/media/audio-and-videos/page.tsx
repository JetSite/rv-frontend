import { API } from '@/api'
import { AudioAndVideos } from '@/components/Pages/AudioAndVideos'

const AudioAndVideosPage = async () => {
  const fetchMediaItems = async () => {
    const res = await fetch(
      `${API.baseUrl}/audio-and-videos?sort[0]=date:desc&populate[persons][populate][photo][fields][0]=url`,
      { cache: 'no-cache' },
    )
    const data = await res.json()

    return data
  }
  const data = await fetchMediaItems()

  return <AudioAndVideos data={data} />
}

export default AudioAndVideosPage
