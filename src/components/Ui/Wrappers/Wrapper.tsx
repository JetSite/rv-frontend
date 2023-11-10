import { IChildren, IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLink } from '../MainLink'

interface WrapperProps extends IComponentWithChildren {
  title: IChildren
  sx?: string
  endLink?: { title: string; slug: string }
}

export const Wrapper: FC<WrapperProps> = ({ children, title, sx, endLink }) => {
  return (
    <div className={sx}>
      <div className="max-w-content mx-auto">
        {typeof title === 'string' ? <h2>{title}</h2> : title}
        {children}
        {endLink ? (
          <div className="flex gap-2.5 mt-2 items-center text-first mobile:mr-7">
            <hr className="w-full border-first" />
            <MainLink item={{ ...endLink }} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
