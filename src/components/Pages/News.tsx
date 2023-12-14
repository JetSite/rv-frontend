// 'use client'
import { CalendarEvents } from '@/components/Calendar/CalendarEvents'
import { NewsCard } from '@/components/Cards/NewsCard'
import { NewsPriorityCard } from '@/components/Cards/NewsPriorityCard'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { IStandartItem } from '@/types/item'
import { changeElementPosition } from '@/utils/changeElementPosition'
import classNames from '@/utils/classNames'
import { FC } from 'react'

interface Props {
  data: IStandartItem[]
  eventsData: IStandartItem[]
}

export const News: FC<Props> = ({ data, eventsData }) => {
  const arr = changeElementPosition(data, [0, 1, 6, 13])
  const locale = 'ru'
  return (
    <>
      <Wrapper
        sx="tablet:px-8"
        endLink={{ title: 'Архив новостей >', slug: 'news/archive' }}
        title={
          <h2 className="text-first text-[48px] font-bold pt-10 mb-6 block mobile:text-[24px] mobile:px-7 mobile:pt-4">
            Новости
          </h2>
        }
      >
        <ul className="grid grid-cols-4 grid-rows-7 gap-5 mb-10 notDesktop:flex notDesktop:flex-wrap tablet:gap-0 tablet:justify-between ">
          {arr.map((item, i) => {
            return (
              i < 20 && (
                <li
                  value={i}
                  className={classNames(
                    ' p-1 first:pl-0 last:pr-0 mobile:w-full mobile:p-0 mb-5 ',
                    item.important
                      ? 'desktop:row-span-2 desktop:col-span-2 tablet:w-full'
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
          <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[18px] mobile:mt-5">
            Календарь событий
          </h2>
        }
      >
        <CalendarEvents data={eventsData} />
      </Wrapper>
    </>
  )
}
