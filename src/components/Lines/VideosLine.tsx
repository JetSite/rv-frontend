import { FC } from 'react'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { VideoLineItem } from './VideoLineItem'
import { MainLink } from '../Ui/MainLink'

interface Props {
  data?: IAudioAndVideosData[]
}

export const VideosLine: FC<Props> = ({ data }) => {
  return data?.length ? (
    <>
      <ul className="flex flex-col">
        {data.map(video => {
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
      <p className="ml-[54px] mt-4 text-h">
        <MainLink item={{ title: 'Больше интервью', slug: '#' }} />
      </p>
    </>
  ) : (
    <div className="w-full flex-col my-10 flex items-center">
      <p className="text-h flex font-bold text-[18px]">Ничего не найдено</p>
    </div>
  )
}
