'use client'

import { IActivityData } from '@/utils/getActivityData'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'

interface Props {
  data: IActivityData
}

export const Activity: FC<Props> = ({ data }) => {
  console.log(data)

  return (
    <Wrapper
      sx="mobile:px-7 tablet:px-8"
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] font-bold notDesktop:text-[24px] mobile:mt-5">
          {data.title}
        </h2>
      }
    >
      <p className="text-[14px] text-gray-500 pb-6 w-2/3 mb-4">{data.text}</p>
    </Wrapper>
  )
}
