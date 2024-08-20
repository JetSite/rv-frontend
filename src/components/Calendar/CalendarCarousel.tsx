'use client'

import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import ArrowCircleIcon from '../Ui/Icons/ArrowCircleIcon'
import defineHtml from '@/utils/defineHtml'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/am'
import { langUIConfig } from '@/config'
import { Locale } from '@/i18n-config'
import { IStandartItem } from '@/types/item'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import Link from 'next/link'
import classNames from '@/utils/classNames'

interface Props {
  selectEvent: string
  setSelectEvent: Dispatch<SetStateAction<string>>
  locale: Locale
  arr: IStandartItem[]
}

export const CalendarCarousel: FC<Props> = ({
  arr,
  selectEvent,
  setSelectEvent,
  locale,
}) => {
  const [activeIndex, seActiveIndex] = useState<number>(arr.length - 1)
  const prevButtonRef = useRef<HTMLButtonElement | null>(null)
  const nextButtonRef = useRef<HTMLButtonElement | null>(null)
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  useEffect(() => {
    const indexSlide = arr.findIndex(item => item.date === selectEvent)
    if (swiper) {
      swiper.slideTo(Number(indexSlide), 500)
    }
  }, [selectEvent])

  return (
    <Swiper
      initialSlide={arr.length}
      onSwiper={e => {
        setSwiper(e)
      }}
      onNavigationNext={e => {
        seActiveIndex(e.realIndex)
        setSelectEvent(arr.find((item, i) => i === e.realIndex)?.date as string)
      }}
      onNavigationPrev={e => {
        seActiveIndex(e.realIndex)
        setSelectEvent(arr.find((item, i) => i === e.realIndex)?.date as string)
      }}
      navigation={{
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full  relative flex mb-10"
    >
      {arr.map(item => {
        return (
          <SwiperSlide key={item.title}>
            <div className="flex gap-7 w-full">
              {!!item.img && (
                <img
                  className=" max-w-[50%] h-[288px] object-contain object-top tablet:w-[40%]"
                  src={item.img}
                />
              )}
              <Link className="flex flex-col" href={'/events/all/' + item.slug}>
                {defineHtml(item.title) ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                ) : (
                  <h2 className="text-lg w-3/4 text-first z-30 mobile:text-sm mobile:w-full mobile:mx-4 desktopOnly:text-sm line-clamp-1">
                    {item.title}
                  </h2>
                )}
                <p className="flex flex-row justify-between text-first text-lg font-bold my-4 desktopOnly:text-base">
                  <span className="flex flex-row gap-4">
                    <span>{getNormalizeDate(item.date as string, locale)}</span>
                    {getNormalizeDate(new Date(), locale) ===
                    getNormalizeDate(item.date as string, locale) ? (
                      <span className="text-warning">
                        {langUIConfig.today[locale]}
                      </span>
                    ) : null}
                  </span>
                  <span>{item.time}</span>
                </p>
                <p className="text-ellipsis desktopOnly:text-xxs line-clamp-[8]">
                  {item.text}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        )
      })}
      <button
        ref={prevButtonRef}
        className={classNames(
          'prev absolute top-1/2 z-10 left-10 cursor-pointer hover:shadow-lg rounded-full',
          activeIndex !== 0 ? '' : 'hidden',
        )}
      >
        <ArrowCircleIcon className="hover:fill-gray-500 fill-gray-800" />
      </button>
      <button
        ref={nextButtonRef}
        className={classNames(
          'next absolute rotate-180 top-1/2 z-10 right-10 cursor-pointer hover:shadow-lg rounded-full',
          activeIndex === arr.length - 1 ? 'hidden' : '',
        )}
      >
        <ArrowCircleIcon className="hover:fill-gray-500 fill-gray-800" />
      </button>
    </Swiper>
  )
}
