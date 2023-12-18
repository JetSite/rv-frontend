import { IIcon } from '@/types'
import { FC } from 'react'

interface Props extends IIcon {}

const VideoIcon: FC<Props> = ({ className, variant }) => {
  return variant === 'main' ? (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="15" cy="15" r="15" fill="#F8F8F8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM11.75 19.2631L20 14.5L11.75 9.73686V19.2631Z"
        fill="#D9D9D9"
      />
    </svg>
  ) : (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="15" cy="15" r="15" fill="#F8F8F8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM15 16.75C16.2886 16.75 17.3333 15.7053 17.3333 14.4167V10.3333C17.3333 9.04475 16.2886 8 15 8C13.7114 8 12.6667 9.04475 12.6667 10.3333V14.4167C12.6667 15.7053 13.7114 16.75 15 16.75ZM19.6667 14.4167V13.25H18.5V14.4167C18.5 16.3469 16.9303 17.9167 15 17.9167C13.0697 17.9167 11.5 16.3469 11.5 14.4167V13.25H10.3333V14.4167C10.3333 16.9938 12.4228 19.0833 15 19.0833C17.5772 19.0833 19.6667 16.9938 19.6667 14.4167ZM15.5833 19.6667V20.8333H17.9167V22H12.0833V20.8333H14.4167V19.6667H15.5833Z"
        fill="#D9D9D9"
      />
    </svg>
  )
}

export default VideoIcon
