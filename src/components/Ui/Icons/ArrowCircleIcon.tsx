import { IIcon } from '@/types'
import { FC } from 'react'

const ArrowCircleIcon: FC<IIcon> = ({
  className = 'hover:fill-gray-200 fill-gray-300 mobile:h-4 mobile:w-4',
  fill,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={fill}
    >
      <g clipPath="url(#clip0_308_1165)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C8.96167 40 7.83454e-07 31.0383 1.74846e-06 20C2.71346e-06 8.96166 8.96167 -2.71346e-06 20 -1.74846e-06C31.0383 -7.83454e-07 40 8.96167 40 20C40 31.0383 31.0383 40 20 40ZM20 38.3333C9.88167 38.3333 1.66667 30.1183 1.66667 20C1.66667 9.88166 9.88167 1.66667 20 1.66667C30.1183 1.66667 38.3333 9.88167 38.3333 20C38.3333 30.1183 30.1183 38.3333 20 38.3333ZM25 28.745L14.2667 20L25 11.2283L23.87 10L11.6667 20L23.8917 30L25 28.745Z"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_308_1165">
          <rect
            width="40"
            height="40"
            transform="translate(40 40) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowCircleIcon
