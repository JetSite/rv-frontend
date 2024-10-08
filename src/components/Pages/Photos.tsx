'use client'
import { IGallery, IPhotoPageData } from '@/utils/getPhotosPageData'
import { FC, useState } from 'react'
import { PhotoAlbum } from 'react-photo-album'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

interface Props {
  data: IPhotoPageData
}

export const Photos: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState<number>(0)
  const [selectGallery, setSelectGallery] = useState<IGallery | null>(null)

  const handlePhotoClick = (galleryIndex: number, photoIndex: number) => {
    setPhotoIndex(photoIndex)
    setSelectGallery(data.galleries[galleryIndex])
    setIsOpen(true)
  }

  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8"
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-sm desktopOnly:text-xs text-gray-500 pb-6 mb-4 w-[80%]">
        {data.description}
      </p>
      <ul>
        {data.galleries.map((gallery, i) => (
          <li className="gallery mb-20 w-full" key={gallery.id}>
            <h3 className="text-h text-2xl desktopOnly:text-lg font-medium mb-4 desktopOnly:mb-4">
              {gallery.title}
            </h3>
            <p className="text-sm desktopOnly:text-xs text-gray-500  mb-4 w-[80%]">
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
                <div
                  onClick={() => {
                    handlePhotoClick(i, layout.index)
                  }}
                  className="relative group"
                  style={{ ...layout }}
                >
                  <img
                    className="w-full h-full object-cover relative cursor-pointer hover:opacity-90"
                    src={photo.src}
                  />
                  {photo.title ? (
                    <div className="absolute overflow-hidden flex-col bottom-0 h-1/2 inset-x-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1">
                      <p className="text-white text-2xl desktopOnly:text-lg font-medium mb-2 max-h-[50%]">
                        {photo.title}
                      </p>
                      <p className="max-h-[50%] text-sm desktopOnly:text-xs text-gray-300">
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
      {isOpen && selectGallery ? (
        <Lightbox
          mainSrc={selectGallery.photos[photoIndex].src}
          nextSrc={
            selectGallery.photos[(photoIndex + 1) % selectGallery.photos.length]
              .src
          }
          prevSrc={
            selectGallery.photos[
              (photoIndex + selectGallery.photos.length - 1) %
                selectGallery.photos.length
            ].src
          }
          onCloseRequest={() => {
            setPhotoIndex(0)
            setSelectGallery(null)
            setIsOpen(false)
          }}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + selectGallery.photos.length - 1) %
                selectGallery.photos.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % selectGallery.photos.length)
          }
          toolbarButtons={[
            <button
              key="download"
              className="text-sm opacity-80 hover:opacity-100"
              onClick={async () => {
                const response = await fetch(
                  selectGallery.photos[photoIndex].src,
                )
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)

                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', `image-${photoIndex}.jpg`) // Название файла
                link.click()

                // Освобождение URL после скачивания
                window.URL.revokeObjectURL(url)
              }}
            >
              Скачать
            </button>,
          ]}
        />
      ) : null}
    </Wrapper>
  )
}
