import { IIcon } from '@/types'
import { FC } from 'react'

interface Props extends IIcon {
  bold?: boolean
}

const BoldCHevronIcon: FC<Props> = ({ className, bold = true }) => {
  return bold ? (
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
  ) : (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.562 7L21.256 12L16.562 17H4.643L9.369 12L4.643 7H16.562ZM17.428 5H0L6.616 12L0 19H17.428L24 12L17.428 5Z"
        fill="#194C81"
      />
    </svg>
  )
}

export default BoldCHevronIcon
