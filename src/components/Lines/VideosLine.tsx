import { Dispatch, FC, SetStateAction } from 'react'
import { IAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { VideoLineItem } from './VideoLineItem'
import { MoreDataLink } from '../Ui/MoreDataLink'
import { IData, IPagination } from '@/types'

interface Props {
  data?: IAudioAndVideosData[]
  setNewData?: Dispatch<SetStateAction<IAudioAndVideosData[]>>
  setPaginationState?: Dispatch<SetStateAction<IPagination>>
  paginationState?: IPagination
  formartDataCallback?: (data: IData[]) => {
    data: IAudioAndVideosData[]
    source: string
  }
  fetchLink?: string
}

export const VideosLine: FC<Props> = ({
  data,
  paginationState,
  formartDataCallback,
  setPaginationState,
  setNewData,
  fetchLink,
}) => {
  return data?.length ? (
    <>
      <ul className="flex flex-col">
        {data.map(video => {
          return (
            <li key={video.id} className="flex w-full gap-10 desktopOnly:gap-7">
              <VideoLineItem
                variant="main"
                date={video.date}
                persons={video.persons}
                source={video.source}
                title={video.title}
                link={video.link}
                slug={video.slug}
              />
            </li>
          )
        })}
      </ul>
      <MoreDataLink
        link={fetchLink || ''}
        formartDataCallback={formartDataCallback}
        setNewData={setNewData}
        setPaginationState={setPaginationState}
        paginationState={paginationState}
        title={'Больше видео'}
      />
    </>
  ) : (
    <div className="w-full flex-col my-10 flex items-center">
      <p className="text-h flex font-bold text-[18px]">Ничего не найдено</p>
    </div>
  )
}
