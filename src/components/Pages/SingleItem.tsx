'use client'
import classNames from '@/utils/classNames'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { EventCard } from '../Cards/EventCard'
import { IStandartItem } from '@/types/item'
import { FC } from 'react'
import { ILocale } from '@/types'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { Content } from '../Ui/Content'

interface Props {
  data: IStandartItem
  news: IStandartItem[]
  events: IStandartItem[]
  locale: ILocale
}

export const SingleItem: FC<Props> = ({
  data,
  news,
  events,
  locale = 'ru',
}) => {
  console.log(data)

  return (
    <div>
      <Wrapper
        sx=" notDesktop:px-8 desktop:mb-8"
        title={
          <>
            <h1 className="text-first text-[48px] desktopOnly:text-[32px] font-bold pt-10 mb-6 block notDesktop:text-[24px] mobile:px-7 mobile:pt-4">
              {data?.title}
            </h1>
            <p className="mb-6 text-[14px] font-medium text-first">
              {!!data.date && getNormalizeDate(data.date, locale)}
            </p>
          </>
        }
      >
        <div className="notDesktop:flex flex-col gap-9 min-h-[552px]">
          {!!data.img && (
            <div className="desktop:float-left flex flex-col  desktop:mr-9  desktop:mb-4">
              <img
                className="h-[552px] desktopOnly:h-[460px] object-cover "
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
              <span>Источник: </span>
              <span>{data?.source}</span>
            </p>
          ) : null}
        </div>
      </Wrapper>
      <Wrapper
        sx=" tablet:px-8"
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-[22px] text-first font-bold  mobile:text-[18px] whitespace-nowrap">
              Медиа-активность
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:max-h-[220px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {events.map(
            (item, i) =>
              i < 4 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] notMobile:max-h-[212px] notMobile:overflow-hidden ',
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
            <h2 className="text-[22px] text-first font-bold  mobile:text-[18px] whitespace-nowrap">
              События
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:max-h-[220px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {events.map(
            (item, i) =>
              i < 4 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] notMobile:max-h-[212px] notMobile:overflow-hidden',
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
            <h2 className="text-[22px] text-first font-bold  mobile:text-[18px] whitespace-nowrap">
              Новости
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:max-h-[220px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {news.map(
            (item, i) =>
              i < 4 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] notMobile:max-h-[212px] notMobile:overflow-hidden',
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
