'use client'

import { IChildren } from '@/types'
import { Dispatch, FC, SetStateAction } from 'react'

export interface DropdownProps {
  button: IChildren
  children: IChildren
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export const DropdownOnHover: FC<DropdownProps> = ({
  button,
  children,
  show,
  setShow,
}) => {
  return (
    <button
      onMouseEnter={() => {
        setShow(true)
      }}
      onMouseLeave={() => {
        setShow(false)
      }}
      className="relative"
    >
      <div>{button}</div>
      {show && (
        <div className="absolute z-20 pt-2 -left-4 w-max min-w-4 min-h-4 transition-all">
          {children}
        </div>
      )}
    </button>
  )
}
