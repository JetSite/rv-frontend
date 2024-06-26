import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { API } from '@/api'
import { getLayoutData } from '@/utils/getLayoutData'
import NextTopLoader from 'nextjs-toploader'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RV-frontend',
  description: '',
  // viewport: 'width=device-width, initial-scale=1.0, user-scalable=no',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const RootLayout: FC<IComponentWithChildren> = async ({ children }) => {
  const res = await fetch(
    `${API.baseUrl}/option?populate[header_menu][populate][menu][populate][0]=menu_item&populate[header_menu][populate][menu][populate][1]=submenu_items&populate[siteLogo][fields][0]=url&populate[social_medias][populate][mediaLogo][fields][1]=url&populate[footer_menus][populate][menu][populate][3]=menu_item&populate[header_menu][populate][menu][populate][4]=submenu_items`,
    { cache: 'no-cache' },
  )
  const data = await res.json()

  // className={inter.className}

  return (
    <html lang="en">
      <body className="font-main">
        <NextTopLoader />
        <MainLayout data={getLayoutData(data)}>{children}</MainLayout>
      </body>
    </html>
  )
}

export default RootLayout
