'use client'
import { FC, useState } from 'react'
import { IGalleryItem, IStandartItem } from '@/types/item'
import PhotoAlbum from 'react-photo-album'
import { Content } from '../Ui/Content'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { CalendarCarousel } from '../Calendar/CalendarCarousel'
import { Carousel } from '../Ui/Carousel'
import { SwiperSlide } from 'swiper/react'

interface Props {
  data: IStandartItem
}

export const Priority: FC<Props> = ({ data }) => {
  const [selectEvent, setSelectEvent] = useState<string>(
    data.gallery ? data.gallery[0].key : '',
  )

  console.log(selectEvent)

  return (
    <>
      <Wrapper
        sx="mobile:px-7 tablet:px-8 "
        title={
          <h1 className="o text-first text-[48px] font-bold pt-10 mb-6 block notDesktop:text-[24px] mobile:px-7 mobile:pt-4">
            {data.title}
          </h1>
        }
      >
        <p className="text-[14px] text-gray-500 pb-6 desktop:max-w-2/3">
          {data.text}
        </p>
      </Wrapper>
      <div className="relative w-full notDesktop:flex notDesktop:flex-col ">
        <Wrapper sx="mobile:px-7 tablet:px-8 ">
          <Carousel
            onNavigationNext={e => {
              setSelectEvent(
                data.gallery?.find((item, i) => i === e.realIndex)
                  ?.key as string,
              )
            }}
            onNavigationPrev={e => {
              setSelectEvent(
                data.gallery?.find((item, i) => i === e.realIndex)
                  ?.key as string,
              )
            }}
          >
            {data.gallery?.map(image => (
              <SwiperSlide>
                <img className="w-full" src={image.src} />
              </SwiperSlide>
            ))}
          </Carousel>

          {!!data.content ? (
            <div className="desktop:w-[50%]">
              <Content
                content={data.content}
                sx="content prose desktop:prose-xl"
              />
            </div>
          ) : null}
        </Wrapper>
        <div className="max-h-[100%] desktop:absolute right-0 top-0 overflow-hidden notDesktop:hidden">
          <PhotoAlbum
            layout="rows"
            targetRowHeight={350}
            columns={3}
            spacing={0}
            padding={0}
            photos={data.gallery as IGalleryItem[]}
          />
        </div>
      </div>
    </>
  )
}
