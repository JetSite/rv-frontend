'use client'

import { IComponentWithClassName } from '@/types'
import { FC, useState } from 'react'
import ArrowCircleIcon from './Icons/ArrowCircleIcon'
import { motion, AnimatePresence } from 'framer-motion'

export interface CarouselProps extends IComponentWithClassName {
  arr: ICarouselItem[]
}

export interface ICarouselItem {
  img: string
  title: string
}

export const Carousel: FC<CarouselProps> = ({
  arr,
  className = 'max-w-content mx-auto h-carousel mobile:h-[220px] relative flex mb-10',
}) => {
  const [select, setSelect] = useState<ICarouselItem>(arr[0])
  const [animationNext, setAnimationNext] = useState<boolean>(false)
  const selectedItem: number = arr.findIndex(e => e.title === select.title)

  const handleSelectPrev = () => {
    if (selectedItem !== 0) {
      setSelect(arr[selectedItem - 1])
    } else {
      setSelect(arr[arr.length - 1])
    }
  }

  const handleSelectNext = () => {
    setAnimationNext(true)
    if (selectedItem === arr.length - 1) {
      setSelect(arr[0])
    } else {
      setSelect(arr[selectedItem + 1])
    }
  }

  return (
    <div className={className}>
      <AnimatePresence initial={false}>
        <motion.div
          key={select.img}
          initial={{ x: animationNext ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: animationNext ? 100 : -100, opacity: 0 }}
          // transition={{ duration: 0.5 }}
          className="w-full absolute h-full rounded shadow-lg"
        >
          <img
            alt={`Image ${select.img + 1}`}
            className="max-w-content w-full h-full block object-cover object-top "
            src={arr[selectedItem].img}
          />
          <div className="absolute hidden bottom-12 w-full bg-red-400 flex items-center justify-center">
            {typeof select.title === 'string' ? (
              <h2 className="text-6xl w-2/3 text-white">{select.title}</h2>
            ) : (
              select.title
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-12 mobile:left-8"
        onClick={() => {
          setAnimationNext(false)
          handleSelectPrev()
        }}
      >
        <ArrowCircleIcon />
      </button>
      <button
        className="absolute top-1/2 right-12 mobile:right-8"
        onClick={() => {
          setAnimationNext(true)
          handleSelectNext()
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
