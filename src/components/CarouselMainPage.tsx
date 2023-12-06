'use client'
import { FC, useState } from 'react'
import ArrowCircleIcon from './Ui/Icons/ArrowCircleIcon'
import defineHtml from '@/utils/defineHtml'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore from 'swiper/core'
import { IStandartItem } from '@/types/item'

export interface CarouselProps {
  arr: IStandartItem[]
  className?: string
}

export const CarouselMainPage: FC<CarouselProps> = ({ arr }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  return (
    <Swiper
      onSwiper={e => setSwiper(e)}
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper max-w-[1580px] mx-auto h-carousel mobile:h-[220px] relative flex mb-10"
    >
      {arr.map(item => (
        <SwiperSlide key={item.title}>
          {!!item.img && (
            <img className="w-full object-cover object-top" src={item.img} />
          )}
          <div className="absolute bottom-12 w-full flex items-center justify-center mobile:bottom-6">
            {defineHtml(item.title) ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />
            ) : (
              <h2 className="text-6xl w-3/4 text-white z-30 mobile:text-[14px] mobile:w-full mobile:mx-4">
                {item.title}
              </h2>
            )}
          </div>
        </SwiperSlide>
      ))}
      <div
        onClick={() => swiper?.slidePrev()}
        className="prev absolute top-1/2 z-10 left-10"
      >
        <ArrowCircleIcon />
      </div>
      <div
        onClick={() => swiper?.slideNext()}
        className="next rotate-180 absolute top-1/2 z-10 right-10"
      >
        <ArrowCircleIcon />
      </div>
    </Swiper>
  )
}
