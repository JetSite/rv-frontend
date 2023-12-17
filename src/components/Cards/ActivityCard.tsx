import Link from 'next/link'
import React, { FC } from 'react'
import PixelArrowIcon from '../Ui/Icons/PixelArrowIcon'
import { IStandartItem } from '@/types/item'

interface ActivityCardProps {
  item: IStandartItem
}

export const ActivityCard: FC<ActivityCardProps> = ({ item }) => {
  return (
    <Link
      href={'/activity/' + item.slug || '#'}
      className="p-1.5 pt-0 block transition-all mobile:px-7 mobile:py-1"
    >
      {!!item.img && (
        <img
          className="block mb-7 h-[200px] object-cover w-full mobile:min-h-[170px] mobile:h-auto mobile:object-top tablet:h-auto "
          src={item.img}
        />
      )}
      <div className=" flex justify-between items-center">
        <h3 className="text-white mb-2.5 font-bold text-[28px] notDesktop:text-[24px] mobile:mb-5">
          {item.title}
        </h3>
        <span className="font-bold text-[28px] text-white">
          <PixelArrowIcon className="notDesktop:w-5 notDesktop:h-6" />
        </span>
      </div>
      <p className="text-white text-mobile leading-normal max-h-[142px] notDesktop:text-[12px] mobile:max-h-none overflow-hidden">
        {item.text}
      </p>
    </Link>
  )
}
