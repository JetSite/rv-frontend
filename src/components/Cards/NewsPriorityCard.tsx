import Link from 'next/link'
import { FC } from 'react'
import { NewsCardProps } from './NewsCard'
import { getNormalizeDate } from '@/utils/getNormalizeDate'

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
          <img
            className="block mb-2.5 notDesktop:max-h-[200px] object-cover notDesktop:w-full tablet:h-[163px]"
            src={item.img}
          />
        )}
        <h3 className="text-first font-bold text-[18px] notDesktop:text-mobile leading-none mb-5">
          {item.title}
        </h3>
        <p className="mb-2.5 text-mobile leading-normal notDesktop:text-[12px] overflow-hidden max-h-4 text-ellipsis">
          {item.text}
        </p>
        <p className="text-end font-medium leading-none text-mobile notDesktop:text-[12px] text-first ">
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
          className="block mb-2.5 max-w-[355px] object-cover h-[400px] mobile:w-full mobile:max-w-none"
          src={item.img}
        />
      )}
      <div className="flex flex-col relative max-h-[400px] w-full">
        <h3 className="text-first font-bold text-[18px] notDesktop:text-mobile leading-none mb-5 before:absolute before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full before:-left-3 before:top-1.5">
          {item.title}
        </h3>
        <p className="mb-2.5 h-full text-mobile leading-normal notDesktop:text-[12px] overflow-hidden text-ellipsis">
          {item.text}
        </p>
        <p className="text-end font-medium leading-none text-mobile notDesktop:text-[12px] text-first ">
          {!!item.date && getNormalizeDate(item.date, locale)}
        </p>
      </div>
    </Link>
  )
}
