'use client'
import { WrappedBuildError } from 'next/dist/server/base-server'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { NewsCard } from '../Cards/NewsCard'
import classNames from '@/utils/classNames'
import { NewsPriorityCard } from '../Cards/NewsPriorityCard'
import { getDataArray } from '@/utils/getDataArray'
import { API } from '@/api'
import { IStandartItem } from '@/types/item'
import { EventCard } from '../Cards/EventCard'
import { langUIConfig } from '@/config'
import { IActivityElement } from '@/utils/getActivityData'
import { SearchComponent } from '../SearchComponent'

interface Props {
  data: any
}

export const Search: FC<Props> = ({ data }) => {
  const dataKeys = Object.keys(data.data)
  const locale = 'ru'
  let countItems = 0
  dataKeys.forEach(e => (countItems += data.data[e].length))

  const news: IStandartItem[] = data.data.news.map(
    (e: { [K: string]: any }) => ({
      title: e.title,
      description: e.shortDescription || e.fullDescription,
      slug: e.slug,
      important: e.important,
      id: e.id,
      date: e.date,
      img: e.coverCaption ? API.baseUrl + e.coverCaption : null,
    }),
  )

  const events: IStandartItem[] = data.data.events.map(
    (e: { [K: string]: any }) => ({
      title: e.title,
      description: e.shortDescription || e.fullDescription,
      slug: e.slug,
      important: e.important,
      id: e.id,
      date: e.date,
      img: e.coverCaption ? API.baseUrl + e.coverCaption : null,
    }),
  )

  const interviews: IStandartItem[] = data.data.interviews.map(
    (e: { [K: string]: any }) => ({
      title: e.title,
      description: e.shortDescription || e.fullDescription,
      slug: e.slug,
      important: e.important,
      id: e.id,
      date: e.date,
      img: e.coverCaption ? API.baseUrl + e.coverCaption : null,
    }),
  )

  const activities: IActivityElement[] = data.data['objects-of-activity'].map(
    (e: { [K: string]: any }) => ({
      title: e.objectName,
      description: e.objectDescription || e.objectContent,
      slug: e.slug,
      untilNow: e.untilNow,
      id: e.id,
      startDate: e.startDate,
      endDate: e.endDate,
      img: e.coverCaption ? API.baseUrl + e.coverCaption : null,
    }),
  )

  return (
    <>
      <Wrapper sx="mobile:px-7 tablet:px-8">
        <div className="w-1/2 my-4">
          <SearchComponent />
        </div>
      </Wrapper>
      <Wrapper
        sx="mobile:px-7 tablet:px-8 "
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-[48px] desktopOnly:text-[32px] font-bold notDesktop:text-[24px] mobile:mt-5">
            Найдено <span>{countItems}</span> шт.
          </h2>
        }
      >
        {news.length ? (
          <div>
            <p className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-8 desktopOnly:mb-6">
              Новости:
            </p>
            <ul
              className={classNames(
                'grid grid-cols-4 gap-5 mb-10 notDesktop:flex notDesktop:flex-wrap tablet:gap-0 tablet:justify-between tablet:px-8',
              )}
            >
              {news.map((item, i) => {
                return (
                  i < 20 && (
                    <li
                      value={i}
                      className={classNames(
                        ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 mb-5 ',
                        item.important
                          ? `${
                              true ? '' : 'desktop:row-span-2'
                            } tablet:w-full  desktop:col-span-2`
                          : 'tablet:w-[25%] tablet:min-w-[254px]',
                      )}
                      key={item.id + i.toString()}
                    >
                      {item.important ? (
                        <NewsPriorityCard
                          locale={locale}
                          link={'/news/all/' + item.slug}
                          item={item}
                        />
                      ) : (
                        <NewsCard
                          locale={locale}
                          link={'/news/all/' + item.slug}
                          showText
                          item={item}
                        />
                      )}
                    </li>
                  )
                )
              })}
            </ul>
          </div>
        ) : null}
        {events.length ? (
          <>
            <p className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-8 desktopOnly:mb-6">
              События:
            </p>
            <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 flex-wrap overflow-hidden tablet:px-8">
              {events.map((item, i) => (
                <li
                  className={classNames(
                    'desktop:mb-4 notMobile:max-h-[212px] notMobile:overflow-hidden ',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/events/all/' + item.slug}
                    item={item}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {interviews.length ? (
          <>
            <p className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-8 desktopOnly:mb-6">
              Интервью:
            </p>
            <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 flex-wrap overflow-hidden tablet:px-8">
              {interviews.map((item, i) => (
                <li
                  className={classNames(
                    'desktop:mb-4 notMobile:max-h-[212px] notMobile:overflow-hidden ',
                  )}
                  key={item.title}
                >
                  <EventCard
                    locale={locale}
                    link={'/media/interviews/' + item.slug}
                    item={item}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {activities.length ? (
          <>
            <p className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-8 desktopOnly:mb-6">
              Деятельность:
            </p>
            <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 flex-col overflow-hidden tablet:px-8">
              {activities.map((e, i) => (
                <li key={e.id}>
                  <p className="flex gap-1 text-[14px] font-medium text-first mb-2">
                    <span>{e.startDate.split('-')[0]}</span>
                    <span>-</span>
                    {e.untilNow ? (
                      <span>{langUIConfig.now[locale]}</span>
                    ) : (
                      <span>{e.endDate?.split('-')[0]}</span>
                    )}
                  </p>
                  <p className="text-[14px] ">{e.description}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </Wrapper>
    </>
  )
}
