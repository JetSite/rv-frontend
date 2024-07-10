import { WrappedBuildError } from 'next/dist/server/base-server'
import { FC } from 'react'
import { Wrapper } from '../Ui/Wrappers/Wrapper'

interface Props {
  data: any
}

export const Search: FC<Props> = ({ data }) => {
  return (
    <Wrapper
      title={
        <h2 className="block mt-10 mb-2.5 text-first text-[48px] desktopOnly:text-[32px] font-bold notDesktop:text-[24px] mobile:mt-5">
          Найдено <span>4</span> совпадения
        </h2>
      }
    ></Wrapper>
  )
}
