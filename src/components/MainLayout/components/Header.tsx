'use client'
import Logo from '@/components/Ui/Logo'
import { MainNav } from './MainNav'
import { SoсialsWithLang } from './SoсialsWithLang'
import { MobileNav } from './MobileNav'
import { FC, useState } from 'react'
import { ILayoutData } from '@/utils/getLayoutData'
import { Locale } from '@/i18n-config'
import { IThema } from '@/utils/getTheme'

interface Props {
  data: ILayoutData
  locale: Locale
}

export const Header: FC<Props> = ({ data, locale }) => {
  const { navHeader, logo, socials, settings } = data
  const [theme, setTheme] = useState<IThema>('default')

  return (
    <header className="desktopOnly:max-w-[988px] max-w-[1480px] w-full desktopOnly:mx-auto desktopLarge:mx-auto flex px-[30px] items-center justify-between py-5 tablet:px-[33px] tablet:py-7 desktopOnly:px-0 desktopOnly:pt-[43px] desktopOnly:pb-[35px] desktopOnly:gap-3 desktopLarge:gap-4 desktopLarge:px-0">
      <Logo locale={locale} data={logo} />
      <MainNav
        locale={locale}
        data={navHeader}
        settings={settings?.headerNav}
        theme={theme}
      />
      <SoсialsWithLang locale={locale} data={socials} setOutTheme={setTheme} />
      <MobileNav
        locale={locale}
        data={navHeader}
        settings={settings?.headerNav}
        socials={socials}
      />
    </header>
  )
}
