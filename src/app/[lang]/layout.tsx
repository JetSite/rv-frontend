import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { API } from '@/api'
import { getLayoutData } from '@/utils/getLayoutData'
import NextTopLoader from 'nextjs-toploader'
import { i18n, type Locale } from '../../i18n-config'

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

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout: FC<
  IComponentWithChildren & { params: { lang: Locale } }
> = async ({ children, params }) => {
  const res = await fetch(
    `${API.baseUrl}/option?populate[header_menu][populate][menu][populate][0]=menu_item&populate[header_menu][populate][menu][populate][1]=submenu_items&populate[siteLogo][fields][0]=url&populate[social_medias][populate][mediaLogo][fields][1]=url&populate[footer_menus][populate][menu][populate][3]=menu_item&populate[header_menu][populate][menu][populate][4]=submenu_items&locale=${params.lang}`,
    { cache: 'no-cache' },
  )
  const data = await res.json()

  // className={inter.className}

  return (
    <html lang={params.lang}>
      <body className="font-main text-h">
        <NextTopLoader />
        <MainLayout data={getLayoutData(data)}>{children}</MainLayout>
      </body>
    </html>
  )
}

export default RootLayout
