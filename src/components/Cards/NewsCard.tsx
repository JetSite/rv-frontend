import { NewsItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'

export interface NewsCardProps {
  mainPage?: boolean
  item: NewsItem
  i?: number
}

export const NewsCard: FC<NewsCardProps> = ({ item, i, mainPage }) => {
  let main: boolean = true
  if (mainPage) {
    if ((i as number) > 2) {
      main = false
    }
  }

  return (
    <Link
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 mobile:py-1 overflow-hidden"
      href={item.slug}
    >
      <h3 className="text-first font-bold text-[18px] mobile:text-mobile leading-none mb-5">
        {item.title}
      </h3>
      {main && (
        <p
          className={`mb-2.5 text-mobile leading-normal mobile:text-[12px] overflow-hidden
            ${!main ? ' max-h-4' : ''}`}
        >
          {item.text}
        </p>
      )}
      <p className="text-end font-medium leading-none text-mobile mobile:text-[12px] text-first ">
        {item.date}
      </p>
    </Link>
  )
}
