import { IIcon } from '@/types'
import { FC } from 'react'

const BoldCHevronIcon: FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.428 5H0L6.616 12L0 19H17.428L24 12L17.428 5Z"
        fill="#194C81"
      />
    </svg>
  )
}

export default BoldCHevronIcon
