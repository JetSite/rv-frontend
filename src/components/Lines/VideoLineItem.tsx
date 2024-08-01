'use client'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { getVideoId } from '@/utils/getVideoId'
import { FC, useEffect, useState } from 'react'
import { VideoPlayer } from '../VideoPlayer'
import Link from 'next/link'
import VideoIcon from '../Ui/Icons/VideoIcon'
import { useMediaQuery } from 'react-responsive'
import { AvatarInLine } from '../Ui/AvatarInLine'

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
  const isDesktopOnly = useMediaQuery({ minWidth: 1279, maxWidth: 1579 })
  const [desktopOnly, setDesktopOnly] = useState<boolean>(false)
  const [showAll, setShowAll] = useState<boolean>(false)
  useEffect(() => {
    setDesktopOnly(isDesktopOnly)
  }, [isDesktopOnly])

  return (
    <div className="flex mobile:flex-col notMobile:gap-10 w-full desktopOnly:gap-7">
      <div className="flex flex-col">
        <ul className="mobile:flex gap-4 mobile:w-full justify-center">
          {persons.map(
            (persone, i) =>
              (i < 2 || showAll) && <AvatarInLine key={i} persone={persone} />,
          )}
        </ul>
        {persons.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mb-8 opacity-20 hover:opacity-60 text-[12px]"
          >
            {showAll ? 'скрыть' : 'ещё...'}
          </button>
        )}
      </div>

      <div className="bg-first bg-opacity-20 w-px mobile:w-full mobile:h-px mobile:my-2 relative mobile:order-first mobile:hidden">
        <VideoIcon
          variant={variant}
          className="absolute -left-[14px] mobile:-top-[14px]"
        />
      </div>
      <div className="w-full pb-14 flex flex-col">
        <h3 className="text-[18px] desktopOnly:text-base text-first mb-1.5 mobile:order-1">
          {title}
        </h3>
        <p className="text-14 desktopOnly:text-[12px] flex gap-1 font-medium mb-2.5 mobile:order-2">
          {source ? (
            source?.link ? (
              <Link target="_blank" href={source.link}>
                {source.title}
                {','}
              </Link>
            ) : (
              <span> {source.title}</span>
            )
          ) : null}
          <span>{date}</span>
        </p>
        <VideoPlayer
          videoId={getVideoId(link)}
          height={desktopOnly ? '420px' : '514px'}
          width="100%"
        />
      </div>
    </div>
  )
}
