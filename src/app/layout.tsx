import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLayout } from '@/components/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RV-frontend',
  description: '',
}

const RootLayout: FC<IComponentWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}

export default RootLayout
