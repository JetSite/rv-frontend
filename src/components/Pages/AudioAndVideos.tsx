'use client'

import { getAudioAndVideosData } from '@/utils/getAudioAndVideosData'
import { FC } from 'react'
import { VideoPlayer } from '../Videos/VideoPlayer'
import { getVideoId } from '@/utils/getVideoId'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import { FilterVideo } from '../Filters/FilterVideo'
import { VideosLine } from '../Videos/VideosLine'
import { MainLink } from '../Ui/MainLink'

interface Props {
  data: any
}

export const AudioAndVideos: FC<Props> = ({ data }) => {
  // console.log(data.data)
  // console.log(getAudioAndVideosData(data.data))

  const datata = getAudioAndVideosData(data.data)

  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8 "
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          Аудио и видео
        </h2>
      }
    >
      <div className="w-[80%]">
        <p className="text-[14px] text-gray-500 pb-6 mb-4">
          Аудио- и видеоинтервью стали популярными методами сбора информации и
          общения с людьми в различных сферах, от бизнеса и маркетинга до
          образования и социального обслуживания. Аудиоинтервью обычно
          проводятся с использованием записывающего оборудования, такого как
          диктофоны или портативные рекордеры, в то время как видеоинтервью
          могут быть записаны на видеокамеру или смартфон и включают в себя не
          только звук, но и визуальную информацию.
        </p>
        <FilterVideo />
        <VideosLine videos={datata} />
        <p className="ml-[54px] mt-4">
          <MainLink item={{ title: 'Больше интервью', slug: '#' }} />
        </p>
      </div>
    </Wrapper>
  )
}
