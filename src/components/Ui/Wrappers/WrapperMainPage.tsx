import { IChildren, IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLink } from '../MainLink'

interface WrapperMainPageProps extends IComponentWithChildren {
  title: IChildren
  titleStyles: string
  endLink?: { title: string; slug: string }
}

export const WrapperMainPage: FC<WrapperMainPageProps> = ({
  children,
  title,
  titleStyles,
  endLink,
}) => {
  return (
    <section
      className="flex gap-2.5 mx-auto relative mb-12 pr-12 notDesktop:flex-col notDesktop:p-0 desktopOnly:max-w-[1052px]
    desktopLarge:max-w-[1580px] "
    >
      <div
        className={`desktopLarge:w-10 desktopOnly:w-7 relative ${titleStyles}`}
      >
        <div className="rotate-[270deg] py-1 px-3 flex justify-end notDesktop:static notDesktop:rotate-0 notDesktop:justify-start notDesktop:px-7 notDesktop:text-mobile notDesktop:py-0 desktopLarge:mt-2 desktopOnly:text-[13px]">
          {typeof title === 'string' ? <h2>{title}</h2> : title}
        </div>
      </div>
      <div className="w-full">
        {children}
        {endLink ? (
          <div className="flex gap-2.5 mt-2 items-center text-first notDesktop:mr-7">
            <hr className="w-full border-first" />
            <MainLink item={{ ...endLink }} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
