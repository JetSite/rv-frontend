import { API } from '@/api'
import { Books } from '@/components/Pages/Books'
import { INextPage } from '@/types'
import { getBooksData } from '@/utils/getBooksData'
import { getSeoData } from '@/utils/parsedData/getSeoData'
import { redirect } from 'next/navigation'
import { FC } from 'react'

const BooksPage: FC<INextPage> = async ({ params }) => {
  const fetchMediaItems = async () => {
    try {
      const res = await fetch(
        `${API.baseUrl}/book-categories?populate[book][populate][bookCover][fields][0]=url&locale=${params.lang}`,
        {
          cache: 'no-cache',
        },
      )
      const data = await res.json()

      const seoRes = await fetch(
        `${API.baseUrl}/seo-and-translates/?populate=*&locale=${params.lang}&filters[pageTitle]=Книги`,
      )

      const seoData = await seoRes.json()

      return {
        data: getBooksData(data.data),
        seoData: getSeoData(seoData.data),
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
      return { data: null, seoData: null }
    }
  }
  const { data, seoData } = await fetchMediaItems()
  if (!data || !seoData) return redirect('/error-page')

  return <Books seoData={seoData} data={data} />
}

export default BooksPage
