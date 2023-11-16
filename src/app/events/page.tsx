import { eventMock, newsMock } from '@/api/mock'
import { CalendarEvents } from '@/components/Calendar/CalendarEvents'
import { EventCard } from '@/components/Cards/EventCard'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import classNames from '@/utils/classNames'

const EventsPage = () => {
  return (
    <>
      <Wrapper
        sx="notDesktop:px-4"
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold mobile:text-[24px] mobile:mt-5">
            Календарь событий
          </h2>
        }
      >
        <CalendarEvents />
      </Wrapper>

      <Wrapper
        sx=""
        title={
          <div className="flex items-center pt-10 mb-6 mobile:px-7 mobile:pt-4 gap-4">
            <h2 className="text-[22px] text-first font-bold  mobile:text-[18px] whitespace-nowrap">
              Прошедшие события
            </h2>
            <hr className="w-full border-gray-300 mobile:hidden" />
          </div>
        }
      >
        <ul className="flex mobile:flex-col mobile:gap-5 flex-wrap">
          {eventMock.map(item => (
            <li className="w-1/4 mb-4 mobile:w-full" key={item.title}>
              <EventCard item={item} />
            </li>
          ))}
        </ul>
      </Wrapper>

      <Wrapper
        sx=""
        title={
          <h2 className="text-first text-[48px] font-bold pt-10 mb-6 block mobile:text-[24px] mobile:px-7 mobile:pt-4">
            Новости
          </h2>
        }
      >
        <ul className="flex flex-wrap mobile:flex-col mobile:max-h-none mobile:gap-5 ">
          {newsMock.map(
            (item, i) =>
              i < 6 && (
                <li
                  className={classNames(
                    ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0',
                    i < 2 ? 'w-1/2' : 'w-1/4',
                  )}
                  key={item.title + i}
                >
                  {i < 2 ? (
                    <NewsPriorityCard item={item} />
                  ) : (
                    <NewsCard i={i} item={item} />
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
