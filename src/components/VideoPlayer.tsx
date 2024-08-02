import { FC } from 'react'
import { YOUTUBE_KEY } from '../../vatiables'
import YouTube from 'react-youtube'
import classNames from '@/utils/classNames'

interface Props {
  videoId: string
  className?: string
}

export const VideoPlayer: FC<Props> = ({ videoId, className = 'w-full' }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      apiKey: YOUTUBE_KEY,
    },
  }
  return (
    <div className={classNames('pb-[54.25%] relative')}>
      <YouTube
        className={classNames(className, 'absolute inset-0')}
        videoId={videoId as string}
        opts={opts}
      />
    </div>
  )
}
