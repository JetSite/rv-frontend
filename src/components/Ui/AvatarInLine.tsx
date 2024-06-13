import { IPersone } from '@/utils/getAudioAndVideosData'
import React, { FC } from 'react'

interface Props {
  persone: IPersone
}

export const AvatarInLine: FC<Props> = ({ persone }) => {
  return (
    <li
      key={persone.id}
      className="pb-14 desktopOnly:pb-10 notMobile:-mt-4 mobile:pb-2 last:pb-0 desktopOnly:last:pb-0"
    >
      <div className="desktopOnly:w-[60px] w-[75px]">
        <img
          className="rounded-full object-cover object-center mb-4 desktopOnly:mb-3 border-4 box-content w-full"
          src={persone.avatar}
          alt={persone.title}
        />
      </div>
      <span className="block w-min text-center desktopOnly:text-[14px]">
        {persone.title}
      </span>
    </li>
  )
}
