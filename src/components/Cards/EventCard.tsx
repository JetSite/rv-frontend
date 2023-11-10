import { EventItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'

interface EventCardProps {
  item: EventItem
}

export const EventCard: FC<EventCardProps> = ({ item }) => {
  return (
    <Link
      href={item.slug}
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7"
    >
      <p className="text-first font-bold text-[18px] flex flex-row gap-16 mb-4 mobile:text-mobile mobile:mb-0.5 mobile:justify-between">
        <span>{item.date}</span>
        <span>{item.time}</span>
      </p>
      <h3 className="text-first font-medium mb-2 mobile:text-mobile mobile:mb-0.5">
        {item.title}
      </h3>
      <p className="text-mobile mobile:text-[12px]">{item.text}</p>
    </Link>
  )
}
