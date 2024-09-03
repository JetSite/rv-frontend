import { IStandartItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { Locale } from '@/i18n-config'

interface EventCardProps {
  item: IStandartItem
  link: string
  locale: Locale
  sx?: string
}

export const EventCard: FC<EventCardProps> = ({
  item,
  link = '#',
  locale,
  sx = 'p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 overflow-hidden',
}) => {
  return (
    <Link href={'/' + locale + link} className={sx}>
      <p className="text-first font-bold text-lg flex flex-row notDesktop:text-sm notDesktop:mb-0.5 notDesktop:justify-between desktopOnly:text-sm">
        {!!item.date && (
          <span className="min-w-max">
            {getNormalizeDate(item.date, locale)}
          </span>
        )}

        <time className="min-w-max self-end ml-auto">
          {item.time?.replace(':00', '')}
        </time>
      </p>
      <h3 className="text-first font-medium mb-1 notDesktop:text-sm notDesktop:mb-0.5 desktopOnly:text-xxs line-clamp-2">
        {item.title}
      </h3>
      <p className="text-sm notDesktop:text-xs overflow-hidden text-ellipsis desktopOnly:text-xxs line-clamp-5">
        {item.description || item.text}
      </p>
    </Link>
  )
}
