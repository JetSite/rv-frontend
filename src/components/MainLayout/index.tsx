import { FC } from 'react'
import { Header } from './components/Header'
import { IComponentWithChildren } from '@/types'
import { Footer } from './components/Footer'

export const MainLayout: FC<IComponentWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex-1 justify-center items-stretch h-full w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
