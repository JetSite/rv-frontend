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
            ? 'desktopLarge:max-w-[1580px] desktopOnly:max-w-[1052px] mx-auto desktop:px-[52px]'
            : 'desktopLarge:max-w-[1480px] desktopOnly:max-w-[988px] mx-auto'
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
