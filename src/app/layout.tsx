import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { API } from '@/api'
import { getLayoutData } from '@/utils/getLayoutData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RV-frontend',
  description: '',
}

const RootLayout: FC<IComponentWithChildren> = async ({ children }) => {
  const res = await fetch(
    `${API.baseUrl}/option?populate[header_menu][populate][menu][populate][0]=menu_item&populate[header_menu][populate][menu][populate][1]=submenu_items&populate[siteLogo][fields][0]=url&populate[social_medias][populate][mediaLogo][fields][1]=url&populate[footer_menus][populate][menu][populate][3]=menu_item&populate[header_menu][populate][menu][populate][4]=submenu_items`,
    { cache: 'no-cache' },
  )
  const data = await res.json()

  console.log(
    `${API.baseUrl}/option?populate[header_menu][populate][menu][populate][0]=menu_item&populate[header_menu][populate][menu][populate][1]=submenu_items&populate[siteLogo][fields][0]=url&populate[social_medias][populate][mediaLogo][fields][1]=url&populate[footer_menus][populate][menu][populate][3]=menu_item&populate[header_menu][populate][menu][populate][4]=submenu_items`,
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout data={getLayoutData(data)}>{children}</MainLayout>
      </body>
    </html>
  )
}

export default RootLayout
