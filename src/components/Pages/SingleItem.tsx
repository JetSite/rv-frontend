'use client'
import classNames from '@/utils/classNames'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { EventCard } from '../Cards/EventCard'
import { IStandartItem } from '@/types/item'
import { FC } from 'react'
import { Locale } from '@/i18n-config'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { Content } from '../Ui/Content'
import { IInterviewsData } from '@/utils/getInterviewsData'
import { ISeoData } from '@/utils/parsedData/getSeoData'

interface Props {
  data: IStandartItem
  news: IStandartItem[]
  events: IStandartItem[]
  locale: Locale
  interviews: IInterviewsData[]
  seoData: ISeoData
}

export const SingleItem: FC<Props> = ({
  data,
  news,
  events,
  locale = 'ru',
  interviews,
  seoData,
}) => {
  return (
    <div>
      <Wrapper
        sx=" notDesktop:px-8 desktop:mb-8"
        title={
          <>
            <h1 className="text-first text-5xl desktopOnly:text-3.5xl font-bold pt-10 mb-6 block notDesktop:text-2xl mobile:px-7 mobile:pt-4">
              {data?.title}
            </h1>
            <p className="mb-6 text-sm font-medium text-first">
              {!!data.date && getNormalizeDate(data.date, locale)}
            </p>
          </>
        }
      >
        <div className="notDesktop:flex flex-col gap-9 min-h-[552px] ">
          {!!data.img && (
            <div className="desktop:float-left flex flex-col  desktop:mr-9  desktop:mb-4  desktopOnly:w-2/3">
              <img
                className="desktopOnly:h-full object-cover "
                src={data.img}
              />
              <p className="self-end mt-2 text-grey-350">{data.coverCaption}</p>
            </div>
          )}
          {data.text ? (
            <Content sx="content mb-5  " content={data.text} />
          ) : null}
          {data.source ? (
            <p className="text-grey-400">
              <span>{seoData.sourceTitle} </span>
              <span>{data?.source}</span>
            </p>
          ) : null}
        </div>
      </Wrapper>
      <Wrapper
        sx=" tablet:px-8"
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-1.5xl text-first font-bold  mobile:text-lg whitespace-nowrap">
              {seoData.mediaActivityTitle}
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:h-[192px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {interviews.map(
            (item, i) =>
              i < 4 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] notMobile:max-h-[212px] notMobile:overflow-hidden tablet:mb-10',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/media/interviews/' + item.slug}
                    item={item as unknown as IStandartItem}
                  />
                </li>
              ),
          )}
        </ul>
      </Wrapper>
      <Wrapper
        sx=" tablet:px-8"
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-1.5xl text-first font-bold  mobile:text-lg whitespace-nowrap">
              {seoData.eventsTitle}
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:h-[192px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {events.map(
            (item, i) =>
              i < 4 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] notMobile:max-h-[212px] notMobile:overflow-hidden tablet:mb-10',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/events/all/' + item.slug}
                    item={item}
                  />
                </li>
              ),
          )}
        </ul>
      </Wrapper>
      <Wrapper
        sx=" tablet:px-8"
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-1.5xl text-first font-bold  mobile:text-lg whitespace-nowrap">
              {seoData.newsTitle}
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:h-[192px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {news.map(
            (item, i) =>
              i < 4 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] notMobile:max-h-[212px] notMobile:overflow-hidden tablet:mb-10',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/news/all/' + item.slug}
                    item={item}
                  />
                </li>
              ),
          )}
        </ul>
      </Wrapper>
    </div>
  )
}
