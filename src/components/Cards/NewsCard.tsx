'use client'
import { IStandartItem } from '@/types/item'
import { useMediaQuery } from 'react-responsive'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { Locale } from '@/i18n-config'

export interface NewsCardProps {
  item: IStandartItem
  showText?: boolean
  mainPage?: boolean
  link: string
  locale: Locale
}

export const NewsCard: FC<NewsCardProps> = ({
  item,
  showText,
  mainPage,
  link = '#',
  locale,
}) => {
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1279 })
  const [tablet, setTablet] = useState<boolean>(false)
  const text = item.description || item.text
  useEffect(() => {
    setTablet(isTablet)
  }, [isTablet])

  return (
    <Link
      className="p-1.5 transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 notDesktop:py-1 overflow-hidden tablet:max-h-1/2 h-full flex flex-col"
      href={link}
    >
      <h3 className="text-first font-bold text-lg notDesktop:text-sm leading-none desktopOnly:text-sm line-clamp-1 mb-4">
        {item.title}
      </h3>
      {text && (showText || tablet) && (
        <p
          className={classNames(
            'mb-2.5 text-sm leading-normal notDesktop:text-xs overflow-hidden text-ellipsis desktopOnly:text-xxs',
            !mainPage ? 'line-clamp-4' : 'line-clamp-5',
          )}
        >
          {item.description || item.text}
        </p>
      )}
      <p className="text-end font-medium leading-none text-sm notDesktop:text-xs text-first desktopOnly:text-xxs mt-auto">
        {!!item.date && getNormalizeDate(item.date, locale)}
      </p>
    </Link>
  )
}
