import { IStandartItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { ILocale } from '@/types'

interface EventCardProps {
  item: IStandartItem
  link: string
  locale: ILocale
}

export const EventCard: FC<EventCardProps> = ({ item, link = '#', locale }) => {
  return (
    <Link
      href={link}
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 overflow-hidden"
    >
      <p className="text-first font-bold text-[18px] flex flex-row gap-16 mb-4 notDesktop:text-mobile notDesktop:mb-0.5 notDesktop:justify-between">
        {!!item.date && <span>{getNormalizeDate(item.date, locale)}</span>}

        <time>{item.time}</time>
      </p>
      <h3 className="text-first font-medium mb-2 notDesktop:text-mobile notDesktop:mb-0.5">
        {item.title}
      </h3>
      <p className="text-mobile notDesktop:text-[12px] overflow-hidden text-ellipsis">
        {item.text}
      </p>
    </Link>
  )
}
