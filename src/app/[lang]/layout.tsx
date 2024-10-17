import { IComponentWithChildren } from '@/types'
import { FC } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { API } from '@/api'
import { getLayoutData } from '@/utils/getLayoutData'
import NextTopLoader from 'nextjs-toploader'
import { type Locale } from '../../i18n-config'

// const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }, { lang: 'hy-AM' }]
}

const Layout: FC<
  IComponentWithChildren & { params: { lang: Locale } }
> = async ({ children, params }) => {
  // className={inter.className}

  const getData = async () => {
    try {
      const res = await fetch(
        `${API.baseUrl}/option?populate[header_menu][populate][menu][populate][0]=menu_item&populate[header_menu][populate][menu][populate][1]=submenu_items&populate[siteLogo][fields][0]=url&populate[social_medias][populate][mediaLogo][fields][1]=url&populate[footer_menus][populate][menu][populate][3]=menu_item&populate[header_menu][populate][menu][populate][4]=submenu_items&locale=${params.lang}`,
        { cache: 'no-cache' },
      )

      const data = await res.json()

      return data
    } catch (e) {
      console.log(
        'erfewsdfvcwersd rwdsfcwersdfxc wrsdfcwre sdzxfcwesdf wersdfwcersd fweds',
        e,
      )
      return null
    }
  }
  const data = await getData()
  const prepareData = getLayoutData(data)

  if (!prepareData) return <></>

  return (
    <html lang={params.lang} data-theme="default">
      <body className="font-main text-h">
        <NextTopLoader />
        <MainLayout locale={params.lang} data={prepareData}>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}

export default Layout
