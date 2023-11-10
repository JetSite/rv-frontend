import { NewsItem } from '@/types/item'
import Link from 'next/link'
import { FC } from 'react'

interface NewsCardProps {
  item: NewsItem
  i: number
}

export const NewsCard: FC<NewsCardProps> = ({ item, i }) => {
  return (
    <Link
      className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 mobile:py-1 overflow-hidden"
      href={item.slug}
    >
      {i === 0 && (
        <img
          className=" block mb-2.5 mobile:max-h-[200px] mobile:w-full"
          src={item.img}
        />
      )}
      <h3 className="text-first font-bold text-[18px] mobile:text-mobile leading-none mb-5">
        {item.title}
      </h3>
      {i > 0 && i < 3 && (
        <p className="mb-2.5 text-mobile leading-normal mobile:text-[12px] ">
          {item.text}
        </p>
      )}
      <p className="text-end font-medium leading-none text-mobile mobile:text-[12px] text-first ">
        {item.date}
      </p>
    </Link>
  )
}
