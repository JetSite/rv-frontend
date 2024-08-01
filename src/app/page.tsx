import { API } from '@/api'
import { ActivityCard } from '@/components/Cards/ActivityCard'
import { EventCard } from '@/components/Cards/EventCard'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { PriorityCard } from '@/components/Cards/PriorityCard'
import { CarouselMainPage } from '@/components/CarouselMainPage'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { WrapperMainPage } from '@/components/Ui/Wrappers/WrapperMainPage'
import { getDataArray } from '@/utils/getDataArray'
import { getDataMainSlider } from '@/utils/getDataMainSlider'

export default async function Home() {
  const getHomePageData = async () => {
    try {
      const eventRes = await fetch(
        `${API.baseUrl}/events?populate=*&sort[0]=date:desc`,
        {
          cache: 'no-cache',
        },
      )
      const eventData = await eventRes.json()

      const newsRes = await fetch(
        `${API.baseUrl}/news?populate=*&sort[0]=date:desc&filters[categories][id]=5`,
        {
          cache: 'no-cache',
        },
      )
      const newsData = await newsRes.json()

      const activitiesRes = await fetch(
        `${API.baseUrl}/activities?populate=*`,
        {
          cache: 'no-cache',
        },
      )
      const activitiesData = await activitiesRes.json()

      const prioritiesRes = await fetch(
        `${API.baseUrl}/priorities?populate=*`,
        {
          cache: 'no-cache',
        },
      )
      const prioritiesData = await prioritiesRes.json()

      const resMainSlider = await fetch(
        `${API.baseUrl}/main-slider?populate=*`,
        {
          cache: 'no-cache',
        },
      )
      const dataMainSlider = await resMainSlider.json()

      return {
        eventData: getDataArray(eventData),
        newsData: getDataArray(newsData),
        activitiesData: getDataArray(activitiesData),
        prioritiesData: getDataArray(prioritiesData),
        mainSliderData: getDataMainSlider(dataMainSlider.data),
      }
    } catch (e) {
      console.log('error', e)
      return {
        eventData: [],
        newsData: [],
        activitiesData: [],
        prioritiesData: [],
        mainSliderData: [],
      }
    }
  }

  const {
    eventData,
    newsData,
    activitiesData,
    prioritiesData,
    mainSliderData,
  } = await getHomePageData()
  const locale = 'ru'

  return (
    <>
      <CarouselMainPage arr={mainSliderData}></CarouselMainPage>
      {eventData.length ? (
        <WrapperMainPage
          titleStyles="bg-gray-400"
          endLink={{ title: 'Календарь событий >', slug: 'events' }}
          title={<h2 className="text-first font-semibold">ВАЖНОЕ</h2>}
        >
          <ul className="flex gap-3.5 mobile:flex-col w-full tablet:gap-1 tablet:h-[130px] flex-wrap justify-between overflow-hidden tablet:px-8 desktop:max-h-[204px]">
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
          <ul className="flex gap-1 flex-wrap flex-col max-h-[400px] h-full  mobile:max-h-none notDesktop:gap-5 overflow-hidden tablet:px-8 tablet:h-[334px]">
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
                        link={'/news/all/' + item.slug}
                        mainPage
                        item={item}
                      />
                    ) : (
                      <NewsCard
                        locale={locale}
                        link={'/news/all/' + item.slug}
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
