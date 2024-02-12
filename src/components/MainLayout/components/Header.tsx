import Logo from '@/components/Ui/Logo'
import { MainNav } from './MainNav'
import { SoсialsWithLang } from './SoсialsWithLang'
import { MobileMav } from './MobileMav'
import { FC } from 'react'
import { ILayoutData } from '@/utils/getLayoutData'
import { getDate } from '@/api/fetch/getDate'

interface Props {
  data: ILayoutData
}

export const Header: FC<Props> = async ({ data }) => {
  const { navHeader, logo, socials } = data

  return (
    <header className="max-w-[1480px] w-full mx-12 pt-14 pb-9 flex justify-between text-h items-center gap-6 border-b-2 border-opacity-30 mobile:pt-5 notDesktop:px-[30px] mobile:gap-2.5 mobile:pb-4 tablet:pt-7 tablet:pb-7 desktop:px-4">
      <Logo data={logo} />
      <MainNav data={navHeader} />
      <SoсialsWithLang data={socials} />
      <MobileMav data={navHeader} socials={socials} />
    </header>
  )
}
