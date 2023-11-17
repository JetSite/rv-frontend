import Link from 'next/link'
import { FC } from 'react'
import { NewsCardProps } from './NewsCard'

export const NewsPriorityCard: FC<NewsCardProps> = ({ item, mainPage }) => {
  if (mainPage) {
    return (
      <Link
        className="p-1.5 block transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 mobile:py-1 overflow-hidden"
        href={item.slug}
      >
        <img
          className="block mb-2.5 mobile:max-h-[200px] mobile:w-full"
          src={item.img}
        />
        <h3 className="text-first font-bold text-[18px] mobile:text-mobile leading-none mb-5">
          {item.title}
        </h3>
        <p className="mb-2.5 text-mobile leading-normal mobile:text-[12px] overflow-hidden max-h-4">
          {item.text}
        </p>
        <p className="text-end font-medium leading-none text-mobile mobile:text-[12px] text-first ">
          {item.date}
        </p>
      </Link>
    )
  }

  return (
    <Link
      className="p-1.5 flex gap-5 transition-all hover:bg-gray-300 hover:bg-opacity-60 mobile:px-7 mobile:py-1 overflow-hidden"
      href={item.slug}
    >
      <img
        className="block mb-2.5 w-[355px] object-cover h-[400px] mobile:w-full"
        src={item.img}
      />
      <div className="flex flex-col relative">
        <h3 className="text-first font-bold text-[18px] mobile:text-mobile leading-none mb-5 before:absolute before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full before:-left-3 before:top-1.5">
          {item.title}
        </h3>
        <p className="mb-2.5 h-full text-mobile leading-normal mobile:text-[12px]">
          {item.text}
        </p>
        <p className="text-end font-medium leading-none text-mobile mobile:text-[12px] text-first ">
          {item.date}
        </p>
      </div>
    </Link>
  )
}
