import { FC } from 'react'
import Link from 'next/link'
import { ILogo } from '@/types'
import { Locale } from '@/i18n-config'

interface Props {
  logoSx?: string
  titleSx?: string
  data: ILogo
  locale: Locale
}

const Logo: FC<Props> = ({
  logoSx = 'w-[46px] tablet:w-[64px] desktopOnly:w-[66px] desktopLarge:w-[100px]',
  titleSx = 'text-h desktopLarge:text-3.5xl tablet:text-2xl desktopOnly:text-2xl font-medium text-lg !leading-[1.1]',
  data,
  locale,
}) => {
  return (
    <Link
      href={'/' + locale}
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
