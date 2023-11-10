import React, { FC } from 'react'

export const MobileMav: FC = () => {
  return (
    <div className="desktop:hidden">
      <button className="relative h-6">
        <div className="w-8 h-0.5 my-auto bg-first after:content-[ ] after:absolute after:w-8 after:h-0.5 after:bg-first after:bottom-0 after:left-0 before:content-[ ] before:absolute before:w-8 before:h-0.5 before:bg-first before:top-0 before:left-0" />
      </button>
    </div>
  )
}
