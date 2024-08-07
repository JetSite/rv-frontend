import { FC } from 'react'
import { Header } from './components/Header'
import { IComponentWithChildren } from '@/types'
import { Footer } from './components/Footer'
import { ILayoutData } from '@/utils/getLayoutData'

interface MainLayoutProps extends IComponentWithChildren {
  data: ILayoutData
}

export const MainLayout: FC<MainLayoutProps> = ({ children, data }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header data={data} />
      <main className="flex-1 justify-center items-stretch h-full w-full">
        {children}
      </main>
      <Footer data={data} />
    </div>
  )
}
