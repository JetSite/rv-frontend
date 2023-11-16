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
    <section className="flex gap-2.5 mx-auto relative mb-12 pr-12 mobile:flex-col mobile:p-0 desktop:max-w-[1580px]">
      <div className={`desktop:w-10  relative ${titleStyles}`}>
        <div className="rotate-[270deg] py-1 px-3 flex justify-end mobile:static mobile:rotate-0 mobile:justify-start mobile:px-7 mobile:text-mobile mobile:py-0 desktop:mt-2">
          {typeof title === 'string' ? <h2>{title}</h2> : title}
        </div>
      </div>
      <div className="w-full ">
        {children}
        {endLink ? (
          <div className="flex gap-2.5 mt-2 items-center text-first mobile:mr-7">
            <hr className="w-full border-first" />
            <MainLink item={{ ...endLink }} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
