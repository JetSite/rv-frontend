import { FC } from 'react'
import { Header } from './components/Header'
import { IComponentWithChildren } from '@/types'
import { Footer } from './components/Footer'
import { ILayoutData } from '@/utils/getLayoutData'

interface MainLayoutProps extends IComponentWithChildren {
  className?: string
  data: ILayoutData
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  className,
  data,
}) => {
  return (
    <div className={`flex flex-col items-center min-h-screen ${className}`}>
      <Header data={data} />
      <main className="flex-1 justify-center items-stretch h-full w-full">
        {children}
      </main>
      <Footer data={data} />
    </div>
  )
}
