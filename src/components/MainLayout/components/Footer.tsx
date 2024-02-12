import { FC } from 'react'
import { SoсialsWithLang } from './SoсialsWithLang'
import { FooterNav } from './FooterNav'
import Logo from '@/components/Ui/Logo'
import { ILayoutData } from '@/utils/getLayoutData'

interface Props {
  data: ILayoutData
}

export const Footer: FC<Props> = ({ data }) => {
  return (
    <footer className="max-w-content w-full mx-12 py-10 flex justify-between text-first items-center gap-28 mobile:flex-col mobile:gap-[68px] mobile:py-7 tablet:px-8 relative z-10 border-t-2 border-t-first mt-14 desktopOnly:px-4">
      <FooterNav data={data.navFooter} />
      <div className="desktop:hidden">
        <Logo
          data={data.logo}
          logoSx="mobile:w-[68px] mobile:h-[68px]"
          titleSx="mobile:text-[26px]"
        />
      </div>
      <SoсialsWithLang
        data={data.socials}
        variant="tablet"
        subKey="footer"
        className="flex flex-col gap-3 items-center  tablet:flex-row tablet:justify-around tablet:w-full "
      />
    </footer>
  )
}
