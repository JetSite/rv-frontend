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
        <h3 className="text-first font-bold text-[18px] notDesktop:text-mobile leading-none mb-5 desktopOnly:text-[13px] max-h-9 notDesktop:max-h-7 desktopOnly:max-h-[26px] overflow-hidden">
          {item.title}
        </h3>
        <p className="mb-2.5 text-mobile leading-normal notDesktop:text-[12px] text-ellipsis desktopOnly:text-[11px] max-h-[105px]  desktopOnly:max-h-[100px] overflow-hidden">
          {item.description || item.text} {item.text}
        </p>
        <p className="text-end font-medium leading-none text-mobile notDesktop:text-[12px] text-first desktopOnly:text-[10px]">
          {!!item.date && getNormalizeDate(item.date, locale)}
        </p>
      </Link>
    )
  }

  return (
    <Link
      className="p-1.5 flex gap-5 transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 notDesktop:py-1 overflow-hidden tablet:w-full mobile:flex-col"
      href={link}
    >
      {!!item.img && (
        <img
          className="block mb-2.5 max-w-[355px] desktopOnly:max-w-[220px] object-cover mobile:w-full mobile:max-w-none  desktopOnly:h-[280px]"
          src={item.img}
        />
      )}
      <div className="flex flex-col relative max-h-[400px] w-full  desktopOnly:h-[280px]">
        <h3 className="text-first font-bold text-[18px] notDesktop:text-mobile leading-none mb-5 before:absolute before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full before:-left-3 before:top-1.5 desktopOnly:text-[13px]">
          {item.title}
        </h3>
        <p className="mb-2.5 h-full text-mobile leading-normal notDesktop:text-[12px] overflow-hidden text-ellipsis desktopOnly:text-[11px]">
          {item.text || item.description}
        </p>
        <p className="text-end font-medium leading-none text-mobile notDesktop:text-[12px] text-first desktopOnly:text-[10px] ">
          {!!item.date && getNormalizeDate(item.date, locale)}
        </p>
      </div>
    </Link>
  )
}
