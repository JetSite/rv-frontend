import { FC } from 'react'
import Link from 'next/link'
import { ILogo } from '@/types'

interface Props {
  logoSx?: string
  titleSx?: string
  data: ILogo
}

const Logo: FC<Props> = ({
  logoSx = 'w-[46px] tablet:w-[64px] desktopOnly:w-[66px] desktopLarge:w-[100px]',
  titleSx = 'text-h leading-[1.1] desktopLarge:text-[38px] tablet:text-[25px] desktopOnly:text-[25px] font-medium text-[18px]',
  data,
}) => {
  return (
    <Link
      href={'/'}
      className="flex items-center gap-2 tablet:gap-3 desktopOnly:gap-3 desktopLarge:gap-5 w-max"
    >
      <div className="">
        <img src={data?.img} alt={data?.title} className={logoSx} />
      </div>
      <h3
        dangerouslySetInnerHTML={{ __html: data?.title }}
        className={titleSx}
      />
    </Link>
  )
}

export default Logo
