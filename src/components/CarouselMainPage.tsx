'use client'
import { FC, useRef, useState } from 'react'
import ArrowCircleIcon from './Ui/Icons/ArrowCircleIcon'
import defineHtml from '@/utils/defineHtml'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore from 'swiper/core'
import { IDataMainSlider } from '@/utils/getDataMainSlider'
import classNames from '@/utils/classNames'

export interface CarouselProps {
  arr: IDataMainSlider[]
  className?: string
}

export const CarouselMainPage: FC<CarouselProps> = ({ arr }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  return (
    <Swiper
      onSwiper={e => {
        setSwiper(e)
      }}
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
              <h2 className="text-6xl w-3/4 z-30 mobile:text-[14px] mobile:w-full mobile:mx-4">
                <span
                  style={{
                    color: item.titleFirstLineTextColor
                      ? item.titleFirstLineTextColor
                      : 'white',
                    backgroundColor: item.titleFirstLineBackgroundColor
                      ? item.titleFirstLineBackgroundColor
                      : '',
                  }}
                  className={classNames('block')}
                >
                  {item.titleFirstLine}
                </span>
                <span
                  style={{
                    color: item.titleSecondLineTextColor
                      ? item.titleSecondLineTextColor
                      : 'white',
                    backgroundColor: item.titleSecondLineBackgroundColor
                      ? item.titleSecondLineBackgroundColor
                      : '',
                  }}
                  className={classNames('block')}
                >
                  {item.titleSecondLine}
                </span>
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
