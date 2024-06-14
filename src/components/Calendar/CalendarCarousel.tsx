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
import { ILocale } from '@/types'
import { IStandartItem } from '@/types/item'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import Link from 'next/link'

interface Props {
  selectEvent: string
  setSelectEvent: Dispatch<SetStateAction<string>>
  locale: ILocale
  arr: IStandartItem[]
}

export const CalendarCarousel: FC<Props> = ({
  arr,
  selectEvent,
  setSelectEvent,
  locale,
}) => {
  const prevButtonRef = useRef<HTMLDivElement | null>(null)
  const nextButtonRef = useRef<HTMLDivElement | null>(null)
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
        setSelectEvent(arr.find((item, i) => i === e.realIndex)?.date as string)
      }}
      onNavigationPrev={e => {
        setSelectEvent(arr.find((item, i) => i === e.realIndex)?.date as string)
      }}
      navigation={{
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-[280px] mobile:h-[220px] desktopOnly:h-[242px] relative flex mb-10"
    >
      {arr.map(item => {
        return (
          <SwiperSlide key={item.title}>
            <div className="flex gap-7 w-full">
              {!!item.img && (
                <img
                  className=" w-[461px] h-[288px] object-cover object-top tablet:w-[40%] tablet:h-[370px]"
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
                  <h2 className="text-[18px] w-3/4 text-first z-30 mobile:text-[14px] mobile:w-full mobile:mx-4 desktopOnly:text-[13px]">
                    {item.title}
                  </h2>
                )}
                <p className="flex flex-row justify-between text-first text-[18px] font-bold my-4 desktopOnly:text-base">
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
                <p className="text-ellipsis desktopOnly:text-[11px]">
                  {item.text}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        )
      })}
      <div
        ref={prevButtonRef}
        className=".prev absolute top-1/2 z-10 left-10 cursor-pointer hover:shadow-lg rounded-full "
      >
        <ArrowCircleIcon variant="inner" className=" hover:fill-[#D9D9D9]/80" />
      </div>
      <div
        ref={nextButtonRef}
        className=".next absolute top-1/2 z-10 right-10 cursor-pointer hover:shadow-lg rounded-full "
      >
        <ArrowCircleIcon
          className="rotate-180 hover:fill-[#D9D9D9]/80"
          variant="inner"
        />
      </div>
    </Swiper>
  )
}
