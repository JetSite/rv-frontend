'use client'

import { IComponentWithChildren } from '@/types'
import { FC, useRef, useState } from 'react'
import ArrowCircleIcon from './Icons/ArrowCircleIcon'
import { motion, AnimatePresence } from 'framer-motion'
import defineHtml from '@/utils/defineHtml'

export interface CarouselProps extends IComponentWithChildren {
  arr: ICarouselItem[]
  className?: string
  mainPage?: boolean
}

export interface ICarouselItem {
  img: string
  title: string
}

export const Carousel: FC<CarouselProps> = ({
  arr,
  className = 'max-w-content mx-auto h-carousel mobile:h-[220px] relative flex mb-10',
  children,
  mainPage,
}) => {
  const [select, setSelect] = useState<ICarouselItem>(arr[0])
  const [animationNext, setAnimationNext] = useState<'-100%' | '100%' | 0>(0)
  const ref = useRef<null | HTMLDivElement>(null)
  let selectedItem: number = arr.findIndex(e => e.title === select.title)

  const handleSelectNext = (next: boolean) => {
    if (next) {
      setAnimationNext('-100%')
      if (selectedItem === arr.length - 1) {
        setSelect(arr[0])
      } else {
        setSelect(arr[selectedItem + 1])
      }
      selectedItem = arr.findIndex(e => e.title === select.title)
    } else {
      setAnimationNext('100%')
      if (selectedItem !== 0) {
        setSelect(arr[selectedItem - 1])
      } else {
        setSelect(arr[arr.length - 1])
      }
      selectedItem = arr.findIndex(e => e.title === select.title)
    }
  }

  return (
    <div className={className}>
      <AnimatePresence initial={false}>
        <motion.div
          ref={ref}
          key={select.img}
          initial={{ x: animationNext, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: animationNext === '-100%' ? '100%' : '-100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={
            mainPage
              ? 'w-[1580px] h-full rounded absolute shadow-lg desktop:-mx-[50px]'
              : 'w-full h-full rounded absolute shadow-lg'
          }
        >
          <img
            alt={`Image ${select.img}`}
            className={
              mainPage
                ? 'max-w-[1580px] w-full h-full block object-cover object-top'
                : 'max-w-content w-full h-full block object-cover object-top'
            }
            src={select.img}
          />
          <div className="absolute bottom-12 w-full flex items-center justify-center mobile:bottom-6">
            {defineHtml(select.title) ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: select.title,
                }}
              />
            ) : (
              <h2 className="text-6xl w-3/4 text-white z-30 mobile:text-[14px] mobile:w-full mobile:mx-4">
                {select.title}
              </h2>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-12 mobile:left-8"
        onClick={() => {
          handleSelectNext(false)
        }}
      >
        <ArrowCircleIcon />
      </button>
      <button
        className="absolute top-1/2 right-12 mobile:right-8"
        onClick={() => {
          handleSelectNext(true)
        }}
      >
        <ArrowCircleIcon className="rotate-180 fill-gray-300 hover:fill-gray-200  mobile:h-4 mobile:w-4" />
      </button>

      <div className="absolute w-full flex items-center justify-center gap-15 bottom-2.5 mobile:gap-4">
        {arr.map((_, i) => {
          return (
            <div
              key={i}
              className={
                'w-2.5 h-2.5 mobile:w-1.5 mobile:h-1.5 rounded-full' +
                (selectedItem === i ? ' bg-gray-100' : ' bg-gray-300')
              }
            />
          )
        })}
      </div>
    </div>
  )
}
