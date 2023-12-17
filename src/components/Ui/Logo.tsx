'use client'
import { FC } from 'react'
import Link from 'next/link'
import classNames from '@/utils/classNames'
import { ILogo } from '@/types'

interface Props {
  logoSx?: string
  titleSx?: string
  data: ILogo
}

const Logo: FC<Props> = ({
  logoSx = 'mobile:w-12 mobile:h-12',
  titleSx,
  data,
}) => {
  return (
    <Link href={'/'} className="flex items-center gap-5">
      <div className="w-[100px]">
        <img src={data?.img} alt={data?.title} className={logoSx} />
      </div>
      <h3
        dangerouslySetInnerHTML={{ __html: data?.title }}
        className={classNames(
          'text-h leading-[1.3] text-4xl font-medium mobile:text-[18px]',
          titleSx || '',
        )}
      />
    </Link>
  )
}

export default Logo
