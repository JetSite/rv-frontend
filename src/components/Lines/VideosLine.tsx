import { FC } from 'react'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { VideoLineItem } from './VideoLineItem'

interface Props {
  data?: IAudioAndVideosData[]
}

export const VideosLine: FC<Props> = ({ data }) => {
  return (
    <ul className="flex flex-col">
      {data?.map(video => {
        return (
          <li key={video.id} className="flex w-full gap-10 desktopOnly:gap-7">
            <VideoLineItem
              variant="main"
              date={video.date}
              persons={video.persons}
              source={video.source}
              title={video.title}
              link={video.link}
              slug={video.slug}
            />
          </li>
        )
      })}
    </ul>
  )
}
