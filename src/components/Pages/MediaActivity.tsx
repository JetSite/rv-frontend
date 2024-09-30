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
import { Locale } from '@/i18n-config'
import { Banner } from '../Ui/Banner'
import { NewsPriorityCard } from '../Cards/NewsPriorityCard'
import { EventCard } from '../Cards/EventCard'
import { IStandartItem } from '@/types/item'

interface Props {
  data: IMediaActivityData | null
  news: IStandartItem[]
  events: IStandartItem[]
  interviews: IInterviewsData[]
  locale: Locale
}

export const MediaActivity: FC<Props> = ({
  data,
  news,
  interviews,
  locale,
  events,
}) => {
  if (!data) return null

  return (
    <Wrapper
      sx=" notDesktop:px-8 desktop:mb-8"
      title={
        <h1 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-medium notDesktop:text-2xl mobile:mt-5">
          {data.title}
        </h1>
      }
    >
      <Banner
        text={data.banner.text}
        title={data.banner.title}
        img={data.banner.img}
      />
      <ul className="flex mobile:flex-col  mobile:gap-5 tablet:px-8">
        {data.pageMenu.map(item => (
          <li
            className="max-w-[25%] px-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0"
            key={item.title}
          >
            <PriorityCard slug={item.slug} locale={locale} item={item} />
          </li>
        ))}
      </ul>
      <hr className="my-4 border-first" />
      <div className="flex notDesktop:flex-col mt-10 gap-8">
        <ul className="desktop:w-1/2">
          {interviews.map((interview, i) => (
            <li
              key={interview.id}
              className="hover:shadow-xl hover:bg-gray-100 hover:bg-opacity-60"
            >
              <Link href={'/' + locale + '/media/interviews/' + interview.slug}>
                <img src={''} />
                <h4 className="text-h text-lg desktopOnly:text-base font-bold mt-3">
                  {interview.title}
                </h4>
                <p className="desktopOnly:text-sm">{interview.description}</p>
                <p className="text-end text-first mt-2 font-medium desktopOnly:text-sm">
                  {getNormalizeDate(interview.date, locale)}
                </p>
              </Link>
            </li>
          ))}
          {events.map(event => (
            <li
              key={event.id}
              className="hover:shadow-xl hover:bg-gray-100 hover:bg-opacity-60"
            >
              <NewsPriorityCard
                locale={locale}
                link={'/events/all/' + event.slug}
                item={event}
              />
            </li>
          ))}
        </ul>
        <ul className="desktop:w-1/2">
          {news.map((item, i) => {
            return (
              <li key={item.id} className="mb-14">
                <NewsPriorityCard
                  locale={locale}
                  link={'/news/all/' + item.slug}
                  item={item}
                  imageSX="block mb-2.5 object-cover w-full tablet:h-[163px]"
                  mainPage
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}
