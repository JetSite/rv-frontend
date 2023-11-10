import { activityMock, eventMock, newsMock, priorityMock } from '@/api/mock'
import { ActivityCard } from '@/components/Cards/ActivityCard'
import { EventCard } from '@/components/Cards/EventCard'
import { NewsCard } from '@/components/Cards/NewsCard'
import { PriorityCard } from '@/components/Cards/PriorityCard'
import { Carousel } from '@/components/Ui/Carousel'
import PixelArrowIcon from '@/components/Ui/Icons/PixelArrowIcon'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { WrapperMainPage } from '@/components/Ui/Wrappers/WrapperMainPage'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Carousel
        arr={[
          {
            img: '/Mock/slider.png',
            title: 'Поздравляю с 32-х летием независимости Республики Арцах! >',
          },
          {
            img: '/Mock/slider2.png',
            title: 'Поздравляю м независимости Республики Арцах!',
          },
        ]}
      />

      <WrapperMainPage
        titleStyles="bg-gray-400"
        endLink={{ title: 'Календарь событий >', slug: '#' }}
        title={<h2 className="text-first">СОБЫТИЯ</h2>}
      >
        <ul className="flex gap-3.5 mobile:flex-col">
          {eventMock.map(item => (
            <li key={item.title}>
              <EventCard item={item} />
            </li>
          ))}
        </ul>
      </WrapperMainPage>

      <WrapperMainPage
        titleStyles="bg-first"
        endLink={{ title: 'Все новости >', slug: '#' }}
        title={<h2 className="text-white">НОВОСТИ</h2>}
      >
        <ul className="flex flex-wrap flex-col max-h-[400px] h-full mobile:flex-col mobile:max-h-none mobile:gap-5">
          {newsMock.map((item, i) => (
            <li
              className={
                'w-[25%] px-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 overflow-hidden' +
                ' ' +
                (i > 0 && i < 3 ? 'h-1/2' : '')
              }
              key={item.title}
            >
              <NewsCard i={i} item={item} />
            </li>
          ))}
        </ul>
      </WrapperMainPage>

      <WrapperMainPage
        titleStyles="bg-[#DFA269]"
        title={<h2 className="text-white">ПРИОРИТЕТЫ</h2>}
      >
        <ul className="flex mobile:flex-col  mobile:gap-5">
          {priorityMock.map(item => (
            <li
              className="w-[25%] px-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0"
              key={item.title}
            >
              <PriorityCard item={item} />
            </li>
          ))}
        </ul>
      </WrapperMainPage>

      <Wrapper
        sx="bg-first"
        title={
          <h2 className="text-white text-[48px] font-bold pt-10 mb-6 block mobile:text-[24px] mobile:px-7 mobile:pt-4">
            Деятельность
          </h2>
        }
      >
        <ul className="flex mobile:flex-col  mobile:gap-5">
          {activityMock.map(item => (
            <li
              className="w-[25%] px-1 py-2 first:pl-0 last:pr-0 transition-all hover:bg-h hovet:bg-opacity-60 mb-16 mobile:w-full mobile:p-0 mobile:mb-8"
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
