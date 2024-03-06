import Logo from '@/components/Ui/Logo'
import { MainNav } from './MainNav'
import { SoсialsWithLang } from './SoсialsWithLang'
import { MobileMav } from './MobileMav'
import { FC } from 'react'
import { ILayoutData } from '@/utils/getLayoutData'

interface Props {
  data: ILayoutData
}

export const Header: FC<Props> = async ({ data }) => {
  const { navHeader, logo, socials } = data

  return (
    <header className="desktopOnly:max-w-[988px] max-w-[1480px] w-full desktopOnly:mx-auto desktopLarge:mx-auto flex px-[30px] items-center justify-between py-5 tablet:px-[33px] tablet:py-7 desktopOnly:px-0 desktopOnly:pt-[43px] desktopOnly:pb-[35px] desktopOnly:gap-3 desktopLarge:gap-4 desktopLarge:px-0">
      <Logo data={logo} />
      <MainNav data={navHeader} />
      <SoсialsWithLang data={socials} />
      <MobileMav data={navHeader} socials={socials} />{' '}
    </header>
  )
}
