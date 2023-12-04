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
import { CarouselProps } from '../CarouselMainPage'
import dayjs from 'dayjs'
import { langUIConfig } from '@/config'
import { ILocale } from '@/types'

interface Props extends CarouselProps {
  selectEvent: string
  setSelectEvent: Dispatch<SetStateAction<string>>
  locale: ILocale
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
      onSwiper={e => setSwiper(e)}
      onNavigationNext={e => {
        console.log(e.realIndex)
        setSelectEvent(arr.find((item, i) => i === e.realIndex)?.date as string)
      }}
      onNavigationPrev={e => {
        console.log(e.realIndex)
        setSelectEvent(arr.find((item, i) => i === e.realIndex)?.date as string)
      }}
      navigation={{
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-[288px] mobile:h-[220px] relative flex mb-10"
    >
      {arr.map(item => {
        return (
          <SwiperSlide key={item.title}>
            <div className="flex gap-7 w-full">
              {!!item.img && (
                <img
                  className="w-[461px] h-[288px] object-cover object-top tablet:w-[40%] tablet:h-[370px]"
                  src={item.img}
                />
              )}
              <div className="flex flex-col">
                {defineHtml(item.title) ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                ) : (
                  <h2 className="text-[18px] w-3/4 text-first z-30 mobile:text-[14px] mobile:w-full mobile:mx-4">
                    {item.title}
                  </h2>
                )}
                <p className="flex flex-row justify-between text-first text-[18px] font-bold my-4">
                  <span className="flex flex-row gap-4">
                    <span>{dayjs(item.date).locale(locale).format('LL')}</span>
                    {dayjs(new Date()).locale(locale).format('LL') ===
                    dayjs(item.date).locale(locale).format('LL') ? (
                      <span className="text-warning">
                        {langUIConfig.today[locale]}
                      </span>
                    ) : null}
                  </span>
                  <span>{item.time}</span>
                </p>
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      <div ref={prevButtonRef} className=".prev absolute top-1/2 z-10 left-10">
        <ArrowCircleIcon variant="inner" />
      </div>
      <div
        ref={nextButtonRef}
        className=".next rotate-180 absolute top-1/2 z-10 right-10"
      >
        <ArrowCircleIcon variant="inner" />
      </div>
    </Swiper>
  )
}
