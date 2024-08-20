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

interface Props {
  data: { data: IAudioAndVideosData[]; source: string }
  meta: IMeta
  filterData: IFilterData
  locale: Locale
}

export const AudioAndVideos: FC<Props> = ({
  data,
  filterData,
  meta,
  locale,
}) => {
  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-5xl desktopOnly:text-3.5xl font-bold notDesktop:text-2xl mobile:mt-5">
          Аудио и видео
        </h2>
      }
    >
      <div className="desktop:w-[80%]">
        <p className="text-sm desktopOnly:text-xs text-gray-500 pb-6 mb-4">
          Аудио- и видеоинтервью стали популярными методами сбора информации и
          общения с людьми в различных сферах, от бизнеса и маркетинга до
          образования и социального обслуживания. Аудиоинтервью обычно
          проводятся с использованием записывающего оборудования, такого как
          диктофоны или портативные рекордеры, в то время как видеоинтервью
          могут быть записаны на видеокамеру или смартфон и включают в себя не
          только звук, но и визуальную информацию.
        </p>
        <FilterVideo
          locale={locale}
          data={data}
          filterData={filterData}
          formartDataCallback={getAudioAndVideosData}
          pagination={meta.pagination}
        >
          <VideosLine />
        </FilterVideo>
      </div>
    </Wrapper>
  )
}
