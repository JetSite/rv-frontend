'use client'

import { FC } from 'react'
import { DropdownProps } from './DropdownOnHover'

export const ArchiveDropdown: FC<DropdownProps> = ({
  button,
  children,
  show,
  setShow,
}) => {
  return (
    <>
      <div className="relative z-20">
        <div
          onClick={() => {
            setShow(!show)
          }}
        >
          {button}
        </div>
        {show && (
          <div className="absolute z-30 pt-2 w-max min-w-4 min-h-4 transition-all">
            {children}
          </div>
        )}
      </div>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed bg-gray-700 bg-opacity-50 w-full h-full top-0 left-0 z-10"
        />
      )}
    </>
  )
}
