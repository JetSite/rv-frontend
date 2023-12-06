'use client'
import { IStandartItem } from '@/types/item'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/am'
import Link from 'next/link'
import { FC } from 'react'

interface EventCardProps {
  item: IStandartItem
  link: string
  locale: string
}

export const EventCard: FC<EventCardProps> = ({ item, link = '#', locale }) => {
  return (
    <Link
      href={link}
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 "
    >
      <p className="text-first font-bold text-[18px] flex flex-row gap-16 mb-4 notDesktop:text-mobile notDesktop:mb-0.5 notDesktop:justify-between">
        <span>{dayjs(item.date).locale(locale).format('LL')}</span>
        <time>{item.time}</time>
      </p>
      <h3 className="text-first font-medium mb-2 notDesktop:text-mobile notDesktop:mb-0.5">
        {item.title}
      </h3>
      <p className="text-mobile notDesktop:text-[12px]">{item.text}</p>
    </Link>
  )
}
