'use client'
import { FC } from 'react'
import { YOUTUBE_KEY } from '../../vatiables'
import YouTube from 'react-youtube'

interface Props {
  videoId: string
  height: string
  width: string
  className?: string
}

export const VideoPlayer: FC<Props> = ({
  videoId,
  height,
  width,
  className = 'w-full',
}) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      apiKey: YOUTUBE_KEY,
    },
  }
  return (
    <YouTube className={className} videoId={videoId as string} opts={opts} />
  )
}
