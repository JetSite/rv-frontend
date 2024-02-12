'use client'
import { IChildren } from '@/types'
import { FC, useRef, useState } from 'react'
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowCircleIcon from './Icons/ArrowCircleIcon'
import { Navigation, Pagination } from 'swiper/modules'

interface Props {
  children: IChildren
  onNavigationNext: (swiper: SwiperCore) => void
  onNavigationPrev: (swiper: SwiperCore) => void
}

export const Carousel: FC<Props> = ({
  children,
  onNavigationNext,
  onNavigationPrev,
}) => {
  const prevButtonRef = useRef<HTMLDivElement | null>(null)
  const nextButtonRef = useRef<HTMLDivElement | null>(null)
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  return (
    <Swiper
      initialSlide={0}
      onSwiper={e => {
        setSwiper(e)
      }}
      onNavigationNext={onNavigationNext}
      onNavigationPrev={onNavigationPrev}
      navigation={{
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-[280px] mobile:h-[220px] relative flex mb-10"
    >
      {children}
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
