import Link from 'next/link'
import { FC } from 'react'
import { NewsCardProps } from './NewsCard'
import { getNormalizeDate } from '@/utils/getNormalizeDate'
import Image from 'next/image'

export const NewsPriorityCard: FC<NewsCardProps> = ({
  item,
  mainPage,
  link = '#',
  locale,
}) => {
  if (mainPage) {
    return (
      <Link
        className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 notDesktop:py-1 overflow-hidden"
        href={link}
      >
        {!!item.img && (
          <Image
            width={item.image?.width}
            height={item.image?.height}
            alt={item.title}
            className="block mb-2.5 desktop:max-h-[200px] object-cover w-full tablet:h-[163px]"
            src={item.img}
          />
        )}
        <h3 className="text-first font-bold text-lg notDesktop:text-sm leading-none mb-5 desktopOnly:text-sm line-clamp-2 overflow-hidden">
          {item.title}
        </h3>
        <p className="mb-2.5 text-sm leading-normal notDesktop:text-xs text-ellipsis desktopOnly:text-xxs line-clamp-5">
          {item.description || item.text} {item.text}
        </p>
        <p className="text-end font-medium leading-none text-sm notDesktop:text-xs text-first desktopOnly:text-xxs">
          {!!item.date && getNormalizeDate(item.date, locale)}
        </p>
      </Link>
    )
  }

  return (
    <Link
      className="p-1.5 flex gap-5 transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 notDesktop:py-1 overflow-hidden tablet:w-full mobile:flex-col h-full"
      href={link}
    >
      {!!item.img && (
        <img
          className="block mb-2.5 max-w-[355px] desktopOnly:max-w-[220px] object-cover mobile:w-full mobile:max-w-none  desktopOnly:h-[280px]"
          src={item.img}
        />
      )}
      <div className="flex flex-col relative w-full ">
        <h3 className="text-first font-bold text-lg notDesktop:text-sm leading-none mb-4 before:absolute before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full before:-left-3 before:top-1.5 desktopOnly:text-sm line-clamp-3 pb-2">
          {item.title}
        </h3>
        <p className="mb-2.5 text-sm leading-normal notDesktop:text-xs text-ellipsis desktopOnly:text-xxs line-clamp-[18] desktopOnly:line-clamp-[12] ">
          {item.text || item.description}
        </p>
        <p className="text-end font-medium leading-none text-sm notDesktop:text-xs text-first desktopOnly:text-xxs mt-auto">
          {!!item.date && getNormalizeDate(item.date, locale)}
        </p>
      </div>
    </Link>
  )
}
