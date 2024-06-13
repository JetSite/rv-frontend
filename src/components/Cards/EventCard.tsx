import { IStandartItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { ILocale } from '@/types'

interface EventCardProps {
  item: IStandartItem
  link: string
  locale: ILocale
  sx?: string
}

export const EventCard: FC<EventCardProps> = ({
  item,
  link = '#',
  locale,
  sx = 'p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 overflow-hidden',
}) => {
  return (
    <Link href={link} className={sx}>
      <p className="text-first font-bold text-[18px] flex flex-row mb-4 notDesktop:text-mobile notDesktop:mb-0.5 notDesktop:justify-between desktopOnly:text-[13px]">
        {!!item.date && (
          <span className="min-w-max">
            {getNormalizeDate(item.date, locale)}
          </span>
        )}

        <time className="min-w-max self-end ml-auto">
          {item.time?.replace(':00', '')}
        </time>
      </p>
      <h3 className="text-first font-medium mb-2 notDesktop:text-mobile notDesktop:mb-0.5 desktopOnly:text-[11px]">
        {item.title}
      </h3>
      <p className="text-mobile notDesktop:text-[12px] overflow-hidden text-ellipsis desktopOnly:text-[10px]">
        {item.description || item.text}
      </p>
    </Link>
  )
}
