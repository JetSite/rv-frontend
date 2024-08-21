'use client'
import { CalendarEvents } from '@/components/Calendar/CalendarEvents'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { Locale } from '@/i18n-config'
import { IStandartItem } from '@/types/item'
import { changeElementPosition } from '@/utils/changeElementPosition'
import classNames from '@/utils/classNames'
import { ISeoData } from '@/utils/parsedData/getSeoData'
import { FC } from 'react'

interface Props {
  data: IStandartItem[]
  eventsData: IStandartItem[]
  detention?: boolean
  locale: Locale
  seoData: ISeoData
}

export const News: FC<Props> = ({
  data,
  eventsData,
  detention,
  locale,
  seoData,
}) => {
  const arr = changeElementPosition(data, [0, 1, 6, 13])
  const itemsCount = arr.length

  return (
    <>
      <Wrapper
        sx="tablet:px-8"
        endLink={{
          title: seoData.newsArchiveButtonText + ' >',
          slug: '/news/archive',
        }}
        title={
          <h2 className="text-first text-5xl desktopOnly:text-3.5xl font-bold pt-10 mb-6 block mobile:text-2xl mobile:px-7 mobile:pt-4">
            {seoData.pageTitle}
          </h2>
        }
      >
        <ul
          className={classNames(
            'grid grid-cols-4 grid-rows-7 gap-5 mb-10 notDesktop:flex notDesktop:flex-wrap tablet:gap-0 tablet:justify-between',
            itemsCount < 3
              ? 'grid-rows-2'
              : itemsCount < 6
              ? 'grid-rows-3'
              : itemsCount < 10
              ? 'grid-rows-5'
              : 'grid-rows-7',
          )}
        >
          {arr.map((item, i) => {
            return (
              i < 20 && (
                <li
                  value={i}
                  className={classNames(
                    ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 desktopOnly:mb-0 mb-5 ',
                    item.important
                      ? `${
                          detention ? '' : 'desktop:row-span-2'
                        } tablet:w-full  desktop:col-span-2`
                      : 'tablet:w-[25%] tablet:min-w-[254px]',
                    i === 13
                      ? 'desktop:row-start-6 desktop:col-end-5 desktop:col-start-3'
                      : '',
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
      </Wrapper>
      <Wrapper
        sx="mobile:px-7 tablet:px-8"
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-1.5xl font-bold notDesktop:text-lg mobile:mt-5">
            {seoData.eventCalendarTitle}
          </h2>
        }
      >
        <CalendarEvents lang={locale} data={eventsData} />
      </Wrapper>
    </>
  )
}
