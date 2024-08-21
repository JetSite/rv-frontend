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
  fetchLinkTitle?: string
  loadingTitle?: string
  nothingWasFoundText?: string
}

export const VideosLine: FC<Props> = ({
  data,
  paginationState,
  formartDataCallback,
  setPaginationState,
  setNewData,
  fetchLink,
  fetchLinkTitle,
  loadingTitle,
  nothingWasFoundText,
}) => {
  return data?.length ? (
    <>
      <ul className="flex flex-col">
        {data.map(video => {
          return (
            typeof video.link === 'string' && (
              <li
                key={video.id}
                className="flex w-full gap-10 desktopOnly:gap-7"
              >
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
          )
        })}
      </ul>
      <MoreDataLink
        link={fetchLink || ''}
        formartDataCallback={formartDataCallback}
        setNewData={setNewData}
        setPaginationState={setPaginationState}
        paginationState={paginationState}
        title={fetchLinkTitle ?? 'Больше видео'}
        loadingTitle={loadingTitle}
      />
    </>
  ) : (
    <div className="w-full flex-col my-10 flex items-center">
      <p className="text-h flex font-bold text-lg">{nothingWasFoundText}</p>
    </div>
  )
}
