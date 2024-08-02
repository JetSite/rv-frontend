import { API } from '@/api'
import { HomePage } from '@/components/Pages/HomePage'
import { IStandartItem } from '@/types/item'
import { getDataArray } from '@/utils/getDataArray'
import { IDataMainSlider, getDataMainSlider } from '@/utils/getDataMainSlider'

export interface IHomePageData {
  eventData: IStandartItem[]
  newsData: IStandartItem[]
  activitiesData: IStandartItem[]
  prioritiesData: IStandartItem[]
  mainSliderData: IDataMainSlider[]
}

type IGetHomePageData = () => Promise<IHomePageData>

export default async function Home() {
  const getHomePageData: IGetHomePageData = async () => {
    try {
      const eventRes = await fetch(
        `${API.baseUrl}/events?populate=*&sort[0]=date:desc&pagination[pageSize]=4`,
        {
          cache: 'no-cache',
        },
      )
      const eventData = await eventRes.json()

      const newsRes = await fetch(
        // `${API.baseUrl}/news?populate=*&sort[0]=date:desc`,
        `${API.baseUrl}/news?populate=*&sort[0]=date:desc&filters[categories][id]=5`,

        {
          cache: 'no-cache',
        },
      )
      const newsData = await newsRes.json()

      const activitiesRes = await fetch(
        `${API.baseUrl}/activities?populate=*`,
        {
          cache: 'no-cache',
        },
      )
      const activitiesData = await activitiesRes.json()

      const prioritiesRes = await fetch(
        `${API.baseUrl}/priorities?populate=*`,
        {
          cache: 'no-cache',
        },
      )
      const prioritiesData = await prioritiesRes.json()

      const resMainSlider = await fetch(
        `${API.baseUrl}/main-slider?populate=*`,
        {
          cache: 'no-cache',
        },
      )
      const dataMainSlider = await resMainSlider.json()

      return {
        eventData: getDataArray(eventData),
        newsData: getDataArray(newsData),
        activitiesData: getDataArray(activitiesData),
        prioritiesData: getDataArray(prioritiesData),
        mainSliderData: getDataMainSlider(dataMainSlider.data),
      }
    } catch (e) {
      console.log('error', e)
      return {
        eventData: [],
        newsData: [],
        activitiesData: [],
        prioritiesData: [],
        mainSliderData: [],
      }
    }
  }

  return <HomePage locale={'ru'} {...await getHomePageData()} />
}
