'use client'
import { EventCard } from '@/components/Cards/EventCard'
import { Scrollbar } from '@/components/Ui/Scrollbar'
import { monthsConfig } from '@/config/calendar'
import { IStandartItem } from '@/types/item'
import { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { ISelectItem } from '../../Ui/Dropdowns/Select'
import { IStoreData, useStoreDate } from '@/store'
import { getStoreData } from '@/utils/getStore'
import classNames from '@/utils/classNames'
import { ILocale } from '@/types'
import { NewsCard } from '@/components/Cards/NewsCard'
import { Scrollbar as ScrollbarType } from 'react-scrollbars-custom'

export interface ArchiveProps {
  title: string
  subTitle: string
  itemsArchive: IStandartItem[]
  yearsList?: ISelectItem[]
  locale: ILocale
  link: string
  page: 'newsDate' | 'eventsDate'
  data: IStoreData
}

export const Archive: FC<ArchiveProps> = ({
  title,
  subTitle,
  itemsArchive,
  locale,
  link,
  page,
  data,
}) => {
  const [scroll, setScroll] = useState<number | undefined>(0)
  const [selectDate, setSelectDate] = useState<string | undefined | null>(
    data.newsDate[0].months[0].value,
  )
  const scrollRef = useRef<ScrollbarType>(null)
  const elementsRefs = useRef<Array<HTMLLIElement | null>>([])

  const elementsWithHeight: { coordinate: number; value: string }[] =
    elementsRefs.current
      ? elementsRefs.current?.map((e, i) =>
          e
            ? {
                coordinate: e?.getBoundingClientRect().height,
                value: e.id,
              }
            : { value: '0', coordinate: 0 },
        )
      : [{ value: '0', coordinate: 0 }]

  const coordinatesArray = elementsWithHeight.reduce<
    { coordinate: number; value: string }[]
  >((acc, e) => {
    const sum =
      acc.length > 0
        ? {
            coordinate: acc[acc.length - 1].coordinate + e.coordinate,
            value: e.value,
          }
        : { coordinate: 0, value: e.value }
    return [...acc, sum]
  }, [])

  const handleSelectDate = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectDate(e.currentTarget.name)
    setScroll(
      (coordinatesArray.find(el => el.value.includes(e.currentTarget.name))
        ?.coordinate as number) - 100,
    )
  }

  useEffect(() => {
    if (coordinatesArray && scroll !== undefined) {
      setSelectDate(
        coordinatesArray.find((el, i) =>
          i === 0 ? el.coordinate - scroll >= 0 : el.coordinate - scroll >= 100,
        )?.value,
      )
    }
  }, [scroll, selectDate])

  return (
    <div className="max-w-content desktopOnly:max-w-[988px] w-full mx-auto mt-7">
      <h1 className="text-first text-[48px] desktopOnly:text-[32px] mb-7 font-bold">
        {title}
      </h1>
      <p className="text-gray-700 mb-10 text-[14px] desktopOnly:text-base w-3/4">
        {subTitle}
      </p>
      <div className="flex">
        <div className="flex w-full">
          <Scrollbar
            innerRef={scrollRef}
            id="scroll"
            scrollTop={scroll}
            setScroll={setScroll}
            isShowTrack
            className="h-full w-[60%] mr-18 border-t border-t-gray-150"
          >
            <ul className="">
              {itemsArchive.map((event, i) => (
                <li
                  key={event.title}
                  id={event.date as string}
                  ref={el => (elementsRefs.current[i] = el)}
                  className="w-2/3"
                  value={4}
                >
                  {page === 'eventsDate' ? (
                    <EventCard
                      sx="p-1.5 px-4 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 overflow-hidden  mb-4"
                      locale={locale}
                      link={link + event.slug}
                      item={event}
                    />
                  ) : (
                    <NewsCard
                      locale={locale}
                      link={link + event.slug}
                      item={event}
                    />
                  )}
                </li>
              ))}
            </ul>
          </Scrollbar>
        </div>
        <div className="!w-[40%] h-full overflow-hidden text-first font-bold">
          <ul>
            {data[page].map(item => (
              <li key={item.year}>
                <button
                  onClick={handleSelectDate}
                  name={item.year}
                  className={classNames(
                    'text-[48px]  desktopOnly:text-[30px]',
                    !selectDate?.includes(item.year) ? 'opacity-60' : '',
                  )}
                >
                  {item.year}
                </button>
                <ul className="ml-5 flex flex-col gap-2.5 mb-18">
                  {item.months.map((month, i) => {
                    const titleMonth = monthsConfig.find(
                      e => e.value.toString() === month.month,
                    )
                    return (
                      <li key={month.value}>
                        <button
                          className={classNames(
                            'text-[30px] desktopOnly:text-[22px]',
                            !selectDate?.includes(month.value)
                              ? 'opacity-60'
                              : '',
                          )}
                          onClick={handleSelectDate}
                          name={month.value}
                        >
                          {titleMonth ? titleMonth['ru'] : ''}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
