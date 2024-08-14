'use client'
import { FC } from 'react'
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
  return (
    <>
      <Wrapper
        sx="mobile:px-7 tablet:px-8 "
        title={
          <h1 className="o text-first text-5xl desktopOnly:text-3.5xl font-bold pt-10 mb-6 block notDesktop:text-2xl mobile:px-7 mobile:pt-4">
            {data.title}
          </h1>
        }
      >
        <p className="text-sm text-gray-500 pb-6 desktop:w-2/3">{data.text}</p>
      </Wrapper>
      <div className="mobile:px-7 tablet:px-8 relative w-full notDesktop:flex notDesktop:flex-col desktopLarge:flex desktopLarge:max-w-[1480px] desktopOnly:max-w-[988px] mx-auto">
        <div className="desktopLarge:flex gap-4 justify-center">
          <div className="desktopLarge:hidden bg-gray-200">
            <Carousel>
              {data.gallery?.map(image => (
                <SwiperSlide key={image.key}>
                  <img
                    className="mx-auto h-full object-contain  object-center"
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
          <div className="h-[100%] right-0 top-0 overflow-hidden hidden desktopLarge:flex">
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
      </div>
    </>
  )
}
