import { IIcon } from '@/types'
import { FC } from 'react'

const PixelArrowIcon: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.89 8l-1.415 1.414-4.95 4.95-1.414-1.414L9.06 8 4.11 3.05l1.414-1.414 4.95 4.95L11.889 8z"
      />
    </svg>
  )
}

export default PixelArrowIcon
