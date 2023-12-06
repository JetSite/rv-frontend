'use client'
import { EventCard } from '@/components/Cards/EventCard'
import { Scrollbar } from '@/components/Ui/Scrollbar'
import { monthsConfig } from '@/config/calendar'
import { IStandartItem, YearsWithMonths } from '@/types/item'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { ISelectItem } from '../Ui/Dropdowns'
import { useStoreDate } from '@/store'
import { getStoreData } from '@/utils/getStore'
import classNames from '@/utils/classNames'

interface ArchiveProps {
  title: string
  subTitle: string
  itemsArchive: IStandartItem[]
  yearsList?: ISelectItem[]
  locale: string
}

export const Archive: FC<ArchiveProps> = ({
  title,
  subTitle,
  itemsArchive,
  locale,
}) => {
  const data = useStoreDate(getStoreData)
  const [scroll, setScroll] = useState<number | undefined>(0)
  const [asd, setAsd] = useState(itemsArchive[0].date)
  const scrollRef = useRef<HTMLDivElement>(null)
  const elementsRefs = useRef<Array<HTMLLIElement | null>>([])

  const yearsWithMonths = data.newsDate.reduce(
    (acc: YearsWithMonths[], date) => {
      const [year, month] = date.split('-')

      const existingYear = acc.find(entry => entry.year === year)

      if (existingYear) {
        if (!existingYear.months.includes(month)) {
          existingYear.months.push(month)
        }
      } else {
        acc.push({
          year,
          months: [month],
        })
      }

      return acc
    },
    [],
  )

  const heightElements: number[] = elementsRefs.current.map(e =>
    e ? e?.getBoundingClientRect().height : 0,
  )
  const coordinatesArray = heightElements.reduce<number[]>((acc, e) => {
    const sum = acc.length > 0 ? acc[acc.length - 1] + e : e
    return [...acc, sum]
  }, [])

  // useEffect(() => {
  //   console.log(elementsRefs.current.map(e => e?.id))
  // }, [scroll])

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
          className="h-full w-[60%] mr-18"
        >
          <ul>
            {itemsArchive.map((event, i) => (
              <li
                key={event.title}
                id={event.date as string}
                ref={el => (elementsRefs.current[i] = el)}
                className="w-2/3"
                value={4}
              >
                <EventCard
                  locale={locale}
                  link={'event/' + event.slug}
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
            {yearsWithMonths.map((item, i) => (
              <li key={item.year}>
                <h4
                  className={classNames(
                    'text-[48px]',
                    !asd?.includes(item.year) ? 'opacity-60' : '',
                  )}
                >
                  {item.year}
                </h4>
                <ul className="ml-5 flex flex-col gap-2.5 mb-18">
                  {item.months.map((month, i) => {
                    const titleMonth = monthsConfig.find(
                      e => e.value.toString() === month,
                    )
                    return (
                      <li
                        key={item.year + '-' + month}
                        id={item.year + '-' + month}
                      >
                        <Link
                          className={classNames('text-[30px]')}
                          href={`#${titleMonth?.value}`}
                        >
                          {titleMonth ? titleMonth['ru'] : ''}
                        </Link>
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
