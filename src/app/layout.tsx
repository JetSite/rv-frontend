import type { Metadata, Viewport } from 'next'
import './globals.css'
import { IComponentWithChildren } from '@/types'
import { FC } from 'react'
import NextTopLoader from 'nextjs-toploader'

// const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'RV-frontend',
  description: '',
  icons: {
    icon: '/favicons/favicon.ico',
  },
}

const Layout: FC<IComponentWithChildren> = async ({ children }) => {
  return children
}

export default Layout
