'use client'
import { API } from '@/api'
import { priorityMock } from '@/api/mock'
import { ActivityCard } from '@/components/Cards/ActivityCard'
import { EventCard } from '@/components/Cards/EventCard'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { PriorityCard } from '@/components/Cards/PriorityCard'
import { CarouselMainPage } from '@/components/CarouselMainPage'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { WrapperMainPage } from '@/components/Ui/Wrappers/WrapperMainPage'
import { getDataArray } from '@/utils/getDataArray'

export default async function Home() {
  const getHomePageData = async () => {
    const eventRes = await fetch(
      `${API.baseUrl}/events?populate=*&sort[0]=date:desc`,
    )
    const eventData = await eventRes.json()

    const newsRes = await fetch(
      `${API.baseUrl}/news?populate=*&sort[0]=date:desc`,
    )
    const newsData = await newsRes.json()

    const activitiesRes = await fetch(`${API.baseUrl}/activities?populate=*`)
    const activitiesData = await activitiesRes.json()

    const prioritiesRes = await fetch(`${API.baseUrl}/priorities?populate=*`)
    const prioritiesData = await prioritiesRes.json()

    return {
      eventData: getDataArray(eventData),
      newsData: getDataArray(newsData),
      activitiesData: getDataArray(activitiesData),
      prioritiesData: getDataArray(prioritiesData),
    }
  }

  const { eventData, newsData, activitiesData, prioritiesData } =
    await getHomePageData()
  const locale = 'ru'
  return (
    <>
      <CarouselMainPage arr={eventData}></CarouselMainPage>
      <WrapperMainPage
        titleStyles="bg-gray-400"
        endLink={{ title: 'Календарь событий >', slug: 'events' }}
        title={<h2 className="text-first">СОБЫТИЯ</h2>}
      >
        <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:h-[130px] flex-wrap justify-around overflow-hidden tablet:px-8 desktop:max-h-[202px]">
          {eventData.map(item => (
            <li
              className="tablet:w-[260px] desktop:mb-4 desktop:w-[354px]"
              key={item.title}
            >
              <EventCard
                locale={locale}
                link={'events/' + item.slug}
                item={item}
              />
            </li>
          ))}
        </ul>
      </WrapperMainPage>

      <WrapperMainPage
        titleStyles="bg-first"
        endLink={{ title: 'Все новости >', slug: 'news' }}
        title={<h2 className="text-white">НОВОСТИ</h2>}
      >
        <ul className="flex flex-wrap flex-col max-h-[400px] h-full  mobile:max-h-none notDesktop:gap-5 overflow-hidden tablet:px-8 tablet:h-[334px]">
          {newsData.map(
            (item, i) =>
              i < 14 && (
                <li
                  className={
                    'w-[25%] px-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 tablet:min-w-[244px] tablet:w-[32.5%] tablet:py-0 tablet:max-h-[47%] tablet:first:max-h-none' +
                    ' ' +
                    (i > 0 && i < 3 ? 'h-[47%]' : '')
                  }
                  key={item.title}
                >
                  {i === 0 ? (
                    <NewsPriorityCard
                      locale={locale}
                      link={'news/' + item.slug}
                      mainPage
                      item={item}
                    />
                  ) : (
                    <NewsCard
                      locale={locale}
                      link={'news/' + item.slug}
                      mainPage
                      showText={i > 0 && i < 3}
                      item={item}
                    />
                  )}
                </li>
              ),
          )}
        </ul>
      </WrapperMainPage>

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
              <PriorityCard locale="ru" item={item} />
            </li>
          ))}
        </ul>
      </WrapperMainPage>

      <Wrapper
        mainPage
        sx="bg-first"
        title={
          <h2 className="text-white text-[48px] font-bold pt-10 mb-6 block mobile:text-[24px] notDesktop:px-7 notDesktop:pt-4 ">
            Деятельность
          </h2>
        }
      >
        <ul className="flex mobile:flex-col mobile:gap-5 tablet:px-8 tablet:flex-wrap">
          {activitiesData.map(item => (
            <li
              className="w-[25%] px-1 py-2 first:pl-0 last:pr-0 transition-all hover:bg-h hovet:bg-opacity-60 mb-16 mobile:w-full mobile:p-0 mobile:mb-8 tablet:w-1/2"
              key={item.title}
            >
              <ActivityCard item={item} />
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  )
}
