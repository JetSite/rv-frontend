'use client'
import { NewsItem } from '@/types/item'
import { useMediaQuery } from 'react-responsive'
import classNames from '@/utils/classNames'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

export interface NewsCardProps {
  item: NewsItem
  showText?: boolean
  mainPage?: boolean
}

export const NewsCard: FC<NewsCardProps> = ({ item, showText, mainPage }) => {
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1579 })
  const [tablet, setTablet] = useState<boolean>(false)
  useEffect(() => {
    setTablet(isTablet)
  }, [isTablet])

  item.id === 48 && console.log(item.text)

  return (
    <Link
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 notDesktop:py-1 overflow-hidden tablet:max-h-1/2"
      href={item.slug}
    >
      <h3 className="text-first font-bold text-[18px] notDesktop:text-mobile leading-none mb-5">
        {item.title}
      </h3>
      {(showText || tablet) && (
        <p
          className={classNames(
            'mb-2.5 text-mobile leading-normal notDesktop:text-[12px] overflow-hidden',
            !mainPage ? 'max-h-20' : 'max-h-[88px]',
          )}
        >
          {item.text}
        </p>
      )}
      <p className="text-end font-medium leading-none text-mobile notDesktop:text-[12px] text-first ">
        {item.date}
      </p>
    </Link>
  )
}
