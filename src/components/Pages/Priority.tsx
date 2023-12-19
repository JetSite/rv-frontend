import { FC } from 'react'
import { IGalleryItem, IStandartItem } from '@/types/item'
import PhotoAlbum from 'react-photo-album'
import { Content } from '../Ui/Content'
import { Wrapper } from '../Ui/Wrappers/Wrapper'

interface Props {
  data: IStandartItem
}

export const Priority: FC<Props> = ({ data }) => {
  return (
    <>
      <Wrapper
        title={
          <h1 className="o text-first text-[48px] font-bold pt-10 mb-6 block notDesktop:text-[24px] mobile:px-7 mobile:pt-4">
            {data.title}
          </h1>
        }
      >
        <p className="text-[14px] text-gray-500 pb-6 max-w-2/3">{data.text}</p>
      </Wrapper>
      <div className="relative w-full notDesktop:flex notDesktop:flex-col ">
        <Wrapper>
          {!!data.content ? (
            <div className="w-[50%]">
              <Content
                content={data.content}
                sx="content prose desktop:prose-xl"
              />
            </div>
          ) : null}
        </Wrapper>
        <div className="max-h-[100%] desktop:absolute right-0 top-0 overflow-hidden">
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
