'use client'

import { FC, useRef } from 'react'
import ArrowCircleIcon from '../Ui/Icons/ArrowCircleIcon'
import defineHtml from '@/utils/defineHtml'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { CarouselProps } from '../CarouselMainPage'

export const CalendarCarousel: FC<CarouselProps> = ({ arr }) => {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  return (
    <Swiper
      slidesPerView={1}
      loop
      navigation={{
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full mobile:h-[220px] relative flex mb-10"
    >
      {arr.map(item => (
        <SwiperSlide key={item.title}>
          <div className="flex gap-7 w-full">
            <img
              className="w-[461px] h-[288px] object-cover object-top"
              src={item.img}
            />
            <div className="flex ">
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
            </div>
          </div>
        </SwiperSlide>
      ))}
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
