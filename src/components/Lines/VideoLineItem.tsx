import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { getVideoId } from '@/utils/getVideoId'
import { FC } from 'react'
import { VideoPlayer } from '../VideoPlayer'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'

interface Props extends IAudioAndVideosData {
  variant?: 'inner' | 'main'
}

export const VideoLineItem: FC<Props> = ({
  persons,
  title,
  source,
  date,
  link,
  variant,
}) => {
  return (
    <>
      <ul className="">
        {persons.map(persone => (
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
            <span className="block w-min text-center">{persone.title}</span>
          </li>
        ))}
      </ul>
      <div className="bg-first bg-opacity-20 w-px relative">
        <VideoIcon variant={variant} className="absolute -left-[14px]" />
      </div>
      <div className="w-full pb-14">
        <h3 className="text-[18px] text-first mb-1.5">{title}</h3>
        <p className="text-14 flex gap-1 font-medium mb-2.5">
          <Link href={source}>
            {source}
            {','}
          </Link>
          <span>{date}</span>
        </p>
        <VideoPlayer videoId={getVideoId(link)} height="514px" width="100%" />
      </div>
    </>
  )
}
