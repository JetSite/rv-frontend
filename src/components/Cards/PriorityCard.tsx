import { PriorityItem } from '@/types/item'
import Link from 'next/link'
import React, { FC } from 'react'

interface PriorityCardProps {
  item: PriorityItem
}

export const PriorityCard: FC<PriorityCardProps> = ({ item }) => {
  return (
    <div className="p-1.5 pt-0 block transition-all mobile:px-7 mobile:py-1">
      <img
        className=" block mb-2.5 h-[475px] mobile:w-full mobile:h-[400px]"
        src={item.img}
      />
      <Link
        className="pl-5 w-3/4 bg-first hover:bg-second flex relative -top-8 justify-between pr-2 items-center"
        href={item.slug}
      >
        <h3 className="text-white font-bold text-[28px] mobile:text-mobile">
          {item.title}
        </h3>
        <span className="font-bold text-[28px] text-white">{'>'}</span>
      </Link>
      <p className=" -mt-6 text-mobile leading-normal mobile:text-[12px] mobile:pl-5 overflow-hidden">
        {item.text}
      </p>
    </div>
  )
}
