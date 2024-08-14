'use client'
import { IMediaActivityData } from '@/utils/getMediaActivityData'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { PriorityCard } from '../Cards/PriorityCard'
import { VideoPlayer } from '../VideoPlayer'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { getVideoId } from '@/utils/getVideoId'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import Link from 'next/link'

interface Props {
  data: IMediaActivityData
  videos: IAudioAndVideosData[]
  interviews: IInterviewsData[]
}

export const MediaActivity: FC<Props> = ({ data, videos, interviews }) => {
  const firstValidVideo = videos.find(video => typeof video.link === 'string')
  return (
    <Wrapper
      sx=" notDesktop:px-8 desktop:mb-8"
      title={
        <h1 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-medium notDesktop:text-2xl mobile:mt-5">
          {data.title}
        </h1>
      }
    >
      <p className="w-2/3 text-sm text-gray-500 mb-14">{data.subTitle}</p>
      {firstValidVideo ? (
        <div className="mb-14 ">
          <h3 className="text-h text-3.5xl desktopOnly:text-1.5xl font-bold mb-6">
            {firstValidVideo.title}
          </h3>
          <VideoPlayer videoId={getVideoId(firstValidVideo.link)} />
          <p className="text-sm mt-6">{firstValidVideo.description}</p>
        </div>
      ) : null}
      <ul className="flex mobile:flex-col  mobile:gap-5 tablet:px-8">
        {data.pageMenu.map(item => (
          <li
            className="w-[25%] px-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0"
            key={item.title}
          >
            <PriorityCard slug={item.slug} locale="ru" item={item} />
          </li>
        ))}
      </ul>
      <hr className="my-4 border-first" />
      <div className="flex notDesktop:flex-col mt-10 gap-8">
        <ul className="desktop:w-1/2">
          {interviews.map(
            (interview, i) =>
              i !== 0 &&
              i < 10 && (
                <li
                  key={interview.id}
                  className="hover:shadow-xl hover:bg-gray-100 hover:bg-opacity-60"
                >
                  <Link href={'/media/interviews/' + interview.slug}>
                    <h4 className="text-h text-lg desktopOnly:text-base font-bold mt-3">
                      {interview.title}
                    </h4>
                    <p className="desktopOnly:text-sm">
                      {interview.description}
                    </p>
                    <p className="text-end text-first mt-2 font-medium desktopOnly:text-sm">
                      {getNormalizeDate(interview.date, 'ru')}
                    </p>
                  </Link>
                </li>
              ),
          )}
        </ul>
        <ul className="desktop:w-1/2">
          {videos.map((video, i) => {
            return typeof video.link === 'string'
              ? i !== 0 && i < 5 && (
                  <li key={video.id} className="mb-14">
                    <VideoPlayer videoId={getVideoId(video.link)} />
                    <Link
                      href={video.link || '#'}
                      className="text-h block text-lg desktopOnly:text-base font-bold mt-3 hover:text-second"
                    >
                      {video.title}
                    </Link>
                    <p className="text-sm desktopOnly:text-sm mt-3">
                      {video.description}
                    </p>
                  </li>
                )
              : null
          })}
        </ul>
      </div>
    </Wrapper>
  )
}
