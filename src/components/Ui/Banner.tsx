import { IImage } from '@/types'
import Image from 'next/image'
import { FC } from 'react'
import { Content } from './Content'

export interface IBannerProps {
  text: string
  img: IImage | null
  title: string
}

export const Banner: FC<IBannerProps> = ({ title, img, text }) => {
  return (
    <>
      <p className="w-2/3 text-sm text-gray-500 mb-14">{title}</p>
      {img ? (
        <div className="mb-14 ">
          <h3 className="text-h text-3.5xl desktopOnly:text-1.5xl font-bold mb-6">
            {title}
          </h3>
          <Image
            src={img.url}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
          <p className="text-sm mt-6">
            <Content content={text} />
          </p>
        </div>
      ) : null}
    </>
  )
}
