import { FC } from 'react'
import { SoсialsWithLang } from './SoсialsWithLang'
import { FooterNav } from './FooterNav'

export const Footer: FC = () => {
  return (
    <footer className="max-w-content w-full px-12 py-16 flex justify-between text-h items-center gap-28 mobile:flex-col mobile:gap-[68px] mobile:py-7">
      <FooterNav />
      <SoсialsWithLang
        footer
        subKey="footer"
        className="flex flex-col gap-3 items-center"
      />
    </footer>
  )
}
