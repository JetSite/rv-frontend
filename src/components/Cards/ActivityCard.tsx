import Link from 'next/link'
import React, { FC } from 'react'
import PixelArrowIcon from '../Ui/Icons/PixelArrowIcon'
import { IStandartItem } from '@/types/item'

interface ActivityCardProps {
  item: IStandartItem
  slug: string
}

export const ActivityCard: FC<ActivityCardProps> = ({ item, slug }) => {
  return (
    <Link
      href={slug}
      className="p-1.5 pt-0 block transition-all mobile:px-7 mobile:py-1 text-grey-300 "
    >
      {!!item.img && (
        <img
          className="block mb-7 h-[200px] object-cover w-full mobile:min-h-[170px] mobile:h-auto mobile:object-top tablet:h-auto desktopOnly:h-[134px]"
          src={item.img}
        />
      )}
      <div className=" flex justify-between items-center">
        <h3 className="mb-2.5 font-bold text-2.5xl notDesktop:text-2xl mobile:mb-5 desktopOnly:text-xl line-clamp-2">
          {item.title}
        </h3>
        <span className="font-bold text-2.5xl text-white desktopOnly:text-xl">
          <PixelArrowIcon
            className="notDesktop:w-7  fill-white opacity-50 desktopOnly:w-7  desktopLarge:w-10
      "
          />
        </span>
      </div>
      <p className=" text-sm leading-normal line-clamp-[10] notDesktop:text-xs mobile:max-h-none overflow-hidden desktopOnly:text-xxs">
        {item.description || item.text}
      </p>
    </Link>
  )
}
