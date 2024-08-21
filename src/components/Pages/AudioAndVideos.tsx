'use client'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { VideosLine } from '../Lines/VideosLine'
import { MainLink } from '../Ui/MainLink'
import { FilterVideo } from '../Filters/FilterVideo'
import { IFilterData } from '@/api/fetch/getFilterData'
import {
  IAudioAndVideosData,
  getAudioAndVideosData,
} from '@/utils/getAudioAndVideosData'
import { IMeta } from '@/types'
import { Locale } from '@/i18n-config'
import { ISeoData } from '@/utils/parsedData/getSeoData'

interface Props {
  data: { data: IAudioAndVideosData[]; source: string }
  meta: IMeta
  filterData: IFilterData
  locale: Locale
  seoData: ISeoData
}

export const AudioAndVideos: FC<Props> = ({
  data,
  filterData,
  meta,
  locale,
  seoData,
}) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          {seoData.seoTitle}
        </h2>
      }
    >
      <div className="desktop:w-[80%]">
        <p className="text-sm desktopOnly:text-xs text-gray-500 pb-6 mb-4">
          {seoData.seoDescription}
        </p>
        <FilterVideo
          seoData={seoData}
          locale={locale}
          data={data}
          filterData={filterData}
          formartDataCallback={getAudioAndVideosData}
          pagination={meta.pagination}
          fetchLinkTitle={seoData.moreVideoButtonText}
          loadingTitle={seoData.moreVideoLoadingText}
          nothingWasFoundText={seoData.nothingWasFoundText}
        >
          <VideosLine />
        </FilterVideo>
      </div>
    </Wrapper>
  )
}
