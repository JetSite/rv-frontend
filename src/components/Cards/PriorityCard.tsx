import { IStandartItem } from '@/types/item'
import { IPageNemu } from '@/utils/getMediaActivityData'
import Link from 'next/link'
import React, { FC } from 'react'

interface PriorityCardProps {
  item: IStandartItem | IPageNemu
  locale: string
  slug: string
}

export const PriorityCard: FC<PriorityCardProps> = ({ item, locale, slug }) => {
  return (
    <div className="p-1.5 pt-0 block transition-all mobile:px-7 mobile:py-1">
      {!!item.img && (
        <img
          className=" block mb-2.5 h-[475px] object-cover mobile:w-full mobile:h-[400px] mobile:object-top tablet:h-[237px] tablet:mb-0 tablet:w-full desktopOnly:h-[316px]"
          src={item.img}
        />
      )}
      <Link
        className="pl-5 w-3/4 bg-first hover:bg-second flex relative -top-8 desktopOnly:-top-6 justify-between pr-2 items-center tablet:static tablet:w-full"
        href={slug}
      >
        <h3 className="text-white font-bold text-[28px] notDesktop:text-mobile desktopOnly:text-[18px]">
          {item.title}
        </h3>
        <span className="font-bold text-[28px] text-white desktopOnly:text-[18px]">
          <span className="font-second">{'>'}</span>
        </span>
      </Link>
      <p className=" -mt-6 desktopOnly:-mt-4 ml-5 text-mobile leading-normal notDesktop:text-[12px] mobile:pl-5 overflow-hidden tablet:mt-3 desktopOnly:text-[10px]">
        {item.text}
      </p>
    </div>
  )
}
