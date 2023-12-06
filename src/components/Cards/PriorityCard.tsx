import { IStandartItem } from '@/types/item'
import Link from 'next/link'
import React, { FC } from 'react'

interface PriorityCardProps {
  item: IStandartItem
  locale: string
}

export const PriorityCard: FC<PriorityCardProps> = ({ item, locale }) => {
  return (
    <div className="p-1.5 pt-0 block transition-all mobile:px-7 mobile:py-1">
      {!!item.img && (
        <img
          className=" block mb-2.5 max-h-[475px] object-cover mobile:w-full mobile:min-h-[400px] h-auto mobile:object-top tablet:h-auto tablet:mb-0 tablet:w-full"
          src={item.img}
        />
      )}
      <Link
        className="pl-5 w-3/4 bg-first hover:bg-second flex relative -top-8 justify-between pr-2 items-center tablet:static tablet:w-full"
        href={item.slug}
      >
        <h3 className="text-white font-bold text-[28px] notDesktop:text-mobile">
          {item.title}
        </h3>
        <span className="font-bold text-[28px] text-white">{'>'}</span>
      </Link>
      <p className=" -mt-6 text-mobile leading-normal notDesktop:text-[12px] mobile:pl-5 overflow-hidden tablet:mt-3">
        {item.text}
      </p>
    </div>
  )
}
