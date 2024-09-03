import { API } from '@/api'
import { CalendarEvents } from '@/components/Calendar/CalendarEvents'
import { EventCard } from '@/components/Cards/EventCard'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { INextPage } from '@/types'
import classNames from '@/utils/classNames'
import { getDataArray } from '@/utils/getDataArray'
import { FC } from 'react'

const EventsPage: FC<INextPage> = async ({ params }) => {
  const res = await fetch(`${API.baseUrl}/events?populate=*&sort[0]=date:asc`, {
    cache: 'no-cache',
  })
  const data = await res.json()
  const normalizeData = getDataArray(data)

  const resNews = await fetch(
    `${API.baseUrl}/news?populate=*&sort[0]=date:desc`,
  )
  const dataNews = await resNews.json()
  const normalizeDataNews = getDataArray(dataNews)
  const locale = params.lang

  return (
    <>
      <Wrapper
        sx="mobile:px-7 tablet:px-8"
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-5xl font-bold notDesktop:text-2xl desktopOnly:text-3.5xl mobile:mt-5">
            Календарь событий
          </h2>
        }
      >
        <CalendarEvents lang={locale} data={normalizeData} />
      </Wrapper>

      <Wrapper
        sx=" tablet:px-8"
        locale={locale}
        endLink={{ title: 'Архив событий >', slug: '/events/archive' }}
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-1.5xl text-first font-bold  mobile:text-lg whitespace-nowrap">
              Прошедшие события
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:max-h-[270px] flex-wrap overflow-hidden justify-around tablet:px-8">
          {normalizeData.map(
            (item, i) =>
              i < 8 && (
                <li
                  className={classNames(
                    'tablet:w-[260px] desktop:mb-4 desktop:w-[354px] desktop:max-h-[210px] desktopOnly:w-[300px] desktopOnly:max-h-[180px] desktop:overflow-hidden',
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
        sx="tablet:px-8"
        locale={locale}
        endLink={{ title: 'Архив новостей >', slug: '/news/archive' }}
        title={
          <h2 className="text-first text-5xl font-bold pt-10 mb-6 block notDesktop:text-2xl mobile:px-7 mobile:pt-4  desktopOnly:text-1.5xl">
            Новости
          </h2>
        }
      >
        <ul className="flex flex-wrap mobile:flex-col mobile:max-h-none mobile:gap-5 ">
          {normalizeDataNews.map(
            (item, i) =>
              i < 6 && (
                <li
                  className={classNames(
                    ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0',
                    i < 2 ? 'w-1/2 tablet:w-full ' : 'w-1/4',
                  )}
                  key={item.title + i}
                >
                  {i < 2 ? (
                    <NewsPriorityCard
                      locale={locale}
                      link={'/news/all/' + item.slug}
                      item={item}
                    />
                  ) : (
                    <NewsCard
                      locale={locale}
                      showText
                      link={'/news/all/' + item.slug}
                      item={item}
                    />
                  )}
                </li>
              ),
          )}
        </ul>
      </Wrapper>
    </>
  )
}

export default EventsPage
