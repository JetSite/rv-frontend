import { IChildren, IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLink } from '../MainLink'

interface WrapperProps extends IComponentWithChildren {
  title?: IChildren
  sx?: string
  endLink?: { title: string; slug: string }
  mainPage?: boolean
}

export const Wrapper: FC<WrapperProps> = ({
  children,
  title,
  sx,
  endLink,
  mainPage,
}) => {
  return (
    <div className={sx}>
      <div
        className={
          mainPage
            ? 'max-w-[1580px] mx-auto desktop:pr-[50px]'
            : 'max-w-content mx-auto'
        }
      >
        {!title ? null : typeof title === 'string' ? <h2>{title}</h2> : title}
        {children}
        {endLink ? (
          <div className="flex gap-2.5 mt-4 items-center text-first mobile:mr-7">
            <hr className="w-full border-first" />
            <MainLink item={{ ...endLink }} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
