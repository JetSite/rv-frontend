import { IPersone } from '@/utils/getAudioAndVideosData'
import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
  persone: IPersone
}

export const AvatarInLine: FC<Props> = ({ persone }) => {
  return (
    <li
      key={persone.id}
      className="pb-14 desktopOnly:pb-10 notMobile:-mt-4 mobile:pb-2 last:pb-0 desktopOnly:last:pb-0 w-[81px] mb-4"
    >
      <Image
        width={75}
        height={75}
        className="rounded-full object-cover object-center mb-4 border-4 box-content"
        src={persone.avatar}
        alt={persone.title}
      />
      <span className="block mx-auto w-min text-center desktopOnly:text-sm text-[#666]">
        {persone.title}
      </span>
    </li>
  )
}
