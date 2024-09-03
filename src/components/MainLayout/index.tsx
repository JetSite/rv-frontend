import { FC } from 'react'
import { Header } from './components/Header'
import { IComponentWithChildren } from '@/types'
import { Footer } from './components/Footer'
import { ILayoutData } from '@/utils/getLayoutData'
import { Locale } from '@/i18n-config'

interface MainLayoutProps extends IComponentWithChildren {
  data: ILayoutData
  locale: Locale
}

export const MainLayout: FC<MainLayoutProps> = ({ children, data, locale }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} data={data} />
      <main className="flex-1 justify-center items-stretch h-full w-full">
        {children}
      </main>
      <Footer locale={locale} data={data} />
    </div>
  )
}
