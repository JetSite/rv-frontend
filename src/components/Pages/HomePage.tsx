'use client'
import { FC } from 'react'
import { CarouselMainPage } from '../CarouselMainPage'
import { WrapperMainPage } from '../Ui/Wrappers/WrapperMainPage'
import { EventCard } from '../Cards/EventCard'
import { NewsPriorityCard } from '../Cards/NewsPriorityCard'
import { NewsCard } from '../Cards/NewsCard'
import { Locale } from '@/i18n-config'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { ActivityCard } from '../Cards/ActivityCard'
import classNames from '@/utils/classNames'
import { IHomePageData } from '@/app/[lang]/page'
import { ISeoData } from '@/utils/parsedData/getSeoData'

interface Props extends Omit<IHomePageData, 'seoData'> {
  locale: Locale
  seoData: ISeoData
}

export const HomePage: FC<Props> = ({
  locale,
  mainSliderData,
  newsData,
  eventData,
  activitiesData,
  seoData,
}) => {
  const priorityNews = newsData.find(item => item.important)
  const prepareNewsData = newsData
    .filter(e => e.id !== priorityNews?.id)
    .splice(0, priorityNews ? 8 : 9)

  return (
    <>
      <CarouselMainPage locale={locale} arr={mainSliderData}></CarouselMainPage>
      {eventData.length ? (
        <WrapperMainPage
          locale={locale}
          titleStyles="bg-gray-400"
          endLink={{ title: seoData.EventCalendarText + ' >', slug: '/events' }}
          title={
            <h2 className="text-first font-semibold">
              {seoData.ImportantBlockTitle}
            </h2>
          }
        >
          <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:h-[192px] flex-wrap justify-between overflow-hidden tablet:px-8">
            {eventData.map(item => (
              <li
                className="tablet:w-[260px] desktop:mb-4 desktopLarge:w-[354px] desktopOnly:w-[202px]"
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
        </WrapperMainPage>
      ) : null}

      {newsData.length ? (
        <WrapperMainPage
          locale={locale}
          titleStyles="bg-first"
          endLink={{ title: seoData.AllNewsText + ' >', slug: '/news' }}
          title={
            <h2 className="text-white font-semibold">
              {seoData.NewsBlockTitle}
            </h2>
          }
        >
          <ul className="desktop:grid tablet:grid flex flex-col grid-cols-4 tablet:grid-cols-3 grid-rows-6 grid-flow-col">
            {priorityNews ? (
              <li className="row-span-6">
                <NewsPriorityCard
                  locale={locale}
                  link={'/news/all/' + priorityNews.slug}
                  mainPage
                  item={priorityNews}
                />
              </li>
            ) : null}
            {prepareNewsData.map((item, i) => {
              return (
                <li
                  key={item.id}
                  className={classNames(
                    i < 2 ? 'row-span-3' : 'row-span-2',
                    i < 4 ? 'tablet:row-span-3' : 'tablet:hidden',
                  )}
                >
                  <NewsCard
                    locale={locale}
                    link={'/news/all/' + item.slug}
                    mainPage
                    showText={i < 2}
                    item={item}
                  />
                </li>
              )
            })}
          </ul>
        </WrapperMainPage>
      ) : null}

      {/* TODO: специально закоменторованно по задаче убрать приоритеты с главной */}

      {/* {prioritiesData.length ? (
    <WrapperMainPage
      titleStyles="bg-[#DFA269]"
      title={<h2 className="text-white">ПРИОРИТЕТЫ</h2>}
    >
      <ul className="flex mobile:flex-col  mobile:gap-5 tablet:px-8">
        {prioritiesData.map(item => (
          <li
            className="w-[25%] px-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0"
            key={item.title}
          >
            <PriorityCard
              slug={'/priorities/' + item.slug || '#'}
              locale="ru"
              item={item}
            />
          </li>
        ))}
      </ul>
    </WrapperMainPage>
  ) : null} */}

      {activitiesData.length ? (
        <Wrapper
          mainPage
          sx="bg-first"
          title={
            <h2 className="text-white text-5xl desktopOnly:text-3.5xl font-bold pt-10 mb-6 block mobile:text-2xl notDesktop:px-7 notDesktop:pt-4 ">
              {seoData.ActivityBlockTitle}
            </h2>
          }
        >
          <ul className="flex mobile:flex-col mobile:gap-5 tablet:px-8 tablet:flex-wrap -ml-1.5 text-white">
            {activitiesData.map(item => (
              <li
                className="w-[25%] px-1 py-2 first:pl-0 last:pr-0 transition-all hover:bg-h hovet:bg-opacity-60 mb-16 mobile:w-full mobile:p-0 mobile:mb-8 tablet:w-1/2"
                key={item.title}
              >
                <ActivityCard
                  slug={'/' + locale + '/activity/' + item.slug || '#'}
                  item={item}
                />
              </li>
            ))}
          </ul>
        </Wrapper>
      ) : null}
    </>
  )
}
