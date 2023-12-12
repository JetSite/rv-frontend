import { FC } from 'react'
import { IGalleryItem, IStandartItem } from '@/types/item'
import defineHtml from '@/utils/defineHtml'
import PhotoAlbum from 'react-photo-album'

interface Props {
  data: IStandartItem
}

export const Priority: FC<Props> = ({ data }) => {
  return (
    <div className="relative">
      <h1 className="max-w-content mx-auto text-first text-[48px] font-bold pt-10 mb-6 block notDesktop:text-[24px] mobile:px-7 mobile:pt-4">
        {data.title}
      </h1>
      <p className="max-w-content mx-auto text-[14px] text-gray-500 pb-6 max-w-2/3">
        {data.text}
      </p>
      <div className="flex justify-between">
        <div className="ml-auto w-[47%] pr-10">
          {defineHtml(data.content as string) ? (
            <div dangerouslySetInnerHTML={{ __html: data.content as string }} />
          ) : (
            <p>{data.content}</p>
          )}
        </div>
        <PhotoAlbum
          layout="rows"
          targetRowHeight={350}
          columns={3}
          spacing={0}
          padding={0}
          photos={data.gallery as IGalleryItem[]}
        />
        ;
      </div>
    </div>
  )
}
