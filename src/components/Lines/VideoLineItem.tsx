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
    <div className="flex mobile:flex-col notMobile:gap-10 w-full">
      <ul className="mobile:flex gap-4 mobile:w-full justify-center">
        {persons.map(persone => (
          <li key={persone.id} className="pb-14 notMobile:-mt-4 mobile:pb-2">
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
      <div className="bg-first bg-opacity-20 w-px mobile:w-full mobile:h-px mobile:my-2 relative mobile:order-first mobile:hidden">
        <VideoIcon
          variant={variant}
          className="absolute -left-[14px] mobile:-top-[14px]"
        />
      </div>
      <div className="w-full pb-14 flex flex-col">
        <h3 className="text-[18px] text-first mb-1.5 mobile:order-1">
          {title}
        </h3>
        <p className="text-14 flex gap-1 font-medium mb-2.5 mobile:order-2">
          <Link href={source}>
            {source}
            {','}
          </Link>
          <span>{date}</span>
        </p>
        <VideoPlayer videoId={getVideoId(link)} height="514px" width="100%" />
      </div>
    </div>
  )
}
