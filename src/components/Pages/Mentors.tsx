import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { IMentorsData } from '@/utils/getMentorsData'
import { PhotoAlbum } from 'react-photo-album'
import { IGalleryItem } from '@/types/item'
import { Content } from '../Ui/Content'

interface Props {
  data: IMentorsData
}

export const Mentors: FC<Props> = ({ data }) => {
  return (
    <Wrapper
      sx=" notDesktop:px-8 desktop:mb-8"
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[24px] font-medium notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="w-2/3 text-[14px] text-gray-500 mb-14">
        {data.description}
      </p>
      <div className="flex ">
        {data.content ? (
          <Content sx="content w-1/2  desktop:" content={data.content} />
        ) : null}
        {data.gallery ? (
          <PhotoAlbum
            layout="rows"
            targetRowHeight={350}
            columns={3}
            spacing={0}
            padding={0}
            photos={data.gallery as IGalleryItem[]}
          />
        ) : null}
      </div>
    </Wrapper>
  )
}
