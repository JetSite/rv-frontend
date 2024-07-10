'use client'
import { IPhotoPageData } from '@/utils/getPhotosPageData'
import { FC } from 'react'
import { PhotoAlbum } from 'react-photo-album'
import { Wrapper } from '../Ui/Wrappers/Wrapper'

interface Props {
  data: IPhotoPageData
}

export const Photos: FC<Props> = ({ data }) => {
  return (
    <Wrapper
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] desktopOnly:text-[32px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-[14px] desktopOnly:text-[12px] text-gray-500 pb-6 mb-4 w-[80%]">
        {data.description}
      </p>
      <ul className="mb-10">
        {data.galleries.map(gallery => (
          <li key={gallery.id}>
            <h3 className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-4 desktopOnly:mb-4">
              {gallery.title}
            </h3>
            <p className="text-[14px] desktopOnly:text-[12px] text-gray-500  mb-4 w-[80%]">
              {data.description}
            </p>
            <PhotoAlbum
              layout="rows"
              targetRowHeight={350}
              columns={3}
              spacing={0}
              padding={0}
              photos={gallery.photos}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
