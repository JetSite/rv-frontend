import { API } from '@/api'
import { CalendarEvents } from '@/components/Calendar/CalendarEvents'
import { EventCard } from '@/components/Cards/EventCard'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { changeElementPosition } from '@/utils/changeElementPosition'
import classNames from '@/utils/classNames'
import { getDataArray } from '@/utils/getDataArray'

const EventsPage = async () => {
  const res = await fetch(`${API.baseUrl}/events?populate=*&sort[0]=date:desc`)
  const data = await res.json()
  const normalizeData = getDataArray(data)

  const resNews = await fetch(
    `${API.baseUrl}/news?populate=*&sort[0]=date:desc`,
  )
  const dataNews = await resNews.json()
  const normalizeDataNews = getDataArray(dataNews)

  return (
    <>
      <Wrapper
        sx="mobile:px-7 tablet:px-8"
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
            Календарь событий
          </h2>
        }
      >
        <CalendarEvents data={normalizeData} />
      </Wrapper>

      <Wrapper
        sx=" tablet:px-8"
        endLink={{ title: 'Архив событий >', slug: 'events/archive' }}
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-[22px] text-first font-bold  mobile:text-[18px] whitespace-nowrap">
              Прошедшие события
            </h2>
            <hr className="w-full border-gray-300 notDesktop:hidden" />
          </div>
        }
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:max-h-[270px] flex-wrap overflow-hidden justify-around tablet:px-8 desktop:max-h-[202px]">
          {changeElementPosition(normalizeData, [0, 1]).map((item, i) => (
            <li
              className={classNames(
                'tablet:w-[260px] desktop:mb-4 desktop:w-[354px]',
              )}
              key={item.title}
            >
              <EventCard item={item} />
            </li>
          ))}
        </ul>
      </Wrapper>

      <Wrapper
        sx="tablet:px-8"
        endLink={{ title: 'Архив новостей >', slug: 'events/archive' }}
        title={
          <h2 className="text-first text-[48px] font-bold pt-10 mb-6 block notDesktop:text-[24px] mobile:px-7 mobile:pt-4">
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
                    i < 2 ? 'w-1/2 tablet:w-full' : 'w-1/4',
                  )}
                  key={item.title + i}
                >
                  {i < 2 ? (
                    <NewsPriorityCard item={item} />
                  ) : (
                    <NewsCard showText item={item} />
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
