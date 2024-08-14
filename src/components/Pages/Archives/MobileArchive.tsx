'use client'
import { EventCard } from '@/components/Cards/EventCard'
import { ICalendarConfigItem, monthsConfig } from '@/config/calendar'
import { FC, useState } from 'react'
import classNames from '@/utils/classNames'
import { ArchiveProps } from './Archive'
import { Wrapper } from '@/components/Ui/Wrappers/Wrapper'
import { ArchiveDropdown } from '@/components/Ui/Dropdowns/ArchiveDropdown'
import PixelArrowIcon from '@/components/Ui/Icons/PixelArrowIcon'
import { NewsCard } from '@/components/Cards/NewsCard'

export const MobileArchive: FC<ArchiveProps> = ({
  title,
  subTitle,
  itemsArchive,
  locale,
  link,
  page,
  data,
}) => {
  const [selectDate, setSelectDate] = useState<string>(
    data[page][0].months[0].value,
  )
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Wrapper
        sx="mobile:px-7 tablet:px-8 "
        title={
          <h2 className="block mt-10 mb-2.5 text-first text-5xl font-bold notDesktop:text-2xl mobile:mt-5">
            {title}
          </h2>
        }
      >
        <ArchiveDropdown
          setShow={setShow}
          show={show}
          button={
            <button className="text-first text-2.5xl font-bold flex gap-2 items-center">
              <span>{selectDate?.split('-')[0]}</span>
              <span>
                {(
                  monthsConfig.find(
                    e => e.value.toString() === selectDate?.split('-')[1],
                  ) as ICalendarConfigItem
                )['ru'] || ''}
              </span>
              <PixelArrowIcon className="fill-first rotate-90 w-2.5 ml-7" />
            </button>
          }
        >
          <ul className="bg-white px-4 py-2 rounded-lg text-first cursor-default">
            {data[page].map(year => (
              <li
                key={year.year}
                className="text-left text-lg font-medium flex gap-4 mb-4"
              >
                <span className="">{year.year}</span>
                <ul>
                  {year.months.map(month => {
                    const titleMonth = monthsConfig.find(
                      e => e.value.toString() === month.month,
                    )
                    return (
                      <li key={month.value} className="hover:font-bold">
                        <button
                          onClick={() => {
                            setSelectDate(month.value)
                            setShow(false)
                          }}
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
        </ArchiveDropdown>
      </Wrapper>
      <Wrapper sx="tablet:px-8">
        <ul className="flex mobile:flex-col w-full tablet:gap-7  flex-wrap overflow-hidden mt-8">
          {itemsArchive
            .filter(e => e.date?.includes(selectDate))
            .map(
              (item, i) =>
                i < 8 && (
                  <li
                    className={classNames(
                      'tablet:w-[260px]  max-h-[217px] overflow-hidden',
                    )}
                    key={item.title}
                  >
                    {page === 'eventsDate' ? (
                      <EventCard
                        locale={locale}
                        link={link + item.slug}
                        item={item}
                      />
                    ) : (
                      <NewsCard
                        locale={locale}
                        link={link + item.slug}
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
