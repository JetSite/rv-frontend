'use client'
import { EventCard } from '@/components/Cards/EventCard'
import { Scrollbar } from '@/components/Ui/Scrollbar'
import { monthsConfig } from '@/config/calendar'
import { IStandartItem } from '@/types/item'
import { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { ISelectItem } from '../Ui/Dropdowns/Select'
import { useStoreDate } from '@/store'
import { getStoreData } from '@/utils/getStore'
import classNames from '@/utils/classNames'
import { ILocale } from '@/types'

interface ArchiveProps {
  title: string
  subTitle: string
  itemsArchive: IStandartItem[]
  yearsList?: ISelectItem[]
  locale: ILocale
  link: string
}

export const Archive: FC<ArchiveProps> = ({
  title,
  subTitle,
  itemsArchive,
  locale,
  link,
}) => {
  const data = useStoreDate(getStoreData)
  const [scroll, setScroll] = useState<number | undefined>(0)
  const [selectDate, setSelectDate] = useState<string | undefined | null>(
    itemsArchive[0].date,
  )
  const scrollRef = useRef<HTMLDivElement>(null)
  const elementsRefs = useRef<Array<HTMLLIElement | null>>([])

  const elementsWithHeight: { coordinate: number; value: string }[] =
    elementsRefs.current.map((e, i) =>
      e
        ? {
            coordinate: e?.getBoundingClientRect().height,
            value: e.id,
          }
        : { value: '0', coordinate: 0 },
    )

  const coordinatesArray = elementsWithHeight.reduce<
    { coordinate: number; value: string }[]
  >((acc, e) => {
    const sum =
      acc.length > 0
        ? {
            coordinate: acc[acc.length - 1].coordinate + e.coordinate / 2,
            value: e.value,
          }
        : { coordinate: 0, value: e.value }
    return [...acc, sum]
  }, [])

  const handleSelectDate = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectDate(e.currentTarget.name)
    setScroll(
      coordinatesArray.find(el => el.value.includes(e.currentTarget.name))
        ?.coordinate,
    )
  }

  useEffect(() => {
    if (coordinatesArray && scroll !== undefined) {
      setSelectDate(
        coordinatesArray.find(el => el.coordinate - scroll >= 0)?.value,
      )
    }
    console.log('scrol: ', scroll)
  }, [scroll])

  return (
    <div className="max-w-content w-full mx-auto mt-7">
      <h1 className="text-first text-[48px] mb-7 font-bold">{title}</h1>
      <p className="text-gray-700 mb-14 text-[14px] w-3/4">{subTitle}</p>
      <div className="flex archive w-full">
        <Scrollbar
          ref={scrollRef}
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
                <EventCard
                  sx="p-1.5 px-4 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 overflow-hidden"
                  locale={locale}
                  link={link + event.slug}
                  item={event}
                />
              </li>
            ))}
          </ul>
        </Scrollbar>
        <Scrollbar
          isShowTrack={false}
          className="!w-[40%] h-full overflow-scroll text-first font-bold"
        >
          <ul>
            {data.newsDate.map((item, i) => (
              <li key={item.year}>
                <button
                  onClick={handleSelectDate}
                  name={item.year}
                  className={classNames(
                    'text-[48px]',
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
                            'text-[30px]',
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
        </Scrollbar>
      </div>
    </div>
  )
}
