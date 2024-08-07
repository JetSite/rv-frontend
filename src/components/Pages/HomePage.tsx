'use client'
import { IHomePageData } from '@/app/page'
import { FC } from 'react'
import { CarouselMainPage } from '../CarouselMainPage'
import { WrapperMainPage } from '../Ui/Wrappers/WrapperMainPage'
import { EventCard } from '../Cards/EventCard'
import { NewsPriorityCard } from '../Cards/NewsPriorityCard'
import { NewsCard } from '../Cards/NewsCard'
import { ILocale } from '@/types'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { ActivityCard } from '../Cards/ActivityCard'
import classNames from '@/utils/classNames'

interface Props extends IHomePageData {
  locale: ILocale
}

export const HomePage: FC<Props> = ({
  locale,
  mainSliderData,
  newsData,
  eventData,
  activitiesData,
}) => {
  const priorityNews = newsData.find(item => item.important)
  const prepareNewsData = newsData
    .filter(e => e.id !== priorityNews?.id)
    .splice(0, priorityNews ? 8 : 9)

  return (
    <>
      <CarouselMainPage arr={mainSliderData}></CarouselMainPage>
      {eventData.length ? (
        <WrapperMainPage
          titleStyles="bg-gray-400"
          endLink={{ title: 'Календарь событий >', slug: 'events' }}
          title={<h2 className="text-first font-semibold">ВАЖНОЕ</h2>}
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
          titleStyles="bg-first"
          endLink={{ title: 'Все новости >', slug: 'news' }}
          title={<h2 className="text-white font-semibold">НОВОСТИ</h2>}
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
            <h2 className="text-white text-[48px] desktopOnly:text-[32px] font-bold pt-10 mb-6 block mobile:text-[24px] notDesktop:px-7 notDesktop:pt-4 ">
              Деятельность
            </h2>
          }
        >
          <ul className="flex mobile:flex-col mobile:gap-5 tablet:px-8 tablet:flex-wrap -ml-1.5">
            {activitiesData.splice(0, 4).map(item => (
              <li
                className="w-[25%] px-1 py-2 first:pl-0 last:pr-0 transition-all hover:bg-h hovet:bg-opacity-60 mb-16 mobile:w-full mobile:p-0 mobile:mb-8 tablet:w-1/2"
                key={item.title}
              >
                <ActivityCard
                  slug={'/activity/' + item.slug || '#'}
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
