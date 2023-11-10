import { FC } from 'react'
import LogoIcon from './Icons/LogoIcon'
import Link from 'next/link'

const Logo: FC = () => {
  return (
    <Link href={'/'} className="flex items-center gap-5">
      <div>
        <LogoIcon className="mobile:w-12 mobile:h-12" />
      </div>
      <h3 className="text-h leading-normal text-4xl font-medium mobile:text-[18px]">
        Рубен <br /> Варданян
      </h3>
    </Link>
  )
}

export default Logo
