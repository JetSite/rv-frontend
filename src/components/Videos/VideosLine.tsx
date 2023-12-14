import { FC } from 'react'
import { VideoPlayer } from './VideoPlayer'
import { getVideoId } from '@/utils/getVideoId'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'

interface Props {
  videos: IAudioAndVideosData[]
}

export const VideosLine: FC<Props> = ({ videos }) => {
  console.log(videos)

  return (
    <ul className="flex flex-col">
      {videos.map(video => {
        return (
          <li key={video.id} className="flex w-full gap-10">
            <ul className="">
              {video.persons.map(persone => (
                <li key={persone.id} className="pb-14 -mt-4">
                  <div className="">
                    <img
                      className="rounded-full object-cover object-center mb-4"
                      width={75}
                      height={75}
                      src={persone.avatar}
                      alt={persone.title}
                    />
                  </div>
                  <span className="block w-min text-center">
                    {persone.title}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-first bg-opacity-20 w-px relative">
              <VideoIcon className="absolute -left-[14px]" />
            </div>
            <div className="w-full pb-14">
              <h3 className="text-[18px] text-first mb-1.5">{video.title}</h3>
              <p className="text-14 flex gap-1 font-medium mb-2.5">
                <Link href={video.source}>
                  {video.source}
                  {','}
                </Link>
                <span>{video.date}</span>
              </p>
              <VideoPlayer
                videoId={getVideoId(video.link)}
                height="514px"
                width="100%"
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
