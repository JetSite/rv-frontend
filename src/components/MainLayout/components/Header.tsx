import Logo from '@/components/Ui/Logo'
import { MainNav } from './MainNav'
import { SoсialsWithLang } from './SoсialsWithLang'
import { MobileMav } from './MobileMav'

export const Header = () => {
  return (
    <header className="max-w-[1480px] w-full px-12 pt-24 pb-9 flex justify-between text-h items-center gap-6 mobile:pt-5 mobile:px-[30px] mobile:gap-2.5 mobile:pb-4">
      <Logo />
      <MainNav />
      <SoсialsWithLang />
      <MobileMav />
    </header>
  )
}
