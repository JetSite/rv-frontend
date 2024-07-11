'use client'
import { IPhotoPageData } from '@/utils/getPhotosPageData'
import { FC } from 'react'
import { PhotoAlbum } from 'react-photo-album'
import { Wrapper } from '../Ui/Wrappers/Wrapper'

interface Props {
  data: IPhotoPageData
}

export const Photos: FC<Props> = ({ data }) => {
  console.log(data)

  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8"
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] desktopOnly:text-[32px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-[14px] desktopOnly:text-[12px] text-gray-500 pb-6 mb-4 w-[80%]">
        {data.description}
      </p>
      <ul>
        {data.galleries.map(gallery => (
          <li className="gallery mb-20 w-full" key={gallery.id}>
            <h3 className="text-h text-[24px] desktopOnly:text-[18px] font-medium mb-4 desktopOnly:mb-4">
              {gallery.title}
            </h3>
            <p className="text-[14px] desktopOnly:text-[12px] text-gray-500  mb-4 w-[80%]">
              {gallery.text}
            </p>
            <PhotoAlbum
              layout="rows"
              targetRowHeight={250}
              columns={5}
              spacing={0}
              padding={0}
              photos={gallery.photos}
              renderPhoto={({ photo, layout }) => (
                <div className="relative group" style={{ ...layout }}>
                  <img
                    src={photo.src}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                  {photo.title ? (
                    <div className="absolute overflow-hidden flex-col bottom-0 h-1/2 inset-x-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1">
                      <p className="text-white text-[24px] desktopOnly:text-[18px] font-medium mb-2 max-h-[50%]">
                        {photo.title}
                      </p>
                      <p className="max-h-[50%] text-[14px] desktopOnly:text-[12px] text-gray-300">
                        {photo.alt}
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
