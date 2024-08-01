'use client'
import { IChildren } from '@/types'
import { FC, useRef, useState } from 'react'
import SwiperCore from 'swiper/core'
import { Swiper } from 'swiper/react'
import ArrowCircleIcon from './Icons/ArrowCircleIcon'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Props {
  children: IChildren
}

export const Carousel: FC<Props> = ({ children }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  return (
    <Swiper
      onSwiper={e => {
        setSwiper(e)
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper mx-auto h-carousel tablet:[330px] mobile:h-[220px] relative flex mb-10"
    >
      {children}
      <div
        onClick={() => swiper?.slidePrev()}
        className="prev absolute top-1/2 z-10 left-10 cursor-pointer rounded-full  bg-gray-100/20"
      >
        <ArrowCircleIcon className="hover:fill-gray-500 fill-gray-800" />
      </div>
      <div
        onClick={() => swiper?.slideNext()}
        className="next rotate-180 absolute top-1/2 z-10 right-10 cursor-pointer shadow-lg rounded-full bg-gray-100/20"
      >
        <ArrowCircleIcon className="hover:fill-gray-500 fill-gray-800" />
      </div>
    </Swiper>
  )
}
