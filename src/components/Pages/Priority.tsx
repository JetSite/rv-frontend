'use client'
import { FC, useState } from 'react'
import { IGalleryItem, IStandartItem } from '@/types/item'
import PhotoAlbum from 'react-photo-album'
import { Content } from '../Ui/Content'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { Carousel } from '../Ui/Carousel'
import { SwiperSlide } from 'swiper/react'

interface Props {
  data: IStandartItem
}

export const Priority: FC<Props> = ({ data }) => {
  const [selectEvent, setSelectEvent] = useState<string>(
    data.gallery ? data.gallery[0].key : '',
  )
  console.log(data)

  return (
    <>
      <Wrapper
        sx="mobile:px-7 tablet:px-8 "
        title={
          <h1 className="o text-first text-[48px] desktopOnly:text-[32px] font-bold pt-10 mb-6 block notDesktop:text-[24px] mobile:px-7 mobile:pt-4">
            {data.title}
          </h1>
        }
      >
        <p className="text-[14px] text-gray-500 pb-6 desktop:w-2/3">
          {data.text}
        </p>
      </Wrapper>
      <div className="relative w-full notDesktop:flex notDesktop:flex-col ">
        <Wrapper sx="mobile:px-7 tablet:px-8 ">
          <div className="desktopLarge:hidden">
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
                <SwiperSlide key={image.key}>
                  <img
                    className="w-full object-cover object-center"
                    src={image.src}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
          {!!data.content ? (
            <div className="desktopLarge:w-[45%]">
              <Content content={data.content} sx="content" />
            </div>
          ) : null}
        </Wrapper>
        <div className="max-h-[100%] desktopLarge:absolute right-0 top-0 overflow-hidden hidden desktopLarge:flex">
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
