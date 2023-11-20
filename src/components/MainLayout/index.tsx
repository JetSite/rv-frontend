import { FC } from 'react'
import { Header } from './components/Header'
import { IComponentWithChildren } from '@/types'
import { Footer } from './components/Footer'

interface MainLayoutProps extends IComponentWithChildren {
  className?: string
}

export const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center min-h-screen ${className}`}>
      <Header />
      <main className="flex-1 justify-center items-stretch h-full w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
