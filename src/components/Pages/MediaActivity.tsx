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
  return (
    <Wrapper
      sx=" notDesktop:px-8 desktop:mb-8"
      title={
        <h1 className="block mt-10 mb-2.5 text-first text-[48px] font-medium notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h1>
      }
    >
      <p className="w-2/3 text-[14px] text-gray-500 mb-14">{data.subTitle}</p>
      <div className="mb-14 ">
        <h3 className="text-h text-[32px] font-bold mb-6">{videos[0].title}</h3>
        <VideoPlayer
          videoId={getVideoId(videos[0].link)}
          height="525px"
          width="100%"
        />
        <p className="text-[14px] mt-6">{videos[0].description}</p>
      </div>
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
      <div className="flex glex-col mt-10 gap-8">
        <ul className="w-1/2">
          {interviews.map(interview => (
            <li
              key={interview.id}
              className="hover:shadow-xl hover:bg-gray-100 hover:bg-opacity-60"
            >
              <Link href={'/media/interviews/' + interview.slug}>
                <h4 className="text-h text-[18px] font-bold mt-3">
                  {interview.title}
                </h4>
                <p>{interview.description}</p>
                <p className="text-end text-first mt-2 font-medium">
                  {getNormalizeDate(interview.date, 'ru')}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="w-1/2">
          {videos.map(
            (video, i) =>
              i !== 0 && (
                <li key={video.id} className="mb-14 ">
                  <VideoPlayer
                    videoId={getVideoId(video.link)}
                    height="400px"
                    width="100%"
                  />
                  <Link
                    href={video.slug || '#'}
                    className="text-h block text-[18px] font-bold mt-3 hover:text-second"
                  >
                    {video.title}
                  </Link>
                  <p className="text-[14px] mt-3">{video.description}</p>
                </li>
              ),
          )}
        </ul>
      </div>
    </Wrapper>
  )
}
