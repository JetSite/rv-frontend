import { IIcon } from '@/types'
import { FC } from 'react'

const VideoIcon: FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path d="M9 5.5L0.75 10.2631L0.75 0.73686L9 5.5Z" fill="#F7F7F7" />
      <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
    </svg>
  )
}

export default VideoIcon
