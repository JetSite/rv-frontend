'use client'

import { IActivityData, getActivityData } from '@/utils/getActivityData'
import { FC, useState } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'
import BoldCHevronIcon from '../Ui/Icons/BoldCHevronIcon'
import PixelArrowIcon from '../Ui/Icons/PixelArrowIcon'
import classNames from '@/utils/classNames'
import { ILocale } from '@/types'
import { langUIConfig } from '@/config'

interface Props {
  data: IActivityData
  locale: ILocale
}

export const Activity: FC<Props> = ({ data, locale }) => {
  const [showGroup, setShowGroup] = useState<number[]>([1])
  const [showCategory, setShowCategory] = useState<number[]>([])

  const selectGroup = (id: number) => {
    if (showGroup) {
      if (showGroup?.includes(id)) {
        const newArr = showGroup.filter(item => item !== id)
        setShowGroup(newArr)
      } else {
        setShowGroup([...showGroup, id])
      }
    }
  }

  const selectCategory = (id: number) => {
    if (showCategory) {
      if (showCategory?.includes(id)) {
        const newArr = showCategory.filter(item => item !== id)
        setShowCategory(newArr)
      } else {
        setShowCategory([...showCategory, id])
      }
    }
  }

  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8"
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-[14px] text-gray-500 pb-6 notMobile:w-2/3 mb-4">
        {data.text}
      </p>
      <ul className="notMobile:w-2/3">
        {data.groupedCategory?.map(
          group =>
            !!group.categories.length && (
              <li key={group.groupId} className="mb-8">
                <button
                  onClick={() => selectGroup(group.groupId)}
                  className="text-h text-[24px] mb-8 font-medium flex items-center gap-4 "
                >
                  <BoldCHevronIcon
                    bold={showGroup.includes(group.groupId)}
                    className="fill-white"
                  />
                  <span className="notMobile:whitespace-nowrap relative notMobile:w-max mobile:text-start before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-1 hover:before:w-full">
                    {group.groupTitle}
                  </span>
                </button>
                {showGroup.includes(group.groupId) && (
                  <ul className="pl-16 mobile:pl-8">
                    {group.categories.map(
                      category =>
                        !!category.elements.length && (
                          <li
                            key={category.id}
                            className="relative mb-8 before:w-1.5 before:h-1.5 before:absolute before:bg-first before:rounded-full before:-left-4 before:top-2.5"
                          >
                            <button
                              onClick={() => selectCategory(category.id)}
                              className="text-first text-[18px] font-medium w-full flex justify-between  mb-4"
                            >
                              <span className="desktop:whitespace-nowrap text-start  relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-1 hover:before:w-full">
                                {category.title}
                              </span>
                              <PixelArrowIcon
                                className={classNames(
                                  'max-w-[10px] w-full block h-2.5  fill-first',
                                  showCategory.includes(category.id)
                                    ? 'rotate-90'
                                    : '',
                                )}
                              />
                            </button>
                            {showCategory.includes(category.id) && (
                              <ul className="flex flex-col gap-5">
                                {category.elements.map(e => (
                                  <li key={e.id}>
                                    <p className="flex gap-1 text-[14px] font-medium text-first mb-2">
                                      <span>{e.startDate.split('-')[0]}</span>
                                      <span>-</span>
                                      {e.untilNow ? (
                                        <span>{langUIConfig.now[locale]}</span>
                                      ) : (
                                        <span>{e.endDate?.split('-')[0]}</span>
                                      )}
                                    </p>
                                    <p className="text-[14px]">
                                      {e.description}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ),
                    )}
                  </ul>
                )}
              </li>
            ),
        )}
      </ul>
      <ul className="ml-5 notMobile:w-2/3">
        {data.categories.map(
          category =>
            !!category.elements.length && (
              <li
                key={category.id}
                className="relative mb-8 before:w-1.5 before:h-1.5 before:absolute before:bg-first before:rounded-full before:-left-4 before:top-2"
              >
                <button
                  onClick={() => selectCategory(category.id)}
                  className="text-first text-[18px] font-medium w-full flex justify-between items-center gap-1 "
                >
                  <span className="notMobile:whitespace-nowrap relative w-max before:content-[ ] before:absolute before:h-0.5 before:bg-h before:left-0 before:-bottom-1 hover:before:w-full text-start">
                    {category.title}
                  </span>
                  <PixelArrowIcon
                    className={classNames(
                      'max-w-[10px] w-full block h-2.5  fill-first',
                      showCategory.includes(category.id) ? 'rotate-90' : '',
                    )}
                  />
                </button>
                {showCategory.includes(category.id) && (
                  <ul className="flex flex-col gap-5">
                    {category.elements.map(e => (
                      <li key={e.id} className="first:mt-4">
                        <p className="flex gap-1 text-[14px] font-medium text-first mb-2">
                          <span>{e.startDate.split('-')[0]}</span>
                          {!e.endDate && !e.untilNow ? null : <span>-</span>}
                          {e.untilNow ? (
                            <span>{langUIConfig.now[locale]}</span>
                          ) : (
                            <span>{e.endDate?.split('-')[0]}</span>
                          )}
                        </p>
                        <p className="text-[14px]">{e.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ),
        )}
      </ul>
    </Wrapper>
  )
}
