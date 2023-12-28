'use client'
import { IStandartItem } from '@/types/item'
import { useMediaQuery } from 'react-responsive'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import { ILocale } from '@/types'

export interface NewsCardProps {
  item: IStandartItem
  showText?: boolean
  mainPage?: boolean
  link: string
  locale: ILocale
}

export const NewsCard: FC<NewsCardProps> = ({
  item,
  showText,
  mainPage,
  link = '#',
  locale,
}) => {
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1579 })
  const [tablet, setTablet] = useState<boolean>(false)
  useEffect(() => {
    setTablet(isTablet)
  }, [isTablet])

  return (
    <Link
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 notDesktop:py-1 overflow-hidden tablet:max-h-1/2"
      href={link}
    >
      <h3 className="text-first font-bold text-[18px] notDesktop:text-mobile leading-none mb-5 min-w-max truncate">
        {item.title}
      </h3>
      {(showText || tablet) && (
        <p
          className={classNames(
            'mb-2.5 text-mobile leading-normal notDesktop:text-[12px] overflow-hidden',
            !mainPage ? 'max-h-[80px]' : 'max-h-[88px]',
          )}
        >
          {item.text}
        </p>
      )}
      <p className="text-end font-medium leading-none text-mobile notDesktop:text-[12px] text-first ">
        {!!item.date && getNormalizeDate(item.date, locale)}
      </p>
    </Link>
  )
}
