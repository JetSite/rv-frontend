'use client'
import { FC, useEffect, useRef, useState } from 'react'
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
import Link from 'next/link'
import { Locale } from '@/i18n-config'

export interface CarouselProps {
  arr: IDataMainSlider[]
  className?: string
  locale: Locale
}

export const CarouselMainPage: FC<CarouselProps> = ({ arr, locale }) => {
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
      className="mySwiper max-w-[1580px] desktopOnly:max-w-[1052px] mx-auto h-carousel mobile:h-[220px] desktopOnly:h-[372px] relative flex mb-6"
    >
      {arr.map(item => (
        <SwiperSlide key={item.title}>
          <Link href={'/' + locale + item.link} className="flex h-full">
            {!!item.img && (
              <img className="w-full object-cover object-top" src={item.img} />
            )}
            <div className="absolute bottom-10 w-full flex items-center justify-center mobile:bottom-6">
              {defineHtml(item.title) ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                />
              ) : (
                <h2 className="text-sm tablet:text-3xl desktopOnly:text-3.5xl desktopLarge:text-5xl font-bold w-3/4 z-30 mobile:w-full mobile:mx-4">
                  <span
                    style={{
                      color: item.titleFirstLineTextColor
                        ? item.titleFirstLineTextColor
                        : 'white',
                      backgroundColor: item.titleFirstLineBackgroundColor
                        ? item.titleFirstLineBackgroundColor
                        : '',
                    }}
                    className={classNames('block pl-4 courusel-title')}
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
                    className={classNames('block pl-4 courusel-title')}
                  >
                    {item.titleSecondLine}
                  </span>
                </h2>
              )}
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div
        onClick={() => swiper?.slidePrev()}
        className="prev absolute top-1/2 z-10 left-[30px]  hover:shadow-lg rounded-full cursor-pointer "
      >
        <ArrowCircleIcon className="hover:fill-white fill-white/70" />
      </div>
      <div
        onClick={() => swiper?.slideNext()}
        className="next rotate-180 absolute top-1/2 z-10 right-[30px]  hover:shadow-lg rounded-full cursor-pointer"
      >
        <ArrowCircleIcon className="hover:fill-white fill-white/70" />
      </div>
    </Swiper>
  )
}
