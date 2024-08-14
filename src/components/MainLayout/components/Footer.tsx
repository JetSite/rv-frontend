import { FC } from 'react'
import { SoсialsWithLang } from './SoсialsWithLang'
import { FooterNav } from './FooterNav'
import Logo from '@/components/Ui/Logo'
import { ILayoutData } from '@/utils/getLayoutData'
import Input from '@/components/Ui/Inputs/Input'

interface Props {
  data: ILayoutData
}

export const Footer: FC<Props> = ({ data }) => {
  return (
    <footer className="flex flex-col tablet:flex-row justify-center tablet:justify-between items-center desktop:items-start pt-[50px] pb-14 tablet:px-8 gap-[72px] tablet:gap-4 max-w-[1480px] desktopOnly:max-w-[988px] desktop:mx-auto desktop:w-full desktop:flex-row ">
      <FooterNav data={data.navFooter} />
      <div className="desktop:hidden">
        <Logo
          data={data.logo}
          logoSx="w-[68px]"
          titleSx="text-h text-2xl font-medium "
        />
      </div>
      <SoсialsWithLang
        data={data.socials}
        variant="footer"
        subKey="footer"
        className="flex flex-col tablet:flex-row gap-3 items-center tablet:w-full tablet:justify-around"
      />
    </footer>
  )
}
