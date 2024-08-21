import { API } from '@/api'
import { HomePage } from '@/components/Pages/HomePage'
import { Locale } from '@/i18n-config'
import { INextPage } from '@/types'
import { IStandartItem } from '@/types/item'
import { getDataArray } from '@/utils/getDataArray'
import { IDataMainSlider, getDataMainSlider } from '@/utils/getDataMainSlider'
import { ISeoData, getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'
import { FC } from 'react'

export interface IHomePageData {
  eventData: IStandartItem[]
  newsData: IStandartItem[]
  activitiesData: IStandartItem[]
  prioritiesData: IStandartItem[]
  mainSliderData: IDataMainSlider[]
  seoData: ISeoData | null
}

type IGetHomePageData = () => Promise<IHomePageData>

export interface INextPageWithParams extends INextPage {
  params: { lang: Locale }
}

const Home: FC<INextPageWithParams> = async ({ params }) => {
  const getHomePageData: IGetHomePageData = async () => {
    try {
      const eventRes = await fetch(
        `${API.baseUrl}/events?populate=*&sort[0]=date:desc&pagination[pageSize]=4&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const eventData = await eventRes.json()

      const newsRes = await fetch(
        // `${API.baseUrl}/news?populate=*&sort[0]=date:desc`,
        `${API.baseUrl}/news?populate=*&sort[0]=date:desc&filters[categories][slug]=detention&locale=${params.lang}`,

        {
          cache: 'no-cache',
        },
      )
      const newsData = await newsRes.json()

      const activitiesRes = await fetch(
        `${API.baseUrl}/activities?populate=*&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const activitiesData = await activitiesRes.json()

      const prioritiesRes = await fetch(
        `${API.baseUrl}/priorities?populate=*&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const prioritiesData = await prioritiesRes.json()

      const resMainSlider = await fetch(
        `${API.baseUrl}/main-slider?populate=*&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const dataMainSlider = await resMainSlider.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Главная страница`,
      )
      const seoData = await seoRes.json()

      return {
        eventData: getDataArray(eventData),
        newsData: getDataArray(newsData),
        activitiesData: getDataArray(activitiesData),
        prioritiesData: getDataArray(prioritiesData),
        mainSliderData: getDataMainSlider(dataMainSlider.data),
        seoData: getSeoData(seoData.data),
      }
    } catch (e) {
      console.log('error', e)
      return {
        eventData: [],
        newsData: [],
        activitiesData: [],
        prioritiesData: [],
        mainSliderData: [],
        seoData: null,
      }
    }
  }
  const { seoData, ...data } = await getHomePageData()

  if (!seoData) return redirect('/error-page')

  return <HomePage locale={params.lang} seoData={seoData} {...data} />
}

export default Home
